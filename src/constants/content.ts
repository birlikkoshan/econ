/*
  Структурные данные сайта: значения, имена собственные и внешние ссылки,
  которые не переводятся. Переводимые подписи берутся из i18n по ключам ниже.
*/

/** Цифры в hero-карточке и в полосе статистики. Подписи — в i18n (home.stats.*). */
export const STATS = [
  { value: "2007", labelKey: "home.stats.since" },
  { value: "0", labelKey: "home.stats.claims" },
  { value: "4", labelKey: "home.stats.countries" },
  { value: "5", labelKey: "home.stats.eaeu" },
] as const;

/** Бейджи в hero-карточке (2×2). Значение фиксировано, подпись — i18n. */
export const HERO_BADGES = [
  { value: "с 2007", labelKey: "home.badges.since" },
  { value: "ТР ЕАЭС", labelKey: "home.badges.assessment" },
  { value: "EAC", labelKey: "home.badges.marking" },
  { value: "0", labelKey: "home.badges.claims" },
] as const;

/** Услуги. Заголовок и описание — в i18n (services.items[]). Здесь только число направлений. */
export const SERVICE_KEYS = [
  "representation",
  "authorization",
  "assessment",
  "certificates",
  "labs",
  "consulting",
  "storage",
] as const;

/** Карточки-направления для страницы услуг (из «структура сайта»). */
export const SERVICE_CARD_KEYS = [
  "authorized",
  "certification",
  "declaration",
  "documentation",
  "testing",
  "marking",
] as const;

/** Партнёры по странам. Названия компаний — имена собственные (не переводятся). */
export const PARTNER_GROUPS = [
  {
    countryKey: "partners.countries.usa",
    items: [
      "Wabtec Components LLC",
      "Eaton Corporation",
      "Cardwell Westinghouse",
    ],
  },
  {
    countryKey: "partners.countries.eu",
    items: [
      "ŠKODA ELECTRIC a.s.",
      "BONATRANS GROUP a.s.",
      "Wabtec Faiveley Nordic AB",
    ],
  },
  {
    countryKey: "partners.countries.canada",
    items: ["PRELCO INC", "Beclawat Manufacturing Inc."],
  },
  {
    countryKey: "partners.countries.kz",
    items: [
      "Филиал компании «Транспортейшн Глоубэл Эл-Эл-Си»",
      "ТОО «Транспортейшн Казахстан»",
      "ТОО «Казахстанский центр сертификации на железнодорожном транспорте»",
      "ТОО «Казэкспоаудит»",
      "ТОО «ТЕКС»",
      "ТОО «ҒЗО Алматы-Стандарт»",
      "ОЮЛ «Казахстанская ассоциация органов по оценке соответствия»",
    ],
  },
] as const;

/** Нормативные акты РК. Заголовок/описание — в i18n (legislation.laws[]). */
export const LAWS = [
  { key: "techReg", url: "https://adilet.zan.kz/rus" },
  { key: "measurements", url: "https://adilet.zan.kz/rus" },
  { key: "accreditation", url: "https://adilet.zan.kz/rus" },
] as const;

/** Внешние ресурсы. */
export const EXTERNAL_LINKS = {
  adilet: "https://adilet.zan.kz/rus",
  eaeu: "https://eec.eaeunion.org/comission/department/deptexreg/",
} as const;
