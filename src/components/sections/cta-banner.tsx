"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { ROUTES } from "@/lib/seo";

export function SkyglassCTABanner() {
  return (
    <CtaSection
      title="Choose Your"
      highlight="Sky Glass IPTV Plan"
      body="Compare the four subscription periods, confirm your device and choose the plan that matches your requirements."
      primary={{
        label: "View Plans from £12",
        href: "#pricing",
        icon: "calendar",
      }}
      secondary={{
        label: "Contact Support for Login Details",
        href: `${ROUTES.contact}?enquiry=login`,
        icon: "headphones",
      }}
      trustItems={[
        { label: "Plans from £12", icon: "calendar" },
        { label: "Guided Installation", icon: "wrench" },
        { label: "EPG and Selected Catch-Up", icon: "clock" },
        { label: "Customer Support", icon: "headphones" },
      ]}
    />
  );
}
