"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { DollarSign } from "lucide-react";

const pricingFactors = [
  "Credit cost",
  "Payment-processing fees",
  "Advertising",
  "Customer acquisition",
  "Technical support",
  "Refunds",
  "Business expenses",
  "Desired profit",
];

const customerShouldUnderstand = [
  "Access period",
  "Number of connections",
  "Included support",
  "Renewal price",
  "Third-party app fees",
  "Refund conditions",
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

export function ResCustomerPricing() {
  return (
    <section
      id="customer-pricing"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            Setting Your Customer{" "}
            <span className="text-brand-gradient font-bold">Prices</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Your retail price should account for:
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <DollarSign className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-[#0B0E2C]">Price factors</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricingFactors.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-[#0B0E2C] mb-4">
                Customers should understand:
              </h3>
              <ul className="space-y-2 mb-6">
                {customerShouldUnderstand.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed border-t border-slate-100 pt-4">
                Display all prices clearly. Do not create misleading discounts by inventing an inflated original price.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
