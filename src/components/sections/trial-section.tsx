"use client";

import React from "react";
import Link from "next/link";
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
import { Clock } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const trialChecks = [
  "Device compatibility",
  "Broadband performance",
  "Application navigation",
  "Current live and on-demand categories",
  "EPG availability",
  "Selected Catch-Up",
  "Available picture quality",
] as const;

export function TrialSection() {
  return (
    <Section id="trial">
      <SectionHeading title="Request a" highlight="24-Hour Trial" />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={Clock}>
            A 24-hour trial may be available to eligible new customers. Use the trial to check:
          </CardTitle>
          <TickList
            items={trialChecks}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 space-y-0"
          />
          <div className="border-t border-slate-100 pt-4 mt-6">
            <Footnote>
              Trial availability is subject to eligibility, service capacity and current demand.
            </Footnote>
          </div>
          <div className="mt-6">
            <Link href={`${ROUTES.contact}?enquiry=trial`}>
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                Request a 24-Hour Trial
              </Button>
            </Link>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
