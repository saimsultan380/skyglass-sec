"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsList: StepItem[] = [
  {
    number: "01",
    title: "Choose a Plan",
    description: "Select 1 month, 3 months, 6 months or 12 months.",
  },
  {
    number: "02",
    title: "Complete Your Order",
    description: "Provide the information required to process the account.",
  },
  {
    number: "03",
    title: "Receive Your Login",
    description: "After confirmation, receive your username, password and server address.",
  },
  {
    number: "04",
    title: "Install the Correct Application",
    description: "Use the dedicated app on supported Firestick and Android devices or choose a compatible alternative player.",
  },
  {
    number: "05",
    title: "Add Your Account",
    description: "Enter the supplied information and allow the content categories to load.",
  },
];

export function SubActivationSteps() {
  return (
    <section
      id="activation-steps"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            How Subscription{" "}
            <span className="text-brand-gradient font-bold">Activation Works</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch w-full relative">
            {stepsList.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col justify-between h-full">
                {idx < 4 && (
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
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm text-[#5C607A] leading-relaxed max-w-4xl">
            Most orders can be prepared quickly, although activation time can vary during busy periods or when information is incomplete.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
