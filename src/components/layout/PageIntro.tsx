"use client";

import { Kicker } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  const { locale } = useLanguage();
  const sinhala = locale === "si";

  return (
    <header className="bg-ivory pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Kicker>{kicker}</Kicker>
        <h1
          className={`font-display mt-5 max-w-4xl text-4xl tracking-tight text-deep sm:text-5xl md:text-7xl ${
            sinhala ? "leading-[1.45] md:leading-[1.4]" : "leading-[1.15] md:leading-[1.12]"
          }`}
        >
          {title}
        </h1>
        {lede && (
          <p
            className={`mt-8 max-w-2xl text-lg text-ink/80 ${
              sinhala ? "leading-[2.1]" : "leading-8"
            }`}
          >
            {lede}
          </p>
        )}
      </div>
    </header>
  );
}
