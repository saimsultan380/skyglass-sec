"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section-bits";
import { Headphones } from "lucide-react";
import { ROUTES } from "@/lib/seo";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsList: readonly StepItem[] = [
  {
    number: "01",
    title: "Request Programme Information",
    description: "Ask for current pricing, terms and panel features.",
  },
  {
    number: "02",
    title: "Review the Panel",
    description:
      "Request an explanation or demonstration of account creation, credits, renewals and expiry tracking.",
  },
  {
    number: "03",
    title: "Purchase Credits",
    description:
      "Accept the reseller agreement and purchase the minimum available balance.",
  },
  {
    number: "04",
    title: "Receive Panel Login Details",
    description:
      "Support will provide the account credentials needed to access the reseller panel.",
  },
  {
    number: "05",
    title: "Manage Customers",
    description:
      "Create subscriptions, monitor expiry dates and manage renewals through the panel.",
  },
];

export function ResActivation() {
  return (
    <Section id="reseller-activation">
      <SectionHeading title="How to Become a" highlight="Reseller" />

      <FadeIn className="w-full mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch w-full">
          {stepsList.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col h-full">
              <div className="rounded-[12px] border border-slate-200 bg-white p-5 flex flex-col flex-1">
                <span className="text-4xl font-extrabold text-[#E91E8C]/10 mb-3 block leading-none select-none font-heading">
                  {step.number}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5 leading-snug">
                  Step {idx + 1} – {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="w-full">
        <Link href={`${ROUTES.contact}?enquiry=reseller`}>
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
          >
            <Headphones className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
            <span>Contact Support for Reseller Login Details</span>
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}
