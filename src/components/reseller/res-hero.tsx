"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Users,
  MessageSquare,
  Coins,
  Headphones,
  Smartphone,
} from "lucide-react";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { HeroLayout } from "@/components/sections/hero-layout";
import { ROUTES } from "@/lib/seo";
import { RESELLER_MINIMUM_CREDITS } from "@/lib/site";

const trustItems = [
  { label: "Credit-Based Panel", icon: Coins },
  { label: "Customer Management", icon: Users },
  { label: "App Resources", icon: Smartphone },
  { label: "Reseller Assistance", icon: Headphones },
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
            { text: "Sky Glass IPTV Reseller UK –" },
            {
              text: "Panel, Credits & Customer Management",
              className: "text-brand-gradient font-bold",
            },
          ]}
        />
      </div>

      <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full">
        <div className="mt-4 space-y-3 text-[11px] leading-relaxed text-black sm:mt-6 sm:space-y-4 sm:text-sm lg:text-base">
          <p>
            Manage customer accounts, subscriptions, activations, credits,
            renewals and expiry dates through one web-based reseller panel.
          </p>
          <p>
            The current reseller programme begins with a minimum purchase of{" "}
            <span className="font-extrabold text-[#E91E8C]">
              {RESELLER_MINIMUM_CREDITS} credits
            </span>
            . Under the current standard structure, one credit represents one
            month of service.
          </p>
        </div>
      </FadeIn>
    </>
  );
}

function HeroCTAs() {
  return (
    <div className="flex w-full max-w-full min-w-0 flex-col items-stretch gap-2 sm:gap-3 lg:flex-col xl:flex-row xl:items-center">
      <Link
        href={`${ROUTES.contact}?enquiry=reseller`}
        className="w-full min-w-0 xl:w-auto"
      >
        <Button
          variant="primary"
          size="lg"
          className="bg-gradient-brand shine-effect w-full rounded-[12px] px-4 py-3 text-xs font-semibold text-white sm:px-5 sm:py-3.5 sm:text-sm lg:px-6 xl:w-auto"
        >
          <Users className="mr-1.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] sm:mr-2 sm:h-4 sm:w-4" />
          <span className="hidden xl:inline">Request Reseller Information</span>
          <span className="inline xl:hidden">Reseller Info</span>
        </Button>
      </Link>

      <Link
        href={`${ROUTES.contact}?enquiry=reseller`}
        className="w-full min-w-0 xl:w-auto"
      >
        <Button
          variant="outline"
          size="lg"
          className="border-gradient-brand w-full rounded-[12px] px-4 py-3 text-xs font-semibold sm:px-5 sm:py-3.5 sm:text-sm lg:px-6 xl:w-auto"
        >
          <MessageSquare className="mr-1.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] text-[#E91E8C] sm:mr-2 sm:h-4 sm:w-4" />
          <span className="hidden xl:inline">
            Ask for a Panel Demonstration
          </span>
          <span className="inline xl:hidden">Panel Demo</span>
        </Button>
      </Link>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="w-full sm:rounded-full sm:border sm:border-slate-200 sm:bg-white sm:p-4">
      <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-4 sm:items-center sm:gap-0 sm:divide-x sm:divide-slate-200/90">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200/40 bg-white/40 px-1 py-2.5 backdrop-blur-[2px] sm:flex-row sm:gap-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-3 sm:py-0 sm:backdrop-blur-none"
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

export function ResHero() {
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
