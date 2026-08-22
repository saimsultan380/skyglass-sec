"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  NumberedList,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { PenLine, ShieldCheck } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const verificationSteps = [
  "Confirm that the customer is linked to an order or trial.",
  "Remove private account and payment information.",
  "Obtain permission to publish the wording.",
  "Correct spelling only where the meaning remains unchanged.",
  "Identify materially edited feedback.",
  "Allow balanced and critical reviews.",
  "Do not reward customers only for positive ratings.",
];

const submissionFields = [
  "Device used",
  "Application installed",
  "Subscription period",
  "Length of use",
  "Installation experience",
  "Streaming experience",
  "Support experience",
  "What worked well",
  "What could be improved",
  "Permission to publish",
];

export function RevVerification() {
  return (
    <Section id="review-verification">
      <SectionHeading
        eyebrow="Review Process"
        eyebrowIcon={ShieldCheck}
        title="How Reviews Are"
        highlight="Verified"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
        <FadeIn className="h-full">
          <Card className="h-full flex flex-col">
            <CardTitle icon={ShieldCheck}>Before Publishing</CardTitle>
            <NumberedList items={verificationSteps} />
          </Card>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full">
          <Card className="h-full flex flex-col">
            <CardTitle icon={PenLine}>Submit Your Review</CardTitle>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-5">
              Include:
            </p>
            <TickList items={submissionFields} className="mb-6" />
            <div className="mt-auto border-t border-slate-100 pt-5">
              <Link href={`${ROUTES.contact}?enquiry=review`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
                >
                  <PenLine className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
                  Submit an Honest Review
                </Button>
              </Link>
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
