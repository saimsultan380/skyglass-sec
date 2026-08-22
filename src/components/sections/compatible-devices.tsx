"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Card, Section, SectionHeading, TickList } from "@/components/ui/section-bits";
import { Apple, Cast, Cpu, Headphones, Laptop, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { DOWNLOADER_CODE, SMART_TV_PLAYERS } from "@/lib/site";

type DeviceGroup = {
  title: string;
  icon: LucideIcon;
  paragraphs: readonly string[];
  players?: readonly string[];
};

const deviceGroups: readonly DeviceGroup[] = [
  {
    title: "Firestick and Fire TV",
    icon: Cast,
    paragraphs: [
      `Open the Amazon Appstore and install Downloader by AFTVnews. Enter Downloader code ${DOWNLOADER_CODE}, download the Sky Glass IPTV application and select Install.`,
      "After installation, contact support to receive your username, password and server address.",
    ],
  },
  {
    title: "Android TV, Google TV and Android Devices",
    icon: Tv,
    paragraphs: [
      `Open the Google Play Store and install Downloader by AFTVnews. Enter code ${DOWNLOADER_CODE} inside Downloader, download the application and complete the installation.`,
      "Contact support after installation for the login details required to activate your account.",
    ],
  },
  {
    title: "Samsung and LG Smart TVs",
    icon: Tv,
    paragraphs: [
      "Install one of these supported players from your television’s app store:",
    ],
    players: SMART_TV_PLAYERS,
  },
  {
    title: "iPhone, iPad and Apple TV",
    icon: Apple,
    paragraphs: [
      "Install a compatible IPTV player from Apple’s App Store. Open the application and contact support for the Xtream Codes or M3U details required by the player.",
    ],
  },
  {
    title: "Windows and Mac",
    icon: Laptop,
    paragraphs: [
      "Install a compatible desktop IPTV player that accepts Xtream Codes or an M3U playlist. Contact support to receive the appropriate login format.",
    ],
  },
  {
    title: "MAG, Formuler and Enigma2 Devices",
    icon: Cpu,
    paragraphs: [
      "Portal-based devices may require a MAC address, portal URL or device-specific configuration. Send your exact device model to support before activation.",
    ],
  },
];

const SMART_TV_CLOSING =
  "Open the selected player and contact support with the MAC address and device key displayed by the application. Support will provide or configure the required account details.";

export function CompatibleDevices() {
  return (
    <Section id="compatible-devices">
      <SectionHeading
        title="Watch Sky Glass IPTV on"
        highlight="Popular Devices"
      />

      <FadeIn className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
          {deviceGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Card
                key={group.title}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-snug">
                      {group.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {group.paragraphs.map((line) => (
                      <p
                        key={line}
                        className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {group.players ? (
                    <>
                      <TickList items={group.players} className="mt-4" />
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed mt-4">
                        {SMART_TV_CLOSING}
                      </p>
                    </>
                  ) : null}
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6">
                  <Link
                    href={`${ROUTES.contact}?enquiry=login`}
                    data-reveal
                    data-delay={String((index % 3) * 50)}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-center rounded-[12px] border-gradient-brand py-3 px-4 text-xs font-semibold"
                    >
                      <Headphones className="mr-2 h-4 w-4 text-[#E91E8C] shrink-0 stroke-[2.5]" />
                      <span>Contact Support for Login Details</span>
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </FadeIn>
    </Section>
  );
}
