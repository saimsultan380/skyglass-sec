"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Users, AlertCircle } from "lucide-react";

const panelCapabilities = [
  "Create customer accounts",
  "Choose subscription duration",
  "Select connection allowance",
  "View active accounts",
  "Monitor expiry dates",
  "Process renewals",
  "Manage credit balance",
  "Create trials where permitted",
  "Review account information",
  "Provide installation guidance",
];

const notProvided = [
  "Customers",
  "Marketing",
  "Payment processing",
  "End-user support",
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

export function ResIntro() {
  return (
    <section
      id="programme-intro"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn>
              <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] mb-4 font-heading">
                What Is the{" "}
                <span className="text-brand-gradient font-bold">Reseller Programme?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-6">
                The programme gives approved applicants direct access to account-management tools.
              </p>

              <div className="border-t border-slate-100 pt-5 w-full">
                <h4 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-4">
                  Depending on the panel configuration, resellers may be able to:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  {panelCapabilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 w-full">
            <FadeIn delay={0.1}>
              <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <AlertCircle className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                    The panel does not automatically provide:
                  </h3>
                </div>

                <ul className="space-y-3.5 mb-6">
                  {notProvided.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Users className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed border-t border-slate-100 pt-4">
                  Those remain the reseller&apos;s responsibility.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
