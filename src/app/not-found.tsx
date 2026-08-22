import type { Metadata } from "next";
import Link from "next/link";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ROUTES, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: `Page Not Found | ${SITE_NAME}`,
  },
  description:
    "The page you requested could not be found. Return to Sky Glass IPTV home or browse subscription plans, installation guides and support.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const helpfulLinks = [
  { name: "Sky Glass IPTV", href: ROUTES.home },
  { name: "Subscription Plans", href: ROUTES.subscription },
  { name: "Installation Guide", href: ROUTES.installation },
  { name: "Supported Devices", href: ROUTES.devices },
  { name: "Reseller Panel", href: ROUTES.reseller },
  { name: "Reviews", href: ROUTES.reviews },
  { name: "About", href: ROUTES.about },
  { name: "Contact", href: ROUTES.contact },
];

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <SkyglassHeader />

      <section className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold tracking-widest text-[#E91E8C] uppercase">
            Error 404
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0B0E2C] sm:text-4xl lg:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed font-semibold text-slate-500 sm:text-base">
            The page you are looking for does not exist, was moved, or the URL
            may be mistyped. Use the links below to continue.
          </p>

          <div className="mb-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link href={ROUTES.home} className="w-full sm:w-auto">
              <Button
                variant="primary"
                className="bg-gradient-brand h-[48px] w-full rounded-[12px] px-8 text-sm font-semibold text-white"
              >
                Back to Home
              </Button>
            </Link>
            <Link href={ROUTES.contact} className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="h-[48px] w-full rounded-[12px] px-8 text-sm font-semibold"
              >
                Contact subscription support
              </Button>
            </Link>
          </div>

          <nav aria-label="Helpful links">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {helpfulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#E91E8C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <SkyglassFooter />
    </main>
  );
}
