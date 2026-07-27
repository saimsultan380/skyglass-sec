"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Tv,
  Monitor,
  Cast,
  Smartphone,
  Tablet,
  Cpu,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Globe,
} from "lucide-react";

const officialDevices = [
  { name: "Amazon Firestick", icon: Cast },
  { name: "Fire TV", icon: Tv },
  { name: "Android Smart TVs", icon: Tv },
  { name: "Android TV boxes", icon: Monitor },
  { name: "Google TV devices", icon: Cast },
  { name: "NVIDIA Shield", icon: Cpu },
  { name: "Android smartphones", icon: Smartphone },
  { name: "Android tablets", icon: Tablet },
];

const alternativeDevices = [
  { name: "Samsung Smart TVs", icon: Tv },
  { name: "LG Smart TVs", icon: Tv },
  { name: "Sony televisions", icon: Tv },
  { name: "Hisense televisions", icon: Tv },
  { name: "TCL televisions", icon: Tv },
  { name: "Apple TV", icon: Cast },
  { name: "iPhone", icon: Smartphone },
  { name: "iPad", icon: Tablet },
  { name: "Windows PCs", icon: Monitor },
  { name: "Mac computers", icon: Laptop },
  { name: "MAG devices", icon: Cpu },
  { name: "Enigma2 receivers", icon: Monitor },
  { name: "Other compatible IPTV hardware", icon: Cpu },
];

const loginMethods = ["Xtream Codes login", "M3U playlist", "Portal information"];

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

export function CompatibleDevices() {
  return (
    <section
      id="compatible-devices"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Devices Supported by{" "}
            <span className="text-brand-gradient font-bold">Sky Glass IPTV</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            Sky Glass IPTV is compatible with a broad range of televisions, streaming devices, smartphones, tablets and computers.
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
            
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <ShieldCheck className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                    Dedicated App Devices
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold leading-relaxed">
                  The dedicated Android application is intended for:
                </p>

                <div className="grid grid-cols-2 gap-3 w-full">
                  {officialDevices.map((device, idx) => {
                    const Icon = device.icon;
                    return (
                      <div
                        key={idx}
                        data-reveal
                        data-delay={String((idx % 2) * 100)}
                        className="flex items-center gap-3 p-3 rounded-[12px] border border-slate-100 bg-white"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                          <Icon className="h-4 w-4 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {device.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  These devices support direct installation of the dedicated Sky Glass IPTV app.
                </p>
              </div>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                    <Globe className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                    Alternative-Player Devices
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold leading-relaxed">
                  A compatible third-party application may be used on:
                </p>

                <div className="grid grid-cols-2 gap-3 w-full mb-6">
                  {alternativeDevices.map((device, idx) => {
                    const Icon = device.icon;
                    return (
                      <div
                        key={idx}
                        data-reveal
                        data-delay={String((idx % 2) * 100)}
                        className="flex items-center gap-3 p-3.5 rounded-[12px] border border-slate-100 bg-white"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                          <Icon className="h-4 w-4 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {device.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-3">
                    Alternative applications may support:
                  </h4>
                  <ul className="space-y-2">
                    {loginMethods.map((method, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Tick />
                        <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                          {method}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Some third-party applications charge their own activation fee. That payment is separate from the IPTV subscription.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-[#5C607A] leading-relaxed max-w-2xl">
              Review configuration tutorials and setup instructions for installing the relevant players on your preferred device.
            </p>

            <Link href="/sky-glass-iptv-installation-guide/" className="shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto rounded-[12px] bg-gradient-brand text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>View compatible devices</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
