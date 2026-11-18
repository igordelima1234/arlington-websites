// POST /api/question: emails the "Quick question?" chat widget. See src/lib/notify.ts.
import type { APIRoute } from 'astro';
import { handleFormEmail } from '../../lib/notify';

export const prerender = false;

export const POST: APIRoute = ({ request, locals }) =>
	handleFormEmail({
		request,
		env: locals.runtime.env,
		heading: 'Quick question',
		fields: [
			['name', 'Name'],
			['email', 'Email'],
			['question', 'Question'],
			['page', 'Asked from'],
		],
		required: ['name', 'email', 'question'],
		subject: (d) => `Quick question from ${d.name}`,
	});
