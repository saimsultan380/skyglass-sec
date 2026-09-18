"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Section, SectionHeading } from "@/components/ui/section-bits";

const stepsList = [
  {
    number: "01",
    title: "Choose Standard or ask about Premium",
    body: "Select your preferred duration and connection allowance.",
  },
  {
    number: "02",
    title: "Confirm your device",
    body: "Tell us the model and player you intend to use.",
  },
  {
    number: "03",
    title: "Complete payment",
    body: "Use one of the available payment methods.",
  },
  {
    number: "04",
    title: "Receive your account details",
    body: "We activate subscriptions within two hours of payment and send your login through WhatsApp.",
  },
  {
    number: "05",
    title: "Complete setup",
    body: "Follow the installation guide or ask our team for assistance. In our supplied app, the login screen requires your username and password only.",
  },
] as const;

export function SubActivationSteps() {
  return (
    <Section id="activation-steps">
      <SectionHeading
        title="Buy and Activate Your"
        highlight="Subscription"
      />

      <FadeIn className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch w-full relative">
          {stepsList.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between h-full"
            >
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
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
