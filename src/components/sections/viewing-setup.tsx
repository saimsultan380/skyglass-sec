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
import { MonitorSmartphone } from "lucide-react";
import { WHATSAPP_SETUP_HREF } from "@/lib/site";

const setupPoints = [
  "Tell us your device model so we can confirm the suitable app or player",
  "The prices on this page include one active stream at a time",
  "If two people need to watch simultaneously, ask us to quote the appropriate connection allowance before paying",
  "Each listed price is the full upfront payment for its term",
  "Subscriptions renew manually",
] as const;

export function ViewingSetup() {
  return (
    <Section id="viewing-setup">
      <SectionHeading
        title="Start With Your"
        highlight="Viewing Setup"
        intro={[
          "Your screen, subscription length and number of simultaneous streams are the three things to settle before ordering.",
        ]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={MonitorSmartphone}>
            Confirm your device and connection allowance
          </CardTitle>
          <TickList
            items={setupPoints}
            className="grid grid-cols-1 space-y-0 gap-x-8 gap-y-3 md:grid-cols-2"
          />
          <div className="mt-6 border-t border-slate-100 pt-4">
            <Footnote>
              Extra simultaneous connections and any paid third-party player
              licence may cost extra. Confirm your total before payment.
            </Footnote>
          </div>
          <div className="mt-6">
            <a
              href={WHATSAPP_SETUP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-brand w-full rounded-[12px] px-6 py-3.5 text-xs font-semibold text-white sm:w-auto sm:text-sm"
              >
                Ask about my setup
              </Button>
            </a>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
