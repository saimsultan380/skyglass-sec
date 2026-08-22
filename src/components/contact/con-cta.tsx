"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";

export function ConCTA() {
  return (
    <CtaSection
      id="cta"
      title="How Can"
      highlight="We Help?"
      body="Send enough device and application information for support to identify the correct login method."
      primary={{
        label: "Contact Support for Login Details",
        href: `${ROUTES.contact}?enquiry=login`,
        icon: "headphones",
      }}
      secondary={{
        label: "View Subscription Plans",
        href: ROUTES.subscription,
        icon: "creditCard",
      }}
    />
  );
}
