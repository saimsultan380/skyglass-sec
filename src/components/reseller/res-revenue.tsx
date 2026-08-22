"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Card,
  CardTitle,
  Footnote,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { Calculator } from "lucide-react";

const resultFactors = [
  "Wholesale credit cost",
  "Retail pricing",
  "Customer-acquisition costs",
  "Payment-processing fees",
  "Refunds",
  "Customer retention",
  "Marketing expenses",
  "Support workload",
  "Taxes",
  "Other operating costs",
] as const;

export function ResRevenue() {
  return (
    <Section id="revenue-is-not-profit">
      <SectionHeading title="Revenue Is Not" highlight="Profit" />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-8">
          <CardTitle icon={Calculator}>Actual results depend on:</CardTitle>
          <TickList
            items={resultFactors}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5 space-y-0"
          />
          <div className="border-t border-slate-100 pt-5 mt-8">
            <Footnote>No revenue or profit is guaranteed.</Footnote>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
