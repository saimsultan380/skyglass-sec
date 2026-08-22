import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalDocument } from "@/components/legal/legal-document";
import { TERMS_DOCUMENT } from "@/components/legal/content-terms";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.terms)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <LegalHero
        title={TERMS_DOCUMENT.title}
        highlight={TERMS_DOCUMENT.highlight}
        lastUpdated={TERMS_DOCUMENT.lastUpdated}
        meta={TERMS_DOCUMENT.meta}
        intro={TERMS_DOCUMENT.intro}
      />
      <LegalDocument
        sections={TERMS_DOCUMENT.sections}
        numbered={TERMS_DOCUMENT.numbered}
      />
      <SkyglassFooter />
    </main>
  );
}
