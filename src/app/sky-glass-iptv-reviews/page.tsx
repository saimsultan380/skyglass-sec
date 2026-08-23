import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { RevHero } from "@/components/reviews/rev-hero";
import { RevFormat } from "@/components/reviews/rev-format";
import { RevByDevice } from "@/components/reviews/rev-by-device";
import { RevVerification } from "@/components/reviews/rev-verification";
import { RevHelp } from "@/components/reviews/rev-help";
import { FaqSection } from "@/components/ui/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.reviews)!;

export const metadata = {
  ...buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  }),
  robots: {
    index: false,
    follow: true,
  },
};

const reviewFaqs = [
  {
    question: "Are reviews verified?",
    answer:
      "Reviews should be linked to genuine customer activity before publication.",
  },
  {
    question: "Are negative reviews allowed?",
    answer:
      "Yes. Genuine criticism should not be removed simply because it is negative.",
  },
  {
    question: "Do customers receive payment for positive reviews?",
    answer: "No. Reviews should represent genuine experiences.",
  },
  {
    question: "Can a review be updated?",
    answer:
      "Yes. Contact support from the contact method connected to the original order.",
  },
  {
    question: "Can personal details be removed?",
    answer: "Yes. Customers can request a shortened or anonymous display name.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <RevHero />
      <RevFormat />
      <RevByDevice />
      <RevVerification />
      <RevHelp />
      <FaqSection
        eyebrow="Review Policy"
        title="Review"
        highlight="FAQs"
        items={reviewFaqs}
      />
      <SkyglassFooter />
    </main>
  );
}
