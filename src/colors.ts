/*
  Arlington Websites color system: the single source of truth.
  ---------------------------------------------------------------
  1. Scales: 11 tonal steps per hue (50 → 950), generated in OKLCH
     from the brand colors so steps feel evenly spaced. Brand colors
     sit exactly on a step (see `anchors`).
  2. Semantic tokens: what components use. Each maps to a scale step
     in light and in dark theme. Components never use raw hex values.
  3. ColorTokens.astro turns all of this into CSS custom properties:
     --blue-600, --text-primary, etc.

  Hand-tuned: neutral.600 darkened from #767270 to #706C6A so captions
  pass AA on Coconut.

  Rules of thumb
  - Text on white or Coconut: step 600 or darker.
  - Text on a hue's own 50/100 tint: step 700 or darker.
  - Icons, control borders, chart marks: step 500 or darker (3:1).
*/

export const scales = {
	neutral: { 50: "#F7F5F2", 100: "#EDEBE8", 200: "#DDDAD7", 300: "#C6C3C1", 400: "#AAA7A4", 500: "#8F8B89", 600: "#706C6A", 700: "#5E5A58", 800: "#494443", 900: "#342F2E", 950: "#1E1919" },
	blue: { 50: "#F4F7FC", 100: "#E3ECFA", 200: "#CADCFA", 300: "#A7C5FA", 400: "#77A7FC", 500: "#4686FD", 600: "#0061FE", 700: "#064EC9", 800: "#013A9E", 900: "#012872", 950: "#00174A" },
	navy: { 50: "#F5F7F9", 100: "#E6ECF3", 200: "#D0DCEB", 300: "#B4C8E1", 400: "#8EAAD0", 500: "#6C8DBF", 600: "#4F73AF", 700: "#33589F", 800: "#1C3D8F", 900: "#0D2481", 950: "#041253" },
	tangerine: { 50: "#FDF5F2", 100: "#FDE5DF", 200: "#FDCFC1", 300: "#FEAD96", 400: "#FD7D58", 500: "#FA551E", 600: "#C43F10", 700: "#9E2F05", 800: "#792306", 900: "#591500", 950: "#380B01" },
	lime: { 50: "#F4F9EA", 100: "#E4F2C6", 200: "#CDE88A", 300: "#B4DC19", 400: "#7DBD42", 500: "#54A14C", 600: "#34864C", 700: "#1C6B47", 800: "#0F503C", 900: "#063A2A", 950: "#012418" },
	pink: { 50: "#FDF4F3", 100: "#FDE5E1", 200: "#FECDC7", 300: "#FFAFA5", 400: "#E08E8D", 500: "#C37079", 600: "#A85568", 700: "#8C3B57", 800: "#6E1E46", 900: "#541334", 950: "#360820" },
	red: { 50: "#FBF5F5", 100: "#F7E7E6", 200: "#F2D2D0", 300: "#ECB4B1", 400: "#E38C89", 500: "#D86161", 600: "#C8102E", 700: "#AB0725", 800: "#830A1C", 900: "#600110", 950: "#3E0007" },
	amber: { 50: "#FCF6EC", 100: "#F9E9CD", 200: "#F7D699", 300: "#F5B400", 400: "#D49D1B", 500: "#B2830F", 600: "#946B03", 700: "#755508", 800: "#5A4000", 900: "#402D00", 950: "#271A01" },
} as const;

export type ScaleName = keyof typeof scales;
export type Step = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export const STEPS: Step[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

/** Brand colors and the step they live on. */
export const anchors: Record<string, { scale: ScaleName; step: Step }> = {
	Coconut: { scale: "neutral", step: 50 },
	Graphite: { scale: "neutral", step: 950 },
	Blue: { scale: "blue", step: 600 },
	Sky: { scale: "navy", step: 300 },
	Navy: { scale: "navy", step: 900 },
	Tangerine: { scale: "tangerine", step: 500 },
	Lime: { scale: "lime", step: 300 },
	Forest: { scale: "lime", step: 800 },
	Pink: { scale: "pink", step: 300 },
	Plum: { scale: "pink", step: 800 },
};

export const scaleInfo: Record<ScaleName, { label: string; role: string }> = {
	neutral: { label: "Neutral", role: "Warm grays from Coconut to Graphite. Text, surfaces, borders." },
	blue: { label: "Blue", role: "Primary actions, links, focus, info." },
	navy: { label: "Navy", role: "Sky ↔ Navy pair. Trust, case studies." },
	tangerine: { label: "Tangerine", role: "Promos and highlights. Not used for errors." },
	lime: { label: "Lime", role: "Lime ↔ Forest pair. Results, success." },
	pink: { label: "Pink", role: "Pink ↔ Plum pair. Community, social." },
	red: { label: "Red", role: "Errors and destructive actions only." },
	amber: { label: "Amber", role: "Warnings and pending states only." },
};

/** "white" or "<scale>.<step>" */
type Ref = "white" | `${ScaleName}.${Step}`;
export const resolve = (ref: Ref): string => {
	if (ref === "white") return "#FFFFFF";
	const [s, st] = ref.split(".");
	return (scales as any)[s][st];
};

export type Token = { name: string; role: string; light: Ref; dark: Ref };

export const tokenGroups: { group: string; tokens: Token[] }[] = [
	{
		group: "Background",
		tokens: [
			{ name: "bg-canvas", role: "Page background", light: "neutral.50", dark: "neutral.950" },
			{ name: "bg-surface", role: "Cards, inputs, menus", light: "white", dark: "neutral.900" },
			{ name: "bg-subtle", role: "Hover rows, wells, code", light: "neutral.100", dark: "neutral.800" },
			{ name: "bg-inverse", role: "Footer, dark bands", light: "neutral.950", dark: "neutral.50" },
		],
	},
	{
		group: "Text",
		tokens: [
			{ name: "text-primary", role: "Headlines, body", light: "neutral.950", dark: "neutral.50" },
			{ name: "text-secondary", role: "Supporting copy", light: "neutral.700", dark: "neutral.300" },
			{ name: "text-tertiary", role: "Captions, placeholders", light: "neutral.600", dark: "neutral.400" },
			{ name: "text-inverse", role: "Text on bg-inverse", light: "neutral.50", dark: "neutral.950" },
			{ name: "text-link", role: "Inline links", light: "blue.600", dark: "blue.400" },
		],
	},
	{
		group: "Border",
		tokens: [
			{ name: "border-subtle", role: "Dividers, card edges", light: "neutral.200", dark: "neutral.800" },
			{ name: "border-strong", role: "Form controls (3:1)", light: "neutral.500", dark: "neutral.500" },
			{ name: "border-focus", role: "Focus rings", light: "blue.600", dark: "blue.400" },
		],
	},
	{
		group: "Action",
		tokens: [
			{ name: "action-primary", role: "Primary button", light: "blue.600", dark: "blue.400" },
			{ name: "action-primary-hover", role: "Hover", light: "blue.700", dark: "blue.300" },
			{ name: "action-primary-pressed", role: "Pressed", light: "blue.800", dark: "blue.200" },
			{ name: "on-action-primary", role: "Label on primary", light: "white", dark: "neutral.950" },
		],
	},
	{
		group: "Status",
		tokens: [
			{ name: "success-fg", role: "Success text & icon", light: "lime.700", dark: "lime.300" },
			{ name: "success-bg", role: "Success background", light: "lime.50", dark: "lime.950" },
			{ name: "success-border", role: "Success border", light: "lime.200", dark: "lime.800" },
			{ name: "warning-fg", role: "Warning text & icon", light: "amber.700", dark: "amber.200" },
			{ name: "warning-bg", role: "Warning background", light: "amber.50", dark: "amber.950" },
			{ name: "warning-border", role: "Warning border", light: "amber.200", dark: "amber.800" },
			{ name: "danger-fg", role: "Error text & icon", light: "red.600", dark: "red.300" },
			{ name: "danger-bg", role: "Error background", light: "red.50", dark: "red.950" },
			{ name: "danger-border", role: "Error border", light: "red.200", dark: "red.800" },
			{ name: "info-fg", role: "Info text & icon", light: "blue.700", dark: "blue.300" },
			{ name: "info-bg", role: "Info background", light: "blue.50", dark: "blue.950" },
			{ name: "info-border", role: "Info border", light: "blue.200", dark: "blue.800" },
		],
	},
];

export const allTokens = tokenGroups.flatMap((g) => g.tokens);

/** Accent pairs: fixed background / foreground combinations. */
export const pairs = [
	{ name: "Navy / Sky", bg: "navy.900", fg: "navy.300", use: "Case studies, trust" },
	{ name: "Tangerine / Graphite", bg: "tangerine.500", fg: "neutral.950", use: "Promos, urgency" },
	{ name: "Lime / Forest", bg: "lime.300", fg: "lime.800", use: "Growth, results" },
	{ name: "Pink / Plum", bg: "pink.300", fg: "pink.800", use: "Community, social" },
] as const satisfies readonly { name: string; bg: Ref; fg: Ref; use: string }[];

/** Data visualization. Categorical order matters: use from the left. */
export const dataviz = {
	categorical: ["blue.600", "tangerine.500", "lime.600", "pink.600", "navy.900", "amber.500"] as Ref[],
	sequential: ["blue.100", "blue.200", "blue.300", "blue.400", "blue.500", "blue.600", "blue.700", "blue.800", "blue.900"] as Ref[],
	diverging: ["tangerine.700", "tangerine.500", "tangerine.300", "tangerine.100", "neutral.100", "blue.100", "blue.300", "blue.500", "blue.700"] as Ref[],
};

/* WCAG 2.x contrast */
const lin = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const luminance = (hex: string) => {
	const [r, g, b] = [1, 3, 5].map((i) => lin(parseInt(hex.slice(i, i + 2), 16) / 255));
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const contrast = (a: string, b: string) => {
	const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
	return (x + 0.05) / (y + 0.05);
};
/** Text color (white or Graphite) that reads best on a background. */
export const bestText = (bg: string) =>
	contrast(bg, "#FFFFFF") >= contrast(bg, scales.neutral[950]) ? "#FFFFFF" : scales.neutral[950];

/** CSS custom properties for scales + semantic tokens in both themes. */
export function tokensCSS() {
	const scaleVars = Object.entries(scales)
		.flatMap(([n, s]) => Object.entries(s).map(([st, hex]) => `--${n}-${st}: ${hex};`))
		.join("\n\t");
	const v = (r: Ref) => (r === "white" ? "#FFFFFF" : `var(--${r.replace(".", "-")})`);
	const light = allTokens.map((t) => `--${t.name}: ${v(t.light)};`).join("\n\t");
	const dark = allTokens.map((t) => `--${t.name}: ${v(t.dark)};`).join("\n\t");
	return `:root {\n\t${scaleVars}\n\t--white: #FFFFFF;\n}\n:root, [data-theme="light"] {\n\tcolor-scheme: light;\n\t${light}\n}\n[data-theme="dark"] {\n\tcolor-scheme: dark;\n\t${dark}\n}`;
}
