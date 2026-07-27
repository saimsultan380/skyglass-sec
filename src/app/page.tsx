import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GHeroSection } from "@/components/sections/b1g-hero-section";
import { WhatIsB1GPlayer } from "@/components/sections/what-is-b1g-player";
import { WhyUKViewers } from "@/components/sections/why-uk-viewers";
import { StartWatchingSteps } from "@/components/sections/steps";
import { UkCoverage } from "@/components/sections/uk-coverage";
import { LiveCategories } from "@/components/sections/live-categories";
import { WhatIsIncluded } from "@/components/sections/what-is-included";
import { B1GPricing } from "@/components/sections/pricing";
import { CompatibleDevices } from "@/components/sections/compatible-devices";
import { DownloadApp } from "@/components/sections/download-app";
import { QuickActivation } from "@/components/sections/quick-activation";
import { PlaybackTips } from "@/components/sections/playback-tips";
import { MoreDevices } from "@/components/sections/more-devices";
import { CustomerSupport } from "@/components/sections/customer-support";
import { IptvVsTraditional } from "@/components/sections/iptv-vs-traditional";
import { TrialSection, PlanChecklist } from "@/components/sections/trial-section";
import { B1GFAQ } from "@/components/sections/faq";
import { B1GCTABanner } from "@/components/sections/cta-banner";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES[0];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <B1GHeroSection />
      <WhatIsB1GPlayer />
      <WhyUKViewers />
      <StartWatchingSteps />
      <UkCoverage />
      <LiveCategories />
      <WhatIsIncluded />
      <B1GPricing />
      <CompatibleDevices />
      <DownloadApp />
      <QuickActivation />
      <PlaybackTips />
      <MoreDevices />
      <CustomerSupport />
      <IptvVsTraditional />
      <TrialSection />
      <PlanChecklist />
      <B1GFAQ />
      <B1GCTABanner />
      <B1GFooter />
    </main>
  );
}
