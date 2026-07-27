"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { AlertTriangle } from "lucide-react";

const doNotGuarantee = [
  "Every television channel",
  "Every sporting event",
  "Permanent content availability",
  "Perfect uptime",
  "Buffer-free playback on every connection",
  "4K on every stream",
  "Compatibility with every device",
  "A relationship with an unrelated broadcaster",
];

const WarningDot = () => (
  <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#E91E8C] mt-2" />
);

export function ResMarketing() {
  return (
    <section
      id="responsible-marketing"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            Responsible Reseller{" "}
            <span className="text-brand-gradient font-bold">Marketing</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Do not guarantee:
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-[#E91E8C]/20 bg-pink-50/10 p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <AlertTriangle className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#E91E8C]">Avoid unsupported claims</h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {doNotGuarantee.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <WarningDot />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed border-t border-pink-100 pt-4">
              Describe the current package accurately and update advertising when features or pricing change.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
