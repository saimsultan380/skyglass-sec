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
import { PackageCheck } from "lucide-react";

const includedInEveryPlan = [
  "22,000+ live channel entries across available entertainment, sports, news, documentary, family and international categories",
  "100,000+ on-demand film and series entries",
  "TV guide information where Electronic Programme Guide data is supplied",
  "Catch-Up on selected channels that support it",
  "SD, HD, Full HD and selected 4K streams",
  "Player controls such as search, favourites and category filtering where supported",
  "Login details for a supported IPTV application",
  "Installation guidance for your chosen device",
  "Help with activation and common setup problems",
] as const;

export function WhatYouGet() {
  return (
    <Section id="what-you-get">
      <SectionHeading
        title="What Is"
        highlight="Sky Glass IPTV?"
        intro={[
          "Sky Glass IPTV supplies access to live channels, films and television series over the internet. You use a compatible player to open your account, browse the available catalogue and choose what to watch.",
          "You need a supported device, an internet connection and the login details supplied by our team. A satellite dish or engineer visit is not required.",
          "This is an independent IPTV service. It is not affiliated with, endorsed by or operated by Sky. You do not need an official Sky subscription to use it.",
        ]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={PackageCheck}>
            Choose a package and subscription period, then tell us how many
            screens you want to watch at the same time. Standard access
            includes:
          </CardTitle>
          <TickList
            items={includedInEveryPlan}
            className="grid grid-cols-1 space-y-0 gap-x-8 gap-y-3 md:grid-cols-2"
          />
          <div className="mt-6 border-t border-slate-100 pt-4">
            <Footnote>
              The quality you receive also depends on your device, display and
              internet connection. A trial lets you check performance using your
              own setup.
            </Footnote>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
