"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Download,
  AlertTriangle,
  ArrowRight,
  Clipboard,
  Check,
  ListRestart,
} from "lucide-react";

const DOWNLOADER_CODE = "2245820";
const DOWNLOADER_URL = "http://aftv.news/2245820";

const installationSteps = [
  "Install Downloader by AFTVnews.",
  "Open Downloader.",
  "Enter code 2245820.",
  "Confirm that the correct app page has opened.",
  "Download the APK.",
  "Install the application.",
  "Open the app.",
  "Enter the supplied account information.",
  "Allow the categories to load.",
];

export function DownloadApp() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const copyToClipboard = (text: string, isCode: boolean) => {
    navigator.clipboard.writeText(text);
    if (isCode) {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  return (
    <section
      id="download-app"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Download the{" "}
            <span className="text-brand-gradient font-bold">Sky Glass IPTV App</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            The Sky Glass IPTV app can be installed on compatible Android and Fire TV devices through Downloader.
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
            
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-6 flex-1 justify-between">
                
                <div className="space-y-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                      <Download className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                      Downloader Credentials
                    </h3>
                  </div>

                  <div className="p-4 rounded-[12px] border border-slate-100 bg-slate-50/50">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Downloader Code
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-[#E91E8C] tracking-tight">
                        {DOWNLOADER_CODE}
                      </span>
                      <button
                        onClick={() => copyToClipboard(DOWNLOADER_CODE, true)}
                        className="text-slate-400 hover:text-[#E91E8C] transition-colors p-1.5 rounded-lg border border-slate-200 bg-white"
                        title="Copy Code"
                      >
                        {copiedCode ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clipboard className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-[12px] border border-slate-100 bg-slate-50/50">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Direct Download Address
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 break-all select-all font-mono">
                        {DOWNLOADER_URL}
                      </span>
                      <button
                        onClick={() => copyToClipboard(DOWNLOADER_URL, false)}
                        className="text-slate-400 hover:text-[#E91E8C] transition-colors p-1.5 rounded-lg border border-slate-200 bg-white shrink-0"
                        title="Copy URL"
                      >
                        {copiedUrl ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clipboard className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#E91E8C] font-semibold leading-relaxed">
                      Use only the code or address published on the official website or provided directly by support.
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-6.5 font-semibold">
                    Avoid APK files shared through unknown websites, public comments, unofficial groups or unverified file-sharing pages.
                  </p>
                </div>

              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                      <ListRestart className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                      Basic Installation Process
                    </h3>
                  </div>

                  <ol className="space-y-3.5">
                    {installationSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E91E8C] font-bold text-xs">
                          {idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug pt-0.5">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6">
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    After the first setup, the account can normally be opened directly without entering the same details each time.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-[#5C607A] leading-relaxed max-w-2xl">
              Need detailed setup assistance? Follow the complete installation guide for step-by-step device instructions.
            </p>

            <Link href="/sky-glass-iptv-installation-guide/" className="shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto rounded-[12px] bg-gradient-brand text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>Read the complete installation guide</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
