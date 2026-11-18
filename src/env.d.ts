type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

// Worker env vars/secrets used by src/pages/api/*. Set in wrangler.json (vars)
// and with `wrangler secret put` (secrets); locally in .dev.vars.
interface Env {
  RESEND_API_KEY?: string;
  NOTIFY_TO?: string;
  NOTIFY_FROM?: string;
}

declare namespace App {
  interface Locals extends Runtime {}
}
