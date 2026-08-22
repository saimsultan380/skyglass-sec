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
import { Cpu, ExternalLink } from "lucide-react";

const platformNotes = [
  "Samsung normally uses Tizen",
  "LG normally uses webOS",
  "Sony may use Android TV or Google TV",
  "Hisense may use VIDAA, Android TV or Google TV",
  "TCL may use Roku TV, Android TV or Google TV",
  "Philips may use Android TV, Google TV or a proprietary platform",
];

const externalDeviceReasons = [
  "The television app store lacks a compatible player",
  "The built-in Smart TV software is slow",
  "The television does not permit third-party app installation",
  "You use a Sky Glass television",
  "The television’s operating system is unsupported",
];

export function DevDifferences() {
  return (
    <Section id="smart-tv-differences">
      <SectionHeading
        eyebrow="Platform Notes"
        eyebrowIcon={Cpu}
        title="Important Smart TV"
        highlight="Differences"
        intro={[
          "Televisions from the same manufacturer can use different operating systems.",
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
        <FadeIn className="h-full">
          <Card className="h-full flex flex-col">
            <CardTitle icon={Cpu}>Operating Systems by Brand</CardTitle>
            <TickList items={platformNotes} className="mb-5" />
            <div className="border-t border-slate-100 pt-4 mt-auto">
              <p className="text-xs text-[#5C607A] leading-relaxed">
                Send the exact model number to support if you are uncertain.
              </p>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full">
          <Card className="h-full flex flex-col">
            <CardTitle icon={ExternalLink}>
              Using an External Streaming Device
            </CardTitle>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-5">
              An external Firestick or Android device can be used when:
            </p>
            <TickList items={externalDeviceReasons} />
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
