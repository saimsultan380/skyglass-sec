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
  CreditCard,
  MonitorSmartphone,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";
import { ROUTES } from "@/lib/seo";
import { WHATSAPP_SUBSCRIPTION_HREF, WHATSAPP_TRIAL_HREF } from "@/lib/site";

const paymentMethods = [
  "Bank transfer in GBP",
  "Card payment",
  "Google Pay",
  "Apple Pay",
] as const;

export function SubConnections() {
  return (
    <Section id="connections">
      <SectionHeading
        title="One Connection or"
        highlight="Multiple Connections?"
        intro={[
          "The listed Standard prices include one simultaneous connection.",
          "You can use your account on two compatible devices, but you must log out of the first device before logging in on the second.",
          "If two people want to watch on separate screens at the same time, you need an account with enough simultaneous connections. Multiple-connection options have different prices.",
        ]}
      />
      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={MonitorSmartphone}>Need more screens?</CardTitle>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed mb-6">
            Send us the number of screens you need so we can quote the correct
            package.
          </p>
          <a
            href={WHATSAPP_SUBSCRIPTION_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-[12px] border-gradient-brand px-5 py-3 text-xs sm:text-sm font-semibold"
            >
              Ask About Extra Connections
            </Button>
          </a>
        </Card>
      </FadeIn>
    </Section>
  );
}

export function SubPlayerCosts() {
  return (
    <Section id="player-costs">
      <SectionHeading
        title="Player Licences and"
        highlight="Other Costs"
        intro={[
          "Your subscription pays for the selected service period and connection allowance.",
          "You will also need your own compatible device and internet connection. A paid third-party player licence, where required, is a separate charge from the player’s developer.",
          "The listed Standard prices do not include additional connections or a VPN subscription.",
          "Our supplied app is preferred on compatible Android and Fire OS devices. You may also use an appropriate Xtream-compatible player.",
        ]}
      />
      <FadeIn className="w-full">
        <Link href={ROUTES.installation}>
          <Button
            variant="primary"
            size="lg"
            className="rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
          >
            Check Your Device and Installation Method
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}

export function SubPayments() {
  return (
    <Section id="payment-methods">
      <SectionHeading title="Subscription" highlight="Payment Methods" />
      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={CreditCard}>We accept:</CardTitle>
          <TickList items={paymentMethods} />
          <div className="border-t border-slate-100 pt-4 mt-6">
            <Footnote>
              Contact us to confirm your package and receive the payment
              instructions for your order. Keep your payment reference so we can
              match the transaction to your account.
            </Footnote>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export function SubRenewals() {
  return (
    <Section id="renewals">
      <SectionHeading
        title="Manual Subscription"
        highlight="Renewals"
        intro={[
          "Subscriptions do not renew automatically.",
          "When you want to continue, message us on WhatsApp with your existing username and the duration you would like to purchase. Tell us if you also want to change your package or connection allowance.",
          "We will confirm the renewal price and payment instructions, then help you check the updated account expiry date.",
        ]}
      />
      <FadeIn className="w-full">
        <a
          href={WHATSAPP_SUBSCRIPTION_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="primary"
            size="lg"
            className="rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
          >
            <RefreshCw className="mr-2 h-4 w-4 stroke-[2.5]" />
            Renew an Existing Account
          </Button>
        </a>
      </FadeIn>
    </Section>
  );
}

export function SubTrialBlock() {
  return (
    <Section id="try-before-buying">
      <SectionHeading
        title="Try the Service"
        highlight="Before Buying"
        intro={[
          "We provide a 24-hour free trial so you can test the app, your device and your internet connection before paying for a subscription.",
          "The trial catalogue can differ from the paid package. Use the trial to check the viewing experience, then confirm any package-specific requirements with our team.",
        ]}
      />
      <FadeIn className="w-full">
        <a
          href={WHATSAPP_TRIAL_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="primary"
            size="lg"
            className="rounded-[12px] bg-gradient-brand text-white px-6 py-3.5 text-xs sm:text-sm font-semibold"
          >
            Request Trial Access
          </Button>
        </a>
      </FadeIn>
    </Section>
  );
}

export function SubRefundNote() {
  return (
    <Section id="refund-note">
      <SectionHeading
        title="Refund and Cancellation"
        highlight="Information"
      />
      <FadeIn className="w-full">
        <Card className="p-6 sm:p-7">
          <CardTitle icon={ShieldAlert}>Important</CardTitle>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed mb-4">
            Our{" "}
            <Link
              href={ROUTES.refunds}
              className="text-[#E91E8C] hover:underline"
            >
              Refund Policy
            </Link>{" "}
            explains cancellation requests and the seven-day technical review
            period for qualifying problems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
            This is not an unconditional seven-day money-back offer. Contact
            support promptly with your order details and a description of the
            issue. Your statutory rights are unaffected.
          </p>
        </Card>
      </FadeIn>
    </Section>
  );
}
