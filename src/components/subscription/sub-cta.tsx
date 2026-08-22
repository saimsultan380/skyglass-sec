"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";

export function SubCTA() {
  return (
    <CtaSection
      id="cta"
      title="Choose Your"
      highlight="Subscription"
      body="Confirm your device, choose your preferred term and install the recommended application."
      primary={{
        label: "Choose a Subscription",
        href: "#pricing-plans",
        icon: "creditCard",
      }}
      secondary={{
        label: "Contact Support for Login Details",
        href: `${ROUTES.contact}?enquiry=login`,
        icon: "headphones",
      }}
    />
  );
}
