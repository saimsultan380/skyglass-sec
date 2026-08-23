"use client";

import React from "react";
import { SkyglassHeroContent, SkyglassHeroCTAs } from "./skyglass-hero-content";
import { SkyglassTrustRow } from "./skyglass-trust-row";
import { HeroLayout } from "./hero-layout";
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
    <HeroLayout
      copy={<SkyglassHeroContent showFullBodyCopy={true} />}
      ctas={<SkyglassHeroCTAs />}
      trust={<SkyglassTrustRow />}
      afterTrust={<CatalogueNotice />}
    />
  );
}
