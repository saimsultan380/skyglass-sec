"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";

const faqList: readonly FaqItem[] = [
  {
    question: "Can I contact you before purchasing?",
    answer:
      "Yes. Send us your device model and any package questions so we can help you check suitability before payment.",
  },
  {
    question: "Is every message answered immediately?",
    answer:
      "We are available 24 hours a day and reply as soon as possible. Response times can vary with the number and complexity of enquiries.",
  },
  {
    question: "Can you help with an official Sky account?",
    answer:
      "Our team supports the independent IPTV service supplied through Skyglass-iptv.com. For official Sky television, broadband or billing enquiries, contact Sky directly.",
  },
];

export function ConFAQ() {
  return (
    <FaqSection
      eyebrow="Support Help"
      title="Support"
      highlight="Questions"
      items={faqList}
    />
  );
}
