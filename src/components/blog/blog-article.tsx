import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, ImageIcon } from "lucide-react";
import type { BlogBlock, BlogPost } from "@/lib/blog";
import { ROUTES } from "@/lib/seo";
import { Tick } from "@/components/ui/section-bits";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

function BlogImage({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  return (
    <figure className="my-8 sm:my-10">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px] bg-slate-100">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-50 via-white to-pink-50/60 px-6 text-center">
            <ImageIcon className="h-8 w-8 text-slate-300 stroke-[1.5]" />
            <p className="text-xs font-semibold text-slate-400 sm:text-sm">
              Image placeholder — add your photo here later
            </p>
          </div>
        )}
      </div>
      {alt ? (
        <figcaption className="mt-2.5 text-center text-[11px] font-semibold text-slate-500 sm:text-xs">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
}

function renderBlock(block: BlogBlock, key: number) {
  switch (block.type) {
    case "p":
      return (
        <p
          key={key}
          className="text-sm leading-relaxed font-medium text-slate-700 sm:text-[15px] sm:leading-[1.75]"
        >
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={key}
          className="font-heading mt-10 mb-3 text-xl font-bold tracking-tight text-[#0B0E2C] sm:mt-12 sm:text-2xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={key}
          className="font-heading mt-7 mb-2 text-base font-bold tracking-tight text-[#0B0E2C] sm:mt-8 sm:text-lg"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={key} className="my-4 flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Tick />
              <span className="text-sm leading-relaxed font-medium text-slate-700 sm:text-[15px] sm:leading-[1.7]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="my-4 flex flex-col gap-2.5">
          {block.items.map((item, index) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-bold text-[#E91E8C]">
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed font-medium text-slate-700 sm:text-[15px] sm:leading-[1.7]">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );
    case "steps":
      return (
        <ol key={key} className="my-6 flex flex-col gap-4">
          {block.items.map((item, index) => (
            <li
              key={item.title}
              className="rounded-[12px] border border-slate-200/80 bg-white/70 p-4 sm:p-5"
            >
              <div className="mb-2 flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-xs font-bold text-[#E91E8C]">
                  {index + 1}
                </span>
                <h3 className="font-heading text-sm font-bold text-[#0B0E2C] sm:text-base">
                  {item.title}
                </h3>
              </div>
              <p className="mt-1 text-sm leading-relaxed font-medium text-slate-700 sm:ml-9 sm:text-[15px] sm:leading-[1.7]">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      );
    case "faq":
      return (
        <div key={key} className="my-6 flex flex-col gap-3">
          {block.items.map((item) => (
            <div
              key={item.question}
              className="rounded-[12px] border border-slate-200/80 bg-white/70 p-4 sm:p-5"
            >
              <h3 className="font-heading mb-2 text-sm font-bold text-[#0B0E2C] sm:text-base">
                {item.question}
              </h3>
              <p className="text-sm leading-relaxed font-medium text-slate-700 sm:text-[15px] sm:leading-[1.7]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      );
    case "image":
      return <BlogImage key={key} src={block.src} alt={block.alt} />;
    default:
      return null;
  }
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="w-full bg-white pb-12 sm:pb-20">
      <div className="mx-auto w-full max-w-3xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <Link
          href={ROUTES.blog}
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 transition-colors hover:text-[#E91E8C] sm:text-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5 stroke-[2.5]" />
          Back to Blog
        </Link>

        <header className="mb-8 border-b border-slate-200 pb-6 sm:mb-10 sm:pb-8">
          <h1 className="font-heading text-2xl leading-tight font-bold tracking-tight text-[#0B0E2C] sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 sm:text-sm">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 stroke-[2.5] text-[#E91E8C]" />
              {post.readingMinutes} min read
            </span>
          </div>
        </header>

        <div className="flex flex-col gap-4">
          {post.blocks.map((block, index) => renderBlock(block, index))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 sm:mt-12">
          <p className="mb-4 text-sm font-semibold text-slate-600 sm:text-[15px]">
            Ready to check plans or request a trial?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={ROUTES.home}
              className="inline-flex items-center justify-center rounded-[12px] bg-gradient-brand px-5 py-3 text-xs font-semibold text-white sm:text-sm"
            >
              View Premium plans
            </Link>
            <Link
              href={ROUTES.installation}
              className="inline-flex items-center justify-center rounded-[12px] border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-[#0B0E2C] transition-colors hover:border-[#E91E8C]/40 hover:text-[#E91E8C] sm:text-sm"
            >
              Installation guide
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
