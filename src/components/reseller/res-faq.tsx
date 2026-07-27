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
    question: "What is the reseller panel?",
    answer: "It is a dashboard used to create and manage eligible customer accounts through credits.",
  },
  {
    question: "Can I set my own customer prices?",
    answer: "Yes, subject to the reseller terms and applicable law.",
  },
  {
    question: "How are credits used?",
    answer: "Credits are deducted when an eligible account is created or renewed.",
  },
  {
    question: "Can I create trials?",
    answer: "Trial creation depends on the current panel rules.",
  },
  {
    question: "Do customers receive the app?",
    answer: "Supported Firestick and Android customers can install the dedicated application.",
  },
  {
    question: "Do I provide customer support?",
    answer: "Yes. Resellers should provide first-line assistance.",
  },
  {
    question: "Can I buy more credits?",
    answer: "Additional credits may be purchased according to the current reseller terms.",
  },
  {
    question: "Can I sell outside the UK?",
    answer: "Confirm supported countries with the reseller team.",
  },
  {
    question: "Does the panel collect customer payments?",
    answer: "Normally, the reseller remains responsible for taking customer payments.",
  },
  {
    question: "How do I apply?",
    answer: "Submit a reseller enquiry through the Contact page.",
  },
];

export function ResFAQ() {
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
        className="rounded-[12px] border border-slate-200 bg-white overflow-hidden transition-all duration-200 select-none"
      >
        <button
          onClick={() => toggleFAQ(absoluteIndex)}
          className="w-full flex items-center justify-between text-left p-5 gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none"
        >
          <span className="text-sm sm:text-base font-bold text-[#0B0E2C] leading-snug font-heading">
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
            isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
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
              Reseller Help
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Reseller{" "}
            <span className="text-brand-gradient font-bold">FAQs</span>
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
