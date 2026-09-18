"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, Check, MessageSquare } from "lucide-react";
import { buildWhatsAppHref, WHATSAPP_SUBSCRIPTION_HREF } from "@/lib/site";

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
  "22,000+ live channel entries",
  "100,000+ films and series",
  "TV guide where EPG is available",
  "Catch-Up on selected channels",
  "SD, HD, Full HD & selected 4K",
  "WhatsApp login & setup help",
  "Activation within 2 hours",
] as const;

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1 month",
    price: "£12",
    monthly: "£12.00 / month equivalent",
    description: "Choose one month for the lowest upfront payment.",
    ctaText: "Order 1 Month",
  },
  {
    id: "3-months",
    name: "3 months",
    price: "£22",
    monthly: "About £7.33 / month equivalent",
    description: "Longer access without committing to six or twelve months.",
    ctaText: "Order 3 Months",
  },
  {
    id: "6-months",
    name: "6 months",
    price: "£30",
    monthly: "£5.00 / month equivalent",
    description: "Lower equivalent monthly cost over six months.",
    ctaText: "Order 6 Months",
  },
  {
    id: "12-months",
    name: "12 months",
    price: "£45",
    monthly: "£3.75 / month equivalent",
    description: "Lowest equivalent monthly price across Standard plans.",
    ctaText: "Order 12 Months",
    isRecommended: true,
  },
];

export function SubPricing() {
  const [tier, setTier] = useState<"standard" | "premium">("standard");

  return (
    <section
      id="pricing-plans"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-8">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Compare Standard and{" "}
            <span className="text-brand-gradient font-bold">
              Premium Packages
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            The monthly equivalents help you compare value. They are not monthly
            instalments: you pay the full price for the selected subscription
            period.
          </p>
        </FadeIn>

        <FadeIn className="mb-8 flex w-full justify-center">
          <div className="inline-flex rounded-[12px] bg-slate-50/80 p-1">
            <button
              type="button"
              onClick={() => setTier("standard")}
              className={`rounded-[10px] px-4 py-2 text-xs font-bold sm:text-sm ${
                tier === "standard"
                  ? "bg-white text-[#0B0E2C] shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setTier("premium")}
              className={`rounded-[10px] px-4 py-2 text-xs font-bold sm:text-sm ${
                tier === "premium"
                  ? "bg-white text-[#0B0E2C] shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Premium
            </button>
          </div>
        </FadeIn>

        {tier === "standard" ? (
          <FadeIn className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
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
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-brand text-[10px] font-bold text-white uppercase tracking-wider">
                      Best Value
                    </span>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar
                        className={`h-4 w-4 shrink-0 ${
                          plan.isRecommended
                            ? "text-[#E91E8C]"
                            : "text-slate-400"
                        }`}
                      />
                      <h3 className="text-sm font-bold text-[#0B0E2C] tracking-wide">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="font-heading text-[42px] leading-none sm:text-3xl font-extrabold text-[#0B0E2C] tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-slate-500 mb-3">
                      {plan.monthly}
                    </p>

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
                      className="w-full rounded-[12px] py-3.5 text-xs sm:text-sm font-semibold bg-gradient-brand text-white hover:opacity-95 shadow-none border-0"
                    >
                      {plan.ctaText}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Choose one month for the lowest upfront payment. Longer Standard
              subscriptions reduce the equivalent monthly cost.
            </p>
          </FadeIn>
        ) : (
          <FadeIn className="w-full">
            <div className="iphone-glass-card p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-bold text-[#0B0E2C]">
                Premium Package Options
              </h3>
              <p className="mb-4 max-w-3xl text-xs leading-relaxed font-semibold text-slate-700 sm:text-sm">
                Contact us for the current Premium package information and
                price. Tell us how long you want the subscription to run, how
                many screens you want to watch simultaneously, which device or
                player you will use, and whether a particular category is
                important to you.
              </p>
              <p className="mb-6 max-w-3xl text-xs leading-relaxed font-semibold text-slate-700 sm:text-sm">
                We will explain the available package and confirm the total
                price before payment.
              </p>
              <a
                href={WHATSAPP_SUBSCRIPTION_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-brand w-full rounded-[12px] px-5 py-3.5 text-xs font-semibold text-white sm:w-auto sm:text-sm"
                >
                  <MessageSquare className="mr-2 h-4 w-4 stroke-[2.5]" />
                  Request a Premium Quote
                </Button>
              </a>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
