"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const customerTypes = ["New customer", "Existing customer", "Reseller"] as const;

const enquiryTypes = [
  "Login details",
  "Free trial",
  "Subscription plan",
  "Device compatibility",
  "Installation",
  "Existing account",
  "Payment",
  "Refund",
  "Reseller panel",
  "Privacy request",
  "Copyright notice",
  "Other",
] as const;

/** Maps the `?enquiry=` link parameter used across the site to a select option. */
const ENQUIRY_PARAM_MAP: Record<string, (typeof enquiryTypes)[number]> = {
  login: "Login details",
  trial: "Free trial",
  subscription: "Subscription plan",
  device: "Device compatibility",
  devices: "Device compatibility",
  installation: "Installation",
  account: "Existing account",
  renewal: "Existing account",
  payment: "Payment",
  billing: "Payment",
  refund: "Refund",
  reseller: "Reseller panel",
  privacy: "Privacy request",
  copyright: "Copyright notice",
  review: "Other",
  other: "Other",
};

const initialState = {
  name: "",
  contact: "",
  customerType: "New customer" as (typeof customerTypes)[number],
  enquiryType: "Login details" as (typeof enquiryTypes)[number],
  deviceAndApplication: "",
  orderReference: "",
  message: "",
  consent: false,
};

const fieldClass =
  "w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B0E2C] placeholder-slate-400 focus:outline-none focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C]";
const selectClass =
  "w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B0E2C] focus:outline-none focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] appearance-none";
const labelClass = "text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5";

function ContactFormFields() {
  const searchParams = useSearchParams();
  const requestedEnquiry =
    ENQUIRY_PARAM_MAP[searchParams.get("enquiry")?.toLowerCase() ?? ""];

  const [formData, setFormData] = useState({
    ...initialState,
    ...(requestedEnquiry ? { enquiryType: requestedEnquiry } : {}),
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData(initialState);
  };

  return (
    <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-10 relative overflow-hidden">
      {isSubmitted ? (
        <div className="text-center py-10 flex flex-col items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-pink-50 text-[#E91E8C] flex items-center justify-center mb-5">
            <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#0B0E2C] mb-2 font-heading">
            Message Sent Successfully
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-md leading-relaxed mb-6">
            Thank you for contacting Sky Glass IPTV. The support team will
            respond to your enquiry shortly.
          </p>
          <Button
            variant="outline"
            onClick={resetForm}
            className="rounded-[12px] border-gradient-brand text-xs sm:text-sm font-semibold px-6 py-2.5"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className={labelClass}>
                Name <span className="text-[#E91E8C]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="contact" className={labelClass}>
                Email or WhatsApp Number{" "}
                <span className="text-[#E91E8C]">*</span>
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                placeholder="name@example.com or +44 7123 456789"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="customerType" className={labelClass}>
                Customer Type
              </label>
              <select
                id="customerType"
                name="customerType"
                value={formData.customerType}
                onChange={handleChange}
                className={selectClass}
              >
                {customerTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="enquiryType" className={labelClass}>
                Enquiry Type
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className={selectClass}
              >
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="deviceAndApplication" className={labelClass}>
                Device and Application
              </label>
              <input
                type="text"
                id="deviceAndApplication"
                name="deviceAndApplication"
                value={formData.deviceAndApplication}
                onChange={handleChange}
                placeholder="Firestick 4K Max, CR7 Player…"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="orderReference" className={labelClass}>
                Order Reference
              </label>
              <input
                type="text"
                id="orderReference"
                name="orderReference"
                value={formData.orderReference}
                onChange={handleChange}
                placeholder="If applicable"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className={labelClass}>
              Message <span className="text-[#E91E8C]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your enquiry, device model, application name and any error messages…"
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#E91E8C] focus:ring-[#E91E8C]"
            />
            <label
              htmlFor="consent"
              className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed"
            >
              I understand that my information will be used to respond in
              accordance with the{" "}
              <Link
                href={ROUTES.privacy}
                className="text-[#E91E8C] hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-[12px] bg-gradient-brand text-white py-3.5 text-xs sm:text-sm font-semibold shine-effect flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4 shrink-0 stroke-[2.5]" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </Button>
          </div>
        </form>
      )}
    </FadeIn>
  );
}

export function ConForm() {
  return (
    <section
      id="contact-form"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-10">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-pink-50 text-[#E91E8C] mb-3">
            <MessageSquare className="h-4.5 w-4.5 stroke-[2]" />
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#0B0E2C] font-heading">
            Contact <span className="text-brand-gradient font-bold">Form</span>
          </h2>
        </FadeIn>

        <Suspense
          fallback={
            <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-10 min-h-[640px]" />
          }
        >
          <ContactFormFields />
        </Suspense>
      </div>
    </section>
  );
}
