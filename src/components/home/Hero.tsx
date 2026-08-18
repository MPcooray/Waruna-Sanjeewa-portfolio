"use client";

import { ArrowIcon } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const { t, locale } = useLanguage();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
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
      });
      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          ".hero-photo",
          { yPercent: 0, scale: 1.12 },
          {
            yPercent: 16,
            scale: 1.22,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: root, dependencies: [locale] },
  );

  return (
    <section
      id="hero"
      ref={root}
      className="relative min-h-[100svh] overflow-hidden bg-deep text-ivory"
    >
      <div className="absolute inset-0">
        <div className="hero-photo absolute inset-0 origin-top scale-110">
          <Image
            src="/images/portrait.jpg"
            alt={t.photos.captionPortrait}
            fill
            priority
            className="portrait-filter object-cover object-[48%_12%] sm:object-[62%_18%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/35 md:bg-gradient-to-r md:from-deep md:via-deep/78 md:to-deep/25" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-deep/85 via-transparent to-deep/40 md:block" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-28 md:px-8 md:pb-28">
        <motion.p
          className="kicker text-sand"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {t.hero.kicker}
        </motion.p>
        <h1
          className={`font-display mt-6 mb-8 text-[clamp(3.4rem,19vw,5.75rem)] tracking-[-0.03em] sm:text-[12vw] lg:text-[8.4rem] ${
            locale === "si" ? "leading-[1.2]" : "leading-[1.05]"
          }`}
        >
          {t.hero.lines.map((line, lineIndex) => (
            <span
              key={line}
              className={`block overflow-hidden ${locale === "si" ? "pb-3" : "pb-2"}`}
            >
              <motion.span
                className="block"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.22 + lineIndex * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
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
            className="group flex items-center gap-4 text-[0.8125rem] tracking-[0.24em] uppercase text-ivory"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="hero-scroll-line h-12 w-px bg-ivory/50 transition-transform group-hover:scale-y-125" />
            <span>{t.hero.explore}</span>
            <ArrowIcon direction="down" className="transition-transform group-hover:translate-y-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
