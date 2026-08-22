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

  // Public home URL is /sky-glass-iptv-uk-2026/; serve app/page.tsx underneath.
  async rewrites() {
    return [
      {
        source: "/sky-glass-iptv-uk-2026",
        destination: "/",
      },
      {
        source: "/sky-glass-iptv-uk-2026/",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
