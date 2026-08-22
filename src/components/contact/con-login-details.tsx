"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  Footnote,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { Headphones, KeyRound } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const sendToSupport = [
  "Your name",
  "Device brand and model",
  "Installed application",
  "Selected subscription",
  "Order information",
  "MAC address or device key where relevant",
] as const;

export function ConLoginDetails() {
  return (
    <Section id="login-details">
      <SectionHeading
        title="Contact Support for"
        highlight="Login Details"
        intro={["After installing the correct application, send support:"]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={KeyRound}>What to send</CardTitle>
          <TickList
            items={sendToSupport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 space-y-0"
          />
          <div className="border-t border-slate-100 pt-4 mt-6">
            <Footnote>
              Support will provide the username, password, server URL, M3U information or portal details required by your application.
            </Footnote>
          </div>
          <div className="mt-6">
            <Link href={`${ROUTES.contact}?enquiry=login`}>
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <Headphones className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
                <span>Contact Support for Login Details</span>
              </Button>
            </Link>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
