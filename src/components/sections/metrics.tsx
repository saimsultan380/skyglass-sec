"use client";

import React from "react";
import { AutoScrollReveal } from "@/components/animation/auto-scroll-reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Metrics() {
  return (
    <section id="metrics" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Intro */}
          <AutoScrollReveal className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E91E8C] bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
              System Performance
            </span>
            <h2 className="text-h2 mt-4">
              Color-Agnostic Architecture & <span className="text-brand-gradient">Reusable Tokens</span>
            </h2>
            <p className="text-body mt-4">
              Motion, layout, and typography stay 100% decoupled from specific brand colors. 
              The lightweight design tokens adapt effortlessly to any design system while guaranteeing 60 FPS interactions.
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="primary">Try Interactive CTA</Button>
              <Button variant="outline">Outline Scale</Button>
            </div>
          </AutoScrollReveal>

          {/* Right Column: Metrics Cards */}
          <AutoScrollReveal
            staggerChildren={0.055}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <Card hoverable className="p-6 bg-slate-50/50 border-slate-200">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-gradient">
                0.2s
              </span>
              <p className="text-sm font-semibold text-slate-800 mt-2">
                Primary CTA Scale Transition
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Custom cubic-bezier curve (0.21, 0.47, 0.32, 0.98) with hover (1.04) and tap (0.96).
              </p>
            </Card>

            <Card hoverable className="p-6 bg-slate-50/50 border-slate-200">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-gradient">
                850ms
              </span>
              <p className="text-sm font-semibold text-slate-800 mt-2">
                Hero Mask Reveal Duration
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Word-by-word staggered entrance with 8deg skewY and 100% translateY mask clipping.
              </p>
            </Card>

            <Card hoverable className="p-6 bg-slate-50/50 border-slate-200">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-gradient">
                55ms
              </span>
              <p className="text-sm font-semibold text-slate-800 mt-2">
                Scroll Reveal Sibling Stagger
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Bidirectional enter/leave viewport detection with smooth 22px vertical offsets.
              </p>
            </Card>

            <Card hoverable className="p-6 bg-slate-50/50 border-slate-200">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-gradient">
                100%
              </span>
              <p className="text-sm font-semibold text-slate-800 mt-2">
                Light Mode Compliance
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Strict clean light theme with high contrast typography and zero shadow clutter.
              </p>
            </Card>
          </AutoScrollReveal>
        </div>
      </div>
    </section>
  );
}
