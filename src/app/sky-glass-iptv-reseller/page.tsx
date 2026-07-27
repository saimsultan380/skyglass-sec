import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { ResHero } from "@/components/reseller/res-hero";
import { ResIntro } from "@/components/reseller/res-intro";
import { ResBenefits } from "@/components/reseller/res-benefits";
import { ResFeatures } from "@/components/reseller/res-features";
import { ResCreditsWork } from "@/components/reseller/res-credits-work";
import { ResPackages } from "@/components/reseller/res-packages";
import { ResActivation } from "@/components/reseller/res-activation";
import { ResSupport } from "@/components/reseller/res-support";
import { ResCustomerPricing } from "@/components/reseller/res-customer-pricing";
import { ResFirstLine } from "@/components/reseller/res-first-line";
import { ResRecords } from "@/components/reseller/res-records";
import { ResMarketing } from "@/components/reseller/res-marketing";
import { ResResponsibilities } from "@/components/reseller/res-responsibilities";
import { ResFAQ } from "@/components/reseller/res-faq";
import { ResCTA } from "@/components/reseller/res-cta";
import { B1GFooter } from "@/components/sections/footer";
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
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <ResHero />
      <ResIntro />
      <ResBenefits />
      <ResFeatures />
      <ResCreditsWork />
      <ResPackages />
      <ResActivation />
      <ResSupport />
      <ResCustomerPricing />
      <ResFirstLine />
      <ResRecords />
      <ResMarketing />
      <ResResponsibilities />
      <ResFAQ />
      <ResCTA />
      <B1GFooter />
    </main>
  );
}
