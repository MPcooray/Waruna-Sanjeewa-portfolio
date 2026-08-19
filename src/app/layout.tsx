import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Noto_Sans_Sinhala,
  Noto_Serif_Sinhala,
} from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSansSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-sinhala",
  display: "swap",
});

const notoSerifSinhala = Noto_Serif_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-sinhala",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Waruna Sanjeewa Liyanage | Journalist, Trainer & Musician",
    template: "%s | Waruna Sanjeewa Liyanage",
  },
  description:
    "Official archive of Waruna Sanjeewa Liyanage (වරුණ සංජීව ලියනගේ) — Sri Lankan journalist, media trainer, and musician. Print and electronic journalism, teaching, and music.",
  keywords: [
    "Waruna Sanjeewa Liyanage",
    "වරුණ සංජීව ලියනගේ",
    "Sri Lankan journalist",
    "investigative journalism",
    "Derana news manager",
    "media trainer",
    "Sri Lankan musician",
    "Midella Mal",
    "Sooriya Publishers",
  ],
  authors: [{ name: "Waruna Sanjeewa Liyanage", url: siteUrl }],
  creator: "Waruna Sanjeewa Liyanage",
  publisher: "Waruna Sanjeewa Liyanage",
  verification: {
    google: "1ly95rImm4IMsioRWsUQA8uGFEjAwCAwcQHMSnQZsx4",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/images/profile.jpg", sizes: "1200x1200", type: "image/jpeg" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Waruna Sanjeewa Liyanage | Journalist, Trainer & Musician",
    description:
      "Official archive of Waruna Sanjeewa Liyanage — journalist, media trainer, and musician.",
    type: "website",
    url: siteUrl,
    siteName: "Waruna Sanjeewa Liyanage",
    locale: "en_LK",
    alternateLocale: ["si_LK"],
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Waruna Sanjeewa Liyanage",
      },
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Waruna Sanjeewa Liyanage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waruna Sanjeewa Liyanage | Journalist, Trainer & Musician",
    description:
      "Official archive of Waruna Sanjeewa Liyanage — journalist, media trainer, and musician.",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-locale="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} ${notoSansSinhala.variable} ${notoSerifSinhala.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full bg-ivory font-sans text-ink">
        <JsonLd />
        <Providers>
          <div className="grain" aria-hidden />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
