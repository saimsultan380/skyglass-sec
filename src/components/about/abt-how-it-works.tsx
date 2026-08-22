"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Card, Section, SectionHeading } from "@/components/ui/section-bits";
import { Info, Workflow } from "lucide-react";
import { DOWNLOADER_CODE } from "@/lib/site";

const steps = [
  {
    title: "Choose a Plan",
    body: "Select one, three, six or twelve months.",
  },
  {
    title: "Confirm Your Device",
    body: "Check which application and login format the device requires.",
  },
  {
    title: "Install the Application",
    body: `Use Downloader code ${DOWNLOADER_CODE} on supported Android and Firestick devices, or a supported Smart TV player.`,
  },
  {
    title: "Contact Support",
    body: "Receive the account credentials needed by the application.",
  },
  {
    title: "Sign In",
    body: "Enter the supplied details and allow the catalogue to load.",
  },
];

export function AbtHowItWorks() {
  return (
    <Section id="how-the-service-works">
      <SectionHeading
        eyebrow="Step by Step"
        eyebrowIcon={Workflow}
        title="How the Service"
        highlight="Works"
      />

      <FadeIn className="mb-10 w-full">
        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Card key={step.title} className="flex flex-col">
              <div className="font-heading mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-pink-50 text-base font-bold text-[#E91E8C]">
                {index + 1}
              </div>
              <h3 className="mb-2 text-base leading-snug font-bold text-[#0B0E2C] sm:text-lg">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed font-semibold text-slate-800 sm:text-sm">
                {step.body}
              </p>
            </Card>
          ))}
        </div>
      </FadeIn>

      <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        <FadeIn className="h-full">
          <Card className="h-full">
            <h3 className="mb-3 text-base leading-snug font-bold text-[#0B0E2C] sm:text-lg">
              Responsible Use
            </h3>
            <div className="space-y-3 text-xs leading-relaxed font-semibold text-slate-800 sm:text-sm">
              <p>
                Customers must use the service in accordance with applicable law
                and the Terms and Conditions.
              </p>
              <p>
                Access must not be rebroadcast, publicly displayed, resold or
                redistributed without a separate authorised agreement.
              </p>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full">
          <Card className="h-full">
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C]">
                <Info className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base leading-snug font-bold text-[#0B0E2C] sm:text-lg">
                Independent Service Notice
              </h3>
            </div>
            <div className="space-y-3 text-xs leading-relaxed font-semibold text-slate-800 sm:text-sm">
              <p>
                Sky Glass IPTV is an independent service operated through
                skyglass-iptv.com.
              </p>
              <p>
                It is not affiliated with, endorsed by or operated by Sky UK
                Limited or the manufacturer of the Sky Glass television.
                Third-party product names and trademarks belong to their
                respective owners.
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
