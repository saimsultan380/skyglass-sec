import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalDocument } from "@/components/legal/legal-document";
import {
  REFUND_DOCUMENT,
  REFUND_FAQS,
  REFUND_SUBMIT_SECTION,
} from "@/components/legal/content-refunds";
import { FaqSection } from "@/components/ui/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.refunds)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <LegalHero
        title={REFUND_DOCUMENT.title}
        highlight={REFUND_DOCUMENT.highlight}
        lastUpdated={REFUND_DOCUMENT.lastUpdated}
        meta={REFUND_DOCUMENT.meta}
        intro={REFUND_DOCUMENT.intro}
      />
      <LegalDocument sections={REFUND_DOCUMENT.sections} />
      <FaqSection
        eyebrow="Refund Policy"
        title="Refund"
        highlight="FAQs"
        items={REFUND_FAQS}
      />
      <LegalDocument sections={[REFUND_SUBMIT_SECTION]} />
      <SkyglassFooter />
    </main>
  );
}
