"use client";

import { useLanguage } from "@/context/LanguageContext";
import { trainingTopics } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";

export function Training() {
  const { t, locale } = useLanguage();

  return (
    <section id="workshops" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <Reveal className="md:col-span-5">
          <Kicker>{t.trainingPage.workshopsKicker}</Kicker>
          <p className="mt-8 max-w-md leading-8 text-ink/80">{t.training.body}</p>
        </Reveal>
        <Reveal className="md:col-span-7" delay={0.08}>
          <ul className="divide-y divide-sand border-y border-sand">
            {trainingTopics.map((topic) => (
              <li
                key={topic.en}
                className="font-display py-5 text-2xl text-deep sm:py-6 sm:text-3xl md:text-4xl"
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
