export const SITE = {
  name: "ТОО «Евразийский консалтинговый консорциум»",
  shortName: "ЕКК",
  url: "https://eccllp.vercel.app",
  email: "info@ecc-kz.kz",
  phone: "+7 (717) 000-00-00",
  address: "г. Астана, Республика Казахстан",
} as const;

export const SUPPORTED_LANGUAGES = ["ru", "en", "kk"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = "ru";
