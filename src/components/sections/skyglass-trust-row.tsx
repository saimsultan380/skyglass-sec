"use client";

import React from "react";
import {
  Clock,
  MessageSquare,
  RefreshCw,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/animation/fade-in";

const trustItems = [
  { label: "24-Hour Free Trial", icon: Clock },
  { label: "2-Hour Activation", icon: Zap },
  { label: "WhatsApp Setup", icon: MessageSquare },
  { label: "Manual Renewals", icon: RefreshCw },
];

export function SkyglassTrustRow() {
  return (
    <FadeIn delay={0.4} duration={0.5} yOffset={16} className="w-full">
      <div className="iphone-glass-pill w-full sm:rounded-full sm:p-4">
        <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-4 sm:items-center sm:gap-0 sm:divide-x sm:divide-white/25">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/25 px-1 py-2.5 sm:flex-row sm:gap-3 sm:rounded-none sm:bg-transparent sm:px-3 sm:py-0"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-50/80 text-[#E91E8C] sm:h-9 sm:w-9 sm:bg-pink-50">
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
