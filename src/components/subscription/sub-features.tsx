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
    body: "Access the available live television categories and 100,000+ film and television-series entries during your subscription period.",
  },
  {
    title: "EPG and Catch-Up",
    icon: CalendarClock,
    body: "The Electronic Programme Guide displays schedule information where suitable data is available. Catch-Up is provided on selected channels.",
  },
  {
    title: "Supported Picture Qualities",
    icon: Sparkles,
    body: "Available streams can include SD, HD and Full HD. Selected entries may be available in 4K where the source, device and internet connection support it.",
  },
  {
    title: "Device Installation Guidance",
    icon: Download,
    body: "Setup instructions are available for Firestick, Fire TV, Android, Google TV, Samsung, LG, Apple devices, Windows, Mac and supported IPTV boxes.",
  },
  {
    title: "Login Details from Support",
    icon: KeyRound,
    body: "Once the required application is installed, contact support to receive the username, password, server address, M3U information or portal details required by your device.",
  },
];

export function SubFeatures() {
  return (
    <Section id="features">
      <SectionHeading
        title="What Every Subscription"
        highlight="Includes"
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
