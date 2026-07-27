import type { Metadata } from "next";

/** Canonical production origin — always non-www, no trailing slash on origin. */
export const SITE_ORIGIN = "https://b1gplayer.uk";

export const SITE_NAME = "Sky Glass IPTV";

export const SITE_TITLE =
  "Sky Glass IPTV – Premium IPTV Subscription for Live TV";

export const SITE_DESCRIPTION =
  "Choose Sky Glass IPTV for live TV, movies and sports in the UK. Compare flexible plans, request a 24-hour trial and get setup support.";

/** Canonical route paths (always trailing slash except homepage `/`). */
export const ROUTES = {
  home: "/",
  subscription: "/sky-glass-iptv-subscription/",
  installation: "/sky-glass-iptv-installation-guide/",
  reseller: "/sky-glass-iptv-reseller/",
  contact: "/contact/",
} as const;

/**
 * Prefer explicit env in preview/staging; production always resolves to non-www.
 * Strips trailing slash and any accidental www. prefix from the origin.
 */
export function getSiteOrigin(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (process.env.VERCEL_ENV === "production"
      ? SITE_ORIGIN
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : SITE_ORIGIN);

  try {
    const url = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
    }
    return url.origin;
  } catch {
    return SITE_ORIGIN;
  }
}

/** True when the last path segment looks like a static file (e.g. sitemap.xml). */
function hasFileExtension(pathname: string): boolean {
  const last = pathname.split("/").filter(Boolean).pop() ?? "";
  return /\.[a-z0-9]+$/i.test(last);
}

/** Ensure path is absolute pathname with trailing slash (except `/` and file URLs). */
export function canonicalPath(path: string): string {
  if (!path || path === "/") return "/";
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  const withoutQuery = trimmed.split("?")[0]?.split("#")[0] ?? trimmed;
  if (hasFileExtension(withoutQuery)) {
    return withoutQuery.endsWith("/")
      ? withoutQuery.slice(0, -1)
      : withoutQuery;
  }
  return withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;
}

/** Absolute canonical URL (non-www + trailing slash on page paths). */
export function absoluteUrl(path: string = "/"): string {
  const origin = getSiteOrigin();
  const pathname = canonicalPath(path);
  return pathname === "/" ? `${origin}/` : `${origin}${pathname}`;
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /** When true, skip the root title template (title already includes brand). */
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = true,
}: PageSeoInput): Metadata {
  const pathname = canonicalPath(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: pathname,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – Premium IPTV Subscription`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Indexed marketing routes used by sitemap + internal SEO checks. */
export const SITE_PAGES = [
  {
    path: ROUTES.home,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    changeFrequency: "weekly" as const,
    priority: 1,
    breadcrumbs: [{ name: "Home", path: ROUTES.home }],
  },
  {
    path: ROUTES.subscription,
    title: "Sky Glass IPTV Subscription UK – Plans, Prices & Trial",
    description:
      "Compare Sky Glass IPTV subscription plans for 1, 3, 6 or 12 months. View prices, app access and supported devices, then request a 24-hour trial.",
    changeFrequency: "weekly" as const,
    priority: 0.9,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Subscription Plans", path: ROUTES.subscription },
    ],
  },
  {
    path: ROUTES.installation,
    title: "Install Sky Glass IPTV – Firestick, Android & Smart TV",
    description:
      "Install Sky Glass IPTV on Firestick, Android TV, Smart TVs, phones and computers using Downloader code 2245820 with step-by-step guidance.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Installation Guide", path: ROUTES.installation },
    ],
  },
  {
    path: ROUTES.reseller,
    title: "Sky Glass IPTV Reseller UK – Panel, Credits & Packages",
    description:
      "Join the Sky Glass IPTV reseller programme in the UK. Create subscriptions, manage credits and renew customer accounts through one reseller panel.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Reseller Panel", path: ROUTES.reseller },
    ],
  },
  {
    path: ROUTES.contact,
    title: "Contact Sky Glass IPTV – Trial, Setup & Subscription Help",
    description:
      "Contact Sky Glass IPTV for a 24-hour trial, plan advice, app installation, login help, renewals, connection support and UK reseller enquiries.",
    changeFrequency: "monthly" as const,
    priority: 0.7,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Contact", path: ROUTES.contact },
    ],
  },
] as const;
