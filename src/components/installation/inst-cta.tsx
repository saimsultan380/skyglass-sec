"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";
import { DOWNLOADER_CODE, WHATSAPP_INSTALL_HREF } from "@/lib/site";

export function InstCTA() {
  return (
    <CtaSection
      id="cta"
      title="Need Help Finishing"
      highlight="Setup?"
      body={`Our team can check your device method and account details. Tell us you used Downloader code ${DOWNLOADER_CODE} and where you got stuck.`}
      primary={{
        label: "Get installation help",
        href: WHATSAPP_INSTALL_HREF,
        icon: "messageSquare",
      }}
      secondary={{
        label: "View Premium plans",
        href: ROUTES.home,
        icon: "creditCard",
      }}
    />
  );
}
