// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Arlington Websites';
export const SITE_DESCRIPTION =
	'Websites, local SEO and ads for small businesses in Arlington and the DFW area.';

// Placeholder contact details: replace before launch.
export const CONTACT = {
	phone: '(817) 555-0123',
	phoneHref: 'tel:+18175550123',
	email: 'hello@arlingtonwebsites.com',
	area: 'Arlington, TX',
};

// "Start here" menu in the nav. Placeholder links until these pages exist.
export const START_OPTIONS = [
	{
		label: 'I need a website',
		note: 'A new site, designed and built from scratch.',
		icon: 'website',
		href: '/new-website',
	},
	{
		label: 'I already have a website',
		note: 'Get more calls from the site you have.',
		icon: 'trending-up',
		href: '#contact',
	},
] as const;

// Sidebar menu (hamburger). Anchors and "#" links are placeholders until those pages exist.
export const MENU: {
	label: string;
	href?: string;
	children?: { label: string; href: string; icon?: string; note?: string }[];
}[] = [
	{
		label: 'Services',
		children: [
			{ label: 'Websites', href: '#services', icon: 'website', note: 'Design, build, hosting' },
			{ label: 'Branding and design', href: '#services', icon: 'pen', note: 'Logos, colors, brand guidelines' },
			{ label: 'Local SEO', href: '#services', icon: 'search', note: 'Show up in “near me” searches' },
			{ label: 'Google Business Profile', href: '#services', icon: 'map-pin', note: 'Reviews, photos, posts' },
			{ label: 'Ads', href: '#services', icon: 'megaphone', note: 'Google and Meta campaigns' },
			{ label: 'Content strategy', href: '#services', icon: 'document', note: 'What to say, and where to say it' },
			{ label: 'Print', href: '#services', icon: 'printer', note: 'Business cards, signs, flyers, menus' },
		],
	},
	{ label: 'Our work', href: '#work' },
	{
		label: 'Resources',
		children: [
			{ label: 'Blog', href: '/blog', icon: 'pen', note: 'Plain-English marketing tips' },
			{ label: 'Free website audit', href: '/audit', icon: 'target', note: 'See what to fix first' },
			{ label: 'FAQ', href: '#faq', icon: 'chat', note: 'Pricing, timelines, process' },
		],
	},
	{ label: 'About', href: '#about' },
	{ label: 'Contact', href: '#contact' },
];

// Free audit form (/audit). Posts to our own Worker endpoint
// (src/pages/api/audit.ts), which emails each request via Resend.
// Set it to '' to fall back to opening the visitor's email app.
export const AUDIT_FORM_ENDPOINT = '/api/audit';

// New website questionnaire (/new-website). Posts to our own Worker endpoint
// (src/pages/api/new-website.ts), which emails each submission via Resend.
// Set it to '' to fall back to opening the visitor's email app.
export const NEW_SITE_FORM_ENDPOINT = '/api/new-website';

// Book a call (/book-a-call). Paste your Google Calendar appointment schedule
// link here. In Google Calendar: open the booking page > Share > copy the link,
// e.g. https://calendar.app.google/AbC123 or
// https://calendar.google.com/calendar/appointments/schedules/AcZssZ...
// While empty, the page shows phone and email instead of the calendar.
export const BOOKING_URL =
	'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0TgV5Mk1z6-60NCLVFWsJ4bAa7fONIlMhsuPd-BYZMweI5R8_Df7Hgru2PPPJnWDZX_IHRUvhe?gv=true';

// "Our work" showcase.
// image: path under /public, a 1280×800 screenshot of the top of the page.
// Without an image, a wireframe placeholder is drawn.
export const PROJECTS: { title: string; type: string; url: string; image?: string }[] = [
	{
		title: 'Cast Design Fireplaces',
		type: 'Cast stone fireplaces · Dallas–Fort Worth',
		url: 'https://dallasfireplaces.com/',
		image: '/work/cast-design-fireplaces.jpg',
	},
	{
		title: 'Reggie Scott Coaching',
		type: 'Leadership coaching',
		url: 'https://www.reggiescottcoaching.com/',
		image: '/work/reggie-scott-coaching.jpg',
	},
	{
		title: 'Reeder Construction',
		type: 'Construction management',
		url: 'https://www.reedergeneral.com/',
		image: '/work/reeder-construction.jpg',
	},
];
