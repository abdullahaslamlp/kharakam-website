"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Connect With Us", href: "/connect" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 apple-glass">
      <div className="h-20 max-w-7xl mx-auto px-margin-sm lg:px-margin-lg flex items-center justify-between">
        {/* Brand Anchor */}
        <Link
          href="/"
          className="flex items-center gap-space-sm apple-pressable cursor-pointer group"
        >
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="KharaKam Logo"
              width={38}
              height={38}
              style={{ width: "auto" }}
              className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>
          <span className="font-title-lg text-title-lg tracking-tight font-semibold text-primary">
            KharaKam
          </span>
        </Link>

        {/* Desktop Navigation with Animated Spring Pill */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-surface-container/60 rounded-full border border-surface-container">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full font-title-md text-title-md transition-colors duration-150 apple-pressable ${
                  active
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-surface-container-lowest rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-surface-container/80 -z-10"
                    transition={{
                      type: "spring",
                      bounce: 0,
                      duration: 0.35,
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors apple-pressable"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Symmetric Spring Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.3,
            }}
            className="md:hidden border-t border-surface-container/80 bg-surface-container-lowest/95 backdrop-blur-2xl px-margin-sm py-space-md shadow-xl"
          >
            <nav className="flex flex-col gap-space-xs">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-title-md text-title-md px-space-md py-space-sm rounded-xl transition-all apple-pressable ${
                      active
                        ? "bg-surface-container-low text-primary font-semibold"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
