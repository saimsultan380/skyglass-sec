"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import { buildWhatsAppHref } from "@/lib/site";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  ctaText: string;
  isRecommended?: boolean;
}

/** Identical on every plan — only the term, price and description change. */
const sharedFeatures = [
  "22,000+ live channel entries",
  "100,000+ films and series",
  "EPG and selected Catch-Up",
  "SD, HD and Full HD",
  "4K on selected streams",
  "Supported-device installation",
  "Login details from support",
  "Customer support",
] as const;

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1 Month",
    price: "£12",
    description: "Choose one month if you want the lowest initial payment.",
    ctaText: "Get 1 Month",
  },
  {
    id: "3-months",
    name: "3 Months",
    price: "£22",
    description:
      "Choose three months for a longer period without committing to six or twelve months.",
    ctaText: "Get 3 Months",
  },
  {
    id: "6-months",
    name: "6 Months",
    price: "£30",
    description: "Choose six months for a lower equivalent monthly cost.",
    ctaText: "Get 6 Months",
  },
  {
    id: "12-months",
    name: "12 Months",
    price: "£45",
    description: "Choose twelve months for the lowest equivalent monthly price.",
    ctaText: "Get 12 Months",
    isRecommended: true,
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
            Sky Glass IPTV{" "}
            <span className="text-brand-gradient font-bold">Subscription Plans</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                data-reveal
                data-delay={String(index * 100)}
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
                    {sharedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5 ${
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

                <a target="_blank" rel="noopener noreferrer" href={buildWhatsAppHref({ plan: `${plan.name} (${plan.price})`, page: "Subscription plans", intent: `I want the ${plan.name} for ${plan.price}.` })}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full rounded-[12px] py-3.5 text-xs sm:text-sm font-semibold bg-gradient-brand text-white hover:opacity-95 shadow-none border-0"
                  >
                    {plan.ctaText}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
