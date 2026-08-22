"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Card, CardTitle, Section, SectionHeading, TickList } from "@/components/ui/section-bits";
import { CalendarCheck, Clock, Sparkles, TestTube } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ChoiceGroup = {
  title: string;
  icon: LucideIcon;
  items: readonly string[];
  highlighted?: boolean;
};

const choiceGroups: readonly ChoiceGroup[] = [
  {
    title: "Request a Trial First If:",
    icon: TestTube,
    items: [
      "You have not used an IPTV application before",
      "You are unsure about device compatibility",
      "Your internet performance is inconsistent",
      "You want to inspect current categories",
      "You want to test the application interface",
    ],
  },
  {
    title: "Choose One Month If:",
    icon: Clock,
    items: [
      "You want the shortest paid period",
      "You do not want a longer upfront commitment",
      "You want additional time after a trial",
    ],
  },
  {
    title: "Choose Three or Six Months If:",
    icon: CalendarCheck,
    items: [
      "Your device is already compatible",
      "You want a lower monthly equivalent",
      "You are not ready to choose twelve months",
    ],
  },
  {
    title: "Choose Twelve Months If:",
    icon: Sparkles,
    items: [
      "You have tested compatibility",
      "You understand that catalogue availability changes",
      "You want the lowest equivalent monthly price",
    ],
    highlighted: true,
  },
];

export function SubPlanChoice() {
  return (
    <Section id="plan-choice">
      <SectionHeading title="Which Plan Should" highlight="You Choose?" />

      <FadeIn className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {choiceGroups.map((group) => (
            <Card
              key={group.title}
              className={
                group.highlighted
                  ? "p-6 border-[#E91E8C] ring-1 ring-[#E91E8C]"
                  : "p-6"
              }
            >
              <CardTitle icon={group.icon}>{group.title}</CardTitle>
              <TickList items={group.items} />
            </Card>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
