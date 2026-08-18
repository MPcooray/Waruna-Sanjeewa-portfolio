"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type VideoModalProps = {
  videoId: string;
  title: string;
  onClose: () => void;
};

export function VideoModal({ videoId, title, onClose }: VideoModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/88 px-3 py-8 sm:px-4 sm:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-5xl"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 16, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-end justify-between gap-6">
          <div>
            <p className="kicker text-sand">{t.interviews.featured}</p>
            <h3 className="font-display mt-2 text-xl text-ivory sm:text-2xl md:text-3xl">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="kicker text-ivory/70 transition-colors hover:text-ivory"
          >
            Close
          </button>
        </div>
        <div className="relative aspect-video overflow-hidden bg-deep">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
