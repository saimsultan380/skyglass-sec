"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { MonitorSmartphone, AlertTriangle } from "lucide-react";

const confirmItems = [
  "Number of included connections",
  "Whether additional connections are available",
  "Whether the account can be moved to another device",
  "Whether simultaneous viewing is permitted",
  "Any additional connection charge",
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

export function SubConnections() {
  return (
    <section
      id="connections"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Connection and{" "}
            <span className="text-brand-gradient font-bold">Multi-Device Rules</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            A subscription can often be installed on more than one compatible device, but simultaneous playback depends on the connection allowance.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <MonitorSmartphone className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                Before ordering, confirm:
              </h3>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 mb-8">
              {confirmItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-5 flex items-start gap-2.5">
              <AlertTriangle className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Do not use more simultaneous streams than the account permits. This can cause connection errors or temporary account restrictions.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
