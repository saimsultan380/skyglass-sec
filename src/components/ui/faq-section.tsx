"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Eyebrow } from "@/components/ui/section-bits";
import { ICONS, type IconName } from "@/components/ui/icon-registry";
import { Minus, Plus } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Two-column FAQ accordion — same markup and reveal behaviour as the homepage
 * FAQ so every page animates identically.
 */
export function FaqSection({
  id = "faq",
  eyebrow = "Support Center",
  eyebrowIcon = "helpCircle",
  title,
  highlight,
  items,
}: {
  id?: string;
  eyebrow?: string;
  eyebrowIcon?: IconName;
  title: string;
  highlight?: string;
  items: readonly FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midIndex = Math.ceil(items.length / 2);
  const leftColFaqs = items.slice(0, midIndex);
  const rightColFaqs = items.slice(midIndex);

  const renderFaqItem = (item: FaqItem, absoluteIndex: number) => {
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
      id={id}
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <Eyebrow icon={ICONS[eyebrowIcon]} label={eyebrow} />
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="text-brand-gradient font-bold">
                  {highlight}
                </span>
              </>
            ) : null}
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
