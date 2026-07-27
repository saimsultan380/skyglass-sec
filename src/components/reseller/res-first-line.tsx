"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Headphones } from "lucide-react";

const supportTopics = [
  "Firestick installation",
  "Android installation",
  "Smart TV player choice",
  "Login entry",
  "Expiry questions",
  "Renewal",
  "Basic buffering checks",
  "Account loading",
  "App updates",
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

export function ResFirstLine() {
  return (
    <section
      id="first-line-support"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            Providing{" "}
            <span className="text-brand-gradient font-bold">First-Line Support</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            A reseller should be prepared to help with:
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <Headphones className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#0B0E2C]">Support topics</h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {supportTopics.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed border-t border-slate-100 pt-4">
              Issues outside your access or authority should be escalated through the reseller support process.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
