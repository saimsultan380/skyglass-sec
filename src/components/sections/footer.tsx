"use client";

import React from "react";
import Link from "next/link";
import { B1GLogo } from "@/components/brand/b1g-logo";
import { ROUTES } from "@/lib/seo";

export function B1GFooter() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <B1GLogo size="md" />
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-sm">
              Sky Glass IPTV is a UK-focused IPTV subscription service for live TV, movies and sports, with flexible plans, app access and setup support.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={ROUTES.home}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Sky Glass IPTV
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.subscription}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.installation}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.reseller}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Reseller Panel
                </Link>
              </li>
              <li>
                <Link
                  href="/#compatible-devices"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  View compatible devices
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C] mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`${ROUTES.installation}#firestick`}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Install the app on Firestick
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.contact}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={`${ROUTES.contact}?enquiry=trial`}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Request a 24-hour trial
                </Link>
              </li>
              <li>
                <Link
                  href={`${ROUTES.subscription}#compare-plans`}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Compare IPTV subscription plans
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.installation}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Read the complete installation guide
                </Link>
              </li>
              <li>
                <Link
                  href={`${ROUTES.contact}?enquiry=renewal`}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Renew an existing account
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.reseller}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E91E8C] font-semibold transition-colors"
                >
                  Apply for reseller access
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs text-slate-400 font-semibold">
              © {new Date().getFullYear()} Sky Glass IPTV. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
              Sky Glass IPTV is an independent brand and is not affiliated with, endorsed by or connected to Sky UK Limited, Sky Group or the Sky Glass television product. Third-party names and trademarks belong to their respective owners. Customers should only access content that the service is authorised to provide and that they are legally entitled to view.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
