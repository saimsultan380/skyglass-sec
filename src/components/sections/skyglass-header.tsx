"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/seo";
import { LOGO_IMAGE } from "@/lib/assets";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Sky Glass IPTV", href: ROUTES.home },
  { name: "Subscription Plans", href: ROUTES.subscription },
  { name: "Installation Guide", href: ROUTES.installation },
  { name: "Reseller Panel", href: ROUTES.reseller },
  { name: "Contact", href: ROUTES.contact },
];

/** Frosted glass — applied after scroll (Apple-style sticky nav) */
const glassScrolled =
  "border border-white/55 bg-white/75 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-[12px] supports-[backdrop-filter]:bg-white/75";

/** At page top — clear / transparent shell */
const glassTop =
  "border border-transparent bg-transparent shadow-none backdrop-blur-none";

export function SkyglassHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Keep solid glass while the mobile drawer is open so links stay readable */
  const showGlass = isScrolled || mobileMenuOpen;

  const toggleMobileMenu = () => {
    setMobileMenuOpen((wasOpen) => {
      const willOpen = !wasOpen;

      if (willOpen && headerRef.current) {
        const offset = headerRef.current.getBoundingClientRect().top - 12;
        if (Math.abs(offset) > 1) {
          window.scrollBy({ top: offset, behavior: "instant" });
        }
      }

      return willOpen;
    });
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full pt-3 sm:pt-4">
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-6 lg:px-8">
        <div
          className={cn(
            "hidden h-[84px] w-full items-center justify-between overflow-hidden rounded-[12px] px-8 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out lg:flex",
            showGlass ? glassScrolled : glassTop
          )}
        >
          <Link href={ROUTES.home} className="group flex shrink-0 items-center">
            <div className="relative flex h-11 w-[156px] items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={LOGO_IMAGE}
                alt="Sky Glass IPTV Logo"
                width={156}
                height={44}
                priority
                className="h-full w-full object-contain object-left"
              />
            </div>
          </Link>

          <nav className="flex items-center gap-8 text-[15px] font-semibold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-200 hover:text-[#E91E8C]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center">
            <Link href={ROUTES.subscription}>
              <Button
                variant="primary"
                className="bg-gradient-brand h-[44px] rounded-[12px] px-6 text-sm font-semibold whitespace-nowrap text-white"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative h-[64px] w-full lg:hidden">
          <div
            className={cn(
              "absolute top-0 right-0 left-0 z-50 flex w-full flex-col overflow-hidden rounded-[12px] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out",
              showGlass ? glassScrolled : glassTop
            )}
          >
            <div className="flex h-[64px] shrink-0 items-center justify-between px-5">
              <Link href={ROUTES.home} className="group flex items-center">
                <div className="relative flex h-9 w-[130px] items-center justify-center transition-transform duration-300 group-active:scale-[1.02]">
                  <Image
                    src={LOGO_IMAGE}
                    alt="Sky Glass IPTV Logo"
                    width={130}
                    height={36}
                    priority
                    className="h-full w-full object-contain object-left"
                  />
                </div>
              </Link>

              <button
                type="button"
                onClick={toggleMobileMenu}
                className="p-2 text-slate-800 focus:outline-none"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-[#E91E8C]" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {mobileMenuOpen && (
                <motion.div
                  key="mobile-menu-overlay"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="overflow-hidden border-t border-white/40 bg-transparent"
                >
                  <div className="flex flex-col gap-5 p-5">
                    <nav className="flex flex-col gap-3.5">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="border-b border-white/40 py-3 text-base font-semibold text-slate-800"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="pt-2">
                      <Link
                        href={ROUTES.subscription}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button
                          variant="primary"
                          className="bg-gradient-brand h-[48px] w-full rounded-[12px] text-base font-semibold text-white"
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
