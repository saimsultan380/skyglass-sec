import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost;
  index?: number;
}) {
  return (
    <article
      data-reveal
      data-delay={String(Math.min(index * 50, 200))}
      className="iphone-glass-card group flex h-full flex-col overflow-hidden"
    >
      <Link href={post.path} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100/80">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-pink-50">
              <span className="px-4 text-center text-xs font-semibold tracking-wide text-slate-400 uppercase">
                Image coming soon
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold text-slate-500 sm:text-xs">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3 stroke-[2.5] text-[#E91E8C]" />
              {post.readingMinutes} min read
            </span>
          </div>

          <h2 className="font-heading text-base leading-snug font-bold tracking-tight text-[#0B0E2C] transition-colors group-hover:text-[#E91E8C] sm:text-lg">
            {post.title}
          </h2>

          <p className="line-clamp-3 text-xs leading-relaxed font-semibold text-slate-600 sm:text-sm">
            {post.excerpt}
          </p>

          <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-bold text-[#E91E8C] sm:text-sm">
            Read guide
            <ArrowRight className="h-3.5 w-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
