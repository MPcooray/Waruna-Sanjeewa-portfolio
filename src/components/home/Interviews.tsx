"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { videos, type VideoCategory } from "@/data/site";
import { Kicker, Reveal, TextLink } from "@/components/ui/Editorial";
import { VideoModal } from "@/components/ui/VideoModal";

const filters: VideoCategory[] = ["all", "interviews", "discussions"];

export function Interviews({
  featuredOnly = false,
  featuredId,
  moreHref = "/training",
  bgClass = "bg-ivory",
}: {
  featuredOnly?: boolean;
  featuredId?: string;
  moreHref?: string;
  bgClass?: string;
}) {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState<VideoCategory>("all");
  const [active, setActive] = useState<string | null>(null);

  const list = useMemo(() => {
    if (filter === "all") return videos;
    return videos.filter((video) => video.category === filter);
  }, [filter]);

  const playing = videos.find((video) => video.id === active);

  return (
    <section id="conversations" className={`${bgClass} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Kicker>{t.interviews.kicker}</Kicker>
            <h2 className="font-display mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-deep">
              {t.interviews.title}
            </h2>
          </div>
          {featuredOnly && <TextLink href={moreHref}>{t.interviews.more}</TextLink>}
        </Reveal>

        {!featuredOnly && (
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`min-h-11 py-1 text-[0.8125rem] tracking-[0.16em] uppercase sm:text-[0.875rem] sm:tracking-[0.2em] ${
                filter === item ? "text-deep" : "text-brown/60 hover:text-brown"
              }`}
            >
              {t.interviews.filters[item]}
            </button>
          ))}
        </div>
        )}

        {!featuredOnly && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActive(video.id)}
              className="group bg-ivory text-left transition-colors duration-500 hover:bg-deep"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title[locale]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 30vw, 50vw"
                />
                <div className="absolute right-4 bottom-4 flex items-center gap-3 text-[0.8125rem] tracking-[0.2em] uppercase text-ivory md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {t.interviews.watchShort}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-deep transition-colors group-hover:text-ivory">
                  {video.title[locale]}
                </h3>
                <p className="mt-2 text-sm leading-6 text-brown transition-colors group-hover:text-beige">
                  {video.subtitle[locale]}
                </p>
              </div>
            </button>
          ))}
        </div>
        )}
      </div>

      <AnimatePresence>
        {playing && (
          <VideoModal
            videoId={playing.id}
            title={playing.title[locale]}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
