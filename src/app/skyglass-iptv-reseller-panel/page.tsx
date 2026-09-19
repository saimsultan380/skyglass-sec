import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { ResHero } from "@/components/reseller/res-hero";
import { ResCreditsWork } from "@/components/reseller/res-credits-work";
import {
  ResPackages,
  ResNeverExpire,
  ResTrials,
  ResSubReseller,
  ResOpenAccount,
  ResCreateRenew,
  ResSupportBlock,
} from "@/components/reseller/res-extra-sections";
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
  absoluteTitle: true,
});

export default function ResellerPanelPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <ResHero />
      <ResPackages />
      <ResCreditsWork />
      <ResNeverExpire />
      <ResTrials />
      <ResSubReseller />
      <ResOpenAccount />
      <ResCreateRenew />
      <ResSupportBlock />
      <ResFAQ />
      <ResCTA />
      <SkyglassFooter />
    </main>
  );
}
