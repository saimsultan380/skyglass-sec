"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  ctaText: string;
  isRecommended?: boolean;
  features: string[];
}

const sharedFeatures = [
  "22,000+ listed live channels",
  "100,000+ movies and series",
  "Sports and entertainment categories",
  "Dedicated app information",
  "EPG where available",
  "Catch-Up on supported channels",
  "HD, Full HD and 4K where available",
  "Customer assistance",
];

function planFeatures(months: number): string[] {
  const accessLabel =
    months === 1 ? "1 month of account access" : `${months} months of account access`;
  return [accessLabel, ...sharedFeatures];
}

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1-Month Plan",
    price: "£12",
    description: "A flexible monthly package for new customers and viewers who prefer short-term access.",
    ctaText: "Buy 1 Month",
    features: planFeatures(1),
  },
  {
    id: "3-months",
    name: "3-Month Plan",
    price: "£22",
    description: "A lower average monthly price without choosing a long subscription.",
    ctaText: "Buy 3 Months",
    features: planFeatures(3),
  },
  {
    id: "6-months",
    name: "6-Month Plan",
    price: "£30",
    description: "A popular mid-length option for regular viewing.",
    ctaText: "Buy 6 Months",
    features: planFeatures(6),
  },
  {
    id: "12-months",
    name: "12-Month Plan",
    price: "£45",
    description: "The strongest overall value and lowest average monthly cost.",
    ctaText: "Buy 12 Months",
    isRecommended: true,
    features: planFeatures(12),
  },
];

export function SubPricing() {
  return (
    <section
      id="pricing-plans"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Current Sky Glass IPTV{" "}
            <span className="text-brand-gradient font-bold">Plans</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-[12px] border bg-white p-6 transition-all duration-200 ${
                  plan.isRecommended
                    ? "border-[#E91E8C] ring-1 ring-[#E91E8C]"
                    : "border-slate-200"
                }`}
              >
                {plan.isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-brand text-[10px] font-bold text-white uppercase tracking-wider">
                    Best Value
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar
                      className={`h-4 w-4 shrink-0 ${
                        plan.isRecommended ? "text-[#E91E8C]" : "text-slate-400"
                      }`}
                    />
                    <h3 className="text-sm font-bold text-[#0B0E2C] tracking-wide">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="font-heading text-[42px] leading-none sm:text-3xl font-extrabold text-[#0B0E2C] tracking-tight">
                      {plan.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8 border-t border-slate-100 pt-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            plan.isRecommended
                              ? "bg-pink-50 text-[#E91E8C]"
                              : "bg-slate-50 text-slate-400"
                          }`}
                        >
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-[12px] py-3.5 text-xs sm:text-sm font-semibold bg-gradient-brand text-white hover:opacity-95 shadow-none border-0"
                >
                  {plan.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
