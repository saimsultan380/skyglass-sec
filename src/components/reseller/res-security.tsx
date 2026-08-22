"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Card, CardTitle, Section, SectionHeading, TickList } from "@/components/ui/section-bits";
import { Lock } from "lucide-react";

const securityPractices = [
  "Use a unique panel password",
  "Enable two-factor authentication where available",
  "Never publish the panel login",
  "Keep customer credentials private",
  "Record credit purchases and usage",
  "Remove access for former staff",
  "Report suspicious activity",
] as const;

export function ResSecurity() {
  return (
    <Section id="reseller-security">
      <SectionHeading title="Reseller" highlight="Security" />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-8">
          <CardTitle icon={Lock}>Protect your panel and your customers</CardTitle>
          <TickList
            items={securityPractices}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5 space-y-0"
          />
        </Card>
      </FadeIn>
    </Section>
  );
}
