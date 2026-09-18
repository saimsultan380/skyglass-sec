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
import { Film, LayoutList, MonitorPlay } from "lucide-react";

const liveCategoryGroups = [
  "Entertainment",
  "Sports",
  "News",
  "Documentary",
  "Family",
  "International",
] as const;

const viewingFeatures = [
  "TV guide: see programme listings where Electronic Programme Guide data is supplied",
  "Catch-Up: watch earlier programmes on selected channels that support it",
  "Picture quality: available streams include SD, HD, Full HD and selected 4K options",
  "Player controls: supported apps may offer search, favourites and category filtering",
] as const;

export function LiveCategories() {
  return (
    <Section id="live-categories" className="space-y-12">
      <div className="w-full">
        <SectionHeading
          title="Live Channels, Films and"
          highlight="Television Series"
          intro={[
            "The Standard catalogue includes 22,000+ live channel entries, covering available entertainment, sports, news, documentary, family and international categories.",
            "If a particular channel or competition matters to you, ask us to check the current package before ordering.",
          ]}
        />

        <FadeIn className="w-full">
          <Card className="p-6 sm:p-7">
            <CardTitle icon={LayoutList}>Live TV and Sports categories</CardTitle>
            <TickList
              items={liveCategoryGroups}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 space-y-0"
            />
            <div className="border-t border-slate-100 pt-4 mt-6">
              <Footnote>
                Live listings may change as sources are updated. Ask us to check
                important channels before ordering.
              </Footnote>
            </div>
          </Card>
        </FadeIn>
      </div>

      <div className="w-full">
        <SectionHeading
          title="Films and Series"
          highlight="on Demand"
          intro={[
            "Browse 100,000+ on-demand film and series entries and choose something to watch without waiting for a live broadcast.",
            "Available titles, seasons, languages and subtitles vary. The catalogue can change, and trial access may differ from the paid package.",
          ]}
        />

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <Card className="p-6 sm:p-7">
              <CardTitle icon={Film}>Films and Series on Demand</CardTitle>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                Explore the on-demand library for films and television series
                across the available categories. Titles and languages vary, and
                the catalogue is updated over time.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <CardTitle icon={MonitorPlay}>
                  TV Guide, Catch-Up and Picture Quality
                </CardTitle>
                <TickList items={viewingFeatures} className="mt-2" />
              </div>
              <div className="border-t border-slate-100 pt-4 mt-6">
                <Footnote>
                  The quality you receive also depends on your device, display
                  and internet connection. A trial lets you check performance
                  using your own setup.
                </Footnote>
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
