"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Card, Section, SectionHeading } from "@/components/ui/section-bits";
import { ArrowRight, MessageSquare } from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { DOWNLOADER_CODE, WHATSAPP_SUBSCRIPTION_HREF } from "@/lib/site";

const steps = [
  {
    title: "Choose your term",
    body: "Tell us your device model and required number of simultaneous connections.",
  },
  {
    title: "Confirm your order",
    body: "Our team confirms your order and sends the login details through WhatsApp after activation.",
  },
  {
    title: "Install the app",
    body: `For a compatible Firestick or Android-based device, follow the Sky Glass Installation Guide and enter Downloader code ${DOWNLOADER_CODE}.`,
  },
  {
    title: "Sign in and watch",
    body: "A device with another operating system may need a compatible player from its own app store.",
  },
] as const;

export function StartWatchingSteps() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        title="From Order to"
        highlight="Sign-In"
        intro={[
          "Choose your term and tell us your device model and required number of simultaneous connections. Our team confirms your order and sends the login details through WhatsApp after activation.",
        ]}
      />

      <FadeIn className="mb-8 w-full">
        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title} className="flex flex-col gap-3 p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-pink-50 text-sm font-bold text-[#E91E8C]">
                {index + 1}
              </span>
              <h3 className="text-base leading-snug font-bold text-[#0B0E2C] sm:text-lg">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed font-semibold text-slate-800 sm:text-sm">
                {step.body}
              </p>
            </Card>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="flex w-full flex-col gap-3 sm:flex-row">
        <a
          href={WHATSAPP_SUBSCRIPTION_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="primary"
            size="lg"
            className="bg-gradient-brand w-full rounded-[12px] px-6 py-3.5 text-xs font-semibold text-white sm:w-auto sm:text-sm"
          >
            <MessageSquare className="mr-2 h-4 w-4 stroke-[2.5]" />
            <span>Contact the team</span>
          </Button>
        </a>
        <Link href={ROUTES.installation}>
          <Button
            variant="outline"
            size="lg"
            className="border-gradient-brand w-full rounded-[12px] px-6 py-3.5 text-xs font-semibold sm:w-auto sm:text-sm"
          >
            <span>Install the app</span>
            <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}
