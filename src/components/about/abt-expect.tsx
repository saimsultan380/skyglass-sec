"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Card,
  CardTitle,
  Section,
  SectionHeading,
} from "@/components/ui/section-bits";
import {
  BadgeCheck,
  Headphones,
  Info,
  MonitorSmartphone,
  ShieldCheck,
  Wrench,
  XCircle,
} from "lucide-react";

const expectations = [
  {
    icon: ShieldCheck,
    title: "Published Pricing",
    body: "Subscription prices and durations are displayed before purchase.",
  },
  {
    icon: MonitorSmartphone,
    title: "Device Checks",
    body: "Customers can confirm their exact model before ordering.",
  },
  {
    icon: Wrench,
    title: "Clear Installation Guidance",
    body: "The Installation Guide provides instructions for each supported platform.",
  },
  {
    icon: Info,
    title: "Realistic Availability Information",
    body: "Individual channels, programmes, events, titles and picture resolutions can change.",
  },
  {
    icon: Headphones,
    title: "Account Support",
    body: "Support can assist with login details, activation and reasonable configuration problems.",
  },
];

const notGuaranteed = [
  "Uninterrupted playback under every network condition",
  "Permanent availability of every channel",
  "Every live event or on-demand title",
  "4K on every stream",
  "Compatibility with every television",
  "Unlimited simultaneous connections",
  "Repair of a customer’s internet connection or device",
];

export function AbtExpect() {
  return (
    <Section id="what-to-expect">
      <SectionHeading
        eyebrow="Service Standards"
        eyebrowIcon={BadgeCheck}
        title="What Customers Can"
        highlight="Expect"
      />

      <FadeIn className="w-full mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
          {expectations.map((item) => (
            <Card key={item.title} className="flex flex-col">
              <CardTitle icon={item.icon}>{item.title}</CardTitle>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </FadeIn>

      <SectionHeading title="What We Do Not" highlight="Guarantee" />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {notGuaranteed.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-slate-400 shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </FadeIn>
    </Section>
  );
}
