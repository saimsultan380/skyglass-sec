"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Card, Section, SectionHeading } from "@/components/ui/section-bits";
import {
  CalendarClock,
  Download,
  Headphones,
  KeyRound,
  MonitorPlay,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ROUTES } from "@/lib/seo";

type Inclusion = {
  title: string;
  icon: LucideIcon;
  body: string;
};

const inclusions: readonly Inclusion[] = [
  {
    title: "Live TV and On-Demand Entertainment",
    icon: MonitorPlay,
    body: "The Standard package provides access to 22,000+ live channel entries and 100,000+ on-demand film and series entries across the available categories.",
  },
  {
    title: "TV Guide and Catch-Up",
    icon: CalendarClock,
    body: "TV guide information where EPG data is available, plus Catch-Up on selected channels.",
  },
  {
    title: "Supported Picture Qualities",
    icon: Sparkles,
    body: "SD, HD, Full HD and selected 4K streams, depending on the source, device and internet connection.",
  },
  {
    title: "Device Setup Assistance",
    icon: Download,
    body: "Account login details and device setup assistance through WhatsApp, with guidance for Android, Firestick, Smart TVs and other supported players.",
  },
  {
    title: "Login Details from Support",
    icon: KeyRound,
    body: "In our supplied app, the login screen requires your username and password only. Other Xtream-compatible players may also need a server URL.",
  },
  {
    title: "Account Support",
    icon: Headphones,
    body: "Support for account access and service enquiries. Catalogue availability can change—ask us to check important channels or titles before ordering.",
  },
];

export function SubFeatures() {
  return (
    <Section id="features">
      <SectionHeading
        title="What Your Subscription"
        highlight="Includes"
        intro={[
          "Standard durations share the same core package features. The subscription length changes how long your account remains active.",
        ]}
      />

      <FadeIn className="w-full mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
          {inclusions.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className={`p-6 flex flex-col ${
                  index === inclusions.length - 1 ? "lg:col-span-1 md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <Icon className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  {item.body}
                </p>
              </Card>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn className="w-full">
        <Link href={`${ROUTES.contact}?enquiry=login`}>
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
          >
            <Headphones className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
            <span>Contact Support for Login Details</span>
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}
