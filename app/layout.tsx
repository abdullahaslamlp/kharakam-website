import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kharakam.com"),
  title: {
    default: "KharaKam LLP | Purpose-Built Technology for Pakistan",
    template: "%s | KharaKam LLP",
  },
  description:
    "KharaKam LLP is dedicated to solving real, daily problems faced by people and institutions across Pakistan through thoughtful, reliable technology integration.",
  keywords: [
    "KharaKam",
    "KharaKam LLP",
    "SafePass",
    "Pakistan Technology",
    "School Dismissal System",
    "Campus Logistics",
    "Smart Campus",
    "Institutional Software",
  ],
  authors: [{ name: "KharaKam LLP" }],
  creator: "KharaKam LLP",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://kharakam.com",
    siteName: "KharaKam LLP",
    title: "KharaKam LLP | Purpose-Built Technology for Pakistan",
    description:
      "Engineering practical, friction-free systems that replace everyday disorder with quiet reliability across Pakistan.",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "KharaKam LLP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KharaKam LLP | Purpose-Built Technology for Pakistan",
    description:
      "Engineering practical, friction-free systems that replace everyday disorder with quiet reliability across Pakistan.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <Header />
        <main className="w-full pt-20 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
