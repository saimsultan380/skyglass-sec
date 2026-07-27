"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, HelpCircle } from "lucide-react";

const provideList = [
  "Correct installation route",
  "Username",
  "Password",
  "Server address",
  "Subscription duration",
  "Expiry date",
  "Basic login help",
  "Your support details",
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

export function ResSupport() {
  return (
    <section
      id="reseller-support"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            Helping Customers Install the{" "}
            <span className="text-brand-gradient font-bold">App</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          <FadeIn className="lg:col-span-5 rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <Download className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
                Firestick & Android
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
              Customers using compatible Firestick or Android hardware can use:
            </p>

            <div className="rounded-[12px] border border-slate-200 bg-slate-50/30 p-4 mb-6 space-y-2">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Downloader Code:{" "}
                <span className="text-[#E91E8C] font-bold">2245820</span>
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 break-all">
                Direct Address:{" "}
                <a
                  href="http://aftv.news/2245820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E91E8C] hover:underline"
                >
                  http://aftv.news/2245820
                </a>
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
              For Samsung, LG, Apple, Windows or Mac, recommend an appropriate alternative application.
            </p>

            <Link href="/sky-glass-iptv-installation-guide/">
              <Button
                variant="primary"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-5 py-3 text-xs sm:text-sm font-semibold"
              >
                <span>Read the complete installation guide</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7 rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <HelpCircle className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
                Provide:
              </h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {provideList.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
