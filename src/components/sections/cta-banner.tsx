"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";

export function SkyglassCTABanner() {
  return (
    <CtaSection
      title="Choose a"
      highlight="Subscription"
      body="Compare Standard packages from £12, ask about Premium options, or message us with a question about your device and setup."
      primary={{
        label: "Choose a Subscription",
        href: ROUTES.subscription,
        icon: "calendar",
      }}
      secondary={{
        label: "Ask a Question",
        href: ROUTES.contact,
        icon: "headphones",
      }}
      trustItems={[
        { label: "24-Hour Free Trial", icon: "clock" },
        { label: "2-Hour Activation", icon: "zap" },
        { label: "WhatsApp Setup", icon: "messageSquare" },
        { label: "Manual Renewals", icon: "creditCard" },
      ]}
    />
  );
}
