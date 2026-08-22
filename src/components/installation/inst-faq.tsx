"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";
import { DOWNLOADER_CODE } from "@/lib/site";

const faqList: readonly FaqItem[] = [
  {
    question: "What is the Downloader code?",
    answer: `The current code is ${DOWNLOADER_CODE}.`,
  },
  {
    question: "Where do I receive my login details?",
    answer:
      "Install the appropriate app first, then use the Contact Support for Login Details CTA.",
  },
  {
    question: "Can I use Downloader on Samsung or LG?",
    answer:
      "Samsung and LG generally use compatible television apps such as CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV.",
  },
  {
    question: `Can I use code ${DOWNLOADER_CODE} on Apple devices?`,
    answer:
      "No. Apple devices use compatible applications from the Apple App Store.",
  },
  {
    question: "What should I send support?",
    answer:
      "Send: device brand and model, installed app name, order information, MAC address or device key where relevant, and the exact setup problem, if any.",
  },
];

export function InstFAQ() {
  return (
    <FaqSection
      eyebrow="Installation Help"
      title="Installation"
      highlight="FAQs"
      items={faqList}
    />
  );
}
