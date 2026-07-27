import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { SubHero } from "@/components/subscription/sub-hero";
import { SubConsiderations } from "@/components/subscription/sub-considerations";
import { SubPricing } from "@/components/subscription/sub-pricing";
import { SubCompare } from "@/components/subscription/sub-compare";
import { SubFeatures } from "@/components/subscription/sub-features";
import { SubAppAccess } from "@/components/subscription/sub-app-access";
import { SubActivationSteps } from "@/components/subscription/sub-activation-steps";
import { SubTrial } from "@/components/subscription/sub-trial";
import { SubConnections } from "@/components/subscription/sub-connections";
import { SubRenew } from "@/components/subscription/sub-renew";
import { SubPlanChoice } from "@/components/subscription/sub-plan-choice";
import { SubFAQ } from "@/components/subscription/sub-faq";
import { SubCTA } from "@/components/subscription/sub-cta";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.subscription)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function SubscriptionPlansPage() {
  return (
    <main className="min-h-screen">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <SubHero />
      <SubConsiderations />
      <SubPricing />
      <SubCompare />
      <SubFeatures />
      <SubAppAccess />
      <SubActivationSteps />
      <SubTrial />
      <SubConnections />
      <SubRenew />
      <SubPlanChoice />
      <SubFAQ />
      <SubCTA />
      <B1GFooter />
    </main>
  );
}
