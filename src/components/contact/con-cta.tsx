"use client";

import React from "react";
import { CtaSection } from "@/components/ui/cta-section";
import { CONTACT_WHATSAPP_HREF } from "@/lib/site";

export function ConCTA() {
  return (
    <CtaSection
      id="cta"
      title="Start a"
      highlight="WhatsApp Conversation"
      body="Contact us for trial access, subscription activation, app setup, payments or renewals. Support is available 24 hours a day; we reply as soon as possible."
      primary={{
        label: "Message Support on WhatsApp",
        href: CONTACT_WHATSAPP_HREF,
        icon: "messageSquare",
      }}
    />
  );
}
