const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
  process.env.VERCEL_URL?.trim();

const candidateSiteUrl =
  configuredSiteUrl ||
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

// Fail early for malformed deployment configuration instead of emitting bad canonical URLs.
export const siteUrl = new URL(candidateSiteUrl).origin;
