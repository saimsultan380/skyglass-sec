"use client";

import React from "react";
import { AutoScrollReveal } from "@/components/animation/auto-scroll-reveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sparkles, Eye, Sliders, Smartphone, ShieldCheck, Cpu } from "lucide-react";

const motionRules = [
  {
    icon: Sparkles,
    title: "Primary CTA Hover & Active",
    description:
      "Hover scale 1.04, active scale 0.96 with 0.2s cubic-bezier(0.21, 0.47, 0.32, 0.98) curve and infinite shine sweep on solid CTAs.",
  },
  {
    icon: Eye,
    title: "Hero Mask Reveal",
    description:
      "Word-by-word mask reveal with translateY 100% to 0%, skewY 4° to 0°, opacity 0 to 1 over 0.45s with ease [0.22, 1, 0.36, 1].",
  },
  {
    icon: Sliders,
    title: "Section Scroll Reveal",
    description:
      "One-shot entrance when scrolling into view. Cards animate translateY 10px to 0 with short sibling stagger for smooth scrolling.",
  },
  {
    icon: Cpu,
    title: "Card Hover Lift",
    description:
      "Hover transitions only transform over 0.5s with cubic-bezier(0.22, 1, 0.36, 1) for buttery smooth 60 FPS performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Typography",
    description:
      "Strict responsive text scaling starting from mobile 24px H1 / 26px H2 up to 46px H1 / 44px H2 on desktop screens.",
  },
  {
    icon: ShieldCheck,
    title: "Accessibility First",
    description:
      "Automatic fallback for prefers-reduced-motion across all animation wrappers, ensuring zero motion sickness.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AutoScrollReveal className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E91E8C] bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
            Core Specifications
          </span>
          <h2 className="text-h2 mt-4 max-w-2xl">
            Designed for Speed, Polish & <span className="text-brand-gradient">Visual Excellence</span>
          </h2>
          <p className="text-body mt-3 max-w-xl">
            Every animation rule is crafted to enhance user interaction without overwhelming the screen.
          </p>
        </AutoScrollReveal>

        {/* Features Cards Grid with Sibling Stagger (~55ms) */}
        <AutoScrollReveal
          staggerChildren={0.055}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {motionRules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <Card key={idx} hoverable className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{rule.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{rule.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </AutoScrollReveal>
      </div>
    </section>
  );
}
