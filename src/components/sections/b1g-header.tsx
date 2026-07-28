"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/seo";

const navLinks = [
  { name: "Sky Glass IPTV", href: ROUTES.home },
  { name: "Subscription Plans", href: ROUTES.subscription },
  { name: "Installation Guide", href: ROUTES.installation },
  { name: "Reseller Panel", href: ROUTES.reseller },
  { name: "Contact", href: ROUTES.contact },
];

/** Shared frosted-glass surface — desktop header + mobile navbar use the exact same look */
const glassSurface =
  "border border-white/55 bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-[24px] supports-[backdrop-filter]:bg-white/80";

export function B1GHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 max-w-[1280px] mx-auto pt-3 sm:pt-4"
    >
      <div
        className={`hidden lg:flex h-[84px] w-full items-center justify-between rounded-[12px] px-8 overflow-hidden ${glassSurface}`}
      >
        <Link href={ROUTES.home} className="flex items-center shrink-0 group">
          <div className="relative h-11 w-[156px] flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/logo-transparent.PNG"
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
              className="transition-colors duration-200 hover:text-[#E91E8C] whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center shrink-0">
          <Link href={ROUTES.subscription}>
            <Button
              variant="primary"
              className="h-[44px] px-6 rounded-[12px] text-sm font-semibold bg-gradient-brand text-white whitespace-nowrap"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative lg:hidden w-full h-[64px]">
        <div
          className={`absolute top-0 left-0 right-0 z-50 flex flex-col w-full rounded-[12px] overflow-hidden ${glassSurface}`}
        >
          <div className="flex h-[64px] items-center justify-between px-5 shrink-0">
            <Link href={ROUTES.home} className="flex items-center group">
              <div className="relative h-9 w-[130px] flex items-center justify-center transition-transform duration-300 group-active:scale-[1.02]">
                <Image
                  src="/logo-transparent.PNG"
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
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="overflow-hidden border-t border-white/40 bg-transparent"
              >
                <div className="p-5 flex flex-col gap-5">
                  <nav className="flex flex-col gap-3.5">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-semibold text-slate-800 py-3 border-b border-white/40"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-2">
                    <Link href={ROUTES.subscription} onClick={() => setMobileMenuOpen(false)}>
                      <Button
                        variant="primary"
                        className="w-full h-[48px] rounded-[12px] text-base font-semibold bg-gradient-brand text-white"
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
    </header>
  );
}
