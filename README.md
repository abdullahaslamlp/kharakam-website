# KharaKam Website

Official corporate website for **KharaKam LLP**, built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. Converted from Google Stitch UI prototype design export.

---

## 🚀 Features

- **Executive Homepage (`/`)**: Corporate mission statement, institutional operating pillars, and direct engagement CTAs.
- **Products Catalogue (`/products`)**:
  - SafePass Flagship showcase (Smart Campus Dismissal & Gate Logistics System).
  - Interactive multi-module console modal featuring all 4 deployed workflows:
    1. Admin Dispatch Queue
    2. Guardian Check-in
    3. Transporter Van Sync
    4. Access Gateway
  - KharaKam Labs pipeline card.
- **Connect With Us (`/connect`)**:
  - Direct institutional contact desks (`kharakamllp@gmail.com` and `@kharakamllp` Instagram).
  - Interactive inquiry form with input validation, submission loading state, and success feedback.
  - Configurable webhook support via `NEXT_PUBLIC_CONTACT_ENDPOINT` environment variable.
- **Responsive Navigation**: Full mobile slide-down hamburger drawer and desktop nav with active indicators.
- **High-Performance Static Export**: Outputs zero-dependency static files to `out/` ready for hosting on GitHub Pages, Vercel, Netlify, Cloudflare Pages, or AWS S3.
- **Optimized Typography & Assets**: Google Fonts (`Hanken Grotesk` & `JetBrains Mono`) with Material Symbols Outlined icons and localized brand assets.

---

## 🛠️ Development & Build Commands

Inside `KharaKam/site`:

```bash
# Start local development server
npm run dev

# Build production static export (outputs to /out)
npm run build

# Start production server
npm start
```

---

## 📁 Project Directory Structure

```
KharaKam/site/
├── app/
│   ├── connect/
│   │   └── page.tsx              # Connect with us page
│   ├── connect-with-us/
│   │   └── page.tsx              # URL alias redirecting to /connect
│   ├── products/
│   │   └── page.tsx              # Products catalogue page
│   ├── products-directory/
│   │   └── page.tsx              # URL alias redirecting to /products
│   ├── globals.css               # KharaKam theme tokens & typography
│   ├── icon.png                  # Brand favicon & app icon
│   ├── layout.tsx                # Global layout with fonts & metadata
│   └── page.tsx                  # Corporate homepage
├── components/
│   ├── ContactForm.tsx           # Interactive contact form
│   ├── Footer.tsx                # Global corporate footer
│   ├── Header.tsx                # Responsive navigation header
│   └── SafePassModal.tsx         # 4-tab interactive SafePass modal
├── public/
│   └── images/                   # Normalized brand and console assets
├── out/                          # Generated static export directory
├── next.config.ts                # Next.js static export configuration
└── package.json
```
