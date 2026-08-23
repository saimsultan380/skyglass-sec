"use client";

import React from "react";
import Link from "next/link";
import { SkyglassLogo } from "@/components/brand/skyglass-logo";
import { ROUTES } from "@/lib/seo";
import { INDEPENDENCE_NOTICE, WHATSAPP_TRIAL_HREF } from "@/lib/site";

const linkClass =
  "text-xs sm:text-sm text-slate-700 hover:text-[#E91E8C] font-semibold transition-colors";

const navigationLinks = [
  { name: "Sky Glass IPTV", href: ROUTES.home },
  { name: "Subscription Plans", href: ROUTES.subscription },
  { name: "Installation Guide", href: ROUTES.installation },
  { name: "Supported Devices", href: ROUTES.devices },
  { name: "Reseller Panel", href: ROUTES.reseller },
  { name: "Reviews", href: ROUTES.reviews },
  { name: "About", href: ROUTES.about },
];

const supportLinks = [
  { name: "Contact support for login details", href: ROUTES.contact },
  {
    name: "Request a 24-hour trial",
    href: WHATSAPP_TRIAL_HREF,
    external: true,
  },
  {
    name: "Install the app on Firestick",
    href: `${ROUTES.installation}#firestick`,
  },
  {
    name: "Compare subscription plans",
    href: `${ROUTES.subscription}#compare-plans`,
  },
  { name: "Check device compatibility", href: ROUTES.devices },
  {
    name: "Renew an existing account",
    href: `${ROUTES.contact}?enquiry=renewal`,
  },
  { name: "Apply for reseller access", href: ROUTES.reseller },
];

const legalLinks = [
  { name: "Terms and Conditions", href: ROUTES.terms },
  { name: "Privacy Policy", href: ROUTES.privacy },
  { name: "Refund Policy", href: ROUTES.refunds },
  { name: "DMCA Policy", href: ROUTES.dmca },
];

export function SkyglassFooter() {
  return (
    <footer className="w-full border-t border-slate-200/80 bg-white/80 py-12 text-slate-700 backdrop-blur-md sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-slate-200/60 pb-10 md:grid-cols-12">
          <div className="flex flex-col items-start gap-4 md:col-span-4">
            <SkyglassLogo size="md" />
            <p className="max-w-sm text-xs leading-relaxed font-medium text-slate-600 sm:text-sm">
              Sky Glass IPTV is an internet-delivered television service for UK
              viewers, with live channels, films and series, installation
              guidance and customer support.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-brand-gradient mb-4 block text-xs font-bold tracking-wider uppercase sm:text-sm">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-brand-gradient mb-4 block text-xs font-bold tracking-wider uppercase sm:text-sm">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-brand-gradient mb-4 block text-xs font-bold tracking-wider uppercase sm:text-sm">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-8 md:flex-row md:items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-600">
              © {new Date().getFullYear()} Sky Glass IPTV. All rights reserved.
            </p>
            <p className="max-w-4xl text-[11px] leading-relaxed text-slate-500">
              {INDEPENDENCE_NOTICE}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
