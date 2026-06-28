/*
  Языконезависимые данные. Название организации, бренд, адрес и ФИО директора
  переводятся и берутся из i18n (ключи site.*), т.к. юридическая форма и написание
  отличаются по языкам (ТОО / ЖШС / LLP).
*/
export const SITE = {
  shortName: "ECON",
  url: "https://eccllp.vercel.app",
  email: "econ2007kz@gmail.com",
  phone: "+7 701 588 53 03",
  phoneHref: "+77015885303",
  foundedYear: 2007,
} as const;

export const REQUISITES = {
  bin: "040740000478",
  iik: "KZ718560000005517530",
  bik: "KCJBKZKX",
  bank: "АО «БанкЦентрКредит»",
} as const;

export const SUPPORTED_LANGUAGES = ["ru", "en", "kk", "kk-Latn"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = "ru";

/** Языки верхнего уровня в переключателе (казахская латиница — подрежим «kk»). */
export const PRIMARY_LANGUAGES = ["ru", "kk", "en"] as const;

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  ru: "RU",
  kk: "ҚАЗ",
  en: "EN",
  "kk-Latn": "QAZ",
};

/** Подписи переключателя письменности казахского языка. */
export const KK_SCRIPTS = [
  { lang: "kk", label: "Кирил" },
  { lang: "kk-Latn", label: "Latyn" },
] as const;
