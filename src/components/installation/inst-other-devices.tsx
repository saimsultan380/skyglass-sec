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
} from "@/components/ui/section-bits";
import { Tv } from "lucide-react";
import { WHATSAPP_SETUP_HREF } from "@/lib/site";

export function InstOtherDevices() {
  return (
    <Section id="other-devices">
      <SectionHeading
        title="Using a Different Type of"
        highlight="Device?"
        intro={[
          "A supported Samsung or LG television without Android TV, an Apple device or a computer needs a compatible player designed for its operating system. The APK steps above do not apply directly.",
        ]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={Tv}>Ask support for the right player</CardTitle>
          <p className="mb-6 text-xs leading-relaxed font-semibold text-slate-800 sm:text-sm">
            Send support the exact model so they can advise you on the
            appropriate player and account details.
          </p>
          <Footnote>
            Player availability varies by manufacturer and operating system.
            Tell us the model before you order if you are unsure.
          </Footnote>
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
                Ask about my device
              </Button>
            </a>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
