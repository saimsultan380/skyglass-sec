"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Card, Section, SectionHeading, TickList } from "@/components/ui/section-bits";
import { Cast, Cpu, Headphones, Laptop, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { SMART_TV_PLAYERS } from "@/lib/site";

type DeviceGroup = {
  title: string;
  icon: LucideIcon;
  paragraphs: readonly string[];
  players?: readonly string[];
};

const deviceGroups: readonly DeviceGroup[] = [
  {
    title: "Android TV, Google TV, phones and tablets",
    icon: Tv,
    paragraphs: [
      "Our supplied Android app is the preferred option for compatible Android devices.",
    ],
  },
  {
    title: "Compatible Firestick and Fire TV",
    icon: Cast,
    paragraphs: [
      "Our supplied app is preferred for Fire TV devices running Fire OS.",
    ],
  },
  {
    title: "Supported Samsung, LG and other Smart TVs",
    icon: Tv,
    paragraphs: [
      "Install one of these supported players from your television’s app store:",
    ],
    players: SMART_TV_PLAYERS,
  },
  {
    title: "Other supported platforms",
    icon: Laptop,
    paragraphs: [
      "Use a compatible player that accepts Xtream account details. Apple devices and computers need a player designed for their operating system.",
    ],
  },
  {
    title: "Need help choosing?",
    icon: Cpu,
    paragraphs: [
      "Player availability varies by model and operating system. Send us your exact device model if you need help choosing.",
    ],
  },
];

export function CompatibleDevices() {
  return (
    <Section id="compatible-devices">
      <SectionHeading
        title="Watch on Android, Firestick and"
        highlight="Smart TVs"
        intro={[
          "Our supplied app is the preferred option for compatible Android devices and Fire TV devices running Fire OS.",
        ]}
      />

      <FadeIn className="w-full mb-8">
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
                    <TickList items={group.players} className="mt-4" />
                  ) : null}
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6">
                  <Link
                    href={`${ROUTES.contact}?enquiry=device`}
                    data-reveal
                    data-delay={String((index % 3) * 50)}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-center rounded-[12px] border-gradient-brand py-3 px-4 text-xs font-semibold"
                    >
                      <Headphones className="mr-2 h-4 w-4 text-[#E91E8C] shrink-0 stroke-[2.5]" />
                      <span>Ask About My Device</span>
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn className="w-full">
        <Link href={ROUTES.installation}>
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
          >
            Read the App Installation Guide
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}
