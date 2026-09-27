"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";

const faqList: readonly FaqItem[] = [
  {
    question: "Is £40 the full price for the 12-month Premium plan?",
    answer:
      "Yes. It is the upfront price for 12 months with one simultaneous connection. Extra connections and any separate third-party player licence are priced separately.",
  },
  {
    question: "Do the listed prices include more than one screen?",
    answer:
      "No. The listed Premium prices include one simultaneous connection. Ask for an additional-connection quote if you need more.",
  },
  {
    question: "Will paying for a Smart TV player activate my subscription?",
    answer:
      "No. A player licence activates the player itself. You still need an active trial or subscription account to connect to our service.",
  },
  {
    question: "How do I buy access for several screens?",
    answer:
      "Message us with the number of screens that will play simultaneously, your preferred package and subscription period. We will quote the appropriate connection allowance.",
  },
];

export function SubFAQ() {
  return (
    <FaqSection
      eyebrow="Subscription Help"
      title="Subscription"
      highlight="Questions"
      items={faqList}
    />
  );
}
