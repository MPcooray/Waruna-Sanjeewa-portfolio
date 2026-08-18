"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
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
  const [overHero, setOverHero] = useState(pathname === "/");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setOverHero(pathname === "/");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setOverHero(false);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) {
      setOverHero(false);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.boundingClientRect.bottom > 88);
      },
      { threshold: [0, 0.05, 0.15, 0.4] },
    );

    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("portfolio:nav", { detail: open }));
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const light = overHero && !open;

  const menu = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[85] flex flex-col overflow-y-auto bg-[#F8F4ED] px-5 pb-10 pt-28 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="kicker mb-8">{t.footer.mark}</p>
          <nav className="flex flex-col">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  className="font-display block border-t border-sand/70 py-3.5 text-[2.15rem] leading-[1.2] text-deep sm:text-6xl sm:leading-[1.1]"
                  onClick={() => setOpen(false)}
                >
                  {t.nav[link.key]}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[90]">
        <div
          className={`border-b transition-[background-color,border-color,color,backdrop-filter] duration-500 ${
            light
              ? "border-transparent bg-transparent text-[#F3EADF]"
              : "border-[rgba(59,42,32,0.08)] bg-[rgba(248,244,237,0.92)] text-[#3B2A20] backdrop-blur-[12px]"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-5 md:px-8">
            <Link
              href="/"
              className="font-display min-w-0 truncate text-[1.05rem] tracking-tight sm:text-[1.2rem]"
              onClick={() => setOpen(false)}
            >
              {t.brand}
            </Link>

            <nav className="hidden items-center gap-5 lg:flex lg:gap-7">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.875rem] font-semibold tracking-[0.18em] uppercase transition-opacity hover:opacity-70 ${
                    pathname === link.href ? "opacity-70" : "opacity-100"
                  }`}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
              <LanguageSwitch locale={locale} setLocale={setLocale} />
            </nav>

            <div className="flex shrink-0 items-center gap-3 lg:hidden">
              <LanguageSwitch locale={locale} setLocale={setLocale} />
              <button
                type="button"
                className="min-h-11 px-1 text-[0.875rem] font-semibold tracking-[0.2em] uppercase"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Menu"
              >
                {open ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </header>
      {mounted ? createPortal(menu, document.body) : null}
    </>
  );
}

function LanguageSwitch({
  locale,
  setLocale,
}: {
  locale: "en" | "si";
  setLocale: (locale: "en" | "si") => void;
}) {
  return (
    <div className="flex items-center gap-1.5 text-[0.8125rem] font-semibold tracking-[0.16em] sm:text-[0.875rem] sm:tracking-[0.18em]">
      <button
        type="button"
        className={`min-h-11 px-1.5 ${
          locale === "en" ? "rounded-full ring-1 ring-current" : "opacity-70 hover:opacity-100"
        }`}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <span className="opacity-50">|</span>
      <button
        type="button"
        className={`min-h-11 px-1.5 ${
          locale === "si" ? "rounded-full ring-1 ring-current" : "opacity-70 hover:opacity-100"
        }`}
        onClick={() => setLocale("si")}
      >
        සිං
      </button>
    </div>
  );
}
