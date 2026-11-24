import React from "react";
import { BlogPostPage } from "@/components/blog/blog-post-page";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const path = "/how-to-become-sky-glass-iptv-reseller/";
const page = SITE_PAGES.find((p) => p.path === path)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  absoluteTitle: true,
});

export default function HowToBecomeIptvResellerPage() {
  return (
    <BlogPostPage
      slug="how-to-become-sky-glass-iptv-reseller"
      breadcrumbs={page.breadcrumbs}
    />
  );
}
