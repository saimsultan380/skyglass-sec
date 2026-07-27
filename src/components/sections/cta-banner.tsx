"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv, Calendar, ShieldCheck, Clock, Headphones } from "lucide-react";
import { ROUTES } from "@/lib/seo";

export function B1GCTABanner() {
  return (
    <section
      id="cta-banner"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B0E2C] max-w-2xl font-heading mb-4">
            Start Your{" "}
            <span className="text-brand-gradient font-bold">Sky Glass IPTV Subscription</span>{" "}
            Today
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
            Choose Sky Glass IPTV, select the subscription duration that suits your viewing, install the correct application and receive help whenever you need assistance with activation or setup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            
            <Link href="#pricing" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <Calendar className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>View Subscription Plans</span>
              </Button>
            </Link>

            <Link href={`${ROUTES.installation}#firestick`} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] border-gradient-brand px-8 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <Tv className="mr-2 h-4 w-4 text-[#E91E8C] stroke-[2.5]" />
                <span>Install the app on Firestick</span>
              </Button>
            </Link>

          </div>

          <div className="w-full border-t border-slate-100 pt-6 mt-2">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400 font-bold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#E91E8C] stroke-[2.5]" />
                <span>Flexible Plans</span>
              </div>
              <span className="hidden sm:inline text-slate-200 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#E91E8C] stroke-[2.5]" />
                <span>24-Hour Trial</span>
              </div>
              <span className="hidden sm:inline text-slate-200 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Tv className="h-4 w-4 text-[#E91E8C] stroke-[2.5]" />
                <span>Popular Device Support</span>
              </div>
              <span className="hidden sm:inline text-slate-200 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Headphones className="h-4 w-4 text-[#E91E8C] stroke-[2.5]" />
                <span>Customer Assistance</span>
              </div>
            </div>
          </div>

        </FadeIn>

      </div>
    </section>
  );
}
