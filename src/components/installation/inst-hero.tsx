"use client";

import React from "react";
import Link from "next/link";
import { B1GHeroMockup } from "@/components/sections/b1g-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Download, MessageSquare, ShieldCheck, KeyRound, Headphones, ListOrdered } from "lucide-react";
import { MaskReveal } from "@/components/animation/mask-reveal";

const trustItems = [
  { label: "Official Code", icon: ShieldCheck },
  { label: "Step-by-Step Instructions", icon: ListOrdered },
  { label: "Secure Login", icon: KeyRound },
  { label: "Device Assistance", icon: Headphones },
];

function HeroCopy() {
  return (
    <>
      <div className="w-full max-w-none" data-no-reveal>
        <MaskReveal
          trigger="mount"
          as="h1"
          className="text-h1-b1g leading-[1.15] font-bold tracking-tight max-w-none"
          parts={[
            { text: "Install Sky Glass IPTV on" },
            { text: "Firestick, Android TV,", className: "text-brand-gradient font-bold" },
            { text: "Smart TV & More" },
          ]}
        />
      </div>

      <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full">
        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-[11px] sm:text-sm lg:text-base text-black leading-relaxed">
          <p>
            Use this Sky Glass IPTV Installation Guide to set up the service on a compatible Firestick, Fire TV, Android TV, Android box, smartphone, tablet, Smart TV, Apple device or computer.
          </p>
          <p>
            The dedicated app is available for supported Android and Fire TV devices through Downloader code{" "}
            <span className="font-extrabold text-[#E91E8C]">2245820</span>.
          </p>
          <p>
            Customers using Samsung, LG, Apple, Windows or Mac should install a compatible alternative IPTV player and add the account information supplied after activation.
          </p>
        </div>
      </FadeIn>
    </>
  );
}

function HeroCTAs() {
  return (
    <div className="flex flex-col lg:flex-col xl:flex-row items-stretch xl:items-center gap-2 sm:gap-3 w-full max-w-full min-w-0">
      <Link href="#device-guides" className="w-full xl:w-auto min-w-0">
        <Button
          variant="primary"
          size="lg"
          className="w-full xl:w-auto rounded-[12px] bg-gradient-brand text-white px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold shine-effect"
        >
          <Download className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 stroke-[2.5]" />
          <span className="hidden xl:inline">Install the app on Firestick</span>
          <span className="inline xl:hidden">Install on Firestick</span>
        </Button>
      </Link>

      <Link href="/contact/" className="w-full xl:w-auto min-w-0">
        <Button
          variant="outline"
          size="lg"
          className="w-full xl:w-auto rounded-[12px] border-gradient-brand px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold"
        >
          <MessageSquare className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#E91E8C] shrink-0 stroke-[2.5]" />
          <span className="hidden xl:inline">Contact subscription support</span>
          <span className="inline xl:hidden">Contact Support</span>
        </Button>
      </Link>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="w-full rounded-2xl sm:rounded-full border border-slate-200 bg-white p-3 sm:p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-200/90 text-center items-center">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-3 py-2 sm:py-0"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E91E8C]">
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
              </div>
              <span className="text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function InstHero() {
  return (
    <div className="relative bg-white text-[#0B0E2C] flex flex-col pb-8 sm:pb-12" data-hero>
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-10 lg:items-center">
          <div className="lg:col-span-7 flex flex-col items-start min-w-0">
            <HeroCopy />
            <FadeIn delay={0.15} duration={0.4} className="mt-8 w-full">
              <HeroCTAs />
            </FadeIn>
            <FadeIn delay={0.25} duration={0.4} className="mt-10 w-full max-w-2xl">
              <TrustRow />
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <B1GHeroMockup />
          </div>
        </div>

        <div className="flex lg:hidden flex-col items-center gap-6 text-left">
          <div className="w-full">
            <HeroCopy />
          </div>
          <div className="w-full my-2">
            <B1GHeroMockup />
          </div>
          <FadeIn delay={0.15} duration={0.35} className="w-full">
            <HeroCTAs />
          </FadeIn>
          <FadeIn delay={0.2} duration={0.35} className="w-full mt-2">
            <TrustRow />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
