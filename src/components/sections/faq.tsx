"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "What is Sky Glass IPTV?",
    answer:
      "Sky Glass IPTV is an internet-based subscription service that provides access to available live television and on-demand categories through compatible applications.",
  },
  {
    question: "How many live channels are available?",
    answer:
      "Current package information lists more than 22,000 live channels. Counts may change as categories and sources are updated.",
  },
  {
    question: "How large is the on-demand library?",
    answer:
      "The current service information lists more than 100,000 movies and television-series entries.",
  },
  {
    question: "Which devices can I use?",
    answer:
      "Supported devices include Firestick, Fire TV, Android TV, Smart TVs, Apple devices, Windows, Mac, smartphones, tablets and selected IPTV hardware.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "A 24-hour trial may be requested before purchasing, subject to current availability.",
  },
  {
    question: "How quickly will I receive my login?",
    answer:
      "Most accounts are prepared after payment and order information have been confirmed. Exact activation time may vary.",
  },
  {
    question: "Does every stream play in 4K?",
    answer:
      "No. Only selected sources may be available in 4K. Playback also depends on the device, screen and connection.",
  },
  {
    question: "Can I use the account on several devices?",
    answer:
      "This depends on the connection allowance included with the selected plan.",
  },
  {
    question: "Do third-party players cost extra?",
    answer:
      "Some alternative applications charge a separate activation or purchase fee.",
  },
  {
    question: "Where can I get help?",
    answer:
      "Use the Installation Guide or contact the support team with your device and account information.",
  },
];

export function B1GFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midIndex = Math.ceil(faqList.length / 2);
  const leftColFaqs = faqList.slice(0, midIndex);
  const rightColFaqs = faqList.slice(midIndex);

  const renderFaqItem = (item: FAQItem, absoluteIndex: number) => {
    const isOpen = openIndex === absoluteIndex;
    return (
      <div
        key={absoluteIndex}
        data-reveal
        data-delay={String((absoluteIndex % 3) * 50)}
        className="rounded-[12px] border border-slate-200 bg-white overflow-hidden transition-all duration-200 select-none"
      >
        <button
          onClick={() => toggleFAQ(absoluteIndex)}
          className="w-full flex items-center justify-between text-left p-5 gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none"
        >
          <span className="text-sm sm:text-base font-bold text-[#0B0E2C] leading-snug">
            {item.question}
          </span>
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
              isOpen ? "bg-pink-50 text-[#E91E8C]" : "bg-slate-50 text-slate-400"
            }`}
          >
            {isOpen ? (
              <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
            ) : (
              <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
            )}
          </span>
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[280px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0 border-t border-slate-100/50 mt-1">
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
              <HelpCircle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E91E8C]">
              Support Center
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Frequently Asked <span className="text-brand-gradient font-bold">Questions</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
            
            <div className="flex flex-col gap-4 w-full">
              {leftColFaqs.map((faq, idx) => renderFaqItem(faq, idx))}
            </div>

            <div className="flex flex-col gap-4 w-full">
              {rightColFaqs.map((faq, idx) => renderFaqItem(faq, idx + midIndex))}
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
