import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassHeroSection } from "@/components/sections/skyglass-hero-section";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { SkyglassPricing } from "@/components/sections/pricing";
import { LiveCategories } from "@/components/sections/live-categories";
import { CompatibleDevices } from "@/components/sections/compatible-devices";
import { StartWatchingSteps } from "@/components/sections/steps";
import { TrialSection } from "@/components/sections/trial-section";
import { SkyglassFAQ } from "@/components/sections/faq";
import { SkyglassCTABanner } from "@/components/sections/cta-banner";
import { SkyglassFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES[0];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <SkyglassHeroSection />
      <WhatYouGet />
      <SkyglassPricing />
      <LiveCategories />
      <CompatibleDevices />
      <TrialSection />
      <StartWatchingSteps />
      <SkyglassFAQ />
      <SkyglassCTABanner />
      <SkyglassFooter />
    </main>
  );
}
