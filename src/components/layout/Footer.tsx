"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { links } from "@/data/site";
import { navLinks } from "@/data/nav";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-12">
        <p className="kicker text-sand">{t.footer.mark}</p>
        <p className="font-display mt-3 text-2xl tracking-tight md:text-3xl">{t.brand}</p>
        <div className="editorial-rule mt-6 bg-brown/50" />
        <div className="mt-6 grid gap-6 md:grid-cols-3 md:items-start">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[0.75rem] tracking-[0.16em] uppercase text-beige">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ivory">
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>
          <div className="text-sm leading-6 text-beige">
            <a className="block hover:text-ivory" href={`mailto:${links.email}`}>
              {links.email}
            </a>
            <a
              className="mt-1 block hover:text-ivory"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <p className="mt-2 text-sand">{t.contact.location}</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-sand">{t.footer.credit}</p>
            <p className="mt-1 text-sm text-beige/70">
              © {year} {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
