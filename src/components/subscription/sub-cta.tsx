"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { CONTACT_WHATSAPP_HREF } from "@/lib/site";

export function SubCTA() {
  return (
    <CtaSection
      id="cta"
      title="Buy a Subscription on"
      highlight="WhatsApp"
      body="Choose Standard or ask about Premium, confirm your device and connections, then complete payment. We activate within two hours and send your login through WhatsApp."
      primary={{
        label: "Buy a Subscription on WhatsApp",
        href: CONTACT_WHATSAPP_HREF,
        icon: "messageSquare",
      }}
      secondary={{
        label: "View Packages",
        href: "#pricing-plans",
        icon: "creditCard",
      }}
    />
  );
}
