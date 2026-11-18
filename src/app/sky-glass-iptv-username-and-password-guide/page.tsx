import React from "react";
import { BlogPostPage } from "@/components/blog/blog-post-page";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const path = "/sky-glass-iptv-username-and-password-guide/";
const page = SITE_PAGES.find((p) => p.path === path)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  absoluteTitle: true,
});

export default function SkyGlassUsernamePasswordBlogPostPage() {
  return (
    <BlogPostPage
      slug="sky-glass-iptv-username-and-password-guide"
      breadcrumbs={page.breadcrumbs}
    />
  );
}
