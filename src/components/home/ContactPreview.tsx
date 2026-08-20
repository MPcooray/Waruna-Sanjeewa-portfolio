"use client";

import { useLanguage } from "@/context/LanguageContext";
import { links } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";

export function ContactPreview() {
  const { t, locale } = useLanguage();

  return (
    <section id="contact" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.contact.kicker}</Kicker>
          <h2 className={`font-display mt-5 max-w-3xl tracking-tight text-deep ${
            locale === "si" ? "text-3xl md:text-5xl lg:text-6xl" : "text-4xl md:text-6xl lg:text-7xl"
          }`}>
            {t.contact.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink/80">{t.contact.body}</p>
        </Reveal>
        <Reveal className="mt-14 grid gap-8 md:grid-cols-3" delay={0.08}>
          <a href={`mailto:${links.email}`} className="group block border-t border-sand pt-6">
            <p className="kicker">{t.contact.email}</p>
            <p className="mt-3 break-all text-base text-deep group-hover:opacity-60 sm:text-lg">{links.email}</p>
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group block border-t border-sand pt-6"
          >
            <p className="kicker">{t.contact.linkedin}</p>
            <p className="mt-3 text-lg text-deep group-hover:opacity-60">waruna-liyanage</p>
          </a>
          <div className="border-t border-sand pt-6">
            <p className="kicker">{t.contact.country}</p>
            <p className="mt-3 text-lg text-deep">{t.contact.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
