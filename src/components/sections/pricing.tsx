"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight, ArrowRight, MessageSquare } from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { buildWhatsAppHref, WHATSAPP_SUBSCRIPTION_HREF } from "@/lib/site";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  ctaText: string;
  accessLine: string;
  recommended?: boolean;
}

const sharedFeatures = [
  "22,000+ live channels",
  "100,000+ films and series",
  "TV guide & selected Catch-Up",
  "SD, HD, Full HD & selected 4K",
  "1 simultaneous connection",
  "WhatsApp setup help",
  "Activation within 2 hours",
] as const;

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1 month",
    price: "£12",
    description: "Lowest upfront payment for one month of Standard access.",
    accessLine: "Paid upfront for 1 month",
    ctaText: "Choose 1 Month",
  },
  {
    id: "3-months",
    name: "3 months",
    price: "£22",
    description: "Three months of Standard access with one connection.",
    accessLine: "Paid upfront for 3 months",
    ctaText: "Choose 3 Months",
  },
  {
    id: "6-months",
    name: "6 months",
    price: "£30",
    description: "Six months of Standard access with one connection.",
    accessLine: "Paid upfront for 6 months",
    ctaText: "Choose 6 Months",
  },
  {
    id: "12-months",
    name: "12 months",
    price: "£45",
    description: "Twelve months of Standard access with one connection.",
    accessLine: "Paid upfront for 12 months",
    ctaText: "Choose 12 Months",
    recommended: true,
  },
];

const NormalTick = () => (
  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E91E8C]">
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
  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E91E8C] text-white">
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

export function SkyglassPricing() {
  const [tier, setTier] = useState<"standard" | "premium">("standard");

  return (
    <section
      id="pricing"
      className="w-full border-t border-slate-200 bg-white py-12 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-8 w-full max-w-4xl">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Standard and{" "}
            <span className="text-brand-gradient font-bold">Premium Plans</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#5C607A] sm:text-base">
            <p>
              Choose a package and subscription period, then tell us how many
              screens you want to watch at the same time.
            </p>
          </div>
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
          <>
            <FadeIn className="mb-10 w-full">
              <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
                {pricingPlans.map((plan, i) => {
                  const features = [...sharedFeatures, plan.accessLine];
                  return (
                    <div
                      key={plan.id}
                      data-reveal
                      data-delay={String(i * 100)}
                      className={`iphone-glass-card relative flex h-full flex-col justify-between p-6 transition-all duration-200 ${
                        plan.recommended ? "iphone-glass-card--accent" : ""
                      }`}
                    >
                      {plan.recommended && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#E91E8C] px-3.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase select-none">
                          Best Value
                        </span>
                      )}

                      <div>
                        <div
                          className={`mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${
                            plan.recommended
                              ? "bg-pink-50 text-[#E91E8C]"
                              : "bg-slate-50 text-slate-400"
                          }`}
                        >
                          <Calendar className="h-5 w-5 stroke-[2]" />
                        </div>

                        <h3 className="mb-1 text-lg font-bold text-[#0B0E2C]">
                          {plan.name}
                        </h3>
                        <p className="mb-4 text-xs leading-relaxed font-semibold text-slate-500">
                          {plan.description}
                        </p>

                        <div className="mb-6 flex items-baseline">
                          <span
                            className={`font-heading text-[42px] leading-none font-extrabold tracking-tight sm:text-4xl ${
                              plan.recommended
                                ? "text-[#E91E8C]"
                                : "text-[#0B0E2C]"
                            }`}
                          >
                            {plan.price}
                          </span>
                        </div>

                        <ul className="mb-8 space-y-3">
                          {features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5"
                            >
                              {plan.recommended ? (
                                <RecommendedTick />
                              ) : (
                                <NormalTick />
                              )}
                              <span className="text-xs leading-snug font-semibold text-slate-800 sm:text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
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
                            className="bg-gradient-brand flex w-full items-center justify-between rounded-[12px] border-0 px-4 py-3 text-xs font-bold text-white hover:opacity-95"
                          >
                            <span>{plan.ctaText}</span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn className="w-full">
              <div className="iphone-glass-card flex w-full flex-col items-start justify-between gap-6 p-5 sm:p-7 md:flex-row md:items-center">
                <p className="max-w-2xl text-xs leading-relaxed text-[#5C607A] sm:text-sm">
                  These prices cover one simultaneous connection and are paid
                  upfront for the selected period. Additional connections are
                  available at different prices.
                </p>

                <Link
                  href={`${ROUTES.subscription}#pricing-plans`}
                  className="w-full shrink-0 md:w-auto"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gradient-brand w-full rounded-[12px] px-5 py-3.5 text-xs font-semibold sm:px-6 sm:text-sm md:w-auto"
                  >
                    <span>Compare Standard Packages</span>
                    <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </>
        ) : (
          <FadeIn className="w-full">
            <div className="iphone-glass-card p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-bold text-[#0B0E2C]">Premium</h3>
              <p className="mb-6 max-w-3xl text-xs leading-relaxed font-semibold text-slate-700 sm:text-sm">
                Contact us for the current Premium package details and price.
                Tell us your preferred subscription period and required number
                of connections so we can explain the available options before
                you pay.
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
                  Ask About Premium
                </Button>
              </a>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
