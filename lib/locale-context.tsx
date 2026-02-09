"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Locale, Translations } from "./i18n";
import { translations } from "./i18n";

interface LocaleContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "ja",
  t: translations.ja,
  setLocale: () => {},
  toggleLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ja");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "ja" ? "en" : "ja"));
  }, []);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        t: translations[locale],
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
