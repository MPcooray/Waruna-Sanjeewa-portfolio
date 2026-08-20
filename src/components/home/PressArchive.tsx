"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { pressClippings } from "@/data/press";
import { Kicker, Reveal } from "@/components/ui/Editorial";
import { ArchiveFold } from "@/components/ui/ArchiveFold";

export function PressArchive({
  bgClass = "bg-ivory",
}: {
  bgClass?: string;
}) {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const count = pressClippings.length;

  useEffect(() => {
    if (open === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") {
        setOpen((current) => (current === null ? current : (current + 1) % count));
      }
      if (event.key === "ArrowLeft") {
        setOpen((current) =>
          current === null ? current : (current - 1 + count) % count,
        );
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, count]);

  const active = open !== null ? pressClippings[open] : null;
  const fadeColor = bgClass.includes("beige") ? "beige" : "ivory";

  return (
    <section id="press" className={`${bgClass} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.press.kicker}</Kicker>
          <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
            {t.press.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brown">{t.press.lede}</p>
        </Reveal>

        <ArchiveFold more={t.press.more} less={t.press.less} fadeFrom={fadeColor}>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pressClippings.map((clipping, index) => (
              <button
                key={clipping.src}
                type="button"
                onClick={() => setOpen(index)}
                className="group relative aspect-[3/4] overflow-hidden bg-beige text-left shadow-[0_12px_40px_rgba(33,28,24,0.08)]"
              >
                <Image
                  src={clipping.src}
                  alt={clipping.alt[locale]}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-80 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-ivory md:translate-y-2 md:opacity-0 md:transition md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <p className="text-[0.8125rem] tracking-[0.2em] uppercase text-sand">
                    {clipping.kicker[locale]}
                  </p>
                  <p className="font-display mt-1 text-lg leading-tight">{clipping.caption[locale]}</p>
                </div>
              </button>
            ))}
          </div>
        </ArchiveFold>
      </div>

      <AnimatePresence>
        {active && open !== null && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/94 p-3 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-[58vh] flex-1 bg-ivory/5">
                <Image
                  src={active.src}
                  alt={active.alt[locale]}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <figcaption className="mt-4 flex items-end justify-between gap-4 text-ivory">
                <div>
                  <p className="text-[0.8125rem] tracking-[0.2em] uppercase text-sand">
                    {active.kicker[locale]}
                  </p>
                  <p className="font-display mt-1 text-xl">{active.caption[locale]}</p>
                </div>
                <div className="flex shrink-0 items-center gap-4 text-[0.8125rem] tracking-[0.18em] uppercase">
                  <button type="button" onClick={() => setOpen((open + count - 1) % count)}>
                    {t.press.prev}
                  </button>
                  <button type="button" onClick={() => setOpen((open + 1) % count)}>
                    {t.press.next}
                  </button>
                  <button type="button" onClick={() => setOpen(null)}>
                    {t.press.close}
                  </button>
                </div>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
