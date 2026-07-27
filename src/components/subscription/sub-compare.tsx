"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Info } from "lucide-react";

interface CompareRow {
  plan: string;
  price: string;
  monthlyCost: string;
  app: string;
  support: string;
}

const compareData: CompareRow[] = [
  { plan: "1 Month", price: "£12", monthlyCost: "£12.00", app: "Included", support: "Included" },
  { plan: "3 Months", price: "£22", monthlyCost: "£7.33", app: "Included", support: "Included" },
  { plan: "6 Months", price: "£30", monthlyCost: "£5.00", app: "Included", support: "Included" },
  { plan: "12 Months", price: "£45", monthlyCost: "£3.75", app: "Included", support: "Included" },
];

export function SubCompare() {
  return (
    <section
      id="compare-plans"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Compare Subscription{" "}
            <span className="text-brand-gradient font-bold">Prices</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-6">
          <div className="rounded-[12px] border border-slate-200 bg-white overflow-hidden w-full">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">Plan</th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">Price</th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">Approximate Monthly Cost</th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">App Access</th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">Support</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {compareData.map((row) => (
                    <tr key={row.plan} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#0B0E2C]">{row.plan}</td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#E91E8C]">{row.price}</td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">{row.monthlyCost}</td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                          {row.app}
                        </span>
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                          {row.support}
                        </span>
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
              Prices, promotions and package conditions should be confirmed at checkout before payment.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
