"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Card, CardTitle, Section, SectionHeading } from "@/components/ui/section-bits";
import { Apple, Laptop, MonitorSmartphone, Tv, Tv2 } from "lucide-react";
import { DOWNLOADER_CODE } from "@/lib/site";

const categories = [
  {
    icon: Tv,
    title: "Firestick Reviews",
    body: `These reviews should describe installation through Downloader by AFTVnews, code ${DOWNLOADER_CODE}, app performance and the login process.`,
  },
  {
    icon: MonitorSmartphone,
    title: "Android TV Reviews",
    body: "These reviews should cover Google Play installation, Downloader setup, app navigation and picture quality.",
  },
  {
    icon: Tv2,
    title: "Samsung and LG Smart TV Reviews",
    body: "These reviews should identify whether the customer used CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV.",
  },
  {
    icon: Apple,
    title: "Apple Device Reviews",
    body: "These reviews should identify the App Store player and Apple device used.",
  },
  {
    icon: Laptop,
    title: "Windows and Mac Reviews",
    body: "These reviews should include the desktop application, login method and general performance.",
  },
];

export function RevByDevice() {
  return (
    <Section id="reviews-by-device">
      <SectionHeading
        eyebrow="Browse by Platform"
        eyebrowIcon={MonitorSmartphone}
        title="Read Reviews by"
        highlight="Device"
      />

      <FadeIn className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
          {categories.map((category) => (
            <Card key={category.title} className="flex flex-col">
              <CardTitle icon={category.icon}>{category.title}</CardTitle>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                {category.body}
              </p>
            </Card>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
