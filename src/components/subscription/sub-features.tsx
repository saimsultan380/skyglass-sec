"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Tv,
  Trophy,
  Film,
  CalendarDays,
  History,
  Activity,
  KeyRound,
} from "lucide-react";

const accountDetails = [
  "Private username",
  "Private password",
  "Server address",
  "Subscription duration",
  "Expiry information",
  "Installation guidance",
];

const sportsList = [
  "Football",
  "Cricket",
  "Rugby",
  "Motorsport",
  "Boxing",
  "Combat sports",
  "Tennis",
  "Golf",
  "Other events",
];

const qualityFormats = ["SD", "HD", "Full HD", "4K"];

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

export function SubFeatures() {
  return (
    <section
      id="features"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            What Every Plan{" "}
            <span className="text-brand-gradient font-bold">Includes</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Every active Sky Glass IPTV Subscription includes the main service and setup information associated with the selected package.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <KeyRound className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Secure Account Information
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                Customers receive:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {accountDetails.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Tv className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Live Television
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                Browse more than 22,000 listed live channels across available UK and international categories.
              </p>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Film className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Movies and Series
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                Explore more than 100,000 available movie and television-series entries.
              </p>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Trophy className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Sports
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                Sports categories may cover:
              </p>
              <ul className="space-y-2">
                {sportsList.map((sport) => (
                  <li key={sport} className="flex items-start gap-2">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {sport}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <CalendarDays className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Electronic Programme Guide
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                Supported channels may display current and upcoming programme information.
              </p>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <History className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Catch-Up
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                Catch-Up may be available on selected channels for a limited period.
              </p>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Activity className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Streaming Quality
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {qualityFormats.map((format) => (
                  <span
                    key={format}
                    className="text-xs font-bold text-[#E91E8C] bg-pink-50 px-3 py-1 rounded-full border border-pink-100"
                  >
                    {format}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed border-t border-slate-100 pt-4">
                Sources may be available in SD, HD, Full HD or 4K. Quality depends on the source, device, player and internet connection.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
