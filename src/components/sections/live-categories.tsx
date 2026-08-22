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
  "Music",
  "Children’s",
  "International",
] as const;

const onDemandGenres = [
  "Action",
  "Comedy",
  "Drama",
  "Documentary",
  "Family",
  "Crime",
  "Thriller",
  "Animation",
  "International",
] as const;

export function LiveCategories() {
  return (
    <Section id="live-categories" className="space-y-12">
      {/* Live Television */}
      <div className="w-full">
        <SectionHeading
          title="Live Television Organised into"
          highlight="Clear Categories"
          intro={[
            "Browse available entertainment, sports, news, documentary, music, children’s and international categories without searching through one unorganised list.",
            "The Electronic Programme Guide displays programme information when suitable schedule data is available. Compatible IPTV apps can also provide favourites, recently watched entries and category filtering.",
          ]}
        />

        <FadeIn className="w-full">
          <Card className="p-6 sm:p-7">
            <CardTitle icon={LayoutList}>Available live categories include:</CardTitle>
            <TickList
              items={liveCategoryGroups}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 space-y-0"
            />
            <div className="border-t border-slate-100 pt-4 mt-6">
              <Footnote>
                Live listings may be added, changed or removed as the catalogue is updated. If one category is particularly important to you, request a trial or contact support to check current availability before purchasing a longer plan.
              </Footnote>
            </div>
          </Card>
        </FadeIn>
      </div>

      {/* Films, Movies and Series */}
      <div className="w-full">
        <SectionHeading
          title="Films, Movies and"
          highlight="Complete Television Series"
          intro={[
            "The on-demand library contains 100,000+ film and series entries across action, comedy, drama, documentary, family, crime, thriller, animation and international categories.",
          ]}
        />

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <Card className="p-6 sm:p-7">
              <CardTitle icon={Film}>On-demand categories</CardTitle>
              <TickList
                items={onDemandGenres}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 space-y-0"
              />
            </Card>

            <Card className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <CardTitle icon={MonitorPlay}>Browsing the library</CardTitle>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                  Compatible applications separate movies from episodic television, display available seasons and make it easier to continue browsing the on-demand library.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-6">
                <Footnote>
                  Titles, languages, subtitles, audio tracks and picture quality vary between individual entries. The catalogue is updated regularly, but a specific title or release cannot be permanently guaranteed.
                </Footnote>
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
