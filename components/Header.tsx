"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin-sm lg:px-margin-lg flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <Link href="/" className="flex items-center gap-space-sm">
            <Image
              src="/images/logo.png"
              alt="KharaKam Logo"
              width={36}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
            <span className="font-title-lg text-title-lg tracking-tight font-semibold text-primary">
              KharaKam
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-space-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-title-md text-title-md px-space-sm py-space-xs rounded-lg transition-colors duration-150 ${
                  active
                    ? "bg-surface-container-low text-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-surface-container bg-surface-container-lowest px-margin-sm py-space-md shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-space-xs">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-title-md text-title-md px-space-md py-space-sm rounded-lg transition-colors ${
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
        </div>
      )}
    </header>
  );
}
