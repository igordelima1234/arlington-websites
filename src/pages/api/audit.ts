// POST /api/audit: emails the /audit free-audit request. See src/lib/notify.ts.
import type { APIRoute } from 'astro';
import { handleFormEmail } from '../../lib/notify';

export const prerender = false;

export const POST: APIRoute = ({ request, locals }) =>
	handleFormEmail({
		request,
		env: locals.runtime.env,
		heading: 'Free audit request',
		fields: [
			['website', 'Website'],
			['name', 'Name'],
			['email', 'Email'],
			['goal', 'Main goal'],
			['phone', 'Phone'],
			['note', 'Note'],
		],
		required: ['website', 'name', 'email'],
		subject: (d) => `Free website audit: ${d.website.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}`,
	});
