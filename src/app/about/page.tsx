import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { AbtHero } from "@/components/about/abt-hero";
import { AbtProvide } from "@/components/about/abt-provide";
import { AbtExpect } from "@/components/about/abt-expect";
import { AbtHowItWorks } from "@/components/about/abt-how-it-works";
import { CtaSection } from "@/components/ui/cta-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.about)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <AbtHero />
      <AbtProvide />
      <AbtExpect />
      <AbtHowItWorks />
      <CtaSection
        title="Learn"
        highlight="More"
        body="Read the Installation Guide, compare Subscription Plans or contact support."
        primary={{
          label: "View Subscription Plans",
          href: ROUTES.subscription,
          icon: "calendar",
        }}
        secondary={{
          label: "Contact Support for Login Details",
          href: ROUTES.contact,
          icon: "headphones",
        }}
        trustItems={[
          { label: "Published Pricing", icon: "shieldCheck" },
          { label: "Installation Guidance", icon: "wrench" },
          { label: "Popular Device Support", icon: "tv" },
        ]}
      />
      <SkyglassFooter />
    </main>
  );
}
