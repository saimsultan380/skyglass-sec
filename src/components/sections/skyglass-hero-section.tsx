"use client";

import React from "react";
import { SkyglassHeroContent, SkyglassHeroCTAs } from "./skyglass-hero-content";
import { SkyglassHeroMockup } from "./skyglass-hero-mockup";
import { SkyglassTrustRow } from "./skyglass-trust-row";
import { FadeIn } from "@/components/animation/fade-in";

function CatalogueNotice() {
  return (
    <FadeIn delay={0.48} duration={0.45} yOffset={12} className="w-full">
      <p className="text-[11px] leading-relaxed text-[#5C607A] sm:text-xs">
        The catalogue changes as sources are updated. Individual channels,
        events, titles and picture resolutions are not permanently guaranteed.
      </p>
    </FadeIn>
  );
}

export function SkyglassHeroSection() {
  return (
    <div
      className="relative flex flex-col bg-white pb-8 text-[#0B0E2C] sm:pb-12"
      data-hero
    >
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 xl:gap-10">
          <div className="flex min-w-0 flex-col items-start lg:col-span-7">
            <SkyglassHeroContent showFullBodyCopy={true} />

            <div className="mt-8 w-full">
              <SkyglassHeroCTAs />
            </div>

            <div className="mt-10 w-full max-w-2xl">
              <SkyglassTrustRow />
            </div>

            <div className="mt-5 w-full max-w-2xl">
              <CatalogueNotice />
            </div>
          </div>

          <div className="lg:col-span-5">
            <SkyglassHeroMockup />
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col items-center gap-5 text-left lg:hidden">
          <div className="w-full">
            <SkyglassHeroContent showFullBodyCopy={true} />
          </div>

          <div className="my-1 w-full">
            <SkyglassHeroMockup />
          </div>

          <div className="w-full">
            <SkyglassHeroCTAs />
          </div>

          <div className="mt-2 w-full">
            <SkyglassTrustRow />
          </div>

          <div className="w-full">
            <CatalogueNotice />
          </div>
        </div>
      </div>
    </div>
  );
}
