import React from "react";
import { notFound } from "next/navigation";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { BlogArticle } from "@/components/blog/blog-article";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { JsonLd } from "@/components/seo/json-ld";
import { getBlogPostBySlug } from "@/lib/blog";
import {
  absoluteUrl,
  ROUTES,
  SITE_NAME,
  type BreadcrumbItem,
} from "@/lib/seo";

export function BlogPostPage({
  slug,
  breadcrumbs,
}: {
  slug: string;
  breadcrumbs: readonly BreadcrumbItem[];
}) {
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl(ROUTES.home),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl(ROUTES.home),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icons/icon-512.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(post.path),
    image: post.coverImage
      ? absoluteUrl(post.coverImage)
      : absoluteUrl("/opengraph-image.png"),
  };

  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
      <JsonLd data={articleJsonLd} />
      <BlogArticle post={post} />
      <SkyglassFooter />
    </main>
  );
}
