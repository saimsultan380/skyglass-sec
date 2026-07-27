"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { KeyRound, ShieldAlert, Hourglass } from "lucide-react";

const usernameChecks = [
  "Uppercase letters",
  "Lowercase letters",
  "Numbers",
  "Similar characters such as 0 and O",
];

const serverUrlRules = [
  "Remove the protocol",
  "Change the domain",
  "Remove a port number",
  "Add an unnecessary slash",
  "Replace punctuation",
];

const profileNames = ["Main TV", "Firestick", "Living Room", "Bedroom", "IPTV Account"];

const loadAssets = [
  "Live TV categories",
  "Channel information",
  "Movies",
  "Series",
  "Programme-guide data",
  "Channel logos",
  "Posters",
  "Account information",
];

const loadFactors = [
  "Device performance",
  "Broadband connection",
  "Account size",
  "Player efficiency",
  "Available storage",
];

const WarningDot = () => (
  <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#E91E8C] mt-2" />
);

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

export function InstSecureLogin() {
  return (
    <section
      id="secure-login"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Entering Your Login{" "}
            <span className="text-brand-gradient font-bold">Correctly</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <KeyRound className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#0B0E2C]">Username</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
              Enter every character exactly as supplied. Check:
            </p>
            <ul className="space-y-2">
              {usernameChecks.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.05} className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="text-base font-bold text-[#0B0E2C] mb-4">Password</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Do not add spaces before or after the password. Copying and pasting can sometimes add an invisible space.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="text-base font-bold text-[#0B0E2C] mb-4">Server URL</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
              Enter the entire address. Do not:
            </p>
            <ul className="space-y-2">
              {serverUrlRules.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <WarningDot />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15} className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="text-base font-bold text-[#0B0E2C] mb-4">Profile Name</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
              The profile name can be something simple:
            </p>
            <div className="flex flex-wrap gap-2">
              {profileNames.map((name) => (
                <span
                  key={name}
                  className="text-xs font-bold text-[#E91E8C] bg-pink-50 px-3 py-1 rounded-full border border-pink-100"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 font-semibold mt-4 leading-relaxed">
              The profile name does not change the login.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          <FadeIn className="lg:col-span-7 rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <Hourglass className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                What Happens During the First Load?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
              The initial login may take longer while the application downloads:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {loadAssets.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-3 leading-relaxed">
              The time required depends on:
            </p>
            <ul className="space-y-2 mb-6">
              {loadFactors.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4 flex items-start gap-2">
              <ShieldAlert className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5" />
              <p className="text-xs text-[#E91E8C] font-semibold leading-relaxed">
                Avoid repeatedly closing the application during the first load.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
