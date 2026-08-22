"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  NumberedList,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { Headphones, MonitorSmartphone, Tv } from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { DOWNLOADER_CODE, SMART_TV_PLAYERS } from "@/lib/site";

const firestickSteps = [
  "Install Downloader by AFTVnews.",
  "Open Downloader.",
  `Enter code ${DOWNLOADER_CODE}.`,
  "Download and install the application.",
  "Contact support for your login details.",
];

function SupportCTA() {
  return (
    <Link href={ROUTES.contact} className="w-full sm:w-auto">
      <Button
        variant="outline"
        size="lg"
        className="w-full sm:w-auto rounded-[12px] border-gradient-brand px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
      >
        <Headphones className="mr-2 h-4 w-4 text-[#E91E8C] shrink-0 stroke-[2.5]" />
        <span>Contact Support for Login Details</span>
      </Button>
    </Link>
  );
}

export function DevInstallMethods() {
  return (
    <Section id="installation-methods">
      <SectionHeading
        eyebrow="Setup Routes"
        eyebrowIcon={MonitorSmartphone}
        title="Firestick, Android and Smart TV"
        highlight="Installation"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full mb-8">
        <FadeIn className="h-full">
          <Card className="h-full flex flex-col">
            <CardTitle icon={Tv}>Firestick and Android Installation</CardTitle>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-5">
              For compatible Android and Firestick devices:
            </p>
            <NumberedList items={firestickSteps} />
          </Card>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full">
          <Card className="h-full flex flex-col">
            <CardTitle icon={MonitorSmartphone}>Smart TV Applications</CardTitle>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-5">
              For Samsung, LG and supported non-Android Smart TVs, install
              whichever of these players is available:
            </p>
            <TickList items={SMART_TV_PLAYERS} className="mb-5" />
            <div className="border-t border-slate-100 pt-4 mt-auto">
              <p className="text-xs text-[#5C607A] leading-relaxed">
                Open the player and send the displayed MAC address and device
                key to support.
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>

      <FadeIn className="w-full">
        <div className="flex justify-center sm:justify-start">
          <SupportCTA />
        </div>
      </FadeIn>
    </Section>
  );
}
