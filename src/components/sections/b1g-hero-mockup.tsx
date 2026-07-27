"use client";

import React from "react";
import Image from "next/image";
import {
  HERO_IMAGE,
  HERO_IMAGE_ALT,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_WIDTH,
} from "@/lib/assets";

export function B1GHeroMockup() {
  return (
    <div className="w-full" data-no-reveal data-hero-image>
      <div className="relative w-full max-w-2xl mx-auto lg:max-w-none py-2 flex items-center justify-center">
        <div className="relative w-full">
          <Image
            src={HERO_IMAGE}
            alt={HERO_IMAGE_ALT}
            width={HERO_IMAGE_WIDTH}
            height={HERO_IMAGE_HEIGHT}
            priority
            sizes="(max-width: 1024px) 100vw, 520px"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
