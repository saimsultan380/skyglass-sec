"use client";

import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animation/fade-in";
import {
  HERO_IMAGE,
  HERO_IMAGE_ALT,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_WIDTH,
} from "@/lib/assets";

export function SkyglassHeroMockup() {
  return (
    <FadeIn delay={0.25} duration={0.5} yOffset={18} className="w-full">
      <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center py-2 lg:max-w-none">
        <div className="relative w-full">
          <Image
            src={HERO_IMAGE}
            alt={HERO_IMAGE_ALT}
            width={HERO_IMAGE_WIDTH}
            height={HERO_IMAGE_HEIGHT}
            priority
            sizes="(max-width: 1024px) 100vw, 520px"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </FadeIn>
  );
}
