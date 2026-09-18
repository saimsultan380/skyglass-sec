"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { AlertTriangle } from "lucide-react";
import { DOWNLOADER_CODE } from "@/lib/site";

type TroubleshootingRow = {
  problem: string;
  checks: string;
};

const rows: TroubleshootingRow[] = [
  {
    problem: "Downloader cannot open the download",
    checks: `Check your internet connection and confirm that you entered ${DOWNLOADER_CODE} correctly`,
  },
  {
    problem: "Installation is blocked",
    checks: "Check whether Downloader has permission to install apps",
  },
  {
    problem: "The app will not install",
    checks:
      "Check available storage and send support your device model and software version",
  },
  {
    problem: "Username or password is rejected",
    checks:
      "Re-enter the supplied details without extra spaces and ask support to check account status",
  },
  {
    problem: "The app opens but categories are empty",
    checks:
      "Confirm that your trial or subscription is active, then refresh the player",
  },
  {
    problem: "Playback stops after using another device",
    checks:
      "Log out of the previous device and check your account’s connection allowance",
  },
  {
    problem: "A stream buffers or fails",
    checks:
      "Try another entry, restart the app and tell support whether the issue affects one stream or several",
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
            Fix Download, Login and{" "}
            <span className="text-brand-gradient font-bold">
              Playback Problems
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            When requesting help, include the device model, app name, exact
            error and a screenshot with private credentials hidden.
          </p>
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
