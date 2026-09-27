"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { KeyRound, Smartphone } from "lucide-react";
import { DOWNLOADER_CODE } from "@/lib/site";

const loginMethods = [
  {
    icon: Smartphone,
    title: "Using Our Supplied App",
    lead: "The app supplied through Skyglass-iptv.com asks for a username and password. Enter both exactly as sent, without extra spaces. You do not need to type a separate server address in this supplied app.",
    items: [
      "Installing the app alone does not give you an active account",
      `${DOWNLOADER_CODE} is a download code, not a login code`,
    ],
  },
  {
    icon: KeyRound,
    title: "Using Another Compatible Player",
    lead: "If you use another compatible IPTV player, its login screen may ask for a server URL or other details. Request the information needed by that player from support.",
    items: [
      "A name for the account or playlist",
      "Your username and password",
      "A server URL, if the player asks for one",
    ],
  },
];

const Tick = () => (
  <svg
    className="mt-0.5 h-4 w-4 shrink-0 text-[#E91E8C]"
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
      className="w-full border-t border-slate-200 bg-white py-12 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12 w-full max-w-4xl">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Sign In to Your{" "}
            <span className="text-brand-gradient font-bold">Account</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C607A] sm:text-base">
            Once your active Premium account loads, the advertised package
            contains 27,000+ live channel entries and 120,000+ on-demand film
            and series entries. Individual entries can change, and the trial
            catalogue may differ from paid access.
          </p>
        </FadeIn>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {loginMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <FadeIn
                key={method.title}
                delay={index * 0.05}
                className="flex h-full flex-col rounded-[12px] border border-slate-200 bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C]">
                    <Icon className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base leading-snug font-bold text-[#0B0E2C] sm:text-lg">
                    {method.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed font-semibold text-slate-500 sm:text-sm">
                  {method.lead}
                </p>
                {method.items.length ? (
                  <ul className="mt-4 space-y-2.5">
                    {method.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Tick />
                        <span className="text-xs leading-snug font-semibold text-slate-800 sm:text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
