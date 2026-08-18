"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const links = [
  { href: "/about", key: "about" as const },
  { href: "/journalism", key: "journalism" as const },
  { href: "/interviews", key: "interviews" as const },
  { href: "/publications", key: "publications" as const },
  { href: "/archive", key: "archive" as const },
  { href: "/contact", key: "contact" as const },
];

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [heroDark, setHeroDark] = useState(true);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;

    const hero = document.getElementById("hero");
    const book = document.getElementById("book");
    if (!hero) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        const dark = visible.some(
          (e) => e.target.id === "hero" || e.target.id === "book",
        );
        setHeroDark(dark || window.scrollY < 80);
      },
      { threshold: 0.28 },
    );

    io.observe(hero);
    if (book) io.observe(book);
    return () => io.disconnect();
  }, [pathname]);

  const light = pathname === "/" && heroDark && !open;
  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-500 ${
        light
          ? "bg-gradient-to-b from-deep/80 via-deep/45 to-transparent"
          : solid
            ? "bg-ivory/92 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-5 md:px-8">
        <Link
          href="/"
          className={`font-display min-w-0 truncate text-[1.05rem] tracking-tight sm:text-[1.2rem] ${
            light ? "text-ivory" : "text-ink"
          }`}
        >
          {t.brand}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex lg:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-opacity hover:opacity-70 ${
                light ? "text-ivory drop-shadow-[0_1px_8px_rgba(33,28,24,0.55)]" : "text-ink"
              } ${pathname === link.href ? "opacity-70" : "opacity-100"}`}
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <LanguageSwitch light={light} locale={locale} setLocale={setLocale} />
        </nav>

        <div className="flex shrink-0 items-center gap-3 lg:hidden">
          <LanguageSwitch light={light} locale={locale} setLocale={setLocale} />
          <button
            type="button"
            className={`min-h-11 px-1 text-[0.72rem] font-medium tracking-[0.2em] uppercase ${
              light ? "text-ivory" : "text-ink"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-t border-sand/60 bg-ivory px-5 py-8 md:hidden">
          <div className="flex min-h-[50vh] flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display py-3 text-3xl text-deep sm:text-4xl"
                onClick={() => setOpen(false)}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageSwitch({
  light,
  locale,
  setLocale,
}: {
  light: boolean;
  locale: "en" | "si";
  setLocale: (locale: "en" | "si") => void;
}) {
  const cls = light ? "text-ivory" : "text-ink";
  return (
    <div className={`flex items-center gap-1.5 text-[0.68rem] font-medium tracking-[0.16em] sm:text-[0.72rem] sm:tracking-[0.18em] ${cls}`}>
      <button
        type="button"
        className={`min-h-11 px-1.5 ${
          locale === "en"
            ? "rounded-full ring-1 ring-current"
            : "opacity-55 hover:opacity-90"
        }`}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <span className="opacity-40">|</span>
      <button
        type="button"
        className={`min-h-11 px-1.5 ${
          locale === "si"
            ? "rounded-full ring-1 ring-current"
            : "opacity-55 hover:opacity-90"
        }`}
        onClick={() => setLocale("si")}
      >
        සිං
      </button>
    </div>
  );
}
