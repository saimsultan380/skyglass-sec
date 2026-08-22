"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Info } from "lucide-react";

interface CompareRow {
  plan: string;
  totalPrice: string;
  monthlyCost: string;
  bestFor: string;
}

const compareData: CompareRow[] = [
  {
    plan: "1 Month",
    totalPrice: "£12",
    monthlyCost: "£12.00",
    bestFor: "Shortest paid commitment",
  },
  {
    plan: "3 Months",
    totalPrice: "£22",
    monthlyCost: "£7.33",
    bestFor: "A medium-length subscription",
  },
  {
    plan: "6 Months",
    totalPrice: "£30",
    monthlyCost: "£5.00",
    bestFor: "Six months at a lower monthly equivalent",
  },
  {
    plan: "12 Months",
    totalPrice: "£45",
    monthlyCost: "£3.75",
    bestFor: "Lowest equivalent monthly cost",
  },
];

const headers = [
  "Plan",
  "Total Price",
  "Equivalent Monthly Cost",
  "Best For",
] as const;

export function SubCompare() {
  return (
    <section
      id="compare-plans"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Compare{" "}
            <span className="text-brand-gradient font-bold">Sky Glass IPTV Plans</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-6">
          <div className="rounded-[12px] border border-slate-200 bg-white overflow-hidden w-full">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {headers.map((header) => (
                      <th
                        key={header}
                        className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C] whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {compareData.map((row) => (
                    <tr key={row.plan} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#0B0E2C] whitespace-nowrap">
                        {row.plan}
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#E91E8C] whitespace-nowrap">
                        {row.totalPrice}
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800 whitespace-nowrap">
                        {row.monthlyCost}
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                        {row.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="flex items-start gap-2.5 px-2">
            <Info className="h-4.5 w-4.5 text-[#E91E8C] shrink-0 mt-0.5 stroke-[2.5]" />
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Equivalent monthly prices are for comparison. The full plan price is paid upfront.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
