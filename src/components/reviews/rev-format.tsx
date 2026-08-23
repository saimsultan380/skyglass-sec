"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Card,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { AlertCircle, BadgeCheck, Clock } from "lucide-react";

const requiredFields = [
  "Device: Firestick, Smart TV, Android, Apple, Windows or other",
  "Application: Installed player",
  "Plan: 1, 3, 6 or 12 months",
  "Verified Customer: Yes",
  "Review Date: Date",
  "Display Name: Customer-approved name",
];

export function RevFormat() {
  return (
    <Section id="verified-reviews">
      <SectionHeading
        eyebrow="Publishing Standard"
        eyebrowIcon={BadgeCheck}
        title="Verified Customer"
        highlight="Reviews"
        intro={[
          "Genuine customer reviews will appear here once they are verified and published with permission. No review or AggregateRating markup is used until then.",
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full mb-6">
        <FadeIn className="h-full">
          <Card className="h-full flex flex-col">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0 mb-4">
              <Clock className="h-4 w-4 stroke-[2]" />
            </div>
            <p className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-snug mb-3">
              Reviews coming soon
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              We only publish permission-based feedback tied to a real order,
              with device, plan and date context. Check back shortly, or contact
              support if you would like to share your experience.
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full">
          <Card className="h-full flex flex-col">
            <TickList items={requiredFields} />
          </Card>
        </FadeIn>
      </div>

      <FadeIn className="w-full">
        <div className="flex items-start gap-2.5 px-2">
          <AlertCircle className="h-4.5 w-4.5 text-[#E91E8C] shrink-0 mt-0.5 stroke-[2.5]" />
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            Do not publish copied testimonials, celebrity names, stock
            identities or feedback that cannot be verified.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
