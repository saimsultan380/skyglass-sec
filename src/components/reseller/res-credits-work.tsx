"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Card,
  CardTitle,
  Footnote,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { Coins } from "lucide-react";
import { RESELLER_MINIMUM_CREDITS } from "@/lib/site";

const creditTable = [
  { subscription: "1 Month", credits: "1 Credit" },
  { subscription: "3 Months", credits: "3 Credits" },
  { subscription: "6 Months", credits: "6 Credits" },
  { subscription: "12 Months", credits: "12 Credits" },
] as const;

const balanceUses = [
  "120 one-month subscriptions",
  "40 three-month subscriptions",
  "20 six-month subscriptions",
  "10 twelve-month subscriptions",
  "A mixed combination of available durations",
] as const;

export function ResCreditsWork() {
  return (
    <Section id="credits-work">
      <SectionHeading title="How Credits" highlight="Work" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white overflow-hidden w-full">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                      Subscription
                    </th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                      Credits Required
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {creditTable.map((row) => (
                    <tr
                      key={row.subscription}
                      className="hover:bg-slate-50/30 transition-colors"
                    >
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#0B0E2C]">
                        {row.subscription}
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-[#E91E8C]">
                        {row.credits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="w-full">
          <Card className="p-6 sm:p-7">
            <CardTitle icon={Coins}>
              A balance of {RESELLER_MINIMUM_CREDITS} credits could be used for:
            </CardTitle>
            <TickList items={balanceUses} />
            <div className="border-t border-slate-100 pt-4 mt-6">
              <Footnote>
                These calculations explain credit usage. They do not guarantee customers, revenue or profit.
              </Footnote>
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
