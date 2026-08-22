import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { DevHero } from "@/components/devices/dev-hero";
import { DevOverview } from "@/components/devices/dev-overview";
import { DevInstallMethods } from "@/components/devices/dev-install-methods";
import { DevDifferences } from "@/components/devices/dev-differences";
import { DevRequirements } from "@/components/devices/dev-requirements";
import { FaqSection } from "@/components/ui/faq-section";
import { CtaSection } from "@/components/ui/cta-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";
import { DOWNLOADER_CODE } from "@/lib/site";

const page = SITE_PAGES.find((p) => p.path === ROUTES.devices)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

const deviceFaqs = [
  {
    question: "What is the easiest device to install?",
    answer: `A compatible Firestick, Fire TV or Android TV device can use Downloader code ${DOWNLOADER_CODE}.`,
  },
  {
    question: "Which players should I use on Samsung or LG?",
    answer:
      "Use CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV, depending on app-store availability.",
  },
  {
    question: "Will support provide my login?",
    answer: "Yes. Install the application first and then contact support.",
  },
  {
    question: "Does the subscription include the Smart TV player licence?",
    answer:
      "No. Any separate licence charged by the player developer is not included.",
  },
  {
    question: "Can I use the service on Sky Glass TV?",
    answer:
      "An external compatible Firestick or Android device may be required.",
  },
  {
    question: "Can support check my exact model?",
    answer: "Yes. Send the brand, model number and operating system.",
  },
];

export default function SupportedDevicesPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <DevHero />
      <DevOverview />
      <DevInstallMethods />
      <DevDifferences />
      <DevRequirements />
      <FaqSection
        eyebrow="Device Support"
        title="Device"
        highlight="FAQs"
        items={deviceFaqs}
      />
      <CtaSection
        title="Check Your"
        highlight="Device"
        body="Confirm compatibility before purchasing a longer subscription."
        primary={{
          label: "Ask About My Device",
          href: ROUTES.contact,
          icon: "router",
        }}
        secondary={{
          label: "Contact Support for Login Details",
          href: ROUTES.contact,
          icon: "headphones",
        }}
        trustItems={[
          { label: "Firestick & Fire TV", icon: "tv" },
          { label: "Android & Google TV", icon: "monitorSmartphone" },
          { label: "Samsung & LG Players", icon: "users" },
        ]}
      />
      <SkyglassFooter />
    </main>
  );
}
