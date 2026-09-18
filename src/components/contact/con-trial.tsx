"use client";

import React from "react";
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
import { Clock, ListChecks } from "lucide-react";
import { WHATSAPP_TRIAL_HREF } from "@/lib/site";

const trialChecks = [
  "Tell us which device you want to use",
  "We help you choose the correct app",
  "Account details are sent through WhatsApp",
  "Paid subscriptions activate within two hours of payment",
] as const;

export function ConTrial() {
  return (
    <Section id="trial">
      <SectionHeading
        title="Trial and Activation"
        highlight="Assistance"
        intro={[
          "To request a 24-hour free trial, tell us which device you want to use. We will help you choose the correct app and provide the account details through WhatsApp.",
        ]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={ListChecks}>What to expect</CardTitle>
          <TickList items={trialChecks} />
          <div className="border-t border-slate-100 pt-4 mt-6">
            <Footnote>
              If activation time has passed and you have not received your login
              details, send your payment reference in the same chat so we can
              check the order.
            </Footnote>
          </div>
          <div className="mt-6">
            <a
              href={WHATSAPP_TRIAL_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <Clock className="mr-2 h-4 w-4 stroke-[2.5]" />
                Request a 24-Hour Trial
              </Button>
            </a>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
