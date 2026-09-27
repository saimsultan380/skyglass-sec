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
    problem: "Downloader does not open the code",
    checks: `Check the internet connection and re-enter ${DOWNLOADER_CODE}.`,
  },
  {
    problem: "Installation is blocked",
    checks: "Check whether Downloader has permission to install apps.",
  },
  {
    problem: "The app will not install",
    checks:
      "Check available storage and tell support the device model and system version.",
  },
  {
    problem: "Your login is rejected",
    checks:
      "Remove extra spaces and ask support to confirm your account status.",
  },
  {
    problem: "The app opens but categories do not load",
    checks:
      "Restart it and confirm that your trial or subscription is active.",
  },
  {
    problem: "Playback stops after using a second screen",
    checks:
      "Check whether your account allows more than one simultaneous stream.",
  },
];

export function InstTroubleshooting() {
  return (
    <section
      id="troubleshooting"
      className="w-full border-t border-slate-200 bg-white py-12 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12 w-full max-w-4xl">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C]">
              <AlertTriangle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold tracking-wider text-[#E91E8C] uppercase">
              Problem Solver
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            If Something{" "}
            <span className="text-brand-gradient font-bold">Stops Working</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C607A] sm:text-base">
            If you still need help, send support the device model, app name,
            exact error and the step where it happened. Hide your password in
            screenshots.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full overflow-hidden rounded-[12px] border border-slate-200 bg-white">
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-6 py-4.5 text-xs font-bold tracking-wider text-[#0B0E2C] uppercase sm:text-sm">
                      Problem
                    </th>
                    <th className="px-6 py-4.5 text-xs font-bold tracking-wider text-[#0B0E2C] uppercase sm:text-sm">
                      What to Check
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((row) => (
                    <tr
                      key={row.problem}
                      className="transition-colors hover:bg-slate-50/30"
                    >
                      <td className="px-6 py-4.5 text-xs font-bold text-[#0B0E2C] sm:text-sm">
                        {row.problem}
                      </td>
                      <td className="px-6 py-4.5 text-xs font-semibold text-slate-800 sm:text-sm">
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
