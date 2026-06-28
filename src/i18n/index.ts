import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { DEFAULT_LANGUAGE } from "@/constants/site";
import en from "@/locales/en.json";
import kk from "@/locales/kk.json";
import ru from "@/locales/ru.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    kk: { translation: kk },
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
