// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Arlington Websites';
export const SITE_DESCRIPTION =
	'Websites, local SEO and ads for small businesses in Arlington and the DFW area.';

// Placeholder contact details: replace before launch.
export const CONTACT = {
	phone: '(469) 704-9896',
	phoneHref: 'tel:+14697049896',
	email: 'hello@arlingtonwebsites.com',
	// Hides the email address wherever it's displayed. Forms still use it as a fallback.
	showEmail: false,
	// WhatsApp click-to-chat (wa.me): opens a chat with this number and a pre-filled greeting.
	whatsapp: 'https://wa.me/14697049896?text=' + encodeURIComponent('Hi! I have a question about a website for my business.'),
	area: 'Arlington, TX',
};

// "Start here" menu in the nav.
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
		href: '/existing-website',
	},
] as const;

// Services. Each one has a page at /services/<slug> (a "coming soon" page for now,
// see src/pages/services/[slug].astro). Used by the menu and the footer.
export const SERVICES = [
	{ slug: 'websites', label: 'Websites', icon: 'website', note: 'Design, build, hosting' },
	{ slug: 'branding', label: 'Branding and design', icon: 'pen', note: 'Logos, colors, brand guidelines' },
	{ slug: 'local-seo', label: 'Local SEO', icon: 'search', note: 'Show up in “near me” searches' },
	{ slug: 'google-business-profile', label: 'Google Business Profile', icon: 'map-pin', note: 'Reviews, photos, posts' },
	{ slug: 'ads', label: 'Ads', icon: 'megaphone', note: 'Google and Meta campaigns' },
	{ slug: 'content-strategy', label: 'Content strategy', icon: 'document', note: 'What to say, and where to say it' },
	{ slug: 'print', label: 'Print', icon: 'printer', note: 'Business cards, signs, flyers, menus' },
] as const;

// Sidebar menu (hamburger). Pages that aren't built yet show a "coming soon" page.
export const MENU: {
	label: string;
	href?: string;
	children?: { label: string; href: string; icon?: string; note?: string }[];
}[] = [
	{
		label: 'Services',
		children: SERVICES.map((s) => ({ label: s.label, href: `/services/${s.slug}`, icon: s.icon, note: s.note })),
	},
	{ label: 'Our work', href: '/#work' },
	{
		label: 'Resources',
		children: [
			{ label: 'Blog', href: '/blog', icon: 'pen', note: 'Plain-English marketing tips' },
			{ label: 'Free website audit', href: '/audit', icon: 'target', note: 'See what to fix first' },
			{ label: 'FAQ', href: '/faq', icon: 'chat', note: 'Pricing, timelines, process' },
		],
	},
	{ label: 'About', href: '/about' },
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

// "Quick question?" chat bubble (QuickQuestion.astro, on every page with the
// site footer). Posts to src/pages/api/question.ts, which emails it via Resend.
// Set it to '' to fall back to opening the visitor's email app.
export const QUESTION_FORM_ENDPOINT = '/api/question';
