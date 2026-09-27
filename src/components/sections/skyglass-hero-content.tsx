"use client";

import React from "react";
import Link from "next/link";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv, Calendar } from "lucide-react";
import { WHATSAPP_TRIAL_HREF } from "@/lib/site";

interface SkyglassHeroContentProps {
  showFullBodyCopy?: boolean;
}

export function SkyglassHeroContent({
  showFullBodyCopy = true,
}: SkyglassHeroContentProps) {
  return (
    <div className="flex w-full flex-col items-start text-left">
      <div className="w-full max-w-none" data-no-reveal>
        <MaskReveal
          trigger="mount"
          as="h1"
          className="text-h1-skyglass max-w-none leading-[1.15] font-bold tracking-tight"
          parts={[
            { text: "Sky Glass IPTV Premium for" },
            {
              text: "UK Viewing",
              className: "text-brand-gradient font-bold",
            },
          ]}
        />
      </div>

      <FadeIn
        delay={0.22}
        duration={0.45}
        yOffset={14}
        className="w-[90%] sm:w-full sm:max-w-xl lg:max-w-[34rem]"
      >
        <div className="hero-description-copy mt-2.5 space-y-2 text-[11px] leading-[1.45] font-medium text-slate-800 sm:mt-6 sm:space-y-4 sm:text-sm sm:leading-relaxed lg:text-base">
          <p className="font-bold text-[#0B0E2C]">
            One Premium catalogue. Four clear subscription terms.
          </p>
          <p>
            Choose how long you want access to 27,000+ live channel entries and
            120,000+ video-on-demand film and series entries. Watch through a
            compatible player, try the service on your own screen and get help
            connecting your account.
          </p>

          <p className={showFullBodyCopy ? "block" : "hidden sm:block"}>
            From £12 · 12 months for £40 · One simultaneous connection
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

export function SkyglassHeroCTAs({ className }: { className?: string }) {
  return (
    <FadeIn delay={0.32} duration={0.45} yOffset={16} className="w-full">
      <div
        className={`flex w-full flex-row items-center gap-2 sm:gap-4 ${className || ""}`}
      >
        <Link href="#pricing" className="flex-1 sm:flex-initial">
          <Button
            variant="primary"
            size="lg"
            className="bg-gradient-brand w-full rounded-[12px] px-3 py-3 text-xs font-semibold whitespace-nowrap text-white sm:px-7 sm:py-3.5 sm:text-sm lg:text-base"
          >
            <Calendar className="mr-1.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] sm:mr-2 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">See Premium prices</span>
            <span className="inline sm:hidden">See prices</span>
          </Button>
        </Link>

        <a
          href={WHATSAPP_TRIAL_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-gradient-brand w-full rounded-[12px] px-3 py-3 text-xs font-semibold whitespace-nowrap sm:px-7 sm:py-3.5 sm:text-sm lg:text-base"
          >
            <Tv className="mr-1.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] text-[#E91E8C] sm:mr-2 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Request a 24-hour trial</span>
            <span className="inline sm:hidden">Free Trial</span>
          </Button>
        </a>
      </div>
    </FadeIn>
  );
}
