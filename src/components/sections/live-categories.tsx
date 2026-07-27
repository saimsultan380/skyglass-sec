"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Film, MonitorPlay } from "lucide-react";

const liveTvCategories = [
  "UK entertainment",
  "News",
  "Lifestyle",
  "Documentary",
  "Children's programming",
  "Family entertainment",
  "Music",
  "Regional television",
  "International television",
  "Language-specific channels",
];

const liveSportsCategories = [
  "Football",
  "Cricket",
  "Rugby",
  "Motorsport",
  "Formula racing",
  "Boxing",
  "Combat sports",
  "Tennis",
  "Golf",
  "Basketball",
  "American sports",
  "International sporting events",
];

const moviesCategories = [
  "Action",
  "Drama",
  "Comedy",
  "Thriller",
  "Crime",
  "Horror",
  "Documentary",
  "Family",
  "British cinema",
  "European cinema",
  "Asian cinema",
  "International releases",
];

const seriesCategories = [
  "Complete seasons",
  "Individual episodes",
  "Recently added programmes",
  "Drama",
  "Comedy",
  "Crime",
  "Documentary series",
  "Family programmes",
  "International productions",
];

const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function LiveCategories() {
  return (
    <section
      id="live-categories"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-12">

        {/* Live Television */}
        <FadeIn className="w-full">
          <div className="max-w-4xl mb-8">
            <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
              UK and International{" "}
              <span className="text-brand-gradient font-bold">Live Television</span>
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-base text-[#5C607A] leading-relaxed">
              <p>
                Sky Glass IPTV gives customers access to a broad selection of currently available live television categories.
              </p>
              <p>These may include:</p>
            </div>
          </div>
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {liveTvCategories.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4 mt-6 space-y-3 text-xs sm:text-sm text-[#5C607A] leading-relaxed">
              <p>
                The application normally organises channels by country, language or category. Customers can browse the available groups, add frequently viewed channels to favourites and use search where supported by the selected application.
              </p>
              <p>
                The precise channel list may change because services, feeds and broadcasting arrangements are updated over time.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Live Sports */}
        <FadeIn className="w-full">
          <div className="max-w-4xl mb-8">
            <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
              Live Sports Across{" "}
              <span className="text-brand-gradient font-bold">Popular Categories</span>
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-base text-[#5C607A] leading-relaxed">
              <p>
                With Sky Glass IPTV, viewers may access available sports channels covering a broad range of competitions and interests.
              </p>
              <p>Sports categories may include:</p>
            </div>
          </div>
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {liveSportsCategories.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4 mt-6 space-y-3 text-xs sm:text-sm text-[#5C607A] leading-relaxed">
              <p>
                Live-event access depends on schedules, regional availability, broadcasting arrangements and the active package.
              </p>
              <p>
                Customers who need a particular event should contact support before purchasing rather than assuming that every competition is included.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Movies and Series */}
        <FadeIn className="w-full">
          <div className="max-w-4xl mb-8">
            <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
              Movies and Television Series{" "}
              <span className="text-brand-gradient font-bold">on Demand</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
              Sky Glass IPTV also provides access to an extensive on-demand library containing more than 100,000 available movie and series entries.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Film className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">Movie categories may include:</h3>
              </div>
              <ul className="space-y-2.5">
                {moviesCategories.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <MonitorPlay className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">Television-series categories may contain:</h3>
              </div>
              <ul className="space-y-2.5">
                {seriesCategories.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[#5C607A] leading-relaxed max-w-4xl">
            Library size and individual titles can change as content is added, reorganised or removed.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
