"use client";

import React from "react";
import Link from "next/link";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv, Calendar } from "lucide-react";

interface B1GHeroContentProps {
  showFullBodyCopy?: boolean;
}

export function B1GHeroContent({ showFullBodyCopy = true }: B1GHeroContentProps) {
  return (
    <div className="flex flex-col items-start text-left w-full">
      {/* Hero title — word-by-word skew mask reveal on load */}
      <div className="w-full max-w-none" data-no-reveal>
        <MaskReveal
          trigger="mount"
          as="h1"
          className="text-h1-b1g leading-[1.15] font-bold tracking-tight max-w-none"
          parts={[
            { text: "Sky Glass IPTV – Premium IPTV Subscription for" },
            { text: "Live TV,", className: "text-brand-gradient font-bold" },
            { text: "Movies", className: "text-brand-gradient font-bold" },
            { text: "&" },
            { text: "Sports", className: "text-brand-gradient font-bold" },
          ]}
        />
      </div>

      {/* Body copy — fade/slide in on load */}
      <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-[90%] sm:w-full sm:max-w-xl lg:max-w-[34rem]">
        <div className="hero-description-copy mt-2.5 sm:mt-6 space-y-2 sm:space-y-4 text-[11px] sm:text-sm lg:text-base text-slate-800 font-medium leading-[1.45] sm:leading-relaxed">
          <p>
            Enjoy flexible television and on-demand entertainment with Sky Glass IPTV, a UK-focused service designed for viewers who want straightforward setup, broad device support and access to live and on-demand categories.
          </p>

          <p className={showFullBodyCopy ? "block" : "hidden sm:block"}>
            Browse more than 22,000 available live television channels alongside a library of over 100,000 movies and television-series titles. Supported categories may include entertainment, live sport, news, documentaries, family programmes and international television.
          </p>

          <p className={showFullBodyCopy ? "block" : "hidden sm:block"}>
            Every active Sky Glass IPTV plan includes secure account information, installation guidance and access through a supported application. Use the dedicated app on compatible Firestick and Android devices or connect through an alternative player on selected Smart TVs, Apple devices and computers.
          </p>

          <p className={showFullBodyCopy ? "block" : "hidden sm:block"}>
            Choose a 1-month, 3-month, 6-month or 12-month plan, or request a 24-hour trial before selecting a longer subscription.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

export function B1GHeroCTAs({ className }: { className?: string }) {
  return (
    <FadeIn delay={0.32} duration={0.45} yOffset={16} className="w-full">
      <div className={`flex flex-row items-center gap-2 sm:gap-4 w-full ${className || ""}`}>
        <Link href="/contact/" className="flex-1 sm:flex-initial">
          <Button
            variant="primary"
            size="lg"
            className="w-full rounded-[12px] bg-gradient-brand text-white px-3 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
          >
            <Tv className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 stroke-[2.5]" />
            <span className="hidden sm:inline">Request a 24-hour trial</span>
            <span className="inline sm:hidden">24-hour trial</span>
          </Button>
        </Link>

        <Link href="#pricing" className="flex-1 sm:flex-initial">
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-[12px] border-gradient-brand px-3 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
          >
            <Calendar className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 text-[#E91E8C] shrink-0 stroke-[2.5]" />
            <span className="hidden sm:inline">View Subscription Plans</span>
            <span className="inline sm:hidden">View Plans</span>
          </Button>
        </Link>
      </div>
    </FadeIn>
  );
}
