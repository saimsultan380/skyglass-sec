"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { KeyRound, Smartphone } from "lucide-react";

const loginMethods = [
  {
    icon: Smartphone,
    title: "Using Our Supplied App",
    lead: "Enter the username and password we send through WhatsApp. You do not need to enter a server address in this app.",
    items: [
      "Copy the details carefully and check for accidental spaces",
      "Downloading the app alone does not create an active viewing account",
    ],
  },
  {
    icon: KeyRound,
    title: "Using Another Xtream-Compatible Player",
    lead: "You can use an alternative supported player. Its account screen may ask for:",
    items: [
      "A name for the account or playlist",
      "Your username",
      "Your password",
      "A server URL",
    ],
  },
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

export function InstSecureLogin() {
  return (
    <section
      id="secure-login"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Sign In to Your{" "}
            <span className="text-brand-gradient font-bold">
              Sky Glass Account
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Ask support for the connection details required by your player. The
            extra server field in a third-party app does not change the
            username-and-password-only login in our supplied app. Apple devices
            and computers require a player designed for their operating system;
            the Android APK is not their installation method.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full">
          {loginMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <FadeIn
                key={method.title}
                delay={index * 0.05}
                className="rounded-[12px] border border-slate-200 bg-white p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <Icon className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-snug">
                    {method.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  {method.lead}
                </p>
                {method.items.length ? (
                  <ul className="space-y-2.5 mt-4">
                    {method.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Tick />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
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
