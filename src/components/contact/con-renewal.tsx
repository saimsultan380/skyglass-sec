"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const renewalItems = [
  "Current username",
  "Existing plan",
  "Required duration",
  "Number of connections",
  "Current expiry date",
  "Preferred contact method",
];

const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function ConRenewal() {
  return (
    <section
      id="renewal-requests"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
              <RefreshCw className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
              Renewal Requests
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
            When requesting a renewal, include:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {renewalItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Tick />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed border-t border-slate-100 pt-5 mb-6">
            Keep the application installed unless support tells you that a new version is required.
          </p>

          <Link href="#contact-form">
            <Button
              variant="outline"
              className="rounded-[12px] border-gradient-brand px-5 py-3 text-xs sm:text-sm font-semibold"
            >
              Renew an existing account
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
