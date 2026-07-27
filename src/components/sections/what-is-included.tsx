"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  CalendarDays,
  History,
  Search,
  Heart,
  Clock3,
  Activity,
} from "lucide-react";

const streamingFormats = ["SD", "HD", "Full HD", "4K"];

const featureCards = [
  {
    icon: CalendarDays,
    title: "Electronic Programme Guide",
    body: "An Electronic Programme Guide can display current and upcoming programme information for supported channels.",
    note: "Guide accuracy depends on the schedule data available from each source.",
  },
  {
    icon: History,
    title: "Catch-Up TV",
    body: "Selected channels may provide access to previously broadcast programmes for a limited period.",
    note: "Catch-Up is not available on every channel or programme.",
  },
  {
    icon: Search,
    title: "Search",
    body: "Search can help customers find available channels, movies and series without browsing each category manually.",
  },
  {
    icon: Heart,
    title: "Favourites",
    body: "Frequently viewed channels may be added to a favourites list for quicker access.",
  },
  {
    icon: Clock3,
    title: "Recently Viewed",
    body: "Some players display recently opened channels or titles.",
  },
];

export function WhatIsIncluded() {
  return (
    <section
      id="streaming-features"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Streaming Features Available with{" "}
            <span className="text-brand-gradient font-bold">Sky Glass IPTV</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            The Sky Glass IPTV platform includes practical features designed to make everyday viewing easier.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full mb-6">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                      {card.body}
                    </p>
                  </div>
                  {card.note ? (
                    <div className="border-t border-slate-100 pt-4 mt-4">
                      <p className="text-xs text-[#5C607A] leading-relaxed">{card.note}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <Activity className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                    Multiple Stream Qualities
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-3 font-semibold">
                  Available sources may include:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {streamingFormats.map((format) => (
                    <span
                      key={format}
                      className="text-xs font-bold text-[#E91E8C] bg-pink-50 px-3 py-1 rounded-full border border-pink-100"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs text-[#5C607A] leading-relaxed">
                  Actual quality depends on the source, device, television, player settings and internet connection.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
