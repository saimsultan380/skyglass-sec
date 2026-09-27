"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DOWNLOADER_APP } from "@/lib/site";

const checklist = [
  {
    title: "Internet and storage",
    body: "Your device is connected to the internet and has space for an app.",
  },
  {
    title: "Downloader installed",
    body: `You have installed ${DOWNLOADER_APP} from the available official app store.`,
  },
  {
    title: "Account details ready",
    body: "You have requested your trial or subscription username and password from our team.",
  },
] as const;

export function InstBeforeBegin() {
  return (
    <section
      id="before-begin"
      className="w-full border-t border-slate-200 bg-white py-12 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-10 w-full max-w-4xl">
          <h2 className="text-h2 mb-4 font-bold tracking-tight text-[#0B0E2C]">
            Check These Three Things{" "}
            <span className="text-brand-gradient font-bold">First</span>
          </h2>
          <p className="text-sm leading-relaxed font-semibold text-slate-500 sm:text-base">
            The supplied APK is for compatible Firestick and Android-based
            devices. A television or device running another operating system may
            need a different player.
          </p>
        </FadeIn>

        <FadeIn className="mb-8 w-full">
          <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {checklist.map((item, index) => (
              <div
                key={item.title}
                className="iphone-glass-card flex flex-col gap-3 p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-pink-50 text-sm font-bold text-[#E91E8C]">
                  {index + 1}
                </span>
                <h3 className="text-base leading-snug font-bold text-[#0B0E2C] sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed font-semibold text-slate-800 sm:text-sm">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <Link href="#firestick">
            <Button
              variant="primary"
              className="bg-gradient-brand w-full rounded-[12px] px-5 py-3 text-xs font-semibold text-white sm:w-auto sm:text-sm"
            >
              <span>Continue to Firestick and Android steps</span>
              <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
