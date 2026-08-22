"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight, ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { buildWhatsAppHref } from "@/lib/site";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  ctaText: string;
  accessLine: string;
  recommended?: boolean;
}

/** Shared across every plan — only the period, price and access line change. */
const sharedFeatures = [
  "22,000+ live channels",
  "100,000+ films and series",
  "EPG and selected Catch-Up",
  "SD, HD and Full HD",
  "Supported 4K streams",
  "Device setup guidance",
  "Login details from support",
  "Customer support",
] as const;

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1-Month Plan",
    price: "£12",
    description:
      "A short commitment for customers who want one month of access.",
    accessLine: "One month of access",
    ctaText: "Choose 1 Month",
  },
  {
    id: "3-months",
    name: "3-Month Plan",
    price: "£22",
    description:
      "A practical option for customers who want more than one month without choosing a long subscription.",
    accessLine: "Three months of access",
    ctaText: "Choose 3 Months",
  },
  {
    id: "6-months",
    name: "6-Month Plan",
    price: "£30",
    description: "Six months of access with a lower equivalent monthly cost.",
    accessLine: "Six months of access",
    ctaText: "Choose 6 Months",
  },
  {
    id: "12-months",
    name: "12-Month Plan",
    price: "£45",
    description:
      "The lowest equivalent monthly price across the standard subscription plans.",
    accessLine: "Twelve months of access",
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
  return (
    <section
      id="pricing"
      className="w-full border-t border-slate-200 bg-white py-12 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12 w-full max-w-4xl">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Sky Glass IPTV{" "}
            <span className="text-brand-gradient font-bold">
              Subscription Plans
            </span>
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#5C607A] sm:text-base">
            <p>
              Choose how long you want access. Every plan includes the same
              standard catalogue and service features. Only the subscription
              period and total price change.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="mb-10 w-full">
          <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan, i) => {
              const features = [...sharedFeatures, plan.accessLine];
              return (
                <div
                  key={plan.id}
                  data-reveal
                  data-delay={String(i * 100)}
                  className={`relative flex h-full flex-col justify-between rounded-[12px] border bg-white p-6 transition-all duration-200 ${
                    plan.recommended ? "border-[#E91E8C]" : "border-slate-200"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[#E91E8C] bg-white px-3.5 py-0.5 text-[10px] font-bold tracking-wider text-[#E91E8C] uppercase select-none">
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
                          plan.recommended ? "text-[#E91E8C]" : "text-[#0B0E2C]"
                        }`}
                      >
                        {plan.price}
                      </span>
                    </div>

                    <ul className="mb-8 space-y-3">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
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
                        plan: `${plan.name} (${plan.price})`,
                        page: "Homepage pricing",
                        intent: `I want the ${plan.name} for ${plan.price}.`,
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
          <div className="flex w-full flex-col items-start justify-between gap-6 rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 md:flex-row md:items-center">
            <p className="max-w-2xl text-xs leading-relaxed text-[#5C607A] sm:text-sm">
              All prices are paid upfront for the selected period. Confirm the
              required number of simultaneous connections before ordering.
            </p>

            <Link
              href={`${ROUTES.subscription}#compare-plans`}
              className="w-full shrink-0 md:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-gradient-brand w-full rounded-[12px] px-5 py-3.5 text-xs font-semibold sm:px-6 sm:text-sm md:w-auto"
              >
                <span>Compare Sky Glass IPTV Plans</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
