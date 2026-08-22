import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { ResHero } from "@/components/reseller/res-hero";
import { ResFeatures } from "@/components/reseller/res-features";
import { ResCreditsWork } from "@/components/reseller/res-credits-work";
import { ResMinimumEntry } from "@/components/reseller/res-minimum-entry";
import { ResActivation } from "@/components/reseller/res-activation";
import { ResResponsibilities } from "@/components/reseller/res-responsibilities";
import { ResRevenue } from "@/components/reseller/res-revenue";
import { ResSecurity } from "@/components/reseller/res-security";
import { ResFAQ } from "@/components/reseller/res-faq";
import { ResCTA } from "@/components/reseller/res-cta";
import { SkyglassFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.reseller)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function ResellerPanelPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <ResHero />
      <ResFeatures />
      <ResCreditsWork />
      <ResMinimumEntry />
      <ResActivation />
      <ResResponsibilities />
      <ResRevenue />
      <ResSecurity />
      <ResFAQ />
      <ResCTA />
      <SkyglassFooter />
    </main>
  );
}
