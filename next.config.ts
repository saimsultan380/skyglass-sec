import type { NextConfig } from "next";
import { LEGACY_REDIRECTS } from "./src/lib/redirects";

/**
 * `src/proxy.ts` performs the legacy and www redirects, because Proxy runs
 * before Next's `trailingSlash` normalisation and therefore resolves every old
 * URL in a single 301. These `redirects()` entries are a fallback for any
 * environment where Proxy does not execute.
 */
function buildLegacyRedirects() {
  return Object.entries(LEGACY_REDIRECTS).flatMap(([source, destination]) => {
    // Never emit a self-redirect (loop guard).
    const srcNorm =
      source.length > 1 && source.endsWith("/") ? source.slice(0, -1) : source;
    const destNorm =
      destination.length > 1 && destination.endsWith("/")
        ? destination.slice(0, -1)
        : destination;
    if (srcNorm === destNorm) return [];

    // Bare `/` has no trailing-slash twin; `${source}/` would become `//`.
    if (source === "/") {
      return [{ source, destination, permanent: true }];
    }

    return [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ];
  });
}

const nextConfig: NextConfig = {
  // Enforce trailing slashes site-wide (routes, Link, and metadata canonicals)
  trailingSlash: true,

  async redirects() {
    return buildLegacyRedirects();
  },
};

export default nextConfig;
