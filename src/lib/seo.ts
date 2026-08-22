import type { Metadata } from "next";

/** Canonical production origin — always non-www, no trailing slash on origin. */
export const SITE_ORIGIN = "https://skyglass-iptv.com";

export const SITE_NAME = "Sky Glass IPTV";

export const SITE_TITLE =
  "Sky Glass IPTV UK – Premium IPTV Subscription for Live TV";

export const SITE_DESCRIPTION =
  "Choose Sky Glass IPTV UK with 22,000+ live channels, 100,000+ movies and series, EPG, selected Catch-Up and supported 4K. Plans start from £12.";

/**
 * Canonical route paths (always trailing slash).
 *
 * Homepage and commercial pages keep the live dated WordPress URLs as finals.
 * Remaining pages use the evergreen slugs from updated-content.md.
 * `/` is rewritten to serve the app root; the public home URL is ROUTES.home.
 */
export const ROUTES = {
  home: "/sky-glass-iptv-uk-2026/",
  subscription: "/sky-glass-iptv-subscription-plans-uk-2026/",
  installation: "/sky-glass-iptv-installation-guide-uk-15-08-2026/",
  devices: "/sky-glass-iptv-supported-devices/",
  reviews: "/sky-glass-iptv-reviews/",
  reseller: "/iptv-reseller-uk-22-08-2026/",
  contact: "/sky-glass-iptv-contact-2026/",
  about: "/about/",
  terms: "/terms-and-conditions/",
  privacy: "/privacy-policy/",
  refunds: "/refund-policy/",
  dmca: "/dmca-policy/",
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

/** Ensure path is absolute pathname with trailing slash (except file URLs). */
export function canonicalPath(path: string): string {
  // Bare `/` is an internal app route; the public homepage URL is dated.
  if (!path || path === "/") return ROUTES.home;
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
export function absoluteUrl(path: string = ROUTES.home): string {
  const origin = getSiteOrigin();
  const pathname = canonicalPath(path);
  return `${origin}${pathname}`;
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
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
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const pathname = canonicalPath(path);
  const url = absoluteUrl(pathname);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – Official IPTV App`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export type SitePage = {
  title: string;
  description: string;
  path: string;
  breadcrumbs: readonly BreadcrumbItem[];
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

export const SITE_PAGES: readonly SitePage[] = [
  {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    path: ROUTES.home,
    breadcrumbs: [{ name: "Home", path: ROUTES.home }],
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    title: "Sky Glass IPTV Subscription UK – Plans, Prices & Trial",
    description:
      "Compare Sky Glass IPTV subscription plans for 1, 3, 6 or 12 months. Prices start from £12 with 22,000+ channels, 100,000+ VOD and setup help.",
    path: ROUTES.subscription,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Subscription Plans", path: ROUTES.subscription },
    ],
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    title: "Install Sky Glass IPTV – Firestick, Android & Smart TV",
    description:
      "Install Sky Glass IPTV on Firestick, Android TV, Smart TV, Apple devices, Windows and more. Follow clear setup and troubleshooting steps.",
    path: ROUTES.installation,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Installation Guide", path: ROUTES.installation },
    ],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    title: "Sky Glass IPTV Supported Devices – Firestick, TV & Mobile",
    description:
      "Check Sky Glass IPTV compatibility for Firestick, Android TV, Samsung, LG, Apple TV, iPhone, Windows, Mac, MAG, Formuler and other devices.",
    path: ROUTES.devices,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Supported Devices", path: ROUTES.devices },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    title: "Sky Glass IPTV Reseller UK – Panel, Credits & Packages",
    description:
      "Start with the Sky Glass IPTV reseller panel in the UK. Manage accounts, activations, renewals and credits, with a current minimum of 120 credits.",
    path: ROUTES.reseller,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Reseller Panel", path: ROUTES.reseller },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    title: "Sky Glass IPTV Reviews UK – Customer Feedback",
    description:
      "Read verified Sky Glass IPTV reviews from UK customers. Compare feedback by device, subscription length, setup experience, streaming and support.",
    path: ROUTES.reviews,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Reviews", path: ROUTES.reviews },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    title: "Contact Sky Glass IPTV – Trial, Setup & Subscription Help",
    description:
      "Contact Sky Glass IPTV UK for plan questions, device checks, installation support, billing help or an eligible free 24-hour IPTV trial.",
    path: ROUTES.contact,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Contact", path: ROUTES.contact },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    title: "About Sky Glass IPTV – UK Service, Setup & Support",
    description:
      "Learn about Sky Glass IPTV UK, including subscription plans, supported devices, installation guidance, customer support and service standards.",
    path: ROUTES.about,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "About", path: ROUTES.about },
    ],
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    title: "Sky Glass IPTV Terms & Conditions – Subscription Rules",
    description:
      "Read the Sky Glass IPTV terms and conditions covering UK subscriptions, trials, payments, account use, service availability, refunds and cancellation.",
    path: ROUTES.terms,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Terms & Conditions", path: ROUTES.terms },
    ],
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    title: "Sky Glass IPTV Privacy Policy – Data, Cookies & Rights",
    description:
      "Read the Sky Glass IPTV privacy policy covering personal data, cookies, payment records, lawful processing, retention, security and your UK GDPR rights.",
    path: ROUTES.privacy,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Privacy Policy", path: ROUTES.privacy },
    ],
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    title: "Sky Glass IPTV Refund Policy – Eligibility & Requests",
    description:
      "Read the Sky Glass IPTV refund policy, including cancellation rights, seven-day technical review eligibility, exclusions and how to submit a request.",
    path: ROUTES.refunds,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Refund Policy", path: ROUTES.refunds },
    ],
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    title: "Sky Glass IPTV DMCA Policy – Copyright Notices",
    description:
      "Read the Sky Glass IPTV DMCA policy and learn how to submit a valid copyright notice, what information is required and how counter-notices work.",
    path: ROUTES.dmca,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "DMCA Policy", path: ROUTES.dmca },
    ],
    changeFrequency: "yearly",
    priority: 0.3,
  },
];
