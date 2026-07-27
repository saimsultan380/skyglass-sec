"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

const ukCoverage = [
  {
    region: "England",
    detail:
      "Including London, Manchester, Birmingham, Liverpool, Leeds, Sheffield, Bristol, Newcastle, Nottingham, Leicester, Southampton and surrounding areas.",
  },
  {
    region: "Scotland",
    detail:
      "Including Glasgow, Edinburgh, Aberdeen, Dundee, Inverness and other connected locations.",
  },
  {
    region: "Wales",
    detail:
      "Including Cardiff, Swansea, Newport, Wrexham and surrounding communities.",
  },
  {
    region: "Northern Ireland",
    detail:
      "Including Belfast, Derry/Londonderry, Lisburn, Newry and other broadband-connected areas.",
  },
];

export function UkCoverage() {
  return (
    <section
      id="uk-coverage"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C]">
            Sky Glass IPTV Coverage{" "}
            <span className="text-brand-gradient font-bold">Across the UK</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#5C607A] leading-relaxed">
            <p>
              Sky Glass IPTV can be used across the United Kingdom wherever a customer has a compatible device and suitable internet connection.
            </p>
            <p>
              Coverage is not limited to one city or region. Customers may access the service throughout:
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-6">
            {ukCoverage.map((item) => (
              <div
                key={item.region}
                className="rounded-[12px] border border-slate-200 bg-white p-5 flex flex-col gap-2"
              >
                <h3 className="text-sm font-bold text-[#0B0E2C]">{item.region}</h3>
                <p className="text-xs text-[#5C607A] leading-relaxed font-semibold">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-[#5C607A] leading-relaxed max-w-4xl">
            Actual streaming performance depends on the customer&apos;s broadband provider, home network, device and selected stream quality. Geographic availability does not guarantee that every channel or programme is available in every location.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-[#5C607A] leading-relaxed max-w-4xl">
            Customers travelling outside the UK should check whether their account, application and selected content can be used in the destination country.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
