"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { links } from "@/data/site";

const nav = [
  { href: "/about", key: "about" as const },
  { href: "/journalism", key: "journalism" as const },
  { href: "/interviews", key: "interviews" as const },
  { href: "/publications", key: "publications" as const },
  { href: "/archive", key: "archive" as const },
  { href: "/contact", key: "contact" as const },
];

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="kicker text-sand">{t.footer.mark}</p>
        <h2 className="font-display mt-6 max-w-4xl text-5xl leading-[0.95] tracking-tight md:text-7xl">
          Waruna
          <br />
          Sanjeewa
          <br />
          Liyanage
        </h2>
        <div className="editorial-rule mt-12 bg-brown/50" />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3 text-[0.72rem] tracking-[0.18em] uppercase text-beige">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ivory">
                {t.nav[item.key]}
              </Link>
            ))}
          </div>
          <div className="text-sm leading-7 text-beige">
            <a className="block hover:text-ivory" href={`mailto:${links.email}`}>
              {links.email}
            </a>
            <a
              className="mt-2 block hover:text-ivory"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <p className="mt-6 text-sand">{t.contact.location}</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-sand">{t.footer.credit}</p>
            <p className="mt-3 text-sm text-beige/70">
              © {year} {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
