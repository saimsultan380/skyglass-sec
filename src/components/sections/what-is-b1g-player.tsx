"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  ListOrdered,
  KeyRound,
  Download,
  LogIn,
  LayoutList,
} from "lucide-react";

const processSteps = [
  { name: "Select a trial or subscription.", icon: ListOrdered },
  { name: "Receive your private login information.", icon: KeyRound },
  { name: "Install the correct application.", icon: Download },
  { name: "Enter your account details.", icon: LogIn },
  { name: "Allow the available categories to load.", icon: LayoutList },
];

export function WhatIsB1GPlayer() {
  return (
    <section id="simpler-experience" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Built for Viewers Who Want a{" "}
            <span className="text-brand-gradient font-bold">Simpler IPTV Experience</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            <p>
              An IPTV service should not require hours of technical work before a customer can begin using it.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
            <div className="lg:col-span-5 flex flex-col justify-start">
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] mb-4 shrink-0">
                The platform is organised around a clear process:
              </h3>
              <div className="grid grid-cols-1 gap-3 w-full flex-1">
                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={idx}
                      data-reveal
                      data-delay={String(idx * 50)}
                      className="flex items-center gap-3 p-3 rounded-[12px] border border-slate-200 bg-white w-full"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {step.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-start">
              <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7 flex flex-col gap-4 flex-1">
                <p className="text-sm sm:text-base text-[#5C607A] leading-relaxed">
                  Customers receive a username, password and server address after activation. These details connect the selected application to the active subscription.
                </p>
                <p className="text-sm sm:text-base text-[#5C607A] leading-relaxed">
                  There is no satellite installation, engineer appointment or specialist television box required. A compatible internet-connected device and stable broadband connection are normally enough to complete the setup.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
