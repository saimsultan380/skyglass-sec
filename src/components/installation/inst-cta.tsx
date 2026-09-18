"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";
import { CONTACT_WHATSAPP_HREF } from "@/lib/site";

export function InstCTA() {
  return (
    <CtaSection
      id="cta"
      title="Contact"
      highlight="Installation Support"
      body="Your trial or subscription login details and setup assistance are provided through WhatsApp."
      primary={{
        label: "Contact Installation Support",
        href: CONTACT_WHATSAPP_HREF,
        icon: "messageSquare",
      }}
      secondary={{
        label: "View Subscription Plans",
        href: ROUTES.subscription,
        icon: "creditCard",
      }}
    />
  );
}
