"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Clock, ListChecks } from "lucide-react";

const trialChecks = [
  "App installation",
  "Account login",
  "Category loading",
  "Device compatibility",
  "Picture quality",
  "Programme-guide information",
  "General navigation",
  "Broadband performance",
];

const checkListItems = [
  "Subscription duration",
  "Current price",
  "Number of permitted connections",
  "Device compatibility",
  "Required application",
  "Third-party app fees",
  "Trial availability",
  "Renewal process",
  "Refund conditions",
  "Current package information",
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

export function TrialSection() {
  return (
    <section
      id="trial"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Try Sky Glass IPTV for{" "}
            <span className="text-brand-gradient font-bold">24 Hours</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            A Sky Glass IPTV trial allows customers to test the service on their own device and home network before selecting a paid plan.
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <Clock className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">
                Use the trial to check:
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {trialChecks.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4 space-y-3 text-xs sm:text-sm text-[#5C607A] leading-relaxed">
              <p>
                Use the same equipment and internet connection that you plan to use after subscribing.
              </p>
              <p>
                A trial may not include every category, feature or connection option available with a full account.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/contact/">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
                >
                  Request Your 24-Hour Trial
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function PlanChecklist() {
  return (
    <section
      id="plan-checklist"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            What to Check Before{" "}
            <span className="text-brand-gradient font-bold">Choosing a Plan</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <ListChecks className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">
                Before purchasing, confirm:
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 mb-6">
              {checkListItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4 space-y-3 text-xs sm:text-sm text-[#5C607A] leading-relaxed">
              <p>
                Customers should choose a plan based on practical viewing requirements rather than selecting the longest package automatically.
              </p>
              <p>
                A monthly plan provides flexibility. A longer plan reduces the average monthly cost.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
