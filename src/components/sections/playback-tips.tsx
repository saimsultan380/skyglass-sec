"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Card,
  CardTitle,
  Footnote,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { Gauge } from "lucide-react";

const qualityTargets = [
  "At least 25 Mbps available to the device for HD viewing",
  "Around 50 Mbps or more for supported 4K viewing",
  "A 5 GHz Wi-Fi or wired Ethernet connection where possible",
  "Enough free storage for the selected application",
  "Current device software",
  "The latest supported version of the IPTV player",
] as const;

export function PlaybackTips() {
  return (
    <Section id="playback-tips">
      <SectionHeading
        title="What Determines"
        highlight="Streaming Quality?"
        intro={[
          "Streaming quality depends on your broadband speed, Wi-Fi signal, device performance, selected stream and other activity on your home network.",
        ]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-8">
          <CardTitle icon={Gauge}>For a practical starting point, aim for:</CardTitle>
          <TickList
            items={qualityTargets}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 space-y-0"
          />
          <div className="border-t border-slate-100 pt-5 mt-8">
            <Footnote>
              No internet-delivered television service can guarantee uninterrupted playback under every network condition. If buffering occurs, support can help identify whether the cause is the device, application, login, local network or selected source.
            </Footnote>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
