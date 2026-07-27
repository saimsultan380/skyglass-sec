"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { CreditCard, MessageSquare } from "lucide-react";

export function InstCTA() {
  return (
    <section
      id="cta"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B0E2C] max-w-2xl font-heading mb-4">
            Complete Your{" "}
            <span className="text-brand-gradient font-bold">Installation</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
            Install the dedicated app on a supported Android or Fire TV device, or select a compatible alternative player for another platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/sky-glass-iptv-subscription/" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <CreditCard className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>View Subscription Plans</span>
              </Button>
            </Link>

            <Link href="/contact/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] border-gradient-brand px-8 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <MessageSquare className="mr-2 h-4 w-4 text-[#E91E8C] stroke-[2.5]" />
                <span>Contact subscription support</span>
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
