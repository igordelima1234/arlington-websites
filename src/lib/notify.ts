/*
  Shared form-to-email handler for the API routes in src/pages/api/.
  Validates a JSON submission and emails it to NOTIFY_TO through Resend.

  Config (Cloudflare Worker env):
    RESEND_API_KEY  secret:  npx wrangler secret put RESEND_API_KEY
    NOTIFY_TO       var in wrangler.json: where notifications go (comma-separated ok)
    NOTIFY_FROM     var in wrangler.json: sender on a domain verified in Resend
                    (onboarding@resend.dev until then; Resend then only delivers
                    to your own Resend account email)

  Locally, put RESEND_API_KEY in .dev.vars (gitignored).
*/

export type Field = readonly [key: string, label: string];

type Options = {
	request: Request;
	env: Env;
	heading: string;
	fields: readonly Field[];
	required: string[]; // keys that must be non-empty; "email" is also format-checked
	subject: (data: Record<string, string>) => string;
};

const json = (status: number, body: object) =>
	new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const esc = (s: string) =>
	s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function handleFormEmail({ request, env, heading, fields, required, subject }: Options) {
	if (!env.RESEND_API_KEY || !env.NOTIFY_TO || !env.NOTIFY_FROM) {
		console.error(`${heading}: email env vars missing`);
		return json(500, { error: 'not_configured' });
	}

	let raw: Record<string, unknown>;
	try {
		raw = await request.json();
	} catch {
		return json(400, { error: 'bad_json' });
	}

	// Honeypot: bots fill the hidden field. Pretend success.
	if (raw.hp_x7q) return json(200, { ok: true });

	const data: Record<string, string> = {};
	for (const [k] of fields) data[k] = String(raw[k] ?? '').trim().slice(0, 2000);

	if (required.some((k) => !data[k]) || (data.email && !EMAIL_RE.test(data.email))) {
		return json(400, { error: 'missing_fields' });
	}

	const rows = fields.filter(([k]) => data[k]);
	const text = rows.map(([k, label]) => `${label}: ${data[k]}`).join('\n');
	const html =
		`<h2 style="font-family:sans-serif">${esc(heading)}</h2>` +
		`<table style="font-family:sans-serif;border-collapse:collapse">` +
		rows
			.map(
				([k, label]) =>
					`<tr><td style="padding:6px 16px 6px 0;color:#666;vertical-align:top">${label}</td>` +
					`<td style="padding:6px 0;white-space:pre-wrap"><strong>${esc(data[k])}</strong></td></tr>`,
			)
			.join('') +
		`</table>` +
		(data.email
			? `<p style="font-family:sans-serif;color:#666">Reply to this email to answer ${esc(data.name || data.email)} directly.</p>`
			: '');

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			from: env.NOTIFY_FROM,
			to: env.NOTIFY_TO.split(',').map((s) => s.trim()),
			...(data.email && { reply_to: data.email }),
			subject: subject(data).replace(/[\r\n]+/g, ' '),
			text,
			html,
		}),
	});

	if (!res.ok) {
		console.error(`${heading}: Resend error`, res.status, await res.text());
		return json(502, { error: 'send_failed' });
	}
	return json(200, { ok: true });
}
