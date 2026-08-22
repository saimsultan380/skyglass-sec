"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Card,
  CardTitle,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { ClipboardCheck } from "lucide-react";
import { RESELLER_MINIMUM_CREDITS } from "@/lib/site";

const confirmBeforePaying = [
  "Current wholesale price",
  "Credit-expiry conditions",
  "Panel-access terms",
  "Available subscription durations",
  "Refund conditions for unused credits",
  "Support arrangements",
  "Connection options",
  "White-label availability",
  "Sub-reseller availability",
  "Advertising restrictions",
] as const;

export function ResMinimumEntry() {
  return (
    <Section id="minimum-entry">
      <SectionHeading
        title="Minimum Reseller"
        highlight="Entry"
        intro={[`The current minimum is ${RESELLER_MINIMUM_CREDITS} credits.`]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={ClipboardCheck}>Before paying, confirm:</CardTitle>
          <TickList
            items={confirmBeforePaying}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 space-y-0"
          />
        </Card>
      </FadeIn>
    </Section>
  );
}
