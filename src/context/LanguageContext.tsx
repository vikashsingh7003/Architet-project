import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, t } from "../i18n/translations";

type Translations = typeof t[Lang];

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  tr: t["en"] as Translations,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pl");
  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
