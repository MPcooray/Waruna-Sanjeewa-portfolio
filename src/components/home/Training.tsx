"use client";

import { useLanguage } from "@/context/LanguageContext";
import { trainingTopics } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";

export function Training({ bgClass = "bg-ivory" }: { bgClass?: string }) {
  const { t, locale } = useLanguage();
  const isDark = bgClass.includes("deep");

  return (
    <section id="workshops" className={`${bgClass} py-24 md:py-32`}>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <Reveal className="md:col-span-5">
          <Kicker className={isDark ? "text-sand" : ""}>{t.trainingPage.workshopsKicker}</Kicker>
          <p className={`mt-8 max-w-md leading-8 ${isDark ? "text-beige/85" : "text-ink/80"}`}>{t.training.body}</p>
        </Reveal>
        <Reveal className="md:col-span-7" delay={0.08}>
          <ul className={`divide-y divide-sand/30 border-y ${isDark ? "border-sand/30" : "border-sand"}`}>
            {trainingTopics.map((topic) => (
              <li
                key={topic.en}
                className={`font-display py-4 text-xl sm:py-5 sm:text-2xl md:text-[1.75rem] ${isDark ? "text-ivory" : "text-deep"}`}
              >
                {topic[locale]}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
