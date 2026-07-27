"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Clock, CalendarDays } from "lucide-react";

const shorterPlanReasons = [
  "You are subscribing for the first time.",
  "You want maximum flexibility.",
  "You want to test the service beyond the trial.",
  "You do not want a long initial commitment.",
];

const longerPlanReasons = [
  "You expect to use the service regularly.",
  "You prefer fewer renewal payments.",
  "You want a lower average monthly cost.",
  "You already know that your device and connection are compatible.",
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

export function SubConsiderations() {
  return (
    <section
      id="considerations"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Choose the Right{" "}
            <span className="text-brand-gradient font-bold">Subscription Duration</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            The most suitable plan depends on how regularly you expect to use the service.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Clock className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">
                  A shorter package may be appropriate when:
                </h3>
              </div>
              <ul className="space-y-2.5">
                {shorterPlanReasons.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <CalendarDays className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">
                  A longer plan may be suitable when:
                </h3>
              </div>
              <ul className="space-y-2.5">
                {longerPlanReasons.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
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
            The main content categories are currently available across all standard durations. The key differences are access period, price and average monthly value.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
