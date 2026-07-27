"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { AlertCircle, FileText, CheckCircle } from "lucide-react";

const detailsList = [
  "Full name",
  "Email or WhatsApp number",
  "Device type",
  "Device model",
  "Application name",
  "Trial or paid-account status",
  "Username or order reference",
  "Exact error message",
  "Description of the problem",
  "Steps already attempted",
];

const doNotSend = [
  "Payment-card details",
  "Banking passwords",
  "Passwords for unrelated accounts",
  "Private information through public comments",
];

const preChecks = [
  "Restarting the application",
  "Restarting the device",
  "Restarting the router",
  "Checking the username",
  "Checking the password",
  "Checking the server URL",
  "Removing accidental spaces",
  "Confirming that the account is active",
  "Testing another channel",
  "Waiting for the first load",
  "Updating the application",
];

const scopeList = [
  "One channel",
  "One category",
  "All live television",
  "Movies or series",
  "Login",
  "Installation",
  "EPG",
  "The entire account",
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

const WarningDot = () => (
  <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#E91E8C] mt-2" />
);

export function ConWhatToInclude() {
  return (
    <section
      id="pre-contact-checks"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          <FadeIn className="lg:col-span-5 rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <FileText className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
                What to Include in Your Message
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
              Provide:
            </p>

            <ul className="space-y-3 mb-6">
              {detailsList.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-4">
              <p className="text-xs sm:text-sm font-bold text-[#E91E8C] mb-3">Do not send:</p>
              <ul className="space-y-2">
                {doNotSend.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <WarningDot />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7 rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <CheckCircle className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none font-heading">
                Before Contacting Technical Support
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
              Try:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {preChecks.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-5">
              <h4 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-3">
                Explain whether the issue affects:
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {scopeList.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#E91E8C]" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
