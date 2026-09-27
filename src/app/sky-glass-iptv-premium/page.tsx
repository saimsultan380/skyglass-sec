import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassHeroSection } from "@/components/sections/skyglass-hero-section";
import { ViewingSetup } from "@/components/sections/viewing-setup";
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
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, SITE_PAGES, SITE_NAME, absoluteUrl } from "@/lib/seo";
import {
  CATALOGUE_LIVE_LABEL,
  CATALOGUE_VOD_LABEL,
  PREMIUM_PRICES,
} from "@/lib/site";

const page = SITE_PAGES[0];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  absoluteTitle: true,
});

const offerCatalog = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Sky Glass IPTV Premium",
  url: absoluteUrl(page.path),
  itemListElement: [
    {
      "@type": "Offer",
      name: "1 Month Premium",
      price: "12",
      priceCurrency: "GBP",
      description: `${CATALOGUE_LIVE_LABEL}; ${CATALOGUE_VOD_LABEL}; one simultaneous connection`,
    },
    {
      "@type": "Offer",
      name: "3 Months Premium",
      price: "22",
      priceCurrency: "GBP",
    },
    {
      "@type": "Offer",
      name: "6 Months Premium",
      price: "30",
      priceCurrency: "GBP",
    },
    {
      "@type": "Offer",
      name: "12 Months Premium",
      price: "40",
      priceCurrency: "GBP",
    },
  ],
  brand: { "@type": "Brand", name: SITE_NAME },
  additionalProperty: [
    { "@type": "PropertyValue", name: "12-month price", value: PREMIUM_PRICES.month12 },
  ],
};

export default function PremiumHomePage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />
      <JsonLd data={offerCatalog} />

      <SkyglassHeroSection />
      <ViewingSetup />
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
