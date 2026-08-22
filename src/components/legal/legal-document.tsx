"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Tick } from "@/components/ui/section-bits";
import { Info } from "lucide-react";
import type { LegalBlock, LegalSection } from "./legal-types";

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
          {block.text}
        </p>
      );

    case "lead":
      return (
        <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
          {block.text}
        </p>
      );

    case "subheading":
      return (
        <h3 className="text-sm sm:text-base font-bold text-[#0B0E2C] tracking-tight leading-snug font-heading">
          {block.text}
        </h3>
      );

    case "bullets":
      return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Tick />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="space-y-3">
          {block.items.map((item, index) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-bold text-[#E91E8C]">
                {index + 1}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );

    case "definitions":
      return (
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {block.items.map((item) => (
            <div key={item.term} className="flex flex-col gap-1">
              <dt className="text-xs sm:text-sm font-bold text-[#0B0E2C]">
                {item.term}
              </dt>
              <dd className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      );

    case "note":
      return (
        <div className="flex items-start gap-2.5 border-t border-slate-100 pt-4">
          <Info className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5 stroke-[2.5]" />
          <p className="text-xs text-[#5C607A] leading-relaxed">{block.text}</p>
        </div>
      );
  }
}

/**
 * Renders policy clauses as revealed cards. ScrollReveal picks up the cards,
 * headings and list items automatically, so animation matches the rest of
 * the site without any per-page wiring.
 */
export function LegalDocument({
  sections,
  numbered = false,
}: {
  sections: readonly LegalSection[];
  numbered?: boolean;
}) {
  return (
    <section
      id="policy"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-6">
          {sections.map((section, index) => (
            <FadeIn
              key={section.title}
              delay={Math.min(index, 4) * 0.04}
              duration={0.4}
              yOffset={14}
              className="w-full"
            >
              <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-4">
                  {numbered ? (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 font-heading text-xs font-bold text-[#E91E8C]">
                      {index + 1}
                    </span>
                  ) : null}
                  <h2 className="text-base sm:text-xl font-bold text-[#0B0E2C] tracking-tight leading-snug font-heading">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.blocks.map((block, blockIndex) => (
                    <Block key={blockIndex} block={block} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
