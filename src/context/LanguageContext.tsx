"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { copy, type Copy } from "@/data/copy";
import type { Locale } from "@/data/site";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function getLocale(): Locale {
  const stored = window.localStorage.getItem("wsl-locale");
  return stored === "si" ? "si" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getLocale,
    () => "en" as Locale,
  );

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem("wsl-locale", next);
    emit();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "si" ? "si" : "en";
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t: copy[locale] }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
