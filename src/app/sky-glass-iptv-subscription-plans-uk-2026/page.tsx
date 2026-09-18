import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SubHero } from "@/components/subscription/sub-hero";
import { SubPricing } from "@/components/subscription/sub-pricing";
import { SubFeatures } from "@/components/subscription/sub-features";
import {
  SubConnections,
  SubPlayerCosts,
  SubPayments,
  SubRenewals,
  SubTrialBlock,
  SubRefundNote,
} from "@/components/subscription/sub-extra-sections";
import { SubActivationSteps } from "@/components/subscription/sub-activation-steps";
import { SubFAQ } from "@/components/subscription/sub-faq";
import { SubCTA } from "@/components/subscription/sub-cta";
import { SkyglassFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.subscription)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  absoluteTitle: true,
});

export default function SubscriptionPlansPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <SubHero />
      <SubPricing />
      <SubFeatures />
      <SubConnections />
      <SubPlayerCosts />
      <SubPayments />
      <SubActivationSteps />
      <SubRenewals />
      <SubTrialBlock />
      <SubRefundNote />
      <SubFAQ />
      <SubCTA />
      <SkyglassFooter />
    </main>
  );
}
