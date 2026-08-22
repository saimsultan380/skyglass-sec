"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section-bits";
import { Headphones } from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { DOWNLOADER_CODE, DOWNLOADER_APP } from "@/lib/site";

interface StepItem {
  number: string;
  title: string;
  paragraphs: readonly string[];
}

const stepsList: readonly StepItem[] = [
  {
    number: "01",
    title: "Choose a Plan",
    paragraphs: [
      "Select one, three, six or twelve months and confirm the number of connections required.",
    ],
  },
  {
    number: "02",
    title: "Confirm Your Device",
    paragraphs: ["Tell support which device you intend to use."],
  },
  {
    number: "03",
    title: "Install the Application",
    paragraphs: [
      `Firestick and compatible Android customers should install ${DOWNLOADER_APP} and enter code ${DOWNLOADER_CODE}.`,
      "Smart TV customers should install CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV from the relevant television app store.",
    ],
  },
  {
    number: "04",
    title: "Contact Support",
    paragraphs: [
      "After installation, contact support and provide your device and application details.",
    ],
  },
  {
    number: "05",
    title: "Receive Your Login",
    paragraphs: [
      "Support will supply or configure the login details needed for the selected player.",
    ],
  },
];

export function SubActivationSteps() {
  return (
    <Section id="activation-steps">
      <SectionHeading title="How Activation" highlight="Works" />

      <FadeIn className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch w-full relative">
          {stepsList.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col justify-between h-full">
              {idx < stepsList.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-slate-200 z-10" />
              )}

              <div className="rounded-[12px] border border-slate-200 bg-white p-5 flex flex-col justify-between flex-1 relative z-20">
                <div>
                  <span className="text-4xl font-extrabold text-[#E91E8C]/10 mb-3 block leading-none select-none font-heading">
                    {step.number}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5 leading-snug">
                    Step {idx + 1} – {step.title}
                  </h3>
                  <div className="space-y-2">
                    {step.paragraphs.map((line) => (
                      <p
                        key={line}
                        className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href={`${ROUTES.contact}?enquiry=login`}>
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
            >
              <Headphones className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
              <span>Contact Support for Login Details</span>
            </Button>
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
