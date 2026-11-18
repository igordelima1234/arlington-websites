// POST /api/new-website: emails the /new-website questionnaire. See src/lib/notify.ts.
import type { APIRoute } from 'astro';
import { handleFormEmail } from '../../lib/notify';

export const prerender = false;

export const POST: APIRoute = ({ request, locals }) =>
	handleFormEmail({
		request,
		env: locals.runtime.env,
		heading: 'New website request',
		fields: [
			['business', 'Business'],
			['industry', 'Type of business'],
			['goals', 'Website should'],
			['has', 'Already have'],
			['timeline', 'Launch'],
			['name', 'Name'],
			['email', 'Email'],
			['phone', 'Phone'],
		],
		required: ['business', 'name', 'email'],
		subject: (d) => `New website: ${d.business}`,
	});
