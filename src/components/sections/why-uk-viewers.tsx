"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Tv,
  Film,
  MonitorPlay,
  Radio,
  Globe,
  CalendarClock,
  Rewind,
  Maximize2,
  Zap,
  HeadphonesIcon,
  Clock,
  Smartphone,
} from "lucide-react";

const contentCategories = [
  { label: "Flexible subscription durations", icon: CalendarClock },
  { label: "A 24-hour trial where available", icon: Clock },
  { label: "Quick account activation", icon: Zap },
  { label: "Firestick and Android app access", icon: Smartphone },
  { label: "Alternative-player support", icon: MonitorPlay },
  { label: "Live television and on-demand content", icon: Tv },
  { label: "Sports and international categories", icon: Radio },
  { label: "Electronic Programme Guide support", icon: CalendarClock },
  { label: "Catch-Up on selected channels", icon: Rewind },
  { label: "HD, Full HD and 4K sources where available", icon: Maximize2 },
  { label: "Help with installation and account access", icon: HeadphonesIcon },
];

export function WhyUKViewers() {
  return (
    <section
      id="why-uk-viewers"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            What Makes Sky Glass IPTV Suitable for{" "}
            <span className="text-brand-gradient font-bold">UK Viewers?</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            <p>
              Sky Glass IPTV is built around the practical features customers consider before choosing an IPTV subscription: package value, content variety, installation, device compatibility, account access and customer assistance.
            </p>
            <p>
              The service is designed for customers who want:
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 w-full">
              {contentCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <li key={idx} data-reveal data-delay={String((idx % 3) * 50)} className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-pink-50 text-[#E91E8C]">
                      <Icon className="h-3.5 w-3.5 stroke-[2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {cat.label}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-slate-100 pt-4 mt-6">
              <p className="text-xs sm:text-sm text-[#5C607A] leading-relaxed">
                Content availability changes as channels, schedules and libraries are updated. A specific channel, event or title should only be considered included when confirmed in the current package information.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
