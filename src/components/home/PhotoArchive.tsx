"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { galleryPhotos } from "@/data/gallery";
import { Kicker, Reveal } from "@/components/ui/Editorial";
import { ArchiveFold } from "@/components/ui/ArchiveFold";

export function PhotoArchive() {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") {
        setOpen((current) =>
          current === null ? current : (current + 1) % galleryPhotos.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setOpen((current) =>
          current === null
            ? current
            : (current - 1 + galleryPhotos.length) % galleryPhotos.length,
        );
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = open !== null ? galleryPhotos[open] : null;

  return (
    <section id="photos" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.photos.kicker}</Kicker>
          <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
            {t.photos.title}
          </h2>
        </Reveal>

        <ArchiveFold more={t.photos.more} less={t.photos.less} fadeFrom="beige">
          <div className="mt-14 grid gap-3 sm:grid-cols-2 md:grid-cols-12 items-start">
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpen(index)}
                className={`group relative overflow-hidden bg-deep text-left ${photo.className}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt[locale]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-ivory opacity-100 md:translate-y-2 md:opacity-0 md:transition md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <p className="text-[0.8125rem] tracking-[0.2em] uppercase text-sand">
                    {photo.kicker[locale]}
                  </p>
                  <p className="font-display mt-1 text-lg leading-tight">{photo.caption[locale]}</p>
                </div>
              </button>
            ))}
          </div>
        </ArchiveFold>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-brown">{t.photos.note}</p>
      </div>

      <AnimatePresence>
        {active && open !== null && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/92 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-[50vh] flex-1">
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
                <div className="flex items-center gap-4 text-[0.8125rem] tracking-[0.18em] uppercase">
                  <button type="button" onClick={() => setOpen((open + galleryPhotos.length - 1) % galleryPhotos.length)}>
                    Prev
                  </button>
                  <button type="button" onClick={() => setOpen((open + 1) % galleryPhotos.length)}>
                    Next
                  </button>
                  <button type="button" onClick={() => setOpen(null)}>
                    Close
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
