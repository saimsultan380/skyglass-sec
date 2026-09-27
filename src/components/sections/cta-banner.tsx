"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";

export function SkyglassCTABanner() {
  return (
    <CtaSection
      title="Ready to"
      highlight="Choose?"
      body="Tell us which term and device you want. We can confirm your total, answer a package question or help you request a trial first."
      primary={{
        label: "Choose a Premium plan",
        href: "#pricing",
        icon: "calendar",
      }}
      secondary={{
        label: "Ask a question",
        href: ROUTES.contact,
        icon: "headphones",
      }}
      trustItems={[
        { label: "24-Hour Free Trial", icon: "clock" },
        { label: "From £12", icon: "zap" },
        { label: "12 months £40", icon: "creditCard" },
        { label: "Manual Renewals", icon: "messageSquare" },
      ]}
    />
  );
}
