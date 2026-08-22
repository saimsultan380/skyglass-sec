"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";

export function ResCTA() {
  return (
    <CtaSection
      id="cta"
      title="Request Current"
      highlight="Reseller Terms"
      body="Review the credit price, conditions and panel functions before committing funds."
      primary={{
        label: "Become a Reseller",
        href: `${ROUTES.contact}?enquiry=reseller`,
        icon: "users",
      }}
      secondary={{
        label: "Contact Support for Reseller Login Details",
        href: `${ROUTES.contact}?enquiry=reseller`,
        icon: "headphones",
      }}
    />
  );
}
