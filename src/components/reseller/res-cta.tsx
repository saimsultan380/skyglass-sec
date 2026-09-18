"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";
import { CONTACT_WHATSAPP_HREF } from "@/lib/site";

export function ResCTA() {
  return (
    <CtaSection
      id="cta"
      title="Get Your"
      highlight="Reseller Quote"
      body="Contact us for wholesale prices, current panel options, trial limits and help choosing a package. Unused credits do not expire."
      primary={{
        label: "Get Your Reseller Quote",
        href: CONTACT_WHATSAPP_HREF,
        icon: "messageSquare",
      }}
      secondary={{
        label: "Contact Reseller Support",
        href: `${ROUTES.contact}?enquiry=reseller`,
        icon: "headphones",
      }}
    />
  );
}
