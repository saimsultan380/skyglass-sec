import React from "react";
import { SkyglassHeader } from "@/components/sections/skyglass-header";
import { SkyglassFooter } from "@/components/sections/footer";
import { BlogCard } from "@/components/blog/blog-card";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getAllBlogPosts } from "@/lib/blog";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.blog)!;
const posts = getAllBlogPosts();

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  absoluteTitle: true,
});

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen">
      <SkyglassHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <section className="w-full bg-white pb-12 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
          <header className="mb-8 border-b border-slate-200 pb-5 sm:mb-10 sm:pb-6">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[#0B0E2C] sm:text-4xl">
              Blog
            </h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold text-slate-500 sm:text-base">
              Guides on Sky Glass IPTV apps, setup, playback fixes and
              subscription tips for UK viewers.
            </p>
          </header>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SkyglassFooter />
    </main>
  );
}
