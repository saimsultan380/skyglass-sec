import type { NextConfig } from "next";

const CANONICAL_ORIGIN = "https://b1gplayer.uk";

const nextConfig: NextConfig = {
  // Enforce trailing slashes site-wide (routes, Link, and metadata canonicals)
  trailingSlash: true,

  async redirects() {
    return [
      // WWW → non-WWW (permanent). Covers all routes including dynamic paths.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.b1gplayer.uk" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },

      // Legacy B1G route slugs → Sky Glass canonical URLs
      {
        source: "/b1g-iptv-subscription",
        destination: "/sky-glass-iptv-subscription/",
        permanent: true,
      },
      {
        source: "/b1g-iptv-subscription/",
        destination: "/sky-glass-iptv-subscription/",
        permanent: true,
      },
      {
        source: "/b1g-player-installation-guide",
        destination: "/sky-glass-iptv-installation-guide/",
        permanent: true,
      },
      {
        source: "/b1g-player-installation-guide/",
        destination: "/sky-glass-iptv-installation-guide/",
        permanent: true,
      },
      {
        source: "/b1g-player-reseller",
        destination: "/sky-glass-iptv-reseller/",
        permanent: true,
      },
      {
        source: "/b1g-player-reseller/",
        destination: "/sky-glass-iptv-reseller/",
        permanent: true,
      },

      // Short legacy paths → canonical pages
      {
        source: "/subscription-plan",
        destination: "/sky-glass-iptv-subscription/",
        permanent: true,
      },
      {
        source: "/subscription-plan/",
        destination: "/sky-glass-iptv-subscription/",
        permanent: true,
      },
      {
        source: "/installation-guide",
        destination: "/sky-glass-iptv-installation-guide/",
        permanent: true,
      },
      {
        source: "/installation-guide/",
        destination: "/sky-glass-iptv-installation-guide/",
        permanent: true,
      },
      {
        source: "/reseller-panel",
        destination: "/sky-glass-iptv-reseller/",
        permanent: true,
      },
      {
        source: "/reseller-panel/",
        destination: "/sky-glass-iptv-reseller/",
        permanent: true,
      },
      {
        source: "/setup-instructions",
        destination: "/sky-glass-iptv-installation-guide/",
        permanent: true,
      },
      {
        source: "/setup-instructions/",
        destination: "/sky-glass-iptv-installation-guide/",
        permanent: true,
      },
      {
        source: "/compare-plans",
        destination: "/sky-glass-iptv-subscription/",
        permanent: true,
      },
      {
        source: "/compare-plans/",
        destination: "/sky-glass-iptv-subscription/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
