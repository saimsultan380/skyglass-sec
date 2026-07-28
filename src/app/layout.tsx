import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import SynthesisBackground from "@/components/animation/synthesis-background";
import { JsonLd } from "@/components/seo/json-ld";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  absoluteUrl,
  getSiteOrigin,
} from "@/lib/seo";

const siteOrigin = getSiteOrigin();

export const metadata: Metadata = {
  metadataBase: new URL(`${siteOrigin}/`),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Sky Glass IPTV",
    "Sky Glass IPTV Subscription",
    "Sky Glass IPTV App",
    "IPTV UK",
    "IPTV subscription UK",
    "IPTV service UK",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
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
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "LyEFqe5x6vxbcenG403J8MJgDChQm7CT5fBucmoOKDc",
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  other: {
    "msapplication-TileColor": "#E91E8C",
    "msapplication-TileImage": "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0E2C" },
  ],
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/icons/icon-512.png"),
  image: absoluteUrl("/og-image.png"),
  description: SITE_DESCRIPTION,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: absoluteUrl("/"),
  description: SITE_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: absoluteUrl("/"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className="h-full antialiased light"
      style={{ colorScheme: "light" }}
    >
      <body className="site-wave-bg relative min-h-full flex flex-col text-[#0B0E2C] selection:bg-[#E91E8C] selection:text-white font-sans">
        <SynthesisBackground />
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
