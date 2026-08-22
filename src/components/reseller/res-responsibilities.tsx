"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Card,
  CardTitle,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import { ShieldAlert } from "lucide-react";

const responsibilitiesList = [
  "Honest advertising",
  "Customer pricing",
  "Customer communication",
  "Customer-support obligations",
  "Payment handling",
  "Refunds promised to customers",
  "Data-protection compliance",
  "Local tax and legal requirements",
  "Panel security",
  "Lawful use",
  "Avoiding misleading earnings claims",
] as const;

export function ResResponsibilities() {
  return (
    <Section id="reseller-responsibilities">
      <SectionHeading
        title="Reseller"
        highlight="Responsibilities"
        intro={["Resellers remain responsible for:"]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-8">
          <CardTitle icon={ShieldAlert}>Your obligations</CardTitle>
          <TickList
            items={responsibilitiesList}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5 space-y-0"
          />
        </Card>
      </FadeIn>
    </Section>
  );
}
