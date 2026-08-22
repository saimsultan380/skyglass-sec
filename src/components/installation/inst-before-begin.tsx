"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const prepareList = [
  "An active subscription or eligible trial",
  "A supported device",
  "A stable internet connection",
  "Access to the device’s app store",
  "Approximately 25 Mbps for HD",
  "Around 50 Mbps for supported 4K",
  "Enough free device storage",
  "Your order information",
];

const neverShareList = [
  "Username",
  "Password",
  "Server URL",
  "M3U link",
  "MAC address",
  "Device key",
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

const WarningDot = () => (
  <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#E91E8C] mt-2" />
);

export function InstBeforeBegin() {
  return (
    <section
      id="before-begin"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn>
              <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] mb-4">
                Before You{" "}
                <span className="text-brand-gradient font-bold">Start</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-6">
                Have these ready:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6 w-full">
                {prepareList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-100 pt-6 w-full">
                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  Customers without an account should visit the Subscription
                  Plans page.
                </p>
                <Link href={ROUTES.subscription}>
                  <Button
                    variant="primary"
                    className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-5 py-3 text-xs sm:text-sm font-semibold"
                  >
                    <span>View Subscription Plans</span>
                    <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 w-full">
            <FadeIn delay={0.1}>
              <div className="w-full rounded-[12px] border border-[#E91E8C]/20 bg-pink-50/10 p-6">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <AlertTriangle className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#E91E8C] leading-snug">
                    Never publish or share:
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {neverShareList.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <WarningDot />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
