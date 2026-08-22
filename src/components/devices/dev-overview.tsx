"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Section, SectionHeading } from "@/components/ui/section-bits";
import { ListChecks } from "lucide-react";
import { DOWNLOADER_CODE } from "@/lib/site";

type CompatibilityRow = {
  device: string;
  method: string;
  login: string;
};

const rows: CompatibilityRow[] = [
  {
    device: "Firestick",
    method: `Downloader by AFTVnews, code ${DOWNLOADER_CODE}`,
    login: "Provided by support",
  },
  {
    device: "Fire TV Cube",
    method: `Downloader by AFTVnews, code ${DOWNLOADER_CODE}`,
    login: "Provided by support",
  },
  {
    device: "Android TV",
    method: `Google Play Downloader, code ${DOWNLOADER_CODE}`,
    login: "Provided by support",
  },
  {
    device: "Google TV",
    method: `Google Play Downloader, code ${DOWNLOADER_CODE}`,
    login: "Provided by support",
  },
  {
    device: "Android box",
    method: `Downloader code ${DOWNLOADER_CODE}`,
    login: "Provided by support",
  },
  {
    device: "Android phone/tablet",
    method: "Downloader or supported installation link",
    login: "Provided by support",
  },
  {
    device: "Samsung Smart TV",
    method: "CR7, IBO, SmartOne or HOT IPTV",
    login: "Support configuration",
  },
  {
    device: "LG Smart TV",
    method: "CR7, IBO, SmartOne or HOT IPTV",
    login: "Support configuration",
  },
  {
    device: "Sony Android/Google TV",
    method: `Downloader code ${DOWNLOADER_CODE}`,
    login: "Provided by support",
  },
  {
    device: "Hisense Android/Google TV",
    method: `Downloader code ${DOWNLOADER_CODE}`,
    login: "Provided by support",
  },
  {
    device: "Hisense VIDAA",
    method: "Compatible television player",
    login: "Support configuration",
  },
  {
    device: "TCL Android/Google TV",
    method: `Downloader code ${DOWNLOADER_CODE}`,
    login: "Provided by support",
  },
  {
    device: "Philips Android/Google TV",
    method: `Downloader code ${DOWNLOADER_CODE}`,
    login: "Provided by support",
  },
  {
    device: "iPhone and iPad",
    method: "Compatible App Store player",
    login: "Provided by support",
  },
  {
    device: "Apple TV",
    method: "Compatible tvOS player",
    login: "Provided by support",
  },
  {
    device: "Windows",
    method: "Compatible desktop player",
    login: "Provided by support",
  },
  {
    device: "Mac",
    method: "Compatible macOS player",
    login: "Provided by support",
  },
  { device: "MAG", method: "Portal setup", login: "Portal from support" },
  {
    device: "Formuler",
    method: "MYTVOnline",
    login: "Portal or login from support",
  },
  {
    device: "Enigma2",
    method: "Device-specific setup",
    login: "Provided by support",
  },
  {
    device: "Roku",
    method: "Compatibility check required",
    login: "Method confirmed by support",
  },
  {
    device: "Sky Glass TV",
    method: "External Firestick or Android device",
    login: "Provided by support",
  },
];

export function DevOverview() {
  return (
    <Section id="compatibility-overview">
      <SectionHeading
        eyebrow="Compatibility Overview"
        eyebrowIcon={ListChecks}
        title="Installation Method by"
        highlight="Device"
      />

      <FadeIn className="w-full mb-6">
        <div className="rounded-[12px] border border-slate-200 bg-white overflow-hidden w-full">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C] whitespace-nowrap">
                    Device
                  </th>
                  <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                    Installation Method
                  </th>
                  <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                    Login Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((row) => (
                  <tr
                    key={row.device}
                    className="hover:bg-slate-50/30 transition-colors"
                  >
                    <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#0B0E2C] whitespace-nowrap">
                      {row.device}
                    </td>
                    <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                      {row.method}
                    </td>
                    <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100 whitespace-nowrap">
                        {row.login}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>

    </Section>
  );
}
