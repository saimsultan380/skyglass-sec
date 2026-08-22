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
  "22,000+ live channel entries across available UK and international categories",
  "100,000+ films and television-series entries",
  "Sports, entertainment, news, documentary, children’s and international categories",
  "Electronic Programme Guide information on supported channels",
  "Catch-Up on selected channels",
  "SD, HD and Full HD streams",
  "4K streams where available",
  "Login details for a supported IPTV application",
  "Installation guidance for your chosen device",
  "Help with activation and common setup problems",
] as const;

export function WhatYouGet() {
  return (
    <Section id="what-you-get">
      <SectionHeading
        title="What You Get with"
        highlight="Sky Glass IPTV"
        intro={[
          "Sky Glass IPTV is an internet-delivered television service for customers who want live TV, sports categories, films, television series and international entertainment available through one compatible IPTV application.",
          "You do not need a satellite dish or an engineer appointment. You need a supported device, a stable internet connection and the login details supplied by our support team.",
        ]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={PackageCheck}>
            Every standard subscription includes:
          </CardTitle>
          <TickList
            items={includedInEveryPlan}
            className="grid grid-cols-1 space-y-0 gap-x-8 gap-y-3 md:grid-cols-2"
          />
          <div className="mt-6 border-t border-slate-100 pt-4">
            <Footnote>
              The name is sometimes written as Skyglass IPTV or IPTV Sky Glass.
              Both versions refer to the same service available through this
              website.
            </Footnote>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
