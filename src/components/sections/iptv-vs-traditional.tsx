"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Satellite, Wifi } from "lucide-react";

const traditionalRequirements = [
  "Dedicated hardware",
  "Satellite or cable installation",
  "Engineer appointments",
  "Fixed television locations",
  "Bundled packages",
  "Longer agreements",
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

export function IptvVsTraditional() {
  return (
    <section
      id="iptv-vs-traditional"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            IPTV Compared with{" "}
            <span className="text-brand-gradient font-bold">Traditional Television</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Satellite className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">
                  Traditional television services may require:
                </h3>
              </div>
              <ul className="space-y-2.5">
                {traditionalRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <Wifi className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">
                    An internet-based subscription works differently.
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#5C607A] leading-relaxed">
                  Customers install a compatible application, add their private account information and browse the categories available through the service.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs sm:text-sm text-[#5C607A] leading-relaxed">
                  The experience remains dependent on broadband quality, device compatibility and current content availability. It should not be presented as identical to terrestrial, cable or satellite broadcasting.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
