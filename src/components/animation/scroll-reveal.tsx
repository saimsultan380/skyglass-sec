"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollReveal — Global Intersection Observer
 * Smoothly reveals section cards and headings on scroll.
 * Uses hardware-accelerated translate + opacity (no blur filter).
 * Skips heroes, titles, interactive controls, overflow containers, and [data-no-reveal].
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const observed = new WeakSet<Element>();

    const shouldSkip = (el: HTMLElement) => {
      if (el.closest("header, nav, script, style, noscript")) return true;
      if (el.hasAttribute("data-no-reveal")) return true;
      if (el.closest("[data-no-reveal]")) return true;
      // Hero above-the-fold — always visible, never wait on scroll
      if (el.closest("[data-hero]")) return true;
      // Never animate hero titles
      if (el.matches("h1, .text-h1-skyglass")) return true;
      if (el.closest("h1, .text-h1-skyglass")) return true;
      // Never animate elements inside overflow scroll containers (e.g. device sidebar)
      if (
        el.closest(
          '[class*="overflow-y-auto"], [class*="overflow-x-auto"], [class*="overflow-auto"]'
        )
      ) {
        return true;
      }
      // Never animate individual interactive controls, links or form fields
      if (
        el.matches(
          'button, a, input, select, textarea, [role="button"], [role="tab"], svg, path'
        )
      ) {
        return true;
      }
      if (el.closest('button, [role="tablist"]')) {
        return true;
      }
      return false;
    };

    const isContentCard = (el: HTMLElement) => {
      const c = el.getAttribute("class") || "";
      if (!c.includes("border")) return false;

      const rounded12 = c.includes("rounded-[12px]");
      const rounded2xl = c.includes("rounded-2xl");
      const trustPill =
        c.includes("rounded-full") &&
        c.includes("w-full") &&
        /\bp-[3-4]\b|\bsm:p-4\b/.test(c);

      if (!rounded12 && !rounded2xl && !trustPill) return false;
      if (c.includes("rounded-full") && !trustPill) return false;

      return /\bp-[3-9]\b|\bp-\d{2}\b|\bsm:p-|\blg:p-/.test(c);
    };

    const mark = (
      el: HTMLElement,
      delay?: number,
      options?: { allowNested?: boolean }
    ) => {
      if (shouldSkip(el)) return;

      if (!options?.allowNested) {
        const ancestor = el.parentElement?.closest("[data-reveal]");
        if (ancestor) return;
      }

      if (!el.hasAttribute("data-reveal")) {
        el.setAttribute("data-reveal", "");
      }
      if (delay !== undefined && !el.hasAttribute("data-delay")) {
        const snapped =
          delay <= 0
            ? null
            : delay <= 40
              ? "40"
              : delay <= 80
                ? "80"
                : delay <= 120
                  ? "120"
                  : delay <= 160
                    ? "160"
                    : "200";
        if (snapped) el.setAttribute("data-delay", snapped);
      }
    };

    const autoMark = () => {
      const root = document.body;

      // Mark top-level content cards
      root
        .querySelectorAll<HTMLElement>("section div, footer div")
        .forEach((el) => {
          if (isContentCard(el)) {
            mark(el);
          }
        });

      // Mark standalone section headings that aren't inside an already-marked card
      root
        .querySelectorAll<HTMLElement>(
          "section h2, section h3, footer h3"
        )
        .forEach((el) => {
          const insideReveal = Boolean(
            el.parentElement?.closest("[data-reveal]")
          );
          if (!insideReveal) {
            mark(el);
          }
        });

      // Stagger child cards inside grids
      root
        .querySelectorAll<HTMLElement>(
          "section .grid"
        )
        .forEach((parent) => {
          if (parent.closest("[data-reveal]")) return;
          const kids = Array.from(parent.children).filter(
            (n): n is HTMLElement =>
              n instanceof HTMLElement && n.hasAttribute("data-reveal")
          );
          kids.forEach((kid, i) => {
            if (!kid.hasAttribute("data-delay")) {
              mark(kid, (i % 6) * 40, { allowNested: true });
            }
          });
        });
    };

    const observeAll = () => {
      if (!observer) return;
      const io = observer;
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (shouldSkip(el)) {
          el.classList.add("revealed");
          el.removeAttribute("data-reveal");
          return;
        }
        if (observed.has(el)) return;
        observed.add(el);
        io.observe(el);
      });
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            // Once revealed, stop observing — smoother scroll, no exit flicker
            observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "80px 0px 80px 0px",
      }
    );

    autoMark();
    observeAll();

    let debounce: ReturnType<typeof setTimeout> | null = null;
    const mo = new MutationObserver(() => {
      if (debounce) clearTimeout(debounce);
      debounce = setTimeout(() => {
        autoMark();
        observeAll();
        revealInView();
      }, 50);
    });

    mo.observe(document.body, { childList: true, subtree: true });

    // Immediately reveal anything already in (or near) the viewport
    const revealInView = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (shouldSkip(el)) {
          el.classList.add("revealed");
          return;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < vh + 100 && rect.bottom > -100) {
          el.classList.add("revealed");
        }
      });
    };

    revealInView();
    requestAnimationFrame(revealInView);

    // Fast scroll listener to ensure immediate reveal without lag
    let scrollRaf = 0;
    const onScrollOrResize = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        revealInView();
      });
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    // Fallback timer: ensure all visible elements are revealed
    const fallbackTimer = setTimeout(revealInView, 300);

    return () => {
      if (debounce) clearTimeout(debounce);
      clearTimeout(fallbackTimer);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      mo.disconnect();
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
