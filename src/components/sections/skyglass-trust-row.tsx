"use client";

import React from "react";
import {
  CalendarDays,
  Download,
  CalendarClock,
  Headphones,
} from "lucide-react";
import { FadeIn } from "@/components/animation/fade-in";

const trustItems = [
  { label: "Plans from £12", icon: CalendarDays },
  { label: "Guided Installation", icon: Download },
  { label: "EPG & Catch-Up", icon: CalendarClock },
  { label: "Customer Support", icon: Headphones },
];

export function SkyglassTrustRow() {
  return (
    <FadeIn delay={0.4} duration={0.5} yOffset={16} className="w-full">
      <div className="w-full rounded-2xl border border-slate-200 bg-white p-3 sm:rounded-full sm:p-4">
        <div className="grid grid-cols-2 items-center divide-x divide-y divide-slate-200/90 text-center sm:grid-cols-4 sm:divide-y-0">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-1.5 px-1 py-2 sm:flex-row sm:gap-3 sm:px-3 sm:py-0"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E91E8C] sm:h-9 sm:w-9">
                  <Icon className="h-4 w-4 stroke-[2.5] sm:h-5 sm:w-5" />
                </div>
                <span className="whitespace-nowrap text-[11px] leading-tight font-semibold tracking-tight text-slate-800 sm:text-xs lg:text-sm">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}
