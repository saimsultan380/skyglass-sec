import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalDocument } from "@/components/legal/legal-document";
import { DMCA_DOCUMENT } from "@/components/legal/content-dmca";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.dmca)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function DmcaPolicyPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <LegalHero
        title={DMCA_DOCUMENT.title}
        highlight={DMCA_DOCUMENT.highlight}
        lastUpdated={DMCA_DOCUMENT.lastUpdated}
        meta={DMCA_DOCUMENT.meta}
        intro={DMCA_DOCUMENT.intro}
      />
      <LegalDocument sections={DMCA_DOCUMENT.sections} />
      <SkyglassFooter />
    </main>
  );
}
