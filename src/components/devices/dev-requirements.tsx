"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Card,
  CardTitle,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { Gauge, Users } from "lucide-react";

const internetRequirements = [
  "Approximately 25 Mbps for HD",
  "Around 50 Mbps or more for supported 4K",
  "5 GHz Wi-Fi or Ethernet where possible",
  "Current device firmware",
  "Enough free storage",
  "A supported application version",
];

export function DevRequirements() {
  return (
    <Section id="requirements">
      <SectionHeading
        eyebrow="Before You Order"
        eyebrowIcon={Gauge}
        title="Internet Requirements and"
        highlight="Connections"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
        <FadeIn className="h-full">
          <Card className="h-full flex flex-col">
            <CardTitle icon={Gauge}>Internet Requirements</CardTitle>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-5">
              For reliable playback, use:
            </p>
            <TickList items={internetRequirements} />
          </Card>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full">
          <Card className="h-full flex flex-col">
            <CardTitle icon={Users}>Simultaneous Connections</CardTitle>
            <div className="space-y-3 text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
              <p>
                Installing an account on several devices is different from
                watching simultaneously.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-4 mt-4">
              <p className="text-xs text-[#5C607A] leading-relaxed">
                Do not use more simultaneous streams than the number of
                connections included in your order.
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
