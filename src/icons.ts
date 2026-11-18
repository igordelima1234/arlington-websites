/*
  Arlington Websites icon set
  ---------------------------------------------------------------
  Grid      24 × 24, 2px padding → 20 × 20 live area
  Stroke    2px, square caps, miter joins, outline only
  Color     currentColor (icons inherit text color)
  Sizes     16 · 20 · 24 · 32 (see Icon.astro `size`)
  Add a new icon: draw on the grid, paste the inner SVG markup
  below, and add its name to a category in `iconCategories`.
*/

export const icons = {
	// Interface
	"arrow-right": `<path d="M4 12h15M13 6l6 6-6 6"/>`,
	"arrow-left": `<path d="M20 12H5M11 6l-6 6 6 6"/>`,
	"arrow-up-right": `<path d="M7 17 17 7M8 7h9v9"/>`,
	"chevron-down": `<path d="m6 9 6 6 6-6"/>`,
	plus: `<path d="M12 5v14M5 12h14"/>`,
	close: `<path d="m6 6 12 12M18 6 6 18"/>`,
	check: `<path d="m5 12.5 4.5 4.5L19 7"/>`,
	menu: `<path d="M4 7h16M4 12h16M4 17h16"/>`,
	search: `<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>`,

	// Status
	alert: `<path d="M12 3 22 20H2z"/><path d="M12 9.5v4.5M12 17h.01"/>`,
	info: `<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>`,

	// Contact
	phone: `<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>`,
	mail: `<path d="M3 5h18v14H3z"/><path d="m3 7 9 6 9-6"/>`,
	"map-pin": `<path d="M12 21.5S5 15.3 5 9.5a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9.5" r="2.5"/>`,
	calendar: `<path d="M3 5h18v16H3zM3 10h18M8 3v4M16 3v4"/>`,
	clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>`,
	whatsapp: `<path d="M3.5 20.5l1.2-4.2A8.8 8.8 0 1 1 8 19.4z"/><path d="M9 8.5h1.3l.8 2-.9.7a4.4 4.4 0 0 0 2.6 2.6l.7-.9 2 .8v1.3a1 1 0 0 1-1 1A6.5 6.5 0 0 1 8 9.5a1 1 0 0 1 1-1z"/>`,

	// Services
	website: `<path d="M3 4h18v16H3zM3 9h18M6 6.5h1M9 6.5h1"/>`,
	mobile: `<path d="M6 2h12v20H6zM11 18h2"/>`,
	megaphone: `<path d="M3 9.5h4l9-5v15l-9-5H3z"/><path d="M7 14.5 8.5 21h3l-1-6.5M19 9.5v5"/>`,
	"trending-up": `<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>`,
	"bar-chart": `<path d="M3 21h18M6 17v-5M11 17V6M16 17V9"/>`,
	star: `<path d="m12 2.5 3 6.2 6.8.9-5 4.7 1.3 6.7L12 17.7 5.9 21l1.3-6.7-5-4.7 6.8-.9z"/>`,
	chat: `<path d="M4 4h16v12H9l-5 4z"/>`,
	storefront: `<path d="M4 3h16l1 6H3zM4 9v12h16V9M10 21v-6h4v6"/>`,
	camera: `<path d="M3 7h5l2-3h4l2 3h5v13H3z"/><circle cx="12" cy="13.5" r="3.5"/>`,
	pen: `<path d="M4 20h4L19 9l-4-4L4 16zM13 7l4 4"/>`,
	target: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12h.01"/>`,
	users: `<circle cx="9" cy="8" r="3.5"/><path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1M16 4.5a3.5 3.5 0 0 1 0 7M18 14a5 5 0 0 1 3 4.6V20"/>`,
	bolt: `<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>`,
	shield: `<path d="M12 3 20 6v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>`,
	tag: `<path d="M3 3h8l10 10-8 8L3 11z"/><path d="M7.5 7.5h.01"/>`,
	document: `<path d="M5 2h10l4 4v16H5z"/><path d="M14 2v5h5M8.5 12h7M8.5 16h7"/>`,
	printer: `<path d="M6 9V3h12v6M6 18H3V9h18v9h-3"/><path d="M6 14h12v7H6z"/>`,
} as const;

export type IconName = keyof typeof icons;

export const iconCategories: { name: string; note: string; icons: IconName[] }[] = [
	{
		name: "Interface",
		note: "Navigation and actions. Pair with a text label unless universally understood (menu, close, search).",
		icons: ["arrow-right", "arrow-left", "arrow-up-right", "chevron-down", "plus", "close", "check", "menu", "search"],
	},
	{
		name: "Status",
		note: "Paired with status colors in alerts and form messages. Success uses check, error uses alert.",
		icons: ["check", "alert", "info"],
	},
	{
		name: "Contact",
		note: "Ways to reach us. Always shown next to the actual detail (number, address, hours).",
		icons: ["phone", "whatsapp", "mail", "map-pin", "calendar", "clock"],
	},
	{
		name: "Services & proof",
		note: "Represent what we do and what it achieves. Used as spot icons on service and stat cards.",
		icons: [
			"website", "mobile", "search", "megaphone", "trending-up", "bar-chart", "star", "chat",
			"storefront", "camera", "pen", "target", "users", "bolt", "shield", "tag", "document", "printer",
		],
	},
];
