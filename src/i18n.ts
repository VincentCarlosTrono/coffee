import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import ja from "./locales/ja/translation.json";
import es from "./locales/es/translation.json";

export const defaultNS = "translation";
export const resources = {
  en: { translation: en },
  ja: { translation: ja },
  es: { translation: es },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug:
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test",
    interpolation: {
      escapeValue: false,
    },
    keySeparator: ".",
    ns: ["translation"],
    defaultNS,
    resources,
    react: { useSuspense: false },
    compatibilityJSON: "v3",
  });

const t = i18n.t.bind(i18n);
export { t };

export default i18n;
