"use client";

import React from "react";
import Link from "next/link";
import { SkyglassHeroMockup } from "@/components/sections/skyglass-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { Button } from "@/components/ui/button";
import {
  MonitorSmartphone,
  Headphones,
  Tv,
  Smartphone,
  Laptop,
  Router,
} from "lucide-react";
import { ROUTES } from "@/lib/seo";

const trustItems = [
  { label: "Firestick & Fire TV", icon: Tv },
  { label: "Android & Google TV", icon: MonitorSmartphone },
  { label: "Samsung & LG", icon: Smartphone },
  { label: "Windows, Mac & Boxes", icon: Laptop },
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
            { text: "Sky Glass IPTV Supported Devices –" },
            {
              text: "Firestick, Smart TV, Android, Apple & More",
              className: "text-brand-gradient font-bold",
            },
          ]}
        />
      </div>

      <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full">
        <div className="mt-4 space-y-3 text-[11px] leading-relaxed text-black sm:mt-6 sm:space-y-4 sm:text-sm lg:text-base">
          <p>
            Sky Glass IPTV can be installed on many televisions, streaming
            devices, phones, tablets, computers and IPTV boxes.
          </p>
          <p>
            The correct setup method depends on the device operating system.
          </p>
        </div>
      </FadeIn>
    </>
  );
}

function HeroCTAs() {
  return (
    <div className="flex w-full max-w-full min-w-0 flex-col items-stretch gap-2 sm:gap-3 lg:flex-col xl:flex-row xl:items-center">
      <Link href={ROUTES.contact} className="w-full min-w-0 xl:w-auto">
        <Button
          variant="primary"
          size="lg"
          className="bg-gradient-brand shine-effect w-full rounded-[12px] px-4 py-3 text-xs font-semibold text-white sm:px-5 sm:py-3.5 sm:text-sm lg:px-6 xl:w-auto"
        >
          <Router className="mr-1.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] sm:mr-2 sm:h-4 sm:w-4" />
          <span className="hidden xl:inline">Ask About My Device</span>
          <span className="inline xl:hidden">Ask About My Device</span>
        </Button>
      </Link>

      <Link href={ROUTES.contact} className="w-full min-w-0 xl:w-auto">
        <Button
          variant="outline"
          size="lg"
          className="border-gradient-brand w-full rounded-[12px] px-4 py-3 text-xs font-semibold sm:px-5 sm:py-3.5 sm:text-sm lg:px-6 xl:w-auto"
        >
          <Headphones className="mr-1.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] text-[#E91E8C] sm:mr-2 sm:h-4 sm:w-4" />
          <span className="hidden xl:inline">
            Contact Support for Login Details
          </span>
          <span className="inline xl:hidden">Contact Support</span>
        </Button>
      </Link>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-3 sm:rounded-full sm:p-4">
      <div className="grid grid-cols-2 items-center divide-x divide-y divide-slate-200/90 text-center sm:grid-cols-4 sm:divide-y-0">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-1.5 px-1 py-2 sm:flex-row sm:gap-2 sm:px-3 sm:py-0"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E91E8C] sm:h-8 sm:w-8">
                <Icon className="h-3.5 w-3.5 stroke-[2.5] sm:h-4 sm:w-4" />
              </div>
              <span className="text-xs leading-tight font-semibold tracking-tight text-slate-800 lg:text-sm">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function DevHero() {
  return (
    <div
      className="relative flex flex-col bg-white pb-8 text-[#0B0E2C] sm:pb-12"
      data-hero
    >
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 xl:gap-10">
          <div className="flex min-w-0 flex-col items-start lg:col-span-7">
            <HeroCopy />
            <FadeIn delay={0.15} duration={0.4} className="mt-8 w-full">
              <HeroCTAs />
            </FadeIn>
            <FadeIn
              delay={0.25}
              duration={0.4}
              className="mt-10 w-full max-w-2xl"
            >
              <TrustRow />
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <SkyglassHeroMockup />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 text-left lg:hidden">
          <div className="w-full">
            <HeroCopy />
          </div>
          <div className="my-2 w-full">
            <SkyglassHeroMockup />
          </div>
          <FadeIn delay={0.15} duration={0.35} className="w-full">
            <HeroCTAs />
          </FadeIn>
          <FadeIn delay={0.2} duration={0.35} className="mt-2 w-full">
            <TrustRow />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
