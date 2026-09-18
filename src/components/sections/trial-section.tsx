"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  Footnote,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { Clock } from "lucide-react";
import { WHATSAPP_TRIAL_HREF } from "@/lib/site";

const trialChecks = [
  "The app opens and responds properly on your device",
  "Live streams play consistently on your connection",
  "You can find and browse the available categories",
  "The player’s navigation suits you",
] as const;

export function TrialSection() {
  return (
    <Section id="trial">
      <SectionHeading
        title="Try Skyglass IPTV Free for"
        highlight="24 Hours"
        intro={[
          "Use the free trial on the device and internet connection you expect to use after subscribing.",
        ]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={Clock}>During the trial, check whether:</CardTitle>
          <TickList
            items={trialChecks}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 space-y-0"
          />
          <div className="border-t border-slate-100 pt-4 mt-6">
            <Footnote>
              The trial catalogue can differ from Standard or Premium access.
              Ask us about the paid package if you are checking a particular
              channel, film or series.
            </Footnote>
          </div>
          <div className="mt-6">
            <a
              href={WHATSAPP_TRIAL_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                Request Your 24-Hour Trial
              </Button>
            </a>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
