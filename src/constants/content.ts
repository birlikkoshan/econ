/*
  Структурные данные сайта: значения, имена собственные и внешние ссылки,
  которые не переводятся. Переводимые подписи берутся из i18n по ключам ниже.
*/

import eatonLogo from "@/assets/partners/eaton.svg";
import skodaLogo from "@/assets/partners/skoda.png";
import wabtecLogo from "@/assets/partners/wabtec.svg";

/** Цифры в hero-карточке и в полосе статистики. Подписи — в i18n (home.stats.*). */
export const STATS = [
  { value: "2007", labelKey: "home.stats.since" },
  { value: "5", labelKey: "home.stats.eaeu" },
] as const;

/** Иконки для блока «Почему выбирают нас» (по порядку i18n home.why.items). */
export const WHY_ICONS = [
  "users",
  "shield",
  "layers",
  "user-check",
  "lock",
] as const;

/** Иконки для блока «Услуги компании» (по порядку i18n home.services.items). */
export const HOME_SERVICE_ICONS = [
  "globe",
  "user-check",
  "clipboard-check",
  "file-text",
  "link",
  "message",
  "archive",
] as const;

/** Иконки для шагов блока «Как мы работаем» (по порядку i18n home.process.steps). */
export const PROCESS_ICONS = [
  "message",
  "user-check",
  "beaker",
  "archive",
] as const;

/** Иконки для карточек-направлений на странице услуг (порядок SERVICE_CARD_KEYS). */
export const SERVICE_CARD_ICONS = [
  "user-check",
  "badge",
  "file-text",
  "document",
  "beaker",
  "stamp",
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

/** Все партнёры одним списком (без группировки по странам). */
export const PARTNERS = PARTNER_GROUPS.flatMap((group) => group.items);

/**
 * Логотипы партнёров для карусели. Ключ — точное название из PARTNERS,
 * значение — URL/импорт картинки (SVG/PNG, прозрачный фон).
 * Пока пусто — карусель показывает плейсхолдер с инициалами.
 * Чтобы добавить логотип: положить файл в `src/assets/partners/`,
 * импортировать сверху и прописать здесь (ключ — точное название из PARTNERS).
 * Для остальных компаний логотипы не найдены в открытом доступе —
 * карусель показывает плейсхолдер с инициалами.
 */
export const PARTNER_LOGOS: Record<string, string> = {
  "Wabtec Components LLC": wabtecLogo,
  "Eaton Corporation": eatonLogo,
  "ŠKODA ELECTRIC a.s.": skodaLogo,
  "Wabtec Faiveley Nordic AB": wabtecLogo,
};

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
