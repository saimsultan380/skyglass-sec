"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { MessageSquare, Home } from "lucide-react";

export function ConCTA() {
  return (
    <section
      id="cta"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B0E2C] max-w-2xl font-heading mb-4">
            Contact the{" "}
            <span className="text-brand-gradient font-bold">Support Team</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
            Send your enquiry for a trial, subscription, installation, account renewal or reseller application.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="#contact-form" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <MessageSquare className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>Send Your Enquiry</span>
              </Button>
            </Link>

            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] border-gradient-brand px-8 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <Home className="mr-2 h-4 w-4 text-[#E91E8C] stroke-[2.5]" />
                <span>Return to the Homepage</span>
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
