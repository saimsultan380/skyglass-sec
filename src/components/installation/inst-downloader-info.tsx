"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Download, Clipboard, Check, AlertCircle } from "lucide-react";

const DOWNLOADER_CODE = "2245820";
const DOWNLOAD_URL = "http://aftv.news/2245820";

export function InstDownloaderInfo() {
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
      id="downloader-info"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10 mx-auto text-center">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Official Sky Glass IPTV{" "}
            <span className="text-brand-gradient font-bold">App Information</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full max-w-3xl mx-auto">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Download className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Official Download Details
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      {DOWNLOAD_URL}
                    </span>
                    <button
                      onClick={() => copyToClipboard(DOWNLOAD_URL, false)}
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
            </div>

            <div className="border-t border-slate-100 pt-5 mt-6 space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5" />
                <p className="text-xs text-[#E91E8C] font-semibold leading-relaxed">
                  Use only the installation route published on the official website or supplied by support.
                </p>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed pl-6.5">
                The code may be updated when a new application version is released. Check the current website information when the address does not open the expected download page.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
