"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

const resellerRequirements = [
  "Business name",
  "Country",
  "Target market",
  "Expected monthly activations",
  "Preferred credit package",
  "Previous experience",
  "Support capability",
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

export function ConReseller() {
  return (
    <section
      id="reseller-enquiries"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
              <ShieldCheck className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
              Reseller Enquiries
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              <p>
                Businesses applying for reseller access should include the requested information in their enquiry.
              </p>
              <p>
                Select Reseller Enquiry on the contact form and provide complete business details.
              </p>
            </div>

            <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-3">
                Include:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resellerRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-[#5C607A] font-semibold leading-relaxed">
              Learn about credit packages, panel features and application requirements.
            </p>
            <Link href="/sky-glass-iptv-reseller/" className="shrink-0 w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-5 py-3 text-xs sm:text-sm font-semibold"
              >
                <span>Apply for reseller access</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
