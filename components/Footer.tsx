import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-auto border-t border-surface-container">
      <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin-lg py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-space-xl">
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <Image
                src="/images/logo.png"
                alt="KharaKam Logo"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="font-title-md text-title-md text-primary font-semibold">
                KharaKam
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mt-space-xs leading-relaxed">
              KharaKam LLP is dedicated to engineering practical, purpose-built technology solving everyday challenges across Pakistan with quiet reliability.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold mb-space-xs">
              Corporate Directory
            </span>
            <nav className="flex flex-col gap-space-xs">
              <Link
                href="/"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Home Overview
              </Link>
              <Link
                href="/products"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Products &amp; Platforms
              </Link>
              <Link
                href="/connect"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Connect With Us
              </Link>
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold mb-space-xs">
              Institutional Engagement
            </span>
            <div className="flex flex-col gap-space-xs">
              <a
                href="mailto:kharakamllp@gmail.com"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  mail
                </span>
                kharakamllp@gmail.com
              </a>
              <a
                href="https://www.instagram.com/kharakamllp/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  alternate_email
                </span>
                Instagram: @kharakamllp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm border-t border-surface-container">
          <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
            © 2026 KharaKam LLP. All rights reserved.
          </span>
          <div className="flex items-center gap-space-md">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              INSTITUTIONAL GRADE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              ACTIVE DEPLOYMENT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
