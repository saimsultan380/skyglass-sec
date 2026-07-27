"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight, ArrowRight } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  ctaText: string;
  features: string[];
  recommended?: boolean;
}

const sharedFeatures = [
  "22,000+ listed live channels",
  "100,000+ movies and series",
  "Live sports categories",
  "Electronic Programme Guide",
  "Catch-Up where available",
  "HD, Full HD and 4K where supported",
  "App and device guidance",
  "Account assistance",
];

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1 Month",
    price: "£12",
    period: "",
    description: "A flexible monthly option for new customers or viewers who prefer a short commitment.",
    ctaText: "Choose 1 Month",
    features: [...sharedFeatures],
  },
  {
    id: "3-months",
    name: "3 Months",
    price: "£22",
    period: "",
    description: "A practical option for customers who want stronger value without selecting a long subscription.",
    ctaText: "Choose 3 Months",
    features: [...sharedFeatures],
  },
  {
    id: "6-months",
    name: "6 Months",
    price: "£30",
    period: "",
    description: "A popular mid-length plan for regular viewers.",
    ctaText: "Choose 6 Months",
    features: [...sharedFeatures],
  },
  {
    id: "12-months",
    name: "12 Months",
    price: "£45",
    period: "",
    description: "The strongest long-term value and lowest average monthly cost.",
    ctaText: "Choose 12 Months",
    recommended: true,
    features: [...sharedFeatures],
  },
];

const NormalTick = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E91E8C] mt-0.5">
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

const RecommendedTick = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E91E8C] text-white mt-0.5">
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

export function B1GPricing() {
  return (
    <section
      id="pricing"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Sky Glass IPTV Subscription Plans and{" "}
            <span className="text-brand-gradient font-bold">Pricing</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            <p>
              Choose a Sky Glass IPTV plan according to your preferred duration and budget.
            </p>
            <p>
              Every current plan includes access to the same main service categories, dedicated app information, secure login details and customer assistance.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
            {pricingPlans.map((plan, i) => (
              <div
                key={plan.id}
                data-reveal
                data-delay={String(i * 100)}
                className={`rounded-[12px] border bg-white p-6 flex flex-col justify-between h-full relative transition-all duration-200 ${
                  plan.recommended
                    ? "border-[#E91E8C]"
                    : "border-slate-200"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-[#E91E8C] text-[#E91E8C] px-3.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase select-none">
                    Best Value
                  </span>
                )}

                <div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-[10px] mb-4 shrink-0 ${
                      plan.recommended
                        ? "bg-pink-50 text-[#E91E8C]"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    <Calendar className="h-5 w-5 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0B0E2C] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 font-semibold leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline mb-6">
                    <span
                      className={`font-heading text-[42px] leading-none sm:text-4xl font-extrabold tracking-tight ${
                        plan.recommended ? "text-[#E91E8C]" : "text-[#0B0E2C]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period ? (
                      <span className="font-heading text-[10px] sm:text-[11px] font-semibold text-slate-400 ml-1.5">
                        {plan.period}
                      </span>
                    ) : null}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        {plan.recommended ? <RecommendedTick /> : <NormalTick />}
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button
                    variant="primary"
                    className="w-full justify-between rounded-[12px] font-bold text-xs py-3 px-4 flex items-center bg-gradient-brand text-white hover:opacity-95 border-0"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-[#5C607A] leading-relaxed max-w-2xl">
              Review the current plan information before payment in case prices, promotions, connection limits or features have changed.
            </p>

            <Link href="/sky-glass-iptv-subscription/#compare-plans" className="shrink-0 w-full md:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto rounded-[12px] border-gradient-brand px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>Compare IPTV subscription plans</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
