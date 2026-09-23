// Relative import required: this file is loaded by next.config.ts, which
// cannot resolve the `@/` path alias during config compilation.
import { ROUTES } from "./seo";

export const CANONICAL_HOST = "skyglass-iptv.com";
export const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

/**
 * Legacy path → canonical destination. Sources are written without a trailing
 * slash; lookups normalise before matching so both forms resolve identically.
 *
 * Safety rules:
 * - Destinations must return HTTP 200 (never redirect again).
 * - Never list a destination path as a redirect source (avoids loops).
 * - Homepage is served at `/glass-iptv/`. Root `/` permanently redirects there.
 * - Old dated URLs permanently redirect to the current evergreen paths.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // → Home (final: /glass-iptv/)
  "/": ROUTES.home,
  "/sky-glass-iptv-uk-2026": ROUTES.home,
  "/skyglass-iptv-service": ROUTES.home,
  "/channels": ROUTES.home,
  "/sky-glass-channels-list": ROUTES.home,
  "/sky-glass-iptv": ROUTES.home,
  "/sky-glass-iptv-uk": ROUTES.home,
  "/sky-glass-iptv-uk-guide": ROUTES.home,
  "/why-sky-glass-iptv-is-best-choice-in-uk": ROUTES.home,

  // → Subscription (final: /buy-skyglass-subscription/)
  "/sky-glass-iptv-subscription-plans-uk-2026": ROUTES.subscription,
  "/buy-now": ROUTES.subscription,
  "/sky-glass-iptv-subscription": ROUTES.subscription,
  "/sky-glass-iptv-subscription-uk": ROUTES.subscription,
  "/sky-glass-iptv-subscription-plans-uk": ROUTES.subscription,
  "/sky-glass-iptv-subscription-uk-2026-7-25": ROUTES.subscription,
  "/subscription-plans-2026": ROUTES.subscription,
  "/subscription-plan": ROUTES.subscription,
  "/compare-plans": ROUTES.subscription,

  // → Installation (final: /install-skyglass-app/)
  "/sky-glass-iptv-installation-guide-uk-15-08-2026": ROUTES.installation,
  "/installation-guide": ROUTES.installation,
  "/setup-instructions": ROUTES.installation,
  "/sky-glass-iptv-installation-guide": ROUTES.installation,
  "/sky-glass-iptv-installation-guide-uk": ROUTES.installation,
  "/sky-glass-iptv-installation-guide-uk-2026": ROUTES.installation,
  "/sky-glass-iptv-installation-guide-uk-june-2026-7-25": ROUTES.installation,
  "/iptv-firestick-guide": ROUTES.installation,

  // → Reseller (final: /skyglass-iptv-reseller-panel/)
  "/iptv-reseller-uk-22-08-2026": ROUTES.reseller,
  "/skyglass-iptv-reseller-programme": ROUTES.reseller,
  "/buy-now-2": ROUTES.reseller,
  "/reseller-panel": ROUTES.reseller,
  "/iptv-reseller-panel": ROUTES.reseller,
  "/iptv-reseller-panel-uk": ROUTES.reseller,
  "/iptv-reseller-uk-panel-2026": ROUTES.reseller,
  "/sky-glass-iptv-reseller": ROUTES.reseller,
  "/sky-glass-iptv-reseller-panel-uk-2026": ROUTES.reseller,

  // → Contact (final: /contact-skyglass-support/)
  "/sky-glass-iptv-contact-2026": ROUTES.contact,
  "/contact": ROUTES.contact,
  "/contact-us": ROUTES.contact,
  "/for-sky-glass-iptv-contact-us": ROUTES.contact,

  // → About
  "/about-us": ROUTES.about,

  // → Legal / policy aliases
  "/refund-cancellation-policy": ROUTES.refunds,
  "/terms-of-service": ROUTES.terms,
  "/cookie-policy": ROUTES.privacy,
  "/content-and-copyright-policy": ROUTES.dmca,
};

/** Returns the canonical destination for a legacy path, or null. */
export function resolveLegacyRedirect(pathname: string): string | null {
  const lower = pathname.toLowerCase();
  const normalised =
    lower.length > 1 && lower.endsWith("/") ? lower.slice(0, -1) : lower;
  // Root normalises to "/" (keep as key); never redirect the live home slug.
  if (normalised === "/glass-iptv") return null;

  const destination = LEGACY_REDIRECTS[normalised] ?? null;
  if (!destination) return null;

  const destNorm =
    destination.length > 1 && destination.endsWith("/")
      ? destination.slice(0, -1)
      : destination;
  if (destNorm === normalised) return null;
  return destination;
}
