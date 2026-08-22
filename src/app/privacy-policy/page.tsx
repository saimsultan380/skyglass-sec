import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalDocument } from "@/components/legal/legal-document";
import { PRIVACY_DOCUMENT } from "@/components/legal/content-privacy";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.privacy)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <LegalHero
        title={PRIVACY_DOCUMENT.title}
        highlight={PRIVACY_DOCUMENT.highlight}
        lastUpdated={PRIVACY_DOCUMENT.lastUpdated}
        meta={PRIVACY_DOCUMENT.meta}
        intro={PRIVACY_DOCUMENT.intro}
      />
      <LegalDocument sections={PRIVACY_DOCUMENT.sections} />
      <SkyglassFooter />
    </main>
  );
}
