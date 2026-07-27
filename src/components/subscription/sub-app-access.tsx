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
  Laptop,
  ArrowRight,
  ShieldCheck,
  Globe,
  AlertCircle,
  Download,
} from "lucide-react";

const supportedDevices = [
  { name: "Firestick devices", icon: Cast },
  { name: "Fire TV devices", icon: Tv },
  { name: "Android Smart TVs", icon: Tv },
  { name: "Android TV boxes", icon: Monitor },
  { name: "Google TV devices", icon: Tv },
  { name: "NVIDIA Shield", icon: Monitor },
  { name: "Android phones", icon: Smartphone },
  { name: "Android tablets", icon: Tablet },
];

const alternativePlatforms = [
  { name: "Samsung Smart TV", icon: Tv },
  { name: "LG Smart TV", icon: Tv },
  { name: "Sony television", icon: Tv },
  { name: "Apple TV", icon: Cast },
  { name: "iPhone", icon: Smartphone },
  { name: "iPad", icon: Tablet },
  { name: "Windows", icon: Monitor },
  { name: "Mac", icon: Laptop },
];

const loginFormats = ["Xtream Codes", "M3U playlist", "Portal information"];

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

export function SubAppAccess() {
  return (
    <section
      id="app-access"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Dedicated{" "}
            <span className="text-brand-gradient font-bold">App Access</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            The Sky Glass IPTV App is available for compatible Firestick, Fire TV and Android devices.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
          <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <ShieldCheck className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Sky Glass IPTV App
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {supportedDevices.map((device) => {
                  const Icon = device.icon;
                  return (
                    <div
                      key={device.name}
                      className="flex items-center gap-2.5 p-3 rounded-[12px] border border-slate-100 bg-slate-50/20"
                    >
                      <Icon className="h-4 w-4 text-[#E91E8C] shrink-0 stroke-[2]" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {device.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-[12px] border border-slate-200 bg-slate-50/30 p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Download className="h-4 w-4 text-[#E91E8C] stroke-[2]" />
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B0E2C]">
                    The application can be installed using:
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Downloader Code:{" "}
                    <span className="text-[#E91E8C] font-bold">2245820</span>
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Direct Address:{" "}
                    <a
                      href="http://aftv.news/2245820"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E91E8C] hover:underline break-all"
                    >
                      http://aftv.news/2245820
                    </a>
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                After installation, enter the username, password and server address supplied with the active account.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-6">
              <Link href="/sky-glass-iptv-installation-guide/">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-5 py-3 text-xs sm:text-sm font-semibold"
                >
                  <span>Read the complete installation guide</span>
                  <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                  <Globe className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-none">
                  Access on Samsung, LG and Apple Devices
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                Customers using another operating system can add the subscription to a compatible third-party application.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {alternativePlatforms.map((device) => {
                  const Icon = device.icon;
                  return (
                    <div
                      key={device.name}
                      className="flex items-center gap-2.5 p-3 rounded-[12px] border border-slate-100 bg-slate-50/20"
                    >
                      <Icon className="h-4 w-4 text-[#E91E8C] shrink-0 stroke-[2]" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {device.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-slate-100 pt-4 mb-6">
                <h4 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-3">
                  Alternative players may support:
                </h4>
                <ul className="space-y-2">
                  {loginFormats.map((format) => (
                    <li key={format} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {format}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 mt-6 flex items-start gap-2.5">
              <AlertCircle className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Some player developers charge a separate purchase or activation fee. That payment is not included in the subscription price and does not activate or extend the IPTV account.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
