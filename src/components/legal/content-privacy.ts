import {
  BUSINESS_ADDRESS,
  LEGAL_LAST_UPDATED,
  LEGAL_OPERATOR_NAME,
  LEGAL_WEBSITE,
} from "@/lib/site";
import type { LegalDocument } from "./legal-types";

export const PRIVACY_DOCUMENT: LegalDocument = {
  title: "Sky Glass IPTV Privacy Policy –",
  highlight: "Personal Data, Cookies & Your Rights",
  lastUpdated: LEGAL_LAST_UPDATED,
  meta: [
    {
      label: "Data Controller",
      value: `${LEGAL_OPERATOR_NAME}, trading as Sky Glass IPTV`,
    },
    { label: "Address", value: BUSINESS_ADDRESS },
    { label: "Website", value: LEGAL_WEBSITE },
  ],
  sections: [
    {
      title: "Information We May Collect",
      blocks: [
        { kind: "subheading", text: "Contact Information" },
        {
          kind: "bullets",
          items: [
            "Name",
            "Email address",
            "Telephone or WhatsApp number",
            "Country",
            "Preferred contact method",
          ],
        },
      ],
    },
    {
      title: "Order Information",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Order reference",
            "Selected plan",
            "Subscription dates",
            "Device type",
            "Installed application",
            "Connection allowance",
            "Account status",
            "Support history",
          ],
        },
      ],
    },
    {
      title: "Technical Information",
      blocks: [
        {
          kind: "bullets",
          items: [
            "IP address",
            "Browser",
            "Device",
            "Operating system",
            "Pages viewed",
            "Security logs",
            "Cookie identifiers",
          ],
        },
      ],
    },
    {
      title: "Payment Information",
      blocks: [
        { kind: "lead", text: "Payment providers may supply:" },
        {
          kind: "bullets",
          items: [
            "Payment status",
            "Transaction reference",
            "Amount",
            "Currency",
            "Date",
            "Limited fraud information",
          ],
        },
        {
          kind: "note",
          text: "We do not require your payment-card PIN or online-banking password.",
        },
      ],
    },
    {
      title: "How Information Is Used",
      blocks: [
        { kind: "lead", text: "Information may be used to:" },
        {
          kind: "bullets",
          items: [
            "Respond to enquiries",
            "Check trial eligibility",
            "Process orders",
            "Supply login details",
            "Configure supported players",
            "Manage subscriptions",
            "Provide installation support",
            "Investigate problems",
            "Process renewals",
            "Prevent fraud",
            "Handle eligible refunds",
            "Comply with legal obligations",
          ],
        },
      ],
    },
    {
      title: "Lawful Bases",
      blocks: [
        { kind: "lead", text: "Processing may rely on:" },
        {
          kind: "bullets",
          items: [
            "Contract",
            "Legitimate interests",
            "Legal obligation",
            "Consent",
          ],
        },
      ],
    },
    {
      title: "Device and Application Information",
      blocks: [
        {
          kind: "text",
          text: "When customers request login details, we may record the device and installed application.",
        },
        { kind: "lead", text: "This can include:" },
        {
          kind: "bullets",
          items: [
            "Downloader installation",
            "Firestick or Android model",
            "CR7 Player",
            "IBO Player",
            "SmartOne IPTV",
            "HOT IPTV",
            "MAC address",
            "Device key",
            "Selected login method",
          ],
        },
        {
          kind: "note",
          text: "These details are used to configure or support the account.",
        },
      ],
    },
    {
      title: "Cookies",
      blocks: [
        { kind: "lead", text: "The website may use:" },
        {
          kind: "bullets",
          items: [
            "Essential cookies",
            "Preference cookies",
            "Analytics cookies",
            "Marketing cookies where lawful consent is obtained",
          ],
        },
        {
          kind: "note",
          text: "Visitors should be able to reject non-essential cookies.",
        },
      ],
    },
    {
      title: "Information Sharing",
      blocks: [
        {
          kind: "lead",
          text: "Information may be shared where necessary with:",
        },
        {
          kind: "bullets",
          items: [
            "Hosting providers",
            "Security providers",
            "Payment processors",
            "Email and messaging services",
            "Customer-support systems",
            "Analytics providers",
            "Professional advisers",
            "Regulators or courts where required",
          ],
        },
        {
          kind: "note",
          text: "We do not ordinarily sell personal information.",
        },
      ],
    },
    {
      title: "International Transfers",
      blocks: [
        {
          kind: "text",
          text: "Where service providers process data outside the UK, legally appropriate safeguards should be used.",
        },
      ],
    },
    {
      title: "Retention",
      blocks: [
        { kind: "lead", text: "Typical periods may include:" },
        {
          kind: "bullets",
          items: [
            "General enquiries: up to 12 months",
            "Accounting records: up to six years where required",
            "Subscription records: active term plus a reasonable period",
            "Support messages: generally up to 24 months",
            "Security logs: generally up to 12 months",
            "Marketing information: until opt-out",
          ],
        },
      ],
    },
    {
      title: "Security",
      blocks: [
        { kind: "lead", text: "Measures may include:" },
        {
          kind: "bullets",
          items: [
            "Encrypted website connections",
            "Access controls",
            "Secure payment processors",
            "Restricted customer records",
            "Software updates",
            "Backups",
            "Security monitoring",
          ],
        },
        {
          kind: "note",
          text: "Customers should protect their login details and report suspected compromise.",
        },
      ],
    },
    {
      title: "Your Rights",
      blocks: [
        {
          kind: "lead",
          text: "Depending on the circumstances, you may have rights to:",
        },
        {
          kind: "bullets",
          items: [
            "Access information",
            "Correct information",
            "Request deletion",
            "Restrict processing",
            "Object to processing",
            "Receive portable information",
            "Withdraw consent",
            "Complain to the ICO",
          ],
        },
      ],
    },
    {
      title: "Privacy Requests",
      blocks: [
        {
          kind: "text",
          text: "Use the Contact page with the subject Privacy Request.",
        },
        {
          kind: "note",
          text: "Include enough information to identify the relevant records.",
        },
      ],
    },
    {
      title: "Marketing",
      blocks: [
        {
          kind: "text",
          text: "Electronic marketing should include a clear unsubscribe method.",
        },
      ],
    },
    {
      title: "Children",
      blocks: [
        {
          kind: "text",
          text: "The paid service is intended for adults. Orders are not knowingly accepted from children under 18.",
        },
      ],
    },
    {
      title: "Third-Party Applications",
      blocks: [
        {
          kind: "text",
          text: "CR7 Player, IBO Player, SmartOne IPTV, HOT IPTV and other third-party applications operate under their own privacy policies.",
        },
      ],
    },
    {
      title: "Complaints",
      blocks: [
        {
          kind: "lead",
          text: "You may contact the Information Commissioner’s Office:",
        },
        {
          kind: "definitions",
          items: [
            { term: "Website", description: "ico.org.uk" },
            { term: "Telephone", description: "0303 123 1113" },
          ],
        },
      ],
    },
    {
      title: "Updates",
      blocks: [
        {
          kind: "text",
          text: "This policy may be updated to reflect operational, technical or legal changes.",
        },
      ],
    },
  ],
};
