"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  UserPlus,
  DollarSign,
  Calendar,
  Smartphone,
  Laptop,
  TrendingUp,
} from "lucide-react";

interface BenefitCard {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc?: string;
  list?: string[];
}

const benefitsList: BenefitCard[] = [
  {
    title: "Direct Account Creation",
    icon: UserPlus,
    desc: "Create eligible subscriptions without sending every request to the primary activation team.",
  },
  {
    title: "Control Your Retail Prices",
    icon: DollarSign,
    list: [
      "Credit cost",
      "Subscription duration",
      "Connection allowance",
      "Payment fees",
      "Marketing cost",
      "Support workload",
      "Refund risk",
      "Desired margin",
    ],
  },
  {
    title: "Offer Flexible Durations",
    icon: Calendar,
    list: ["1 month", "3 months", "6 months", "12 months"],
  },
  {
    title: "Provide a Dedicated App",
    icon: Smartphone,
    desc: "Compatible Firestick and Android customers can use Downloader code 2245820.",
  },
  {
    title: "Support More Platforms",
    icon: Laptop,
    desc: "Customers using Samsung, LG, Apple, Windows or Mac can use compatible alternative players.",
  },
  {
    title: "Grow Gradually",
    icon: TrendingUp,
    desc: "Begin with a realistic credit allocation and purchase more as the customer base develops.",
  },
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

export function ResBenefits() {
  return (
    <section
      id="benefits"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            Why Become a Sky Glass IPTV{" "}
            <span className="text-brand-gradient font-bold">Reseller?</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {benefitsList.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full transition-colors hover:border-slate-300"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
                      {card.title}
                    </h3>
                  </div>

                  {card.desc && (
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {card.desc}
                    </p>
                  )}

                  {card.list && (
                    <ul className="space-y-2 mt-4 border-t border-slate-100 pt-4">
                      {card.list.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Tick />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
