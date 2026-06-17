"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isZh: boolean;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "zh",
  setLang: () => {},
  isZh: true,
  mounted: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedLang = localStorage.getItem("polaris-lang") as Language;
      if (savedLang) {
        setLangState(savedLang);
      }
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("polaris-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, isZh: lang === "zh", mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}