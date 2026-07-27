"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Tv } from "lucide-react";

const viewingLocations = [
  "Main living-room television",
  "Bedroom television",
  "Tablet",
  "Smartphone",
  "Home computer",
  "Second property or travel device",
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

export function MoreDevices() {
  return (
    <section
      id="multi-device"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Multi-Device and{" "}
            <span className="text-brand-gradient font-bold">Multi-Room Viewing</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Some customers want to use the subscription on more than one screen.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <Tv className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">
                Possible viewing locations may include:
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {viewingLocations.map((location) => (
                <li key={location} className="flex items-start gap-2">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {location}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4 space-y-3 text-xs sm:text-sm text-[#5C607A] leading-relaxed">
              <p>
                The number of simultaneous connections depends on the selected plan and account configuration.
              </p>
              <p>
                Installing the account on several devices does not necessarily mean that all devices can play content at the same time.
              </p>
              <p>
                Customers should confirm the connection allowance before ordering or adding the login to another device.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
