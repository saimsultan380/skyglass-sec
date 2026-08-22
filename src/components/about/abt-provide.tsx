"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  Section,
  SectionHeading,
  Tick,
} from "@/components/ui/section-bits";
import { Apple, Headphones, HardDrive, Package, Tv, Tv2 } from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { DOWNLOADER_CODE } from "@/lib/site";

const serviceItems = [
  "22,000+ live channel entries",
  "100,000+ films and series",
  "EPG on supported channels",
  "Catch-Up on selected channels",
  "SD, HD and Full HD",
  "4K where available",
  "One-, three-, six- and twelve-month plans",
  "Device installation guidance",
  "Login details from support",
  "Customer assistance",
];

const installationMethods = [
  {
    icon: Tv,
    title: "Firestick and Android",
    body: `Install Downloader by AFTVnews and enter code ${DOWNLOADER_CODE}.`,
  },
  {
    icon: Tv2,
    title: "Smart TV",
    body: "Install CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV from the television app store.",
  },
  {
    icon: Apple,
    title: "Apple, Windows and Mac",
    body: "Install a compatible player that accepts Xtream Codes or M3U details.",
  },
  {
    icon: HardDrive,
    title: "IPTV Boxes",
    body: "Use the portal, MAC address or account method confirmed by support.",
  },
];

export function AbtProvide() {
  return (
    <Section id="what-we-provide">
      <SectionHeading
        eyebrow="Service Overview"
        eyebrowIcon={Package}
        title="What We"
        highlight="Provide"
        intro={["The current standard service includes:"]}
      />

      <FadeIn className="w-full mb-12">
        <Card className="p-6 sm:p-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {serviceItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Tick />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </FadeIn>

      <SectionHeading title="Installation" highlight="Methods" />

      <FadeIn className="w-full mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
          {installationMethods.map((method) => (
            <Card key={method.title} className="flex flex-col">
              <CardTitle icon={method.icon}>{method.title}</CardTitle>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                {method.body}
              </p>
            </Card>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="w-full">
        <Card className="w-full p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-[#5C607A] leading-relaxed max-w-2xl">
            After installing the correct application, contact support for your
            login details.
          </p>

          <Link href={ROUTES.contact} className="shrink-0 w-full md:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto rounded-[12px] border-gradient-brand px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
            >
              <Headphones className="mr-2 h-4 w-4 text-[#E91E8C] shrink-0 stroke-[2.5]" />
              <span>Contact Support for Login Details</span>
            </Button>
          </Link>
        </Card>
      </FadeIn>
    </Section>
  );
}
