"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  BadgePoundSterling,
  CalendarClock,
  Coins,
  Gauge,
  Headphones,
  PlayCircle,
  RefreshCw,
  Timer,
  UserPlus,
} from "lucide-react";

interface FeatureCard {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const featuresList: FeatureCard[] = [
  { title: "Customer-account creation", icon: UserPlus },
  { title: "Subscription activation", icon: PlayCircle },
  { title: "Credit management", icon: Coins },
  { title: "Account renewal", icon: RefreshCw },
  { title: "Expiry-date tracking", icon: CalendarClock },
  { title: "Customer status information", icon: Gauge },
  { title: "Retail-price management", icon: BadgePoundSterling },
  { title: "Additional credit purchases", icon: Timer },
  { title: "Reseller technical assistance", icon: Headphones },
];

export function ResFeatures() {
  return (
    <section
      id="panel-features"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            Reseller Panel{" "}
            <span className="text-brand-gradient font-bold">Features</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Available tools may include:
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch w-full">
            {featuresList.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-[12px] border border-slate-200 bg-white p-5 flex items-center sm:flex-col sm:items-start gap-3 h-full hover:border-slate-300 transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <Icon className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0B0E2C] leading-snug font-heading">
                    {feat.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs sm:text-sm text-[#5C607A] leading-relaxed">
            Confirm the current panel features before purchasing.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
