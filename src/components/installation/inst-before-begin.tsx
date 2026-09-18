"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { DOWNLOADER_CODE } from "@/lib/site";

const setupMethods = [
  {
    device: "Android TV, Google TV, Android box, phone or tablet with Google Play",
    method: `Install Downloader by AFTVnews, then enter ${DOWNLOADER_CODE}`,
  },
  {
    device: "Compatible Firestick or Fire TV running Fire OS",
    method: `Install Downloader from the Amazon Appstore, then enter ${DOWNLOADER_CODE}`,
  },
  {
    device: "Supported Samsung, LG or another non-Android Smart TV",
    method: "Install a compatible player from the television’s app store",
  },
  {
    device: "Another Xtream-compatible device",
    method: "Use its supported player and request the required account details",
  },
] as const;

export function InstBeforeBegin() {
  return (
    <section
      id="before-begin"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] mb-4">
            Choose the Setup Method for{" "}
            <span className="text-brand-gradient font-bold">Your Device</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
            For a Smart TV running Android TV or Google TV, follow the Android
            instructions below.
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="rounded-[12px] border border-slate-200 bg-white overflow-hidden w-full">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                      Device
                    </th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                      Installation method
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {setupMethods.map((row) => (
                    <tr
                      key={row.device}
                      className="hover:bg-slate-50/30 transition-colors"
                    >
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#0B0E2C]">
                        {row.device}
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                        {row.method}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <Link href="#device-guides">
            <Button
              variant="primary"
              className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-5 py-3 text-xs sm:text-sm font-semibold"
            >
              <span>Continue to Device Instructions</span>
              <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
