"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { KeyRound, BadgeInfo, Settings, HelpCircle, ArrowRight, Download } from "lucide-react";

const supportTopics = [
  "24-hour trial requests",
  "Plan comparisons",
  "New subscriptions",
  "Account activation",
  "Firestick installation",
  "Android setup",
  "Smart TV player guidance",
  "Apple-device setup",
  "Login problems",
  "EPG loading",
  "Account renewal",
  "Connection questions",
  "Reseller applications",
  "Credit enquiries",
];

const trialChecks = [
  "Device compatibility",
  "Application installation",
  "Login process",
  "Category loading",
  "Available content",
  "Picture quality",
  "Programme-guide information",
  "Broadband performance",
  "General navigation",
];

const subExplains = [
  "1-month plan — £12",
  "3-month plan — £22",
  "6-month plan — £30",
  "12-month plan — £45",
  "Current features",
  "Connection allowances",
  "Device compatibility",
  "App access",
  "Renewal process",
];

const setupDevices = [
  "Firestick",
  "Fire TV",
  "Android TV",
  "Google TV",
  "NVIDIA Shield",
  "Android phones",
  "Android tablets",
  "Samsung TVs",
  "LG TVs",
  "Apple TV",
  "iPhone",
  "iPad",
  "Windows",
  "Mac",
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

export function ConHelpOptions() {
  return (
    <section
      id="help-options"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
              <HelpCircle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E91E8C]">
              Support Areas
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            How the Support Team Can{" "}
            <span className="text-brand-gradient font-bold">Help</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed">
            Contact the team for:
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 rounded-[12px] border border-slate-200 bg-white p-6">
            {supportTopics.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Tick />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            Choose the most relevant enquiry type and provide complete information.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <KeyRound className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
                    Request a 24-hour trial
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  A trial allows you to check:
                </p>

                <ul className="space-y-2.5 mb-6">
                  {trialChecks.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-500 font-semibold leading-relaxed pt-4 border-t border-slate-100">
                  Use the same device and connection you intend to use after purchasing. Trial availability may depend on current demand.
                </p>
              </div>

              <Link href="#contact-form" className="w-full mt-6">
                <Button
                  variant="primary"
                  className="w-full rounded-[12px] bg-gradient-brand text-white py-3 text-xs sm:text-sm font-semibold"
                >
                  <span>Request Your Free Trial</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <BadgeInfo className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
                    Subscription Support
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  The team can explain:
                </p>

                <ul className="space-y-2.5 mb-6">
                  {subExplains.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/sky-glass-iptv-subscription/" className="w-full">
                <Button
                  variant="outline"
                  className="w-full rounded-[12px] border-gradient-brand py-3 text-xs sm:text-sm font-semibold"
                >
                  <span>Compare IPTV subscription plans</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-[#E91E8C]" />
                </Button>
              </Link>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <Settings className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
                    Installation Assistance
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  Setup guidance is available for:
                </p>

                <ul className="space-y-2 mb-6">
                  {setupDevices.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-[12px] border border-slate-200 bg-slate-50/30 p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Download className="h-3.5 w-3.5 text-[#E91E8C]" />
                    <span className="text-xs font-bold text-[#0B0E2C]">Official download</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800">
                    Downloader Code: <span className="text-[#E91E8C] font-bold">2245820</span>
                  </p>
                  <p className="text-xs font-semibold text-slate-800 break-all mt-1">
                    Direct Address:{" "}
                    <a href="http://aftv.news/2245820" className="text-[#E91E8C] hover:underline">
                      http://aftv.news/2245820
                    </a>
                  </p>
                </div>
              </div>

              <Link href="/sky-glass-iptv-installation-guide/" className="w-full">
                <Button
                  variant="outline"
                  className="w-full rounded-[12px] border-gradient-brand py-3 text-xs sm:text-sm font-semibold"
                >
                  <span>Read the complete installation guide</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-[#E91E8C]" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
