import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { InstHero } from "@/components/installation/inst-hero";
import { InstBeforeBegin } from "@/components/installation/inst-before-begin";
import { InstDownloaderInfo } from "@/components/installation/inst-downloader-info";
import { InstDeviceGuides } from "@/components/installation/inst-device-guides";
import { InstSecureLogin } from "@/components/installation/inst-secure-login";
import { InstUsageGuide } from "@/components/installation/inst-usage-guide";
import { InstTroubleshooting } from "@/components/installation/inst-troubleshooting";
import { InstFAQ } from "@/components/installation/inst-faq";
import { InstCTA } from "@/components/installation/inst-cta";
import { B1GFooter } from "@/components/sections/footer";
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
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <InstHero />
      <InstBeforeBegin />
      <InstDownloaderInfo />
      <InstDeviceGuides />
      <InstSecureLogin />
      <InstUsageGuide />
      <InstTroubleshooting />
      <InstFAQ />
      <InstCTA />
      <B1GFooter />
    </main>
  );
}
