import React from "react";
import { SkyglassHeroMockup } from "@/components/sections/skyglass-hero-mockup";

/**
 * Single responsive hero shell — one copy/H1, one mockup, one CTA row, one trust row.
 * Mobile order: copy → mockup → CTAs → trust. Desktop: copy/CTAs/trust | mockup.
 */
export function HeroLayout({
  copy,
  ctas,
  trust,
  afterTrust,
  mockup = <SkyglassHeroMockup />,
}: {
  copy: React.ReactNode;
  ctas: React.ReactNode;
  trust: React.ReactNode;
  afterTrust?: React.ReactNode;
  mockup?: React.ReactNode;
}) {
  return (
    <div
      className="relative flex flex-col bg-white pb-8 text-[#0B0E2C] sm:pb-12"
      data-hero
    >
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="flex flex-col gap-5 text-left lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
          <div className="order-1 w-full min-w-0 lg:col-span-7 lg:row-start-1">
            {copy}
          </div>

          <div className="order-2 my-1 w-full lg:col-span-5 lg:row-span-4 lg:row-start-1 lg:my-0">
            {mockup}
          </div>

          <div className="order-3 w-full lg:col-span-7 lg:row-start-2 lg:mt-8">
            {ctas}
          </div>

          <div className="order-4 mt-2 w-full max-w-2xl lg:col-span-7 lg:row-start-3 lg:mt-10">
            {trust}
          </div>

          {afterTrust ? (
            <div className="order-5 mt-5 w-full max-w-2xl lg:col-span-7 lg:row-start-4">
              {afterTrust}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
