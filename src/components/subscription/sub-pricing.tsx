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
  monthly: string;
  description: string;
  ctaText: string;
  isRecommended?: boolean;
}

const sharedFeatures = [
  "1 simultaneous connection",
  "27,000+ live channel entries",
  "120,000+ films and series",
  "TV guide where EPG is available",
  "Catch-Up on selected channels",
  "SD, HD, Full HD & selected 4K",
  "WhatsApp login & setup help",
  "Login details and setup assistance",
] as const;

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1 Month",
    price: "£12",
    monthly: "£12.00 / month equivalent",
    description: "A one-month term with the lowest upfront payment.",
    ctaText: "Choose 1 month",
  },
  {
    id: "3-months",
    name: "3 Months",
    price: "£22",
    monthly: "About £7.33 / month equivalent",
    description:
      "Three months of access, equivalent to about £7.33 per month over the term.",
    ctaText: "Choose 3 months",
  },
  {
    id: "6-months",
    name: "6 Months",
    price: "£30",
    monthly: "£5.00 / month equivalent",
    description: "Six months of access, equivalent to £5 per month over the term.",
    ctaText: "Choose 6 months",
  },
  {
    id: "12-months",
    name: "12 Months",
    price: "£40",
    monthly: "About £3.33 / month equivalent",
    description:
      "A full year of access, equivalent to about £3.33 per month over the term.",
    ctaText: "Choose 12 months",
    isRecommended: true,
  },
];

export function SubPricing() {
  return (
    <section
      id="pricing-plans"
      className="w-full border-t border-slate-200 bg-white py-12 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-8 w-full max-w-4xl">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Compare Premium{" "}
            <span className="text-brand-gradient font-bold">Packages</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C607A] sm:text-base">
            The same advertised Premium catalogue appears on every card. The
            monthly equivalents help you compare value. They are not monthly
            instalments: you pay the full price for the selected subscription
            period.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                data-reveal
                data-delay={String(index * 100)}
                className={`iphone-glass-card relative flex flex-col justify-between p-6 transition-all duration-200 ${
                  plan.isRecommended ? "iphone-glass-card--accent" : ""
                }`}
              >
                {plan.isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                    Best Value
                  </span>
                )}

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Calendar
                      className={`h-4 w-4 shrink-0 ${
                        plan.isRecommended
                          ? "text-[#E91E8C]"
                          : "text-slate-400"
                      }`}
                    />
                    <h3 className="text-sm font-bold tracking-wide text-[#0B0E2C]">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-1 flex items-baseline gap-1.5">
                    <span className="font-heading text-[42px] leading-none font-extrabold tracking-tight text-[#0B0E2C] sm:text-3xl">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mb-3 text-[11px] font-semibold text-slate-500">
                    {plan.monthly}
                  </p>

                  <p className="mb-6 text-xs leading-relaxed font-semibold text-slate-500 sm:text-sm">
                    {plan.description}
                  </p>

                  <ul className="mb-8 space-y-3 border-t border-slate-100 pt-5">
                    {sharedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            plan.isRecommended
                              ? "bg-pink-50 text-[#E91E8C]"
                              : "bg-slate-50 text-slate-400"
                          }`}
                        >
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                        <span className="text-xs leading-snug font-semibold text-slate-800 sm:text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={buildWhatsAppHref({
                    intent: "subscription",
                    plan: plan.name,
                    price: plan.price,
                  })}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-gradient-brand w-full rounded-[12px] border-0 py-3.5 text-xs font-semibold text-white shadow-none hover:opacity-95 sm:text-sm"
                  >
                    {plan.ctaText}
                  </Button>
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed font-semibold text-slate-500 sm:text-sm">
            Monthly equivalents are comparisons, not instalments. Additional
            simultaneous connections and any paid third-party player licence may
            cost extra. Confirm your total before payment.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
