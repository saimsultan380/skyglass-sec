import type { Metadata } from "next";
import Link from "next/link";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
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
  { name: "Reseller Panel", href: ROUTES.reseller },
  { name: "Contact", href: ROUTES.contact },
];

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <B1GHeader />

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl w-full text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-[#E91E8C] mb-4">
            Error 404
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0E2C] tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-10 max-w-lg mx-auto">
            The page you are looking for does not exist, was moved, or the URL
            may be mistyped. Use the links below to continue.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-12">
            <Link href={ROUTES.home} className="w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full h-[48px] rounded-[12px] px-8 text-sm font-semibold bg-gradient-brand text-white"
              >
                Back to Home
              </Button>
            </Link>
            <Link href={ROUTES.contact} className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full h-[48px] rounded-[12px] px-8 text-sm font-semibold"
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
                    className="text-sm font-semibold text-slate-600 hover:text-[#E91E8C] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <B1GFooter />
    </main>
  );
}
