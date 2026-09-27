"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";

const faqList: readonly FaqItem[] = [
  {
    question: "Will the subscription renew by itself?",
    answer: "No. Renewals are manual.",
  },
  {
    question: "Can two screens play at once?",
    answer:
      "The listed prices include one simultaneous connection. Ask for an additional-connection quote if you need more.",
  },
  {
    question: "Is this the official Sky Glass television service?",
    answer:
      "No. Skyglass-iptv.com is independent and is not affiliated with, endorsed by or operated by Sky. An official Sky account does not sign you in to this service.",
  },
];

export function SkyglassFAQ() {
  return (
    <FaqSection
      id="before-you-buy"
      title="Before You"
      highlight="Buy"
      items={faqList}
    />
  );
}
