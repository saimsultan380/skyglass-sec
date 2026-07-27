"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { HeadphonesIcon, ArrowRight, AlertCircle } from "lucide-react";

const supportTopics = [
  "Trial requests",
  "Subscription selection",
  "Account activation",
  "Firestick installation",
  "Android installation",
  "Smart TV player selection",
  "Apple-device setup",
  "Windows and Mac setup",
  "Login problems",
  "App updates",
  "EPG loading",
  "Renewal",
  "Account-expiry questions",
  "Reseller applications",
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

export function CustomerSupport() {
  return (
    <section
      id="customer-support"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Reliable Sky Glass IPTV{" "}
            <span className="text-brand-gradient font-bold">Customer Support</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            The Sky Glass IPTV support team can assist with the main stages of the customer journey.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
              Support topics may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 mb-6">
              {supportTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4 space-y-3">
              <p className="text-xs sm:text-sm text-[#5C607A] leading-relaxed">
                When contacting support, include the device model, application name and a clear explanation of the problem.
              </p>
              <div className="flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5 stroke-[2.5]" />
                <p className="text-xs sm:text-sm text-[#E91E8C] font-semibold leading-relaxed">
                  Never publish your full password or server information in a public message.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/contact/">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-[12px] bg-gradient-brand text-white px-6 py-3 text-xs sm:text-sm font-semibold"
                >
                  <HeadphonesIcon className="mr-2 h-4 w-4 stroke-[2.5]" />
                  Contact Sky Glass IPTV Support
                  <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
