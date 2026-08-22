"use client";

import React from "react";
import { FaqSection, type FaqItem } from "@/components/ui/faq-section";
import { DOWNLOADER_CODE } from "@/lib/site";

const faqList: readonly FaqItem[] = [
  {
    question: "Do I need a Sky Glass television?",
    answer:
      "No. Sky Glass IPTV works through supported streaming devices and IPTV players. A Sky Glass television may require an external compatible Firestick or Android device.",
  },
  {
    question: "What is the Sky Glass IPTV Downloader code?",
    answer: `The current Downloader code is ${DOWNLOADER_CODE}.`,
  },
  {
    question: "Where do I get my login details?",
    answer:
      "Install the relevant application first, then contact support. Support will provide the username, password, server address, M3U link or portal information required by your device.",
  },
  {
    question: "Which Smart TV players can I use?",
    answer:
      "Supported options include CR7 Player, IBO Player, SmartOne IPTV and HOT IPTV, subject to availability in your television’s app store.",
  },
  {
    question: "Is every channel available in 4K?",
    answer:
      "No. Picture quality depends on the selected entry and source. 4K is available only on selected supported streams.",
  },
  {
    question: "Is Catch-Up available on every channel?",
    answer: "No. Catch-Up is available on selected channels only.",
  },
  {
    question: "Can I watch on more than one device?",
    answer:
      "The account may be configured on compatible devices, but simultaneous viewing depends on the number of connections purchased.",
  },
  {
    question: "Is a VPN required?",
    answer:
      "A VPN is not required for every customer. An overloaded VPN can also reduce streaming speed.",
  },
  {
    question: "Is a free trial guaranteed?",
    answer: "No. Trial access is subject to availability and eligibility.",
  },
];

export function SkyglassFAQ() {
  return (
    <FaqSection
      title="Frequently Asked"
      highlight="Questions"
      items={faqList}
    />
  );
}
