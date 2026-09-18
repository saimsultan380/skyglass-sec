"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Section, SectionHeading } from "@/components/ui/section-bits";

const messageRows = [
  {
    enquiry: "Free trial",
    details: "Device model and the app you intend to use",
  },
  {
    enquiry: "New subscription",
    details: "Preferred package, duration and simultaneous connections",
  },
  {
    enquiry: "Payment or activation",
    details: "Payment reference, payment time and chosen plan",
  },
  {
    enquiry: "Login problem",
    details: "Account username, device, app name and exact error",
  },
  {
    enquiry: "Playback problem",
    details:
      "Affected channel or title, approximate time and whether other streams work",
  },
  {
    enquiry: "Renewal",
    details: "Existing username, preferred duration and any connection changes",
  },
  {
    enquiry: "Reseller enquiry",
    details:
      "Required credits, panel features and whether you need sub-reseller access",
  },
] as const;

export function ConLoginDetails() {
  return (
    <Section id="login-details">
      <SectionHeading
        title="What to Include in"
        highlight="Your Message"
        intro={[
          "Please hide passwords, full card details and unrelated personal information in screenshots.",
        ]}
      />

      <FadeIn className="w-full">
        <div className="rounded-[12px] border border-slate-200 bg-white overflow-hidden w-full">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                    Your enquiry
                  </th>
                  <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">
                    Details to send
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {messageRows.map((row) => (
                  <tr
                    key={row.enquiry}
                    className="hover:bg-slate-50/30 transition-colors"
                  >
                    <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#0B0E2C]">
                      {row.enquiry}
                    </td>
                    <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
