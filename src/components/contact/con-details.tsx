"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Section, SectionHeading } from "@/components/ui/section-bits";
import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/site";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT_PHONE,
    href: CONTACT_WHATSAPP_HREF,
  },
  {
    icon: Phone,
    label: "Telephone",
    value: CONTACT_PHONE,
    href: CONTACT_PHONE_HREF,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: CONTACT_EMAIL_HREF,
  },
];

export function ConDetails() {
  return (
    <Section id="contact-details">
      <SectionHeading title="Contact" highlight="Details" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch w-full">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <FadeIn
              key={method.label}
              delay={index * 0.05}
              className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] shrink-0 mb-4">
                <Icon className="h-4 w-4 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E91E8C] mb-1">
                {method.label}
              </span>
              <a
                href={method.href}
                className="text-xs sm:text-sm font-bold text-[#0B0E2C] hover:text-[#E91E8C] transition-colors break-words"
              >
                {method.value}
              </a>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
