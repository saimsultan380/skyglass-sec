import React from "react";
import { BlogPostPage } from "@/components/blog/blog-post-page";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const path = "/buy-12-month-sky-glass-iptv-subscription/";
const page = SITE_PAGES.find((p) => p.path === path)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  absoluteTitle: true,
});

export default function Buy12MonthSkyGlassIptvSubscriptionBlogPostPage() {
  return (
    <BlogPostPage
      slug="buy-12-month-sky-glass-iptv-subscription"
      breadcrumbs={page.breadcrumbs}
    />
  );
}
