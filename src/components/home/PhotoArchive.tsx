"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Kicker, Reveal } from "@/components/ui/Editorial";

const frames = [
  {
    src: "/images/portrait.jpg",
    alt: "Waruna Sanjeewa Liyanage",
    className: "md:col-span-8 md:row-span-2 aspect-[4/5] md:aspect-auto",
    object: "object-[58%_10%]",
  },
  {
    src: "/images/book-cover.png",
    alt: "Investigative Journalism book cover",
    className: "md:col-span-4 aspect-[3/4]",
    object: "object-cover",
  },
  {
    src: "/images/portrait.jpg",
    alt: "Detail from the portrait of Waruna Sanjeewa Liyanage",
    className: "md:col-span-4 aspect-[4/3]",
    object: "object-[70%_18%] scale-150",
  },
];

export function PhotoArchive() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="photos" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.photos.kicker}</Kicker>
          <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
            {t.photos.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2 md:h-[780px]">
          {frames.map((frame, index) => (
            <button
              key={`${frame.src}-${index}`}
              type="button"
              onClick={() => setOpen(index)}
              className={`relative overflow-hidden bg-deep ${frame.className}`}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                className={`portrait-filter object-cover transition-transform duration-700 hover:scale-105 ${frame.object}`}
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </button>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-brown">{t.photos.note}</p>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.button
            type="button"
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="relative h-[82vh] w-full max-w-4xl"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
            >
              <Image
                src={frames[open].src}
                alt={frames[open].alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
