"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  Footnote,
  Section,
  SectionHeading,
  TickList,
} from "@/components/ui/section-bits";
import {
  Coins,
  Headphones,
  ListOrdered,
  MessageSquare,
  Users,
} from "lucide-react";
import { ROUTES } from "@/lib/seo";
import {
  RESELLER_MINIMUM_CREDITS,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/site";

const quoteConfirms = [
  "The panel available to you",
  "The number of credits included",
  "The total wholesale price",
  "The supported subscription and connection options",
  "Your daily trial allowance",
  "Whether sub-reseller creation is included",
] as const;

const panelTools = [
  "Creating customer accounts",
  "Activating supported subscription periods",
  "Renewing existing subscriptions",
  "Checking account status and expiry dates",
  "Reviewing your credit balance",
  "Creating trials within your panel’s allowance",
] as const;

const openSteps = [
  "Contact reseller support. Explain the credit quantity and account features you need.",
  "Review the available panel. Confirm the trial limit, connection options and any required sub-reseller access.",
  "Receive your quote. Check the credit balance and wholesale price.",
  "Complete the agreed purchase. Follow the payment instructions supplied by support.",
  "Receive your panel login. We guide you through the available account and credit tools.",
] as const;

export function ResPackages() {
  return (
    <Section id="reseller-packages">
      <SectionHeading
        title="IPTV Reseller Packages and"
        highlight="Prices"
        intro={[
          "If you are looking for an IPTV reseller option for UK customers, start by telling us the credit balance and account features you need.",
          "Reseller pricing is supplied through support. Contact us for the current package options before purchasing credits.",
        ]}
      />
      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={Coins}>Your quote will confirm:</CardTitle>
          <TickList items={quoteConfirms} />
          <div className="mt-6">
            <Link href={`${ROUTES.contact}?enquiry=reseller`}>
              <Button
                variant="primary"
                size="lg"
                className="rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                Discuss a Reseller Package
              </Button>
            </Link>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export function ResNeverExpire() {
  return (
    <Section id="credits-never-expire">
      <SectionHeading
        title="Reseller Credits That"
        highlight="Do Not Expire"
        intro={[
          "Unused credits remain available in your balance without an expiry date. You can use them as you create or renew customer subscriptions.",
          "Customer subscriptions still have their own expiry dates. A customer who receives three months of access has a three-month subscription; unused reseller credits and active customer time are separate.",
        ]}
      />
    </Section>
  );
}

export function ResTrials() {
  return (
    <Section id="reseller-trials">
      <SectionHeading
        title="Customer Trials and"
        highlight="Daily Limits"
        intro={[
          "Reseller panels allow 10–20 trials per day, depending on the panel.",
          "We confirm your panel’s exact allowance before purchase. You can use trials to help prospective customers check their device, player and connection before choosing a paid account.",
          "Trial access may differ from the paid catalogue. Explain the relevant package details when a customer is ready to subscribe.",
        ]}
      />
    </Section>
  );
}

export function ResSubReseller() {
  return (
    <Section id="sub-reseller">
      <SectionHeading
        title="Sub-Reseller Access and"
        highlight="Panel Features"
        intro={[
          "Sub-reseller creation is available on supported panels.",
          "If you want to manage sub-resellers, tell us before ordering. We will confirm whether the available panel includes the required permissions and explain how those permissions work.",
          "Your assigned panel determines the exact options and permissions.",
        ]}
      />
      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={Users}>
            Account-management tools include:
          </CardTitle>
          <TickList items={panelTools} />
        </Card>
      </FadeIn>
    </Section>
  );
}

export function ResOpenAccount() {
  return (
    <Section id="open-account">
      <SectionHeading title="Open Your" highlight="Reseller Account" />
      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={ListOrdered}>Steps</CardTitle>
          <TickList items={openSteps} />
          <div className="mt-6">
            <Link href={`${ROUTES.contact}?enquiry=reseller`}>
              <Button
                variant="primary"
                size="lg"
                className="rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                Ask About Reseller Access
              </Button>
            </Link>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export function ResCreateRenew() {
  return (
    <Section id="create-renew">
      <SectionHeading
        title="Create and Renew"
        highlight="Customer Subscriptions"
        intro={[
          "To create a subscription, choose the customer’s package, duration and connection allowance in the panel. Check the credit deduction before confirming the account.",
          "Provide the customer with the appropriate login information and direct them to the app installation guide.",
          "For a renewal, locate the existing account, confirm the requested extension and check the new expiry date after applying it.",
          "For one-connection accounts, explain that customers must log out of one device before using another. Simultaneous viewing requires the appropriate connection allowance.",
        ]}
      />
      <FadeIn className="w-full">
        <Link href={ROUTES.installation}>
          <Button
            variant="outline"
            className="rounded-[12px] border-gradient-brand px-5 py-3 text-xs sm:text-sm font-semibold"
          >
            Open the App Installation Guide
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}

export function ResSupportBlock() {
  return (
    <Section id="reseller-support">
      <SectionHeading
        title="Reseller Panel"
        highlight="Support"
        intro={[
          "Contact us on WhatsApp for help with panel access, credit purchases, trial permissions, account creation or renewals.",
          "Include your panel username, the relevant account reference and a clear description of the issue. Screenshots are useful when they show the error without exposing passwords.",
          "Support is available 24 hours a day, and we reply as soon as possible.",
        ]}
      />
      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={Headphones}>
            Starting from {RESELLER_MINIMUM_CREDITS} credits
          </CardTitle>
          <div className="border-t border-slate-100 pt-4 mt-2 mb-6">
            <Footnote>
              Unused credits do not expire. Ask support for current wholesale
              prices before purchasing.
            </Footnote>
          </div>
          <a
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="lg"
              className="rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
            >
              <MessageSquare className="mr-2 h-4 w-4 stroke-[2.5]" />
              Contact Reseller Support
            </Button>
          </a>
        </Card>
      </FadeIn>
    </Section>
  );
}
