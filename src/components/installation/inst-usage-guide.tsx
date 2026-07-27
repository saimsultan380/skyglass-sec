"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Tv,
  Film,
  MonitorPlay,
  Star,
  Search,
  CalendarDays,
  Compass,
  Settings,
  User,
} from "lucide-react";

interface UsageFeature {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const usageFeatures: UsageFeature[] = [
  {
    name: "Live TV",
    desc: "Choose a country or category and select a channel.",
    icon: Tv,
  },
  {
    name: "Movies",
    desc: "Browse by genre, language or recently added content.",
    icon: Film,
  },
  {
    name: "Series",
    desc: "Choose a programme, season and episode.",
    icon: MonitorPlay,
  },
  {
    name: "Favourites",
    desc: "Save frequently viewed channels.",
    icon: Star,
  },
  {
    name: "Search",
    desc: "Find available channels and on-demand entries.",
    icon: Search,
  },
  {
    name: "EPG",
    desc: "View current and upcoming schedules where programme data is available.",
    icon: CalendarDays,
  },
  {
    name: "Settings",
    desc: "Adjust player preferences and account options.",
    icon: Settings,
  },
  {
    name: "Account Information",
    desc: "Review your active subscription details within the app.",
    icon: User,
  },
];

export function InstUsageGuide() {
  return (
    <section
      id="usage-guide"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
              <Compass className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E91E8C]">
              After Setup
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Using the App After{" "}
            <span className="text-brand-gradient font-bold">Installation</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            The main interface may display Live TV, Movies, Series, EPG, Favourites, Search, Settings and Account information.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
            {usageFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.name}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full transition-colors hover:border-slate-300"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B0E2C] leading-none">
                      {feat.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
