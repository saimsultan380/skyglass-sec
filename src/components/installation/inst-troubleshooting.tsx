"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { AlertTriangle } from "lucide-react";

type TroubleshootingRow = {
  problem: string;
  checks: string;
};

const rows: TroubleshootingRow[] = [
  {
    problem: "Login rejected",
    checks:
      "Re-enter the username, password and server address without spaces",
  },
  {
    problem: "No categories appear",
    checks:
      "Check internet access and allow the initial loading process to finish",
  },
  {
    problem: "EPG is empty",
    checks: "Refresh EPG data and wait for the update",
  },
  {
    problem: "Frequent buffering",
    checks: "Test internet speed, Wi-Fi signal and another available entry",
  },
  {
    problem: "App closes",
    checks: "Restart the device, clear the app cache and check storage",
  },
  {
    problem: "Connection not allowed",
    checks: "Confirm that purchased connection limits are not exceeded",
  },
  {
    problem: "APK will not install",
    checks: "Confirm the device uses Android and allows installation",
  },
  {
    problem: "Smart TV player is empty",
    checks: "Recheck the MAC address and device key sent to support",
  },
  {
    problem: "Password fails",
    checks: "Check similar characters such as O/0 and I/l",
  },
  {
    problem: "Account expired",
    checks: "Contact support to check renewal options",
  },
];

export function InstTroubleshooting() {
  return (
    <section
      id="troubleshooting"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
              <AlertTriangle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E91E8C]">
              Problem Solver
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            <span className="text-brand-gradient font-bold">Troubleshooting</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white overflow-hidden w-full">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                      Problem
                    </th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                      What to Check
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((row) => (
                    <tr
                      key={row.problem}
                      className="hover:bg-slate-50/30 transition-colors"
                    >
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#0B0E2C]">
                        {row.problem}
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                        {row.checks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
