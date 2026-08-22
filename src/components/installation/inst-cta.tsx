"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";

export function InstCTA() {
  return (
    <CtaSection
      id="cta"
      title="Complete Your"
      highlight="Installation"
      body="Install the correct application for your device, then contact support for the account credentials."
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
