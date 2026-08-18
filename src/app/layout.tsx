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
  title: {
    default: "Waruna Sanjeewa Liyanage — Digital Journalism Archive",
    template: "%s — Waruna Sanjeewa Liyanage",
  },
  description:
    "The editorial archive of Waruna Sanjeewa Liyanage — journalist, author, and media trainer. More than two decades in print, television, and investigative journalism.",
  authors: [{ name: "Waruna Sanjeewa Liyanage" }],
  openGraph: {
    title: "Waruna Sanjeewa Liyanage — Digital Journalism Archive",
    description:
      "Journalist, author, and media trainer. An editorial archive of more than two decades in Sri Lankan and international journalism.",
    type: "website",
    locale: "en_LK",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-locale="en"
      className={`${cormorant.variable} ${dmSans.variable} ${notoSansSinhala.variable} ${notoSerifSinhala.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-ink">
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
