import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { DEFAULT_LANGUAGE } from "@/constants/site";
import en from "@/locales/en.json";
import kkLatn from "@/locales/kk-Latn.json";
import kk from "@/locales/kk.json";
import ru from "@/locales/ru.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    kk: { translation: kk },
    "kk-Latn": { translation: kkLatn },
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: { "kk-Latn": ["kk", "ru"], default: ["ru"] },
  supportedLngs: ["ru", "en", "kk", "kk-Latn"],
  nonExplicitSupportedLngs: false,
  load: "currentOnly",
  interpolation: { escapeValue: false },
});

/**
 * Синхронизируем <html lang> и data-script с активным языком, чтобы CSS мог
 * подменять шрифт для казахского (Manrope не содержит ә, ғ, қ, ң, ұ).
 */
function syncHtmlLang(lng: string) {
  const el = document.documentElement;
  el.lang = lng;
  el.dataset.script = lng.startsWith("kk") ? "kk" : "default";
}

syncHtmlLang(i18n.language || DEFAULT_LANGUAGE);
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
