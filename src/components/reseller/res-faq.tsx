"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";

const faqList: readonly FaqItem[] = [
  {
    question: "Is the reseller login the same as a viewing account?",
    answer:
      "No. Your panel login is used to manage accounts and credits. Customer viewing accounts have their own login details.",
  },
  {
    question: "Can I choose my customer prices?",
    answer:
      "You set your retail prices within the reseller agreement. Ask us for the wholesale credit cost so you can work out the price of each package you offer.",
  },
  {
    question: "Can I purchase more credits later?",
    answer:
      "Yes. Contact support to request an additional credit purchase and confirm the current price.",
  },
  {
    question: "Does every panel include sub-reseller creation?",
    answer:
      "No. This depends on the panel. Tell us that you need sub-reseller access when requesting your quote.",
  },
];

export function ResFAQ() {
  return (
    <FaqSection
      eyebrow="Reseller Help"
      title="Reseller"
      highlight="Questions"
      items={faqList}
    />
  );
}
