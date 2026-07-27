"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";

const enquiryTypes = [
  "24-Hour Trial",
  "Subscription Question",
  "New Activation",
  "Installation Help",
  "Login Support",
  "Renewal or Upgrade",
  "Reseller Enquiry",
  "General Question",
];

const deviceTypes = [
  "Firestick",
  "Fire TV",
  "Android TV",
  "Google TV",
  "Android Box",
  "Android Phone",
  "Android Tablet",
  "Samsung TV",
  "LG TV",
  "Apple TV",
  "iPhone or iPad",
  "Windows",
  "Mac",
  "Other",
];

export function ConForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    enquiryType: "24-Hour Trial",
    deviceType: "Firestick",
    usernameOrOrderRef: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      whatsapp: "",
      enquiryType: "24-Hour Trial",
      deviceType: "Firestick",
      usernameOrOrderRef: "",
      message: "",
    });
  };

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
            Contact Form{" "}
            <span className="text-brand-gradient font-bold">Fields</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-semibold max-w-xl mx-auto">
            Complete the form below and the support team will respond to your enquiry.
          </p>
        </FadeIn>

        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-10 relative overflow-hidden">
          {isSubmitted ? (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-pink-50 text-[#E91E8C] flex items-center justify-center mb-5">
                <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B0E2C] mb-2 font-heading">
                Enquiry Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-md leading-relaxed mb-6">
                Thank you for contacting Sky Glass IPTV. The support team will respond to your enquiry shortly.
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
                  <label htmlFor="fullName" className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5">
                    Full Name <span className="text-[#E91E8C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B0E2C] placeholder-slate-400 focus:outline-none focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C]"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5">
                    Email Address <span className="text-[#E91E8C]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B0E2C] placeholder-slate-400 focus:outline-none focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="whatsapp" className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+44 7123 456789"
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B0E2C] placeholder-slate-400 focus:outline-none focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C]"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="enquiryType" className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5">
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B0E2C] focus:outline-none focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] appearance-none"
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
                  <label htmlFor="deviceType" className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5">
                    Device Type
                  </label>
                  <select
                    id="deviceType"
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleChange}
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B0E2C] focus:outline-none focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] appearance-none"
                  >
                    {deviceTypes.map((device) => (
                      <option key={device} value={device}>
                        {device}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="usernameOrOrderRef" className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5">
                    Username or Order Reference
                  </label>
                  <input
                    type="text"
                    id="usernameOrOrderRef"
                    name="usernameOrOrderRef"
                    value={formData.usernameOrOrderRef}
                    onChange={handleChange}
                    placeholder="If applicable"
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B0E2C] placeholder-slate-400 focus:outline-none focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C]"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5">
                  Message <span className="text-[#E91E8C]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your enquiry, device model, application name and any error messages..."
                  className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B0E2C] placeholder-slate-400 focus:outline-none focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-[12px] bg-gradient-brand text-white py-3.5 text-xs sm:text-sm font-semibold shine-effect flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4 shrink-0 stroke-[2.5]" />
                  <span>{isSubmitting ? "Sending..." : "Send Your Enquiry"}</span>
                </Button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
