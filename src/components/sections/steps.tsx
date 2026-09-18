"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Card, Section, SectionHeading } from "@/components/ui/section-bits";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const steps = [
  {
    title: "Choose your package",
    body: "Confirm the subscription period, device and number of simultaneous connections.",
  },
  {
    title: "Complete payment",
    body: "Our team will confirm the payment instructions for your order.",
  },
  {
    title: "Receive your login",
    body: "We activate subscriptions within two hours of payment and send your details through WhatsApp.",
  },
  {
    title: "Connect your device",
    body: "Follow the installation guide or ask us for setup assistance. Support is available 24 hours a day, and we reply as soon as possible.",
  },
] as const;

export function StartWatchingSteps() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        title="Activate Your Account Through"
        highlight="WhatsApp"
      />

      <FadeIn className="w-full mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-6 flex flex-col gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-pink-50 text-sm font-bold text-[#E91E8C]">
                {index + 1}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                {step.body}
              </p>
            </Card>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="w-full">
        <Link href={ROUTES.installation}>
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
          >
            <span>Read the Installation Guide</span>
            <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}
