"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

const accountDetails = [
  "Username",
  "Password",
  "Server URL",
  "Installation instructions",
  "Subscription-expiry information",
  "Support contact details",
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

export function StartWatchingSteps() {
  return (
    <section
      id="how-it-works"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            How Sky Glass IPTV{" "}
            <span className="text-brand-gradient font-bold">Works</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            <p>Using Sky Glass IPTV begins with an active account.</p>
            <p>
              After your trial or order has been confirmed, you receive the login information required by the application. The account normally consists of:
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {accountDetails.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="w-full max-w-4xl">
          <div className="space-y-3 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            <p>
              The application then retrieves the categories attached to the account.
            </p>
            <p>
              The first load may take several minutes because the player can need to download channel groups, programme-guide data, movie details, series information, logos and artwork.
            </p>
            <p>
              After the first setup, the account can normally be opened directly without entering the same details each time.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
