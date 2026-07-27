"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Layers, Check } from "lucide-react";

interface ResellerPackage {
  id: string;
  name: string;
  price: string;
  credits: string;
  description: string;
  ctaText: string;
  isRecommended?: boolean;
  features: string[];
}

const packagesList: ResellerPackage[] = [
  {
    id: "starter",
    name: "Starter Package",
    price: "[ADD CURRENT PRICE]",
    credits: "[ADD CREDIT QUANTITY]",
    description: "Suitable for new resellers testing genuine demand.",
    ctaText: "Choose Starter Package",
    features: [
      "Entry-level credit allocation",
      "Panel access",
      "Customer creation",
      "Renewal tools",
      "Installation resources",
      "Standard reseller assistance",
    ],
  },
  {
    id: "professional",
    name: "Professional Package",
    price: "[ADD CURRENT PRICE]",
    credits: "[ADD CREDIT QUANTITY]",
    description: "Suitable for regular account activation.",
    ctaText: "Choose Professional Package",
    isRecommended: true,
    features: [
      "Higher credit allocation",
      "Account creation",
      "Renewal management",
      "Trial creation where available",
      "Credit top-ups",
      "Standard panel assistance",
    ],
  },
  {
    id: "business",
    name: "Business Package",
    price: "Contact the Reseller Team",
    credits: "Custom",
    description: "Suitable for established resellers handling greater volume.",
    ctaText: "Discuss Business Access",
    features: [
      "Custom credit allocation",
      "Higher activation capacity",
      "Account-management tools",
      "Additional top-ups",
      "Priority assistance where available",
    ],
  },
];

export function ResPackages() {
  return (
    <section
      id="reseller-packages"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-4">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            Reseller{" "}
            <span className="text-brand-gradient font-bold">Packages</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full max-w-4xl mb-12">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            Replace the fields below with the current verified credit and price information.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
            {packagesList.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-[12px] border bg-white p-6 sm:p-8 transition-all duration-200 ${
                  pkg.isRecommended
                    ? "border-[#E91E8C] ring-1 ring-[#E91E8C]"
                    : "border-slate-200"
                }`}
              >
                {pkg.isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-brand text-[10px] font-bold text-white uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Layers
                      className={`h-4 w-4 shrink-0 ${
                        pkg.isRecommended ? "text-[#E91E8C]" : "text-slate-400"
                      }`}
                    />
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B0E2C] tracking-wide uppercase">
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Price
                    </span>
                    <span className="text-2xl font-extrabold text-[#0B0E2C] tracking-tight font-heading block">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mt-3 mb-1">
                      Credits
                    </span>
                    <span className="text-sm font-bold text-[#E91E8C] bg-pink-50/50 px-2.5 py-0.5 rounded-md border border-pink-100 inline-block">
                      {pkg.credits}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-2">
                    {pkg.description}
                  </p>
                  <p className="text-xs text-slate-400 font-semibold mb-6">May include:</p>

                  <ul className="space-y-3 mb-8 border-t border-slate-100 pt-5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            pkg.isRecommended
                              ? "bg-pink-50 text-[#E91E8C]"
                              : "bg-slate-50 text-slate-400"
                          }`}
                        >
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.id === "business" ? (
                  <Link href="/contact/">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full rounded-[12px] py-3.5 text-xs sm:text-sm font-semibold border-gradient-brand"
                    >
                      {pkg.ctaText}
                    </Button>
                  </Link>
                ) : (
                  <Link href="/contact/">
                    <Button
                      variant={pkg.isRecommended ? "primary" : "outline"}
                      size="lg"
                      className={`w-full rounded-[12px] py-3.5 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                        pkg.isRecommended
                          ? "bg-gradient-brand text-white hover:opacity-95 shadow-none"
                          : "border-gradient-brand"
                      }`}
                    >
                      {pkg.ctaText}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
