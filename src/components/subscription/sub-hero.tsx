"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Headphones,
  Download,
  CalendarClock,
} from "lucide-react";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { HeroLayout } from "@/components/sections/hero-layout";
import { WHATSAPP_TRIAL_HREF } from "@/lib/site";

const trustItems = [
  { label: "From £12", icon: ShieldCheck },
  { label: "2-Hour Activation", icon: Download },
  { label: "WhatsApp Login", icon: CalendarClock },
  { label: "Manual Renewals", icon: Headphones },
];

function HeroCopy() {
  return (
    <>
      <div className="w-full max-w-none" data-no-reveal>
        <MaskReveal
          trigger="mount"
          as="h1"
          className="text-h1-skyglass max-w-none leading-[1.15] font-bold tracking-tight"
          parts={[
            { text: "Sky Glass Subscription Packages and" },
            {
              text: "Prices",
              className: "text-brand-gradient font-bold",
            },
          ]}
        />
      </div>

      <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full">
        <div className="mt-4 space-y-3 text-[11px] leading-relaxed text-black sm:mt-6 sm:space-y-4 sm:text-sm lg:text-base">
          <p>
            Choose your package, subscription period and number of simultaneous
            connections. Standard subscriptions start at £12, with Premium
            options and additional connections available through WhatsApp.
          </p>
          <p>
            All prices shown below are in GBP. We activate your subscription
            within two hours of payment and provide your login details and setup
            assistance through WhatsApp.
          </p>
        </div>
      </FadeIn>
    </>
  );
}

function HeroCTAs() {
  return (
    <div className="flex w-full max-w-full min-w-0 flex-col items-stretch gap-2 sm:gap-3 lg:flex-col xl:flex-row xl:items-center">
      <Link href="#pricing-plans" className="w-full min-w-0 xl:w-auto">
        <Button
          variant="primary"
          size="lg"
          className="bg-gradient-brand shine-effect w-full rounded-[12px] px-4 py-3 text-xs font-semibold text-white sm:px-5 sm:py-3.5 sm:text-sm lg:px-6 xl:w-auto"
        >
          <Calendar className="mr-1.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] sm:mr-2 sm:h-4 sm:w-4" />
          <span className="hidden xl:inline">Choose a Package</span>
          <span className="hidden sm:inline xl:hidden">Choose Package</span>
          <span className="inline sm:hidden">Choose Package</span>
        </Button>
      </Link>

      <a
        href={WHATSAPP_TRIAL_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full min-w-0 xl:w-auto"
      >
        <Button
          variant="outline"
          size="lg"
          className="border-gradient-brand w-full rounded-[12px] px-4 py-3 text-xs font-semibold sm:px-5 sm:py-3.5 sm:text-sm lg:px-6 xl:w-auto"
        >
          <Clock className="mr-1.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] text-[#E91E8C] sm:mr-2 sm:h-4 sm:w-4" />
          <span className="hidden xl:inline">Request a 24-Hour Free Trial</span>
          <span className="inline xl:hidden">Free Trial</span>
        </Button>
      </a>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="iphone-glass-pill w-full sm:rounded-full sm:p-4">
      <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-4 sm:items-center sm:gap-0 sm:divide-x sm:divide-white/25">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/25 px-1 py-2.5 sm:flex-row sm:gap-2 sm:rounded-none sm:bg-transparent sm:px-3 sm:py-0"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-50/80 text-[#E91E8C] sm:h-8 sm:w-8 sm:bg-pink-50">
                <Icon className="h-3.5 w-3.5 stroke-[2.5] sm:h-4 sm:w-4" />
              </div>
              <span className="text-[11px] leading-tight font-semibold tracking-tight text-slate-800 sm:text-xs lg:text-sm">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SubHero() {
  return (
    <HeroLayout
      copy={<HeroCopy />}
      ctas={
        <FadeIn delay={0.15} duration={0.4} className="w-full">
          <HeroCTAs />
        </FadeIn>
      }
      trust={
        <FadeIn delay={0.25} duration={0.4} className="w-full">
          <TrustRow />
        </FadeIn>
      }
    />
  );
}
