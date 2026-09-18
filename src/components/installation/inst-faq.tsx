"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";
import { DOWNLOADER_CODE } from "@/lib/site";

const faqList: readonly FaqItem[] = [
  {
    question: "What is the Sky Glass APK?",
    answer: `The APK is the Android installation file used to install our supplied app. Downloader code ${DOWNLOADER_CODE} provides the download route for compatible devices.`,
  },
  {
    question: "Can I use my official Sky account?",
    answer:
      "No. This account belongs to the independent IPTV service supplied through this website. Official Sky apps and Sky customer accounts are separate.",
  },
  {
    question: "Where do I get my username and password?",
    answer:
      "Contact us through WhatsApp for trial access or subscription activation. We send the login details and guide you through setup.",
  },
];

export function InstFAQ() {
  return (
    <FaqSection
      eyebrow="Installation Help"
      title="Sky Glass App"
      highlight="Questions"
      items={faqList}
    />
  );
}
