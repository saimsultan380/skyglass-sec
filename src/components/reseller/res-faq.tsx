"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";

const faqList: readonly FaqItem[] = [
  {
    question: "Is one credit equal to one month?",
    answer:
      "That is the current standard structure. Confirm the latest written terms before purchasing.",
  },
  {
    question: "Is there a recurring panel fee?",
    answer:
      "Confirm current panel-access terms in writing before payment.",
  },
  {
    question: "Can I choose my own retail prices?",
    answer: "Yes, subject to applicable law and the reseller agreement.",
  },
  {
    question: "Are earnings guaranteed?",
    answer: "No.",
  },
  {
    question: "Who supports reseller customers?",
    answer:
      "The reseller is normally the customer’s first point of contact. Supplier support may assist with panel or underlying technical issues.",
  },
  {
    question: "Can unused credits be refunded?",
    answer:
      "Only where the reseller agreement or applicable law allows it.",
  },
];

export function ResFAQ() {
  return (
    <FaqSection
      eyebrow="Reseller Help"
      title="Reseller"
      highlight="FAQs"
      items={faqList}
    />
  );
}
