"use client";

import React from "react";
import { B1GHeroContent, B1GHeroCTAs } from "./b1g-hero-content";
import { B1GHeroMockup } from "./b1g-hero-mockup";
import { B1GTrustRow } from "./b1g-trust-row";

export function B1GHeroSection() {
  return (
    <div className="relative bg-white text-[#0B0E2C] flex flex-col pb-8 sm:pb-12" data-hero>
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-10 lg:items-center">
          <div className="lg:col-span-7 flex flex-col items-start min-w-0">
            <B1GHeroContent showFullBodyCopy={true} />

            <div className="mt-8 w-full">
              <B1GHeroCTAs />
            </div>

            <div className="mt-10 w-full max-w-2xl">
              <B1GTrustRow />
            </div>
          </div>

          <div className="lg:col-span-5">
            <B1GHeroMockup />
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex lg:hidden flex-col items-center gap-5 text-left">
          <div className="w-full">
            <B1GHeroContent showFullBodyCopy={true} />
          </div>

          <div className="w-full my-1">
            <B1GHeroMockup />
          </div>

          <div className="w-full">
            <B1GHeroCTAs />
          </div>

          <div className="w-full mt-2">
            <B1GTrustRow />
          </div>
        </div>
      </div>
    </div>
  );
}
