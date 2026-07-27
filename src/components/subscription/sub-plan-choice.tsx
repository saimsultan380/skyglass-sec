"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Clock, CalendarCheck, Sparkles } from "lucide-react";

const twelveMonthReasons = [
  "You have tested the service.",
  "Your device works correctly.",
  "Your internet connection is suitable.",
  "You expect to use the account regularly.",
  "You want the lowest average monthly price.",
];

const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function SubPlanChoice() {
  return (
    <section
      id="plan-choice"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Choosing Between One Month and{" "}
            <span className="text-brand-gradient font-bold">Twelve Months</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Clock className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-[#0B0E2C]">One Month</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                Choose the monthly plan when flexibility matters most.
              </p>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <CalendarCheck className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-[#0B0E2C]">Three or Six Months</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                Choose three or six months when you want stronger value but do not want a full-year package.
              </p>
            </div>

            <div className="rounded-[12px] border border-[#E91E8C] ring-1 ring-[#E91E8C] bg-white p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Sparkles className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-[#0B0E2C]">Twelve Months</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                Choose twelve months when:
              </p>
              <ul className="space-y-2">
                {twelveMonthReasons.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-[#5C607A] leading-relaxed max-w-4xl">
            Price should not be the only consideration. Device compatibility, connection allowance and support requirements also matter.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
