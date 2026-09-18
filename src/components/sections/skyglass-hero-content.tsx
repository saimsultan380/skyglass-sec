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
            { text: "Sky Glass IPTV for" },
            {
              text: "Live TV, Sports, Films and Series",
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
          <p>
            Watch live television and on-demand entertainment through a
            compatible app on your television, streaming device, phone or
            tablet. Sky Glass IPTV offers UK viewers a choice of subscription
            periods, a 24-hour free trial and help setting up their account
            through WhatsApp.
          </p>

          <p className={showFullBodyCopy ? "block" : "hidden sm:block"}>
            Standard plans start at £12 for one month, with activation within
            two hours of payment.
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
            <span className="hidden sm:inline">View Subscription Plans</span>
            <span className="inline sm:hidden">View Plans</span>
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
            <span className="hidden sm:inline">Request a Free Trial</span>
            <span className="inline sm:hidden">Free Trial</span>
          </Button>
        </a>
      </div>
    </FadeIn>
  );
}
