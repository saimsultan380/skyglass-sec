"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const trialChecks = [
  "Device compatibility",
  "Application installation",
  "Login process",
  "Channel loading",
  "Available categories",
  "EPG information",
  "Picture quality",
  "Home-network performance",
  "General navigation",
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

export function SubTrial() {
  return (
    <section
      id="free-trial"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B0E2C] mb-4">
              Request a{" "}
              <span className="text-brand-gradient font-bold">24-Hour Trial</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
              A trial gives you an opportunity to test the service before selecting a longer subscription. Use the trial to review:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {trialChecks.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-4 space-y-2">
              <p className="text-xs text-[#5C607A] leading-relaxed">
                Use the same device and broadband connection that you intend to use after purchasing.
              </p>
              <p className="text-xs text-[#E91E8C] font-semibold leading-relaxed">
                Trial availability may be limited during major events or periods of high demand.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <Link href="/contact/" className="w-full lg:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full lg:w-auto rounded-[12px] bg-gradient-brand text-white px-8 py-4 text-xs sm:text-sm font-semibold shine-effect"
              >
                <span>Request a 24-hour trial</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
