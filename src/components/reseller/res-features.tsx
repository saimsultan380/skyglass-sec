"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  UserPlus,
  Coins,
  Calendar,
  RefreshCw,
  Clock,
  Key,
  Share2,
  Lock,
} from "lucide-react";

interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const featuresList: FeatureCard[] = [
  {
    title: "Customer Creation",
    desc: "Create an account after confirming customer name, device, duration, number of connections, payment and contact information.",
    icon: UserPlus,
  },
  {
    title: "Credit Management",
    desc: "View available credits and the cost associated with each account type.",
    icon: Coins,
  },
  {
    title: "Expiry Tracking",
    desc: "Monitor expiry dates and contact customers before their accounts end.",
    icon: Calendar,
  },
  {
    title: "Renewals",
    desc: "Extend eligible accounts using the required number of credits.",
    icon: RefreshCw,
  },
  {
    title: "Trial Accounts",
    desc: "Create limited trials where allowed by the panel rules.",
    icon: Key,
  },
  {
    title: "Connection Options",
    desc: "Choose the correct connection allowance when several packages are available.",
    icon: Share2,
  },
  {
    title: "Secure Login",
    desc: "Keep the panel username and password private. Do not share reseller access with customers or unauthorised staff.",
    icon: Lock,
  },
  {
    title: "Account Review",
    desc: "Review active accounts and account information through the dashboard.",
    icon: Clock,
  },
];

export function ResFeatures() {
  return (
    <section
      id="panel-features"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            Reseller Panel{" "}
            <span className="text-brand-gradient font-bold">Features</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
            {featuresList.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-[12px] border border-slate-200 bg-white p-5 flex flex-col h-full hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B0E2C] leading-none font-heading">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
