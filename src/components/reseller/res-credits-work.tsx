"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Coins, AlertCircle } from "lucide-react";

const creditFactors = [
  "Duration",
  "Connections",
  "Package type",
  "Current panel rules",
];

const purchaseChecks = [
  "Number of credits",
  "Package price",
  "Minimum order",
  "Credit expiry",
  "Renewal cost",
  "Trial rules",
  "Multi-connection charges",
  "Top-up process",
  "Refund conditions",
  "Supported markets",
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

export function ResCreditsWork() {
  return (
    <section
      id="credits-work"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            How IPTV{" "}
            <span className="text-brand-gradient font-bold">Credits Work</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
              <Coins className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
              Credits operate as reseller inventory
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              <p>
                A customer account uses a specified number of credits based on:
              </p>
              <ul className="space-y-2">
                {creditFactors.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Tick />
                    <span className="text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                A short subscription normally requires fewer credits than a long package.
              </p>
            </div>

            <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-3">
                Before purchasing, confirm:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {purchaseChecks.map((item) => (
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

          <div className="border-t border-slate-100 pt-5 mt-8 flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5 stroke-[2.5]" />
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Keep enough balance available to handle planned activations and renewals.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
