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
import { PackageCheck } from "lucide-react";
import { WHATSAPP_CHANNEL_HREF } from "@/lib/site";

const includedInEveryPlan = [
  "27,000+ live channel entries across available entertainment, sports, news, documentary, family and international categories",
  "120,000+ on-demand film and series entries",
  "Browse available sections through your compatible player, with search or favourites where the player supports them",
  "Programme-guide information appears where data is supplied",
  "Catch-up is available on selected channels",
  "SD, HD, Full HD or selected 4K streams may be available depending on the source, device and connection",
  "Login details and setup assistance",
  "One simultaneous connection at the listed prices",
] as const;

export function WhatYouGet() {
  return (
    <Section id="what-you-get">
      <SectionHeading
        title="What Premium Access"
        highlight="Includes"
        intro={[
          "The advertised Premium catalogue includes 27,000+ live channel entries and 120,000+ on-demand film and series entries.",
        ]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={PackageCheck}>
            The same advertised Premium catalogue appears on every plan
          </CardTitle>
          <TickList
            items={includedInEveryPlan}
            className="grid grid-cols-1 space-y-0 gap-x-8 gap-y-3 md:grid-cols-2"
          />
          <div className="mt-6 border-t border-slate-100 pt-4">
            <Footnote>
              Catalogue entries and individual programmes can change. If a
              particular channel, film, series or language matters to you, ask
              us to check current availability before ordering.
            </Footnote>
          </div>
          <div className="mt-6">
            <a
              href={WHATSAPP_CHANNEL_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-brand w-full rounded-[12px] px-6 py-3.5 text-xs font-semibold text-white sm:w-auto sm:text-sm"
              >
                Check a channel or title
              </Button>
            </a>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
