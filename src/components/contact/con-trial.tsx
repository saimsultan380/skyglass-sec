"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { Clock, ListChecks, Send } from "lucide-react";
import { WHATSAPP_TRIAL_HREF } from "@/lib/site";

const trialChecks = [
  "Device compatibility",
  "Broadband performance",
  "Current categories",
  "Application navigation",
  "EPG availability",
  "Selected Catch-Up",
  "Available picture quality",
] as const;

const trialSendItems = [
  "Your name",
  "Country",
  "Device",
  "Installed application",
  "Approximate internet speed",
  "Required number of connections",
] as const;

const trialConditions = [
  "Is subject to eligibility and availability",
  "May be limited to new customers",
  "Begins when trial login details are issued",
  "Is intended for evaluation",
  "Does not guarantee permanent catalogue availability",
  "May be limited to one per customer or household",
  "Cannot be resold or redistributed",
] as const;

export function ConTrial() {
  return (
    <Section id="trial">
      <SectionHeading title="Request a" highlight="24-Hour Trial" />

      <FadeIn className="w-full mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <Card className="p-6 sm:p-7">
            <CardTitle icon={ListChecks}>A trial can help you check:</CardTitle>
            <TickList items={trialChecks} />
          </Card>

          <Card className="p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <CardTitle icon={Send}>Send:</CardTitle>
              <TickList items={trialSendItems} />
            </div>
            <div className="border-t border-slate-100 pt-4 mt-6">
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
                  Request a 24-Hour Trial
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </FadeIn>

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={Clock}>Trial Conditions</CardTitle>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-4">
            A trial:
          </p>
          <TickList
            items={trialConditions}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 space-y-0"
          />
        </Card>
      </FadeIn>
    </Section>
  );
}
