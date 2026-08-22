"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { CalendarClock } from "lucide-react";

/**
 * Compact header for policy pages — no mockup image or trust row, but the same
 * mask-reveal title and fade-in body used by the marketing heroes.
 */
export function LegalHero({
  title,
  highlight,
  lastUpdated,
  meta,
  intro,
}: {
  title: string;
  highlight: string;
  lastUpdated: string;
  meta?: readonly { label: string; value: string }[];
  intro?: readonly string[];
}) {
  return (
    <div
      className="relative flex flex-col bg-white pb-8 text-[#0B0E2C] sm:pb-12"
      data-hero
    >
      <div className="mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <FadeIn duration={0.4} yOffset={12} className="w-full">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5">
            <CalendarClock className="h-3.5 w-3.5 stroke-[2.5] text-[#E91E8C]" />
            <span className="text-xs font-bold text-slate-700">
              Last Updated: {lastUpdated}
            </span>
          </div>
        </FadeIn>

        <div className="w-full max-w-none" data-no-reveal>
          <MaskReveal
            trigger="mount"
            as="h1"
            className="text-h1-skyglass max-w-none leading-[1.15] font-bold tracking-tight"
            parts={[
              { text: title },
              { text: highlight, className: "text-brand-gradient font-bold" },
            ]}
          />
        </div>

        {intro?.length ? (
          <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full">
            <div className="mt-4 space-y-3 text-[11px] leading-relaxed text-black sm:mt-6 sm:space-y-4 sm:text-sm lg:text-base">
              {intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </FadeIn>
        ) : null}

        {meta?.length ? (
          <FadeIn delay={0.3} duration={0.45} yOffset={14} className="w-full">
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 rounded-[12px] border border-slate-200 bg-white p-5 sm:mt-8 sm:grid-cols-2 sm:p-6">
              {meta.map((row) => (
                <div key={row.label} className="flex flex-col gap-0.5">
                  <dt className="text-[11px] font-bold tracking-wider text-[#E91E8C] uppercase">
                    {row.label}
                  </dt>
                  <dd className="text-xs font-semibold break-words text-slate-800 sm:text-sm">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        ) : null}
      </div>
    </div>
  );
}
