"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";

const faqList: readonly FaqItem[] = [
  {
    question: "When should I request login details?",
    answer:
      "Install the recommended application first, then contact support.",
  },
  {
    question: "What device information should I send?",
    answer: "Send the brand, full model and installed player.",
  },
  {
    question: "Is the free trial guaranteed?",
    answer:
      "No. Trial availability depends on eligibility and service capacity.",
  },
  {
    question: "Can support check my device before purchase?",
    answer: "Yes.",
  },
  {
    question: "Can support guarantee a particular channel?",
    answer: "No. Catalogue availability can change.",
  },
];

export function ConFAQ() {
  return (
    <FaqSection
      eyebrow="Support Help"
      title="Support"
      highlight="FAQs"
      items={faqList}
    />
  );
}
