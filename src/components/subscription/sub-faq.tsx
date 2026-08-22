"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";

const faqList: readonly FaqItem[] = [
  {
    question: "Are all plans supplied with the same features?",
    answer:
      "Yes. The standard catalogue and features are the same. The subscription duration changes.",
  },
  {
    question: "When does my plan begin?",
    answer: "The plan normally begins when active login details are issued.",
  },
  {
    question: "Are Smart TV player fees included?",
    answer:
      "No. CR7 Player, IBO Player, SmartOne IPTV and HOT IPTV may have separate developer fees.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Contact support before the existing subscription expires to discuss available renewal or extension options.",
  },
  {
    question: "Can one login be used simultaneously on multiple devices?",
    answer: "Only where the order includes enough connections.",
  },
  {
    question: "Can future prices change?",
    answer:
      "Future prices can change, but this does not normally alter a subscription that has already been purchased and activated.",
  },
];

export function SubFAQ() {
  return (
    <FaqSection
      eyebrow="Subscription Help"
      title="Subscription"
      highlight="FAQs"
      items={faqList}
    />
  );
}
