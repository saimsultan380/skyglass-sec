"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Card, Section, SectionHeading } from "@/components/ui/section-bits";
import { X } from "lucide-react";

const exclusions = [
  "A television or streaming device",
  "Broadband or mobile data",
  "A paid third-party player licence",
  "A VPN subscription",
  "Guaranteed access to every named channel or title",
  "4K on every stream",
  "Additional simultaneous connections not included in the order",
  "Permission to rebroadcast or redistribute access",
] as const;

export function SubNotIncluded() {
  return (
    <Section id="not-included">
      <SectionHeading
        title="What Is"
        highlight="Not Included?"
        intro={["A subscription does not include:"]}
      />

      <FadeIn className="w-full">
        <Card className="p-6 sm:p-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
            {exclusions.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 mt-0.5"
                  aria-hidden="true"
                >
                  <X className="h-3 w-3 stroke-[3]" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </FadeIn>
    </Section>
  );
}
