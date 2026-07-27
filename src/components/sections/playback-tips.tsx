"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Sparkles, Info } from "lucide-react";

const tipsList = [
  "Use Ethernet where possible.",
  "Position Wi-Fi devices close to the router.",
  "Avoid large downloads while streaming.",
  "Close unused applications.",
  "Restart the player when it becomes unresponsive.",
  "Restart the router when the connection is unstable.",
  "Use a stream quality suitable for the available speed.",
  "Keep enough free storage on Firestick and Android devices.",
  "Update the application when an approved version becomes available.",
  "Avoid running too many high-bandwidth devices simultaneously.",
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

export function PlaybackTips() {
  return (
    <section
      id="playback-tips"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Better Playback on{" "}
            <span className="text-brand-gradient font-bold">UK Broadband</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Sky Glass IPTV performance depends on the selected stream and the customer’s own network. A stable connection is more important than the advertised maximum broadband speed.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Sparkles className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  For more consistent playback:
                </h3>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 w-full">
                {tipsList.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-5 mt-8 flex items-start gap-2.5">
              <Info className="h-4.5 w-4.5 text-[#E91E8C] shrink-0 mt-0.5 stroke-[2.5]" />
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Higher-resolution content requires more bandwidth and stronger device performance.
              </p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
