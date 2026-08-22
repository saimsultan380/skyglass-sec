"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ICONS, type IconName } from "@/components/ui/icon-registry";

type CtaLink = {
  label: string;
  href: string;
  icon: IconName;
};

/**
 * Closing CTA panel — same centred card, button pair and trust strip as the
 * homepage CTA banner.
 */
export function CtaSection({
  id = "cta-banner",
  title,
  highlight,
  titleSuffix,
  body,
  primary,
  secondary,
  trustItems,
}: {
  id?: string;
  title: string;
  highlight?: string;
  titleSuffix?: string;
  body?: string;
  primary: CtaLink;
  secondary?: CtaLink;
  trustItems?: readonly { label: string; icon: IconName }[];
}) {
  const PrimaryIcon = ICONS[primary.icon];
  const SecondaryIcon = secondary ? ICONS[secondary.icon] : null;

  return (
    <section
      id={id}
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B0E2C] max-w-2xl font-heading mb-4">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="text-brand-gradient font-bold">
                  {highlight}
                </span>
              </>
            ) : null}
            {titleSuffix ? ` ${titleSuffix}` : null}
          </h2>

          {body ? (
            <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
              {body}
            </p>
          ) : null}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <Link href={primary.href} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-brand text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <PrimaryIcon className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>{primary.label}</span>
              </Button>
            </Link>

            {secondary && SecondaryIcon ? (
              <Link href={secondary.href} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-[12px] border-gradient-brand px-8 py-3.5 text-xs sm:text-sm font-semibold"
                >
                  <SecondaryIcon className="mr-2 h-4 w-4 text-[#E91E8C] stroke-[2.5]" />
                  <span>{secondary.label}</span>
                </Button>
              </Link>
            ) : null}
          </div>

          {trustItems?.length ? (
            <div className="w-full border-t border-slate-100 pt-6 mt-2">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400 font-bold">
                {trustItems.map((item, index) => {
                  const Icon = ICONS[item.icon];
                  return (
                    <React.Fragment key={item.label}>
                      {index > 0 ? (
                        <span className="hidden sm:inline text-slate-200 select-none">
                          •
                        </span>
                      ) : null}
                      <div className="flex items-center gap-1.5">
                        <Icon className="h-4 w-4 text-[#E91E8C] stroke-[2.5]" />
                        <span>{item.label}</span>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
