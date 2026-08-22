"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animation/fade-in";
import { cn } from "@/lib/utils";

/** Pink tick used in every feature / checklist list across the site. */
export const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/** Standard site section shell — matching padding, divider and max width. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Small uppercase eyebrow with a pink icon chip. */
export function Eyebrow({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
        <Icon className="h-4 w-4 stroke-[2]" />
      </div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#E91E8C]">
        {label}
      </h3>
    </div>
  );
}

/**
 * Section heading block. `title` renders first, `highlight` is appended in the
 * brand gradient, then any intro paragraphs.
 */
export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  highlight,
  intro,
  className,
}: {
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  highlight?: string;
  intro?: string[];
  className?: string;
}) {
  return (
    <FadeIn className={cn("w-full max-w-4xl mb-10", className)}>
      {eyebrow && eyebrowIcon ? (
        <Eyebrow icon={eyebrowIcon} label={eyebrow} />
      ) : null}
      <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-brand-gradient font-bold">{highlight}</span>
          </>
        ) : null}
      </h2>
      {intro?.length ? (
        <div className="mt-4 space-y-3 text-sm sm:text-base text-[#5C607A] leading-relaxed">
          {intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ) : null}
    </FadeIn>
  );
}

/** Bordered card matching the site-wide glass card treatment. */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[12px] border border-slate-200 bg-white p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Card header with pink icon chip and title. */
export function CardTitle({
  icon: Icon,
  children,
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      {Icon ? (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0">
          <Icon className="h-4 w-4 stroke-[2]" />
        </div>
      ) : null}
      <h3 className="text-base sm:text-lg font-bold text-[#0B0E2C] leading-snug">
        {children}
      </h3>
    </div>
  );
}

/** Ticked list used for feature and requirement lists. */
export function TickList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Tick />
          <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered step list matching the site's step sections. */
export function NumberedList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ol className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <li key={item} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-bold text-[#E91E8C]">
            {index + 1}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** Closing note under a section, matching the muted footnote style. */
export function Footnote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs sm:text-sm text-[#5C607A] leading-relaxed">
      {children}
    </p>
  );
}
