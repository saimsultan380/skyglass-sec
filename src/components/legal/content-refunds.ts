import { DOWNLOADER_CODE, LEGAL_LAST_UPDATED } from "@/lib/site";
import type { LegalDocument } from "./legal-types";

export const REFUND_DOCUMENT: LegalDocument = {
  title: "Refund",
  highlight: "Policy",
  lastUpdated: LEGAL_LAST_UPDATED,
  intro: [
    "This policy explains how cancellation and refund requests are handled for Sky Glass IPTV subscriptions.",
    "Nothing in this policy removes statutory consumer rights.",
  ],
  sections: [
    {
      title: "Before Access Begins",
      blocks: [
        {
          kind: "text",
          text: "If you cancel before login details are supplied or digital access begins, contact us promptly.",
        },
        {
          kind: "note",
          text: "Where the service has not started, a full refund will normally be considered unless a lawful exception applies.",
        },
      ],
    },
    {
      title: "After Login Details Are Supplied",
      blocks: [
        {
          kind: "text",
          text: "Digital access can begin immediately at the customer’s request.",
        },
        {
          kind: "note",
          text: "Where legally valid consent and acknowledgement have been provided, the statutory right to change your mind may end after digital supply begins.",
        },
      ],
    },
    {
      title: "Seven-Day Technical Review Period",
      blocks: [
        {
          kind: "lead",
          text: "A refund request submitted within seven calendar days of activation may be considered where:",
        },
        {
          kind: "bullets",
          items: [
            "The account cannot be activated",
            "A verified service-side fault prevents reasonable access",
            "The supplied service is materially different from its description",
            "Support cannot resolve the qualifying issue",
            "A duplicate payment was made",
            "Payment was accepted but access was not supplied",
          ],
        },
      ],
    },
    {
      title: "Installation Requirement",
      blocks: [
        {
          kind: "text",
          text: "Before requesting a technical refund, customers should install the correct application.",
        },
        {
          kind: "definitions",
          items: [
            {
              term: "Firestick and Android",
              description: `Install Downloader by AFTVnews and enter code ${DOWNLOADER_CODE}.`,
            },
            {
              term: "Samsung and LG",
              description:
                "Install CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV.",
            },
            {
              term: "Other Devices",
              description:
                "Install the compatible player confirmed by support.",
            },
          ],
        },
        {
          kind: "note",
          text: "After installation, contact support for login details and allow reasonable troubleshooting.",
        },
      ],
    },
    {
      title: "Situations That Normally Do Not Qualify",
      blocks: [
        {
          kind: "lead",
          text: "Subject to statutory rights, a voluntary refund is not normally provided solely because:",
        },
        {
          kind: "bullets",
          items: [
            "The customer changed their mind after activation",
            "One channel or title became unavailable",
            "Every stream was expected to be 4K",
            "Catch-Up was expected on every channel",
            "The customer’s broadband is inadequate",
            "An unsupported device was used",
            "A third-party player charged a fee",
            "Login details were shared",
            "Connection limits were exceeded",
            "Reasonable troubleshooting was refused",
            "A VPN reduced performance",
            "The account was suspended for misuse",
            "A reseller did not use or sell credits",
          ],
        },
      ],
    },
    {
      title: "Requesting a Refund",
      blocks: [
        { kind: "lead", text: "Provide:" },
        {
          kind: "bullets",
          items: [
            "Name",
            "Order reference",
            "Payment date",
            "Amount",
            "Plan",
            "Device",
            "Application",
            "Activation date",
            "Reason",
            "Exact error",
            "Troubleshooting attempted",
            "Relevant screenshots with private credentials hidden",
          ],
        },
        { kind: "note", text: "Use the subject Refund Request." },
      ],
    },
    {
      title: "Review Process",
      blocks: [
        { kind: "lead", text: "We will consider:" },
        {
          kind: "bullets",
          items: [
            "The applicable request period",
            "Whether access began",
            "Whether legal consent was obtained",
            "Whether the problem is service-side",
            "Whether support attempted a reasonable resolution",
            "Whether the service matched its description",
            "Whether misuse contributed",
          ],
        },
        {
          kind: "note",
          text: "Approved funds are normally returned to the original payment method.",
        },
      ],
    },
  ],
};

/** Rendered after Refund FAQs so section order matches the content source. */
export const REFUND_SUBMIT_SECTION = {
  title: "Submit a Request",
  blocks: [
    {
      kind: "text" as const,
      text: "Use the Contact page and choose Refund Request.",
    },
  ],
};

export const REFUND_FAQS = [
  {
    question: "Does one unavailable channel qualify?",
    answer: "Not automatically. Individual catalogue entries can change.",
  },
  {
    question: "Are third-party player fees refundable?",
    answer:
      "Those payments are controlled by the app developer or app store.",
  },
  {
    question: "Does a free trial have a refund?",
    answer: "A free trial has no subscription price to refund.",
  },
  {
    question: "Can unused reseller credits be refunded?",
    answer:
      "Only where the reseller agreement or applicable law permits it.",
  },
];
