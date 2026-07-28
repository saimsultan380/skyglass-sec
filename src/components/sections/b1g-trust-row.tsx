"use client";

import React from "react";
import { Zap, Tv, MonitorSmartphone, Headphones } from "lucide-react";
import { FadeIn } from "@/components/animation/fade-in";

const trustItems = [
  { label: "Quick Activation", icon: Zap },
  { label: "22,000+ Live Channels", icon: Tv },
  { label: "Popular Devices Supported", icon: MonitorSmartphone },
  { label: "24/7 Assistance", icon: Headphones },
];

export function B1GTrustRow() {
  return (
    <FadeIn delay={0.4} duration={0.5} yOffset={16} className="w-full">
      <div className="w-full rounded-2xl sm:rounded-full border border-slate-200 bg-white p-3 sm:p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-200/90 text-center items-center">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-1 sm:px-3 py-2 sm:py-0"
              >
                <div className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E91E8C]">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
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
