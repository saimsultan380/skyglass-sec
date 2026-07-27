"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsList: StepItem[] = [
  {
    number: "01",
    title: "Submit Your Information",
    description:
      "Provide: full name, business name, country, customer market, expected monthly activations, preferred package and previous reseller experience.",
  },
  {
    number: "02",
    title: "Review the Terms",
    description:
      "Confirm: credit quantity, package price, credit usage, refund policy, top-up rules, support responsibilities and supported countries.",
  },
  {
    number: "03",
    title: "Choose a Package",
    description: "Select a quantity based on realistic customer demand.",
  },
  {
    number: "04",
    title: "Receive Panel Access",
    description: "After approval and confirmation, receive the private reseller login.",
  },
  {
    number: "05",
    title: "Learn the Dashboard",
    description:
      "Review account creation, renewal, expiry tracking and credit usage.",
  },
  {
    number: "06",
    title: "Begin Activating Customers",
    description:
      "Create accounts only after confirming the customer's plan, device and payment.",
  },
];

export function ResActivation() {
  return (
    <section
      id="reseller-activation"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            How to{" "}
            <span className="text-brand-gradient font-bold">Apply</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
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
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-[#5C607A] font-semibold leading-relaxed">
              Review customer subscription plans before choosing a reseller package.
            </p>
            <Link href="/sky-glass-iptv-subscription/" className="shrink-0 w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-5 py-3 text-xs sm:text-sm font-semibold"
              >
                <span>View Subscription Plans</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
