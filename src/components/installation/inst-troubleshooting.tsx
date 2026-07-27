"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { AlertTriangle, RefreshCw, AlertCircle } from "lucide-react";

interface TroubleshootingItem {
  title: string;
  checks: string[];
  footerText?: string;
}

const troubleshootList: TroubleshootingItem[] = [
  {
    title: "Downloader Code Does Not Work",
    checks: [
      "Check that the code is 2245820",
      "Downloader has internet access",
      "The device clock is correct",
      "You installed the genuine AFTVnews application",
      "The network is not blocking the address",
      "The code has not been updated",
    ],
    footerText: "Contact support for the current route when the problem continues.",
  },
  {
    title: "The App Will Not Install",
    checks: [
      "Free device storage",
      "External-installation permission",
      "Device compatibility",
      "Completed download",
      "Existing app version",
      "Android software version",
    ],
    footerText: "Restart the device and try again using the official download route.",
  },
  {
    title: "Login Information Is Rejected",
    checks: [
      "Username",
      "Password",
      "Capitalisation",
      "Server URL",
      "Extra spaces",
      "Expiry date",
      "Account status",
    ],
    footerText: "Enter the details manually when copy and paste repeatedly fails.",
  },
  {
    title: "Categories Do Not Load",
    checks: [
      "Waiting longer",
      "Restarting the application",
      "Restarting the device",
      "Restarting the router",
      "Checking the internet connection",
      "Confirming that the account is active",
      "Removing and re-adding the profile",
    ],
  },
  {
    title: "Buffering and Playback Problems",
    checks: [
      "Ethernet instead of Wi-Fi",
      "Moving closer to the router",
      "Restarting the broadband equipment",
      "Closing downloads",
      "Disconnecting unused devices",
      "Selecting a lower-quality source",
      "Testing another channel",
      "Clearing temporary player data",
      "Restarting the app",
    ],
    footerText: "If one channel fails but others work, the issue may affect only that source.",
  },
  {
    title: "EPG Does Not Display",
    checks: [
      "Refresh the EPG",
      "Update the playlist",
      "Restart the player",
      "Check the device date and time",
      "Wait for synchronisation",
    ],
    footerText: "Not every channel provides complete guide information.",
  },
  {
    title: "Third-Party Player Asks for Payment",
    checks: [
      "The fee is paid to the player developer",
      "It does not activate the IPTV subscription",
      "It does not extend the account",
      "It may be a one-time or recurring charge",
    ],
    footerText: "Confirm compatibility before purchasing a player licence.",
  },
];

const updateSteps = [
  "Save the login information",
  "Confirm that the account is active",
  "Check whether the old app must be removed",
  "Avoid unofficial update links",
  "Allow installation to complete",
  "Restart the device afterwards",
];

const reinstallTriggers = [
  "Failed update",
  "Device reset",
  "App corruption",
  "Storage problem",
  "Repeated crashes",
  "Operating-system change",
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
            Installation{" "}
            <span className="text-brand-gradient font-bold">Troubleshooting</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {troubleshootList.map((item) => (
              <div
                key={item.title}
                className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full hover:border-slate-300 transition-colors"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold mb-2">Try:</p>
                  <ul className="space-y-2 mb-4">
                    {item.checks.map((check) => (
                      <li key={check} className="flex items-start gap-2">
                        <Tick />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {check}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {item.footerText && (
                  <div className="border-t border-slate-100 pt-3 mt-3 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#E91E8C] font-semibold leading-relaxed">
                      {item.footerText}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
          <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <RefreshCw className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                Updating the App
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
              Use the approved download route when a newer version becomes available. Before updating:
            </p>
            <ul className="space-y-3">
              {updateSteps.map((step) => (
                <li key={step} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                <RefreshCw className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                Reinstalling the Application
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
              Reinstallation may help after:
            </p>
            <ul className="space-y-3 mb-6">
              {reinstallTriggers.map((step) => (
                <li key={step} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4">
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Keep the username, password and server address before deleting the app. Use the same active account information after reinstalling unless support has issued new details.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
