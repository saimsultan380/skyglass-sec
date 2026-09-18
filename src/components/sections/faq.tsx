"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";

const faqList: readonly FaqItem[] = [
  {
    question: "Do I need a Sky Glass television?",
    answer:
      "No. You can use a supported television, streaming stick, Android device or another compatible platform. The service is separate from the official Sky Glass television product.",
  },
  {
    question: "Can I use a player I already have?",
    answer:
      "Yes, if it supports the required Xtream account connection. Our supplied app is preferred, but our team can help you check another player before activation.",
  },
  {
    question: "Can I move between two devices?",
    answer:
      "Yes. With a one-connection account, log out of the first device before logging in on the second. For simultaneous viewing on multiple screens, request additional connections.",
  },
  {
    question: "Does my subscription renew automatically?",
    answer:
      "No. Renewals are manual. Message us on WhatsApp when you want to renew your account.",
  },
];

export function SkyglassFAQ() {
  return (
    <FaqSection
      title="Questions About the"
      highlight="Service"
      items={faqList}
    />
  );
}
