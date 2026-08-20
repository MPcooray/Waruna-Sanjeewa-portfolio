"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { galleryPhotos } from "@/data/gallery";
import { Kicker, Reveal, ArrowIcon } from "@/components/ui/Editorial";
import { ArchiveFold } from "@/components/ui/ArchiveFold";

export function PhotoArchive({
  group,
  heading,
  bgClass = "bg-beige",
  hideHeader = false,
}: {
  group?: "Publication" | "Recognition" | "Archive";
  heading?: string;
  bgClass?: string;
  hideHeader?: boolean;
}) {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };
  const photos = group
    ? galleryPhotos.filter((photo) => photo.kicker.en === group)
    : galleryPhotos;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") setOpen((open - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") setOpen((open + 1) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, photos.length]);

  const active = open !== null ? photos[open] : null;
  const fadeColor = bgClass.includes("ivory") ? "ivory" : bgClass.includes("deep") ? "deep" : "beige";

  return (
    <section id="photos" className={`${bgClass} ${hideHeader ? "pt-px pb-24 md:pb-32" : "py-24 md:py-32"}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {!hideHeader && (
          <Reveal>
            <Kicker>{t.photos.kicker}</Kicker>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
              {heading ?? t.photos.title}
            </h2>
          </Reveal>
        )}

        {hideHeader && (
          <div className="mb-6">
            <h3 className="font-display text-xs tracking-[0.22em] uppercase text-sand">
              {heading ?? t.photos.title}
            </h3>
          </div>
        )}

        {hideHeader ? (
          <div className="relative group/scroll">
            {/* Left side scroll arrow button */}
            <button
              type="button"
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-sand/20 bg-ink/65 text-ivory hover:bg-ink/85 hover:scale-105 transition duration-300 shadow-md md:opacity-0 md:group-hover/scroll:opacity-100 opacity-90"
              aria-label="Previous image"
            >
              <ArrowIcon className="rotate-180 size-[14px]" />
            </button>

            {/* Right side scroll arrow button */}
            <button
              type="button"
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-sand/20 bg-ink/65 text-ivory hover:bg-ink/85 hover:scale-105 transition duration-300 shadow-md md:opacity-0 md:group-hover/scroll:opacity-100 opacity-90"
              aria-label="Next image"
            >
              <ArrowIcon className="size-[14px]" />
            </button>

            <div 
              ref={scrollRef}
              className="relative overflow-x-auto pb-6 -mx-5 px-5 md:mx-0 md:px-0 flex gap-4 scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpen(index)}
                className="group relative aspect-[4/3] w-[260px] sm:w-[320px] md:w-[380px] flex-shrink-0 overflow-hidden bg-deep text-left border border-sand/10 rounded-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt[locale]}
                  fill
                  className="object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 30vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-ivory">
                  <p className="text-[0.75rem] tracking-[0.16em] uppercase text-sand">
                    {photo.kicker[locale]}
                  </p>
                  <p className="font-display mt-1.5 text-base sm:text-lg leading-tight line-clamp-2">{photo.caption[locale]}</p>
                </div>
              </button>
            ))}
            </div>
          </div>
        ) : (
          <ArchiveFold more={t.photos.more} less={t.photos.less} fadeFrom={fadeColor}>
            <div className="mt-14 grid grid-cols-2 gap-0 md:grid-cols-12">
              {photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setOpen(index)}
                  className={`group relative h-full min-h-0 w-full self-stretch overflow-hidden bg-deep text-left ${
                    group ? "aspect-[4/3] md:col-span-4" : photo.className
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt[locale]}
                    fill
                    className="object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-[1.04]"
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
        )}
        <p className={`mt-6 max-w-2xl text-sm leading-7 ${bgClass.includes("deep") ? "text-sand" : "text-brown"}`}>{t.photos.note}</p>
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
                  <button type="button" onClick={() => setOpen((open + photos.length - 1) % photos.length)}>
                    Prev
                  </button>
                  <button type="button" onClick={() => setOpen((open + 1) % photos.length)}>
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
