"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  Section,
  SectionHeading,
} from "@/components/ui/section-bits";
import { Download, RefreshCw } from "lucide-react";
import { ROUTES } from "@/lib/seo";

export function ConInstallHelp() {
  return (
    <Section id="install-playback-support">
      <SectionHeading
        title="App Installation and"
        highlight="Playback Support"
        intro={[
          "If you need help installing the app, start with the installation guide. It includes the current download code, Android and Firestick instructions, and Smart TV player setup.",
          "When contacting us about an error, tell us what you were trying to do and what appeared on screen.",
          "For playback issues, mention whether the problem affects one channel, one category or the whole service. This helps us identify the next useful check.",
        ]}
      />
      <FadeIn className="w-full">
        <Link href={ROUTES.installation}>
          <Button
            variant="primary"
            size="lg"
            className="rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
          >
            <Download className="mr-2 h-4 w-4 stroke-[2.5]" />
            Open the Installation Guide
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}

export function ConRenewalsHelp() {
  return (
    <Section id="renewals-payments-reseller">
      <SectionHeading
        title="Renewals, Payments and"
        highlight="Reseller Enquiries"
      />
      <FadeIn className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 sm:p-7">
            <CardTitle icon={RefreshCw}>Renewals</CardTitle>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
              Message us with your existing username and the subscription period
              you want. Renewals are manual.
            </p>
          </Card>
          <Card className="p-6 sm:p-7">
            <CardTitle icon={RefreshCw}>Payment enquiries</CardTitle>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
              Include the transaction reference and amount so we can locate the
              correct order.
            </p>
          </Card>
          <Card className="p-6 sm:p-7">
            <CardTitle icon={RefreshCw}>Refund requests</CardTitle>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
              Explain the problem and include your order details. Read the{" "}
              <Link
                href={ROUTES.refunds}
                className="text-[#E91E8C] hover:underline"
              >
                Refund Policy
              </Link>{" "}
              for the applicable process.
            </p>
          </Card>
          <Card className="p-6 sm:p-7">
            <CardTitle icon={RefreshCw}>Reseller enquiries</CardTitle>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
              Ask for current prices, credit packages and panel permissions. You
              can review the{" "}
              <Link
                href={ROUTES.reseller}
                className="text-[#E91E8C] hover:underline"
              >
                reseller panel information
              </Link>{" "}
              before contacting us.
            </p>
          </Card>
        </div>
      </FadeIn>
    </Section>
  );
}
