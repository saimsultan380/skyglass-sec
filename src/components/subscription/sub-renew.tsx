"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { RefreshCw } from "lucide-react";

const renewCheckList = [
  "Provide the current username or order reference.",
  "Confirm the required duration.",
  "Check the current price.",
  "Confirm the number of connections.",
  "Ask whether the existing login remains active.",
  "Keep the application installed.",
  "Confirm the new expiry date.",
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

export function SubRenew() {
  return (
    <section
      id="renewal"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Renewing Your{" "}
            <span className="text-brand-gradient font-bold">Subscription</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Contact support before your expiry date when you want to continue using the account.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <RefreshCw className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                When requesting a renewal:
              </h3>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 w-full">
              {renewCheckList.map((step) => (
                <li key={step} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-5 mt-8">
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                A renewal does not normally require reinstalling the app unless an update or replacement version is required.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
