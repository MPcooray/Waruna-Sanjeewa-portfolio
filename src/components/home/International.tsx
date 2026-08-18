"use client";

import { Kicker, Reveal } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";
import { conferences } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const MAP = {
  viewBox: "1750 200 1350 1650",
  width: 4378.13,
  height: 2434.94,
  latitudes: [
    { label: "60°N", y: 406 },
    { label: "0°", y: 1218 },
    { label: "30°S", y: 1623 },
  ],
};

export function International() {
  const { t, locale } = useLanguage();
  const [active, setActive] = useState(0);
  const selected = conferences[active];

  return (
    <section id="international" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Kicker>{t.international.kicker}</Kicker>
            <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">
              {t.international.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-brown lg:col-span-4 lg:text-right">
            {t.international.lede}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="bg-ivory lg:col-span-8">
            <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[5/4] md:aspect-[8/6]">
              <svg
                viewBox={MAP.viewBox}
                className="h-full w-full"
                role="img"
                aria-label={t.international.mapCaption}
              >
                <rect x="1750" y="200" width="1350" height="1650" fill="#F7F3EC" />
                <image
                  href="/images/world-land.svg"
                  x="0"
                  y="0"
                  width={MAP.width}
                  height={MAP.height}
                  preserveAspectRatio="none"
                />

                {MAP.latitudes.map((line) => (
                  <g key={line.label}>
                    <line
                      x1="1750"
                      x2="3100"
                      y1={line.y}
                      y2={line.y}
                      stroke="#7A5A42"
                      strokeWidth="1.2"
                      opacity="0.28"
                    />
                    <text
                      x="1772"
                      y={line.y - 10}
                      fill="#7A5A42"
                      fontSize="28"
                      letterSpacing="0.16em"
                      className="hidden sm:block"
                    >
                      {line.label}
                    </text>
                  </g>
                ))}

                <path
                  d={`M ${conferences[0].pin.x} ${conferences[0].pin.y}
                      C 2360 820, 2420 1280, ${conferences[1].pin.x} ${conferences[1].pin.y}
                      C 2480 980, 2400 640, ${conferences[2].pin.x} ${conferences[2].pin.y}`}
                  fill="none"
                  stroke="#7A5A42"
                  strokeWidth="2.2"
                  strokeDasharray="10 12"
                  opacity="0.65"
                />

                {conferences.map((pin, index) => {
                  const isActive = active === index;
                  return (
                    <g key={pin.year}>
                      <line
                        x1={pin.pin.x}
                        y1={pin.pin.y}
                        x2={pin.label.x}
                        y2={pin.label.y + 8}
                        stroke={isActive ? "#3B2A20" : "#7A5A42"}
                        strokeWidth="1.6"
                        opacity="0.55"
                        className="hidden sm:block"
                      />
                      <text
                        x={pin.label.x}
                        y={pin.label.y}
                        textAnchor={pin.label.anchor}
                        fill="#3B2A20"
                        fontSize={isActive ? 42 : 36}
                        fontFamily="var(--font-cormorant), Georgia, serif"
                        className="hidden sm:block"
                      >
                        {pin.city[locale]}
                      </text>
                      <text
                        x={pin.label.x}
                        y={pin.label.y + 38}
                        textAnchor={pin.label.anchor}
                        fill="#7A5A42"
                        fontSize="22"
                        letterSpacing="0.18em"
                        className="hidden sm:block"
                      >
                        {pin.year} · {locale === "en" ? pin.country.en.toUpperCase() : pin.country.si}
                      </text>
                      <circle
                        cx={pin.pin.x}
                        cy={pin.pin.y}
                        r="56"
                        fill="transparent"
                        className="cursor-pointer"
                        onMouseEnter={() => setActive(index)}
                        onFocus={() => setActive(index)}
                        onClick={() => setActive(index)}
                      >
                        <title>{`${pin.city[locale]}, ${pin.country[locale]} ${pin.year}`}</title>
                      </circle>
                      {isActive && (
                        <circle
                          cx={pin.pin.x}
                          cy={pin.pin.y}
                          r="22"
                          fill="none"
                          stroke="#3B2A20"
                          strokeWidth="2"
                          opacity="0.4"
                        />
                      )}
                      <circle
                        cx={pin.pin.x}
                        cy={pin.pin.y}
                        r={isActive ? 9 : 7}
                        fill={isActive ? "#3B2A20" : "#7A5A42"}
                        className="pointer-events-none"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
            <p className="px-5 pb-4 text-[0.68rem] tracking-[0.18em] uppercase text-brown">
              {t.international.mapCaption}
            </p>
          </Reveal>

          <Reveal className="flex flex-col justify-between lg:col-span-4" delay={0.08}>
            <div className="flex gap-2">
              {conferences.map((pin, index) => (
                <button
                  key={pin.year}
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className={`min-h-12 flex-1 border-t pt-3 text-left text-[0.72rem] tracking-[0.18em] ${
                    active === index
                      ? "border-deep text-deep"
                      : "border-sand text-brown/60 hover:text-brown"
                  }`}
                >
                  {pin.year}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.year}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 lg:mt-16"
              >
                <p className="kicker">{t.international.series}</p>
                <h3 className="font-display mt-4 text-4xl leading-tight text-deep">
                  {selected.city[locale]}
                  <span className="block text-2xl text-brown">{selected.country[locale]}</span>
                </h3>
                <p className="mt-5 text-sm tracking-[0.14em] uppercase text-brown">
                  {selected.coords}
                </p>
                <p className="mt-6 text-sm tracking-wide text-brown">{selected.event[locale]}</p>
                <p className="mt-5 leading-7 text-ink/80">{selected.note[locale]}</p>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
