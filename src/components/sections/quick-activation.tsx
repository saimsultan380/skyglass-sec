"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Zap,
  KeyRound,
  CalendarClock,
  ShieldCheck,
  LayoutList,
  Tv,
  Link2,
} from "lucide-react";

const activationItems = [
  { label: "Creating or assigning the account", icon: KeyRound },
  { label: "Confirming the selected duration", icon: CalendarClock },
  { label: "Preparing login information", icon: ShieldCheck },
  { label: "Supplying installation instructions", icon: LayoutList },
  { label: "Confirming supported devices", icon: Tv },
  { label: "Providing the current expiry date", icon: Link2 },
];

export function QuickActivation() {
  return (
    <section
      id="quick-activation"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Quick Activation Without{" "}
            <span className="text-brand-gradient font-bold">Complicated Equipment</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Most accounts can be prepared shortly after the order has been confirmed and the required customer information has been received.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <Zap className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C]">
                Activation normally includes:
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {activationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-pink-50 text-[#E91E8C] mt-0.5">
                      <Icon className="h-3 w-3 stroke-[2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-slate-100 pt-4 space-y-3 text-xs sm:text-sm text-[#5C607A] leading-relaxed">
              <p>
                Activation may take longer when order information is incomplete, payment requires confirmation or support demand is unusually high.
              </p>
              <p>
                Customers should keep their username, password and server address private.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
