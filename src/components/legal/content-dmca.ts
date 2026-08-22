import {
  BUSINESS_ADDRESS,
  CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_OPERATOR_NAME,
} from "@/lib/site";
import type { LegalDocument } from "./legal-types";

export const DMCA_DOCUMENT: LegalDocument = {
  title: "Sky Glass IPTV DMCA Policy –",
  highlight: "Copyright Notices & Counter-Notices",
  lastUpdated: LEGAL_LAST_UPDATED,
  intro: [
    "Sky Glass IPTV respects intellectual-property rights and reviews sufficiently detailed copyright complaints concerning material located on or controlled through skyglass-iptv.com.",
  ],
  sections: [
    {
      title: "Copyright Contact",
      blocks: [
        {
          kind: "definitions",
          items: [
            { term: "Legal Operator", description: LEGAL_OPERATOR_NAME },
            {
              term: "Copyright Contact",
              description: "Sky Glass IPTV Copyright Team",
            },
            { term: "Address", description: BUSINESS_ADDRESS },
            { term: "Email", description: CONTACT_EMAIL },
            { term: "Subject", description: "Copyright Notice" },
          ],
        },
        {
          kind: "note",
          text: "Do not describe this contact as a registered US Copyright Office Designated Agent unless the relevant registration has been completed and maintained.",
        },
      ],
    },
    {
      title: "Submit a Copyright Notice",
      blocks: [
        { kind: "lead", text: "Include:" },
        {
          kind: "steps",
          items: [
            "A physical or electronic signature.",
            "Identification of the protected work.",
            "Identification of the allegedly infringing material.",
            "The exact URL or location.",
            "The complainant’s contact information.",
            "A good-faith statement that the use is not authorised.",
            "A statement that the information is accurate and the complainant is authorised to act.",
          ],
        },
        {
          kind: "note",
          text: "Incomplete general statements may not provide enough information to assess the complaint.",
        },
      ],
    },
    {
      title: "What Happens Next?",
      blocks: [
        { kind: "lead", text: "We may:" },
        {
          kind: "bullets",
          items: [
            "Acknowledge the notice",
            "Request missing information",
            "Review the location",
            "Restrict access where appropriate",
            "Contact relevant providers",
            "Notify the affected party",
            "Remove or disable material",
            "Preserve records",
            "Take action against repeat infringers",
          ],
        },
      ],
    },
    {
      title: "Counter-Notification",
      blocks: [
        { kind: "lead", text: "A counter-notice should include:" },
        {
          kind: "steps",
          items: [
            "A physical or electronic signature.",
            "Identification of the removed material.",
            "Its former location.",
            "A statement that removal resulted from mistake or misidentification.",
            "The sender’s name, address, telephone number and email.",
            "Any legally required jurisdiction and service-of-process statement.",
          ],
        },
        {
          kind: "note",
          text: "Material may be restored where legally appropriate unless qualifying court action is notified.",
        },
      ],
    },
    {
      title: "Repeat Infringement",
      blocks: [
        {
          kind: "text",
          text: "Accounts connected with repeated substantiated infringement may be restricted or terminated.",
        },
        { kind: "lead", text: "Relevant factors may include:" },
        {
          kind: "bullets",
          items: [
            "Number of reliable notices",
            "Repeated conduct",
            "Counter-notices",
            "Evidence of deliberate infringement",
            "Applicable law",
            "Severity",
          ],
        },
      ],
    },
    {
      title: "Misrepresentation",
      blocks: [
        {
          kind: "text",
          text: "False or materially misleading notices and counter-notices can create legal liability.",
        },
        { kind: "lead", text: "Do not submit:" },
        {
          kind: "bullets",
          items: [
            "Claims for works you do not own or represent",
            "False authority statements",
            "Complaints intended only to suppress competition",
            "Altered evidence",
            "Notices with no reasonable basis",
          ],
        },
      ],
    },
    {
      title: "Trademark and Other Complaints",
      blocks: [
        {
          kind: "text",
          text: "Trademark, impersonation, privacy and other legal complaints should be submitted through the Contact page with supporting evidence.",
        },
      ],
    },
    {
      title: "No Admission",
      blocks: [
        {
          kind: "text",
          text: "Removing, restricting or restoring material does not constitute an admission of infringement, ownership or liability.",
        },
      ],
    },
    {
      title: "Independent Service Notice",
      blocks: [
        {
          kind: "text",
          text: "Sky Glass IPTV is not affiliated with, endorsed by or operated by Sky UK Limited or the manufacturer of the Sky Glass television. Third-party product names and trademarks belong to their respective owners.",
        },
      ],
    },
  ],
};
