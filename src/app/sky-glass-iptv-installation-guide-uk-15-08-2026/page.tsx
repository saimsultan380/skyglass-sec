import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { InstHero } from "@/components/installation/inst-hero";
import { InstBeforeBegin } from "@/components/installation/inst-before-begin";
import { InstDeviceGuides } from "@/components/installation/inst-device-guides";
import { InstSecureLogin } from "@/components/installation/inst-secure-login";
import { InstTroubleshooting } from "@/components/installation/inst-troubleshooting";
import { InstFAQ } from "@/components/installation/inst-faq";
import { InstCTA } from "@/components/installation/inst-cta";
import { SkyglassFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.installation)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function InstallationGuidePage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <InstHero />
      <InstBeforeBegin />
      <InstDeviceGuides />
      <InstSecureLogin />
      <InstTroubleshooting />
      <InstFAQ />
      <InstCTA />
      <SkyglassFooter />
    </main>
  );
}
