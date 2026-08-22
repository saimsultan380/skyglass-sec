import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { ConHero } from "@/components/contact/con-hero";
import { ConDetails } from "@/components/contact/con-details";
import { ConLoginDetails } from "@/components/contact/con-login-details";
import { ConTrial } from "@/components/contact/con-trial";
import { ConForm } from "@/components/contact/con-form";
import { ConFAQ } from "@/components/contact/con-faq";
import { ConCTA } from "@/components/contact/con-cta";
import { SkyglassFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.contact)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <ConHero />
      <ConDetails />
      <ConLoginDetails />
      <ConTrial />
      <ConForm />
      <ConFAQ />
      <ConCTA />
      <SkyglassFooter />
    </main>
  );
}
