import {
  BUSINESS_ADDRESS,
  DOWNLOADER_CODE,
  LEGAL_LAST_UPDATED,
  LEGAL_OPERATOR_NAME,
  LEGAL_WEBSITE,
} from "@/lib/site";
import type { LegalDocument } from "./legal-types";

export const TERMS_DOCUMENT: LegalDocument = {
  title: "Sky Glass IPTV Terms & Conditions –",
  highlight: "Subscriptions, Payments & Acceptable Use",
  lastUpdated: LEGAL_LAST_UPDATED,
  numbered: true,
  meta: [
    { label: "Legal Operator", value: LEGAL_OPERATOR_NAME },
    { label: "Trading Name", value: "Sky Glass IPTV" },
    { label: "Business Address", value: BUSINESS_ADDRESS },
    { label: "Website", value: LEGAL_WEBSITE },
  ],
  sections: [
    {
      title: "Acceptance",
      blocks: [
        {
          kind: "text",
          text: "By ordering, requesting immediate activation or using the service, you agree to these Terms, the Privacy Policy and the Refund Policy.",
        },
        {
          kind: "note",
          text: "Nothing in these Terms removes statutory rights that cannot lawfully be excluded.",
        },
      ],
    },
    {
      title: "Eligibility",
      blocks: [
        { kind: "lead", text: "You must:" },
        {
          kind: "bullets",
          items: [
            "Be at least 18",
            "Have legal capacity to enter a contract",
            "Provide accurate information",
            "Use an authorised payment method",
            "Use the service lawfully",
          ],
        },
      ],
    },
    {
      title: "Service Description",
      blocks: [
        {
          kind: "text",
          text: "Sky Glass IPTV supplies time-limited digital access, applicable login details and supported installation guidance.",
        },
        {
          kind: "text",
          text: "Catalogue size, individual entries, schedules, languages and picture quality can change.",
        },
        { kind: "lead", text: "We do not guarantee:" },
        {
          kind: "bullets",
          items: [
            "Every named channel or event",
            "Every film or series",
            "Permanent availability",
            "4K on every stream",
            "Uninterrupted service",
            "Compatibility with every device",
            "Additional connections not purchased",
          ],
        },
      ],
    },
    {
      title: "Orders",
      blocks: [
        {
          kind: "text",
          text: "A contract is formed when payment is accepted and an order confirmation or active login is issued.",
        },
      ],
    },
    {
      title: "Subscription Term",
      blocks: [
        {
          kind: "text",
          text: "The subscription normally begins when active login details are supplied unless another start date is confirmed.",
        },
      ],
    },
    {
      title: "Application Installation",
      blocks: [
        {
          kind: "text",
          text: `Compatible Firestick and Android customers may install Downloader by AFTVnews and enter code ${DOWNLOADER_CODE}.`,
        },
        {
          kind: "text",
          text: "Smart TV customers may use CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV.",
        },
        {
          kind: "note",
          text: "Login details are provided by support after the correct application is installed.",
        },
      ],
    },
    {
      title: "Prices and Payments",
      blocks: [
        {
          kind: "text",
          text: "Prices are shown in pounds sterling unless stated otherwise.",
        },
        { kind: "lead", text: "Customers are responsible for:" },
        {
          kind: "bullets",
          items: [
            "Reviewing the total price",
            "Using an authorised payment method",
            "Paying separate third-party player fees",
            "Checking the selected subscription duration",
            "Confirming required connections",
          ],
        },
      ],
    },
    {
      title: "Immediate Digital Supply",
      blocks: [
        {
          kind: "text",
          text: "Where applicable, customers may be asked to request immediate supply and acknowledge the effect this can have on statutory cancellation rights.",
        },
        {
          kind: "note",
          text: "Statutory rights remain unaffected where legally required consent was not obtained.",
        },
      ],
    },
    {
      title: "Trials",
      blocks: [
        { kind: "lead", text: "Trials:" },
        {
          kind: "bullets",
          items: [
            "Are subject to availability",
            "May be restricted to new customers",
            "Begin when login details are issued",
            "Are intended for evaluation",
            "Must not be shared or resold",
            "May be ended where abuse is suspected",
          ],
        },
      ],
    },
    {
      title: "Account Credentials",
      blocks: [
        {
          kind: "text",
          text: "Customers must protect usernames, passwords, server details, M3U links and portal URLs.",
        },
        { kind: "lead", text: "Customers must not:" },
        {
          kind: "bullets",
          items: [
            "Publish credentials",
            "Exceed connection limits",
            "Resell without authorisation",
            "Reverse engineer applications",
            "Rebroadcast content without permission",
            "Interfere with the service",
            "Use access unlawfully",
          ],
        },
      ],
    },
    {
      title: "Devices and Internet",
      blocks: [
        {
          kind: "text",
          text: "Customers are responsible for their device, internet connection and third-party applications.",
        },
        {
          kind: "lead",
          text: "We are not responsible for problems caused solely by:",
        },
        {
          kind: "bullets",
          items: [
            "Unsupported equipment",
            "Weak Wi-Fi",
            "Broadband outages",
            "Insufficient storage",
            "Device updates",
            "Third-party app changes",
            "Slow VPN connections",
            "Incorrectly entered details",
          ],
        },
      ],
    },
    {
      title: "Third-Party Players",
      blocks: [
        {
          kind: "text",
          text: "CR7 Player, IBO Player, SmartOne IPTV, HOT IPTV and other third-party applications are controlled by their developers.",
        },
        {
          kind: "note",
          text: "Their charges, availability and privacy practices are separate from the subscription.",
        },
      ],
    },
    {
      title: "Availability",
      blocks: [
        {
          kind: "text",
          text: "Maintenance, source changes, network incidents and other circumstances can cause temporary interruptions.",
        },
        {
          kind: "text",
          text: "Catalogue entries may be added, changed or removed.",
        },
      ],
    },
    {
      title: "Support",
      blocks: [
        { kind: "lead", text: "Support can assist with:" },
        {
          kind: "bullets",
          items: [
            "Login details",
            "Activation",
            "Supported installation",
            "Basic troubleshooting",
            "Renewal",
            "Billing",
            "Eligible refund requests",
          ],
        },
        {
          kind: "note",
          text: "Support does not repair customer devices, broadband or third-party software.",
        },
      ],
    },
    {
      title: "Suspension",
      blocks: [
        { kind: "lead", text: "Access may be suspended for:" },
        {
          kind: "bullets",
          items: [
            "Non-payment",
            "Fraud",
            "Credential sharing",
            "Connection abuse",
            "Unauthorised resale",
            "Security threats",
            "Unlawful use",
            "Material breach",
          ],
        },
      ],
    },
    {
      title: "Refunds",
      blocks: [
        {
          kind: "text",
          text: "Refunds are handled under the Refund Policy and applicable law.",
        },
      ],
    },
    {
      title: "Intellectual Property",
      blocks: [
        {
          kind: "text",
          text: "Website material and original branding are protected by applicable intellectual-property law.",
        },
        {
          kind: "text",
          text: "A subscription provides limited personal access. It does not grant permission to reproduce, distribute, rebroadcast or commercially exploit content.",
        },
      ],
    },
    {
      title: "Liability",
      blocks: [
        {
          kind: "text",
          text: "Nothing excludes liability where doing so would be unlawful.",
        },
        {
          kind: "note",
          text: "Consumer statutory rights remain unaffected.",
        },
      ],
    },
    {
      title: "Resellers",
      blocks: [
        {
          kind: "text",
          text: "Resellers are also subject to any separate reseller agreement and remain responsible for their customers, pricing, refunds, compliance and data protection.",
        },
        { kind: "note", text: "No earnings are guaranteed." },
      ],
    },
    {
      title: "Privacy",
      blocks: [
        {
          kind: "text",
          text: "Personal information is handled under the Privacy Policy.",
        },
      ],
    },
    {
      title: "Changes",
      blocks: [
        {
          kind: "text",
          text: "These Terms may be updated for legal, security or operational reasons. The latest revision date will be displayed.",
        },
      ],
    },
    {
      title: "Governing Law",
      blocks: [
        {
          kind: "text",
          text: "These Terms are governed by the laws of England and Wales, subject to mandatory consumer protections.",
        },
      ],
    },
    {
      title: "Contact",
      blocks: [
        {
          kind: "text",
          text: "Submit questions through the Contact page.",
        },
      ],
    },
    {
      title: "Independence",
      blocks: [
        {
          kind: "text",
          text: "Sky Glass IPTV is not affiliated with, endorsed by or operated by Sky UK Limited or the manufacturer of the Sky Glass television.",
        },
      ],
    },
  ],
};
