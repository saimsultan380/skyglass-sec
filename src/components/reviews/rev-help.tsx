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
  TickList,
} from "@/components/ui/section-bits";
import { Headphones, LifeBuoy } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const detailsToSend = [
  "Device model",
  "Application name",
  "Exact error message",
  "Order information",
  "Troubleshooting already attempted",
];

export function RevHelp() {
  return (
    <Section id="review-help">
      <SectionHeading
        eyebrow="Before You Review"
        eyebrowIcon={LifeBuoy}
        title="Need Help Before Leaving a"
        highlight="Review?"
      />

      <FadeIn className="w-full">
        <Card className="w-full p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            <CardTitle icon={LifeBuoy}>
              For an active setup problem, send support:
            </CardTitle>
            <TickList items={detailsToSend} className="mt-4" />
          </div>

          <Link href={ROUTES.contact} className="shrink-0 w-full lg:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full lg:w-auto rounded-[12px] border-gradient-brand px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
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
