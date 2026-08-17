"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t, locale } = useLanguage();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-photo", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, [locale]);

  return (
    <section
      id="hero"
      ref={root}
      className="relative min-h-[100svh] overflow-hidden bg-deep text-ivory"
    >
      <div className="absolute inset-0">
        <div className="hero-photo absolute inset-0 scale-110">
          <Image
            src="/images/portrait.jpg"
            alt="Waruna Sanjeewa Liyanage"
            fill
            priority
            className="portrait-filter object-cover object-[62%_18%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/78 to-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-transparent to-deep/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <motion.p
          className="kicker text-sand"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {t.hero.kicker}
        </motion.p>
        <h1 className="font-display mt-6 text-[16vw] leading-[0.86] tracking-[-0.03em] sm:text-[12vw] lg:text-[8.4rem]">
          {t.hero.lines.map((line, lineIndex) => (
            <span key={line} className="block overflow-hidden">
              {locale === "en" ? (
                line.split("").map((char, i) => (
                  <motion.span
                    key={`${line}-${i}`}
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.22 + lineIndex * 0.12 + i * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                ))
              ) : (
                <motion.span
                  className="inline-block"
                  initial={{ y: 36, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.22 + lineIndex * 0.12 }}
                >
                  {line}
                </motion.span>
              )}
            </span>
          ))}
        </h1>
        <div className="mt-8 flex max-w-xl flex-col gap-10 md:mt-10 md:flex-row md:items-end md:justify-between md:max-w-none">
          <motion.p
            className="max-w-md text-base leading-7 text-beige md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
          >
            {t.hero.lede}
          </motion.p>
          <motion.a
            href="#career"
            className="group flex items-center gap-4 text-[0.7rem] tracking-[0.24em] uppercase text-ivory"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="h-12 w-px bg-ivory/50 transition-transform group-hover:scale-y-125" />
            <span>{t.hero.explore}</span>
            <span className="transition-transform group-hover:translate-y-1">↓</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
