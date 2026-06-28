import { useTranslation } from "react-i18next";

import {
  DEFAULT_LANGUAGE,
  KK_SCRIPTS,
  LANGUAGE_LABELS,
  PRIMARY_LANGUAGES,
  type SupportedLanguage,
} from "@/constants/site";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

/** Нормализуем код языка к одному из верхнеуровневых: ru / kk / en. */
function primaryOf(lng: string): SupportedLanguage {
  if (lng.startsWith("kk")) return "kk";
  if (lng.startsWith("en")) return "en";
  if (lng.startsWith("ru")) return "ru";
  return DEFAULT_LANGUAGE;
}

/**
 * Переключатель RU / ҚАЗ / EN. Для казахского дополнительно показывает выбор
 * письменности: Кирил / Latyn (kk ↔ kk-Latn).
 */
export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();

  const active = i18n.language ?? DEFAULT_LANGUAGE;
  const primary = primaryOf(active);
  const isKazakh = primary === "kk";

  const selectPrimary = (lang: SupportedLanguage) => {
    // При выборе «ҚАЗ» сохраняем текущую письменность, иначе по умолчанию кириллица.
    const next = lang === "kk" && active === "kk-Latn" ? "kk-Latn" : lang;
    void i18n.changeLanguage(next);
  };

  return (
    <div className={cn("flex items-center gap-3.5 tracking-[0.04em]", className)}>
      <span className="sr-only">{t("language.label")}</span>

      {PRIMARY_LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => selectPrimary(lang)}
          aria-pressed={primary === lang}
          className={cn(
            "transition-colors",
            primary === lang
              ? "font-bold text-brand"
              : "text-muted-soft hover:text-ink",
          )}
        >
          {LANGUAGE_LABELS[lang]}
        </button>
      ))}

      {isKazakh && (
        <span className="flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 text-[11px]">
          {KK_SCRIPTS.map((script) => (
            <button
              key={script.lang}
              type="button"
              onClick={() => void i18n.changeLanguage(script.lang)}
              aria-pressed={active === script.lang}
              className={cn(
                "transition-colors",
                active === script.lang
                  ? "font-bold text-brand"
                  : "text-muted-soft hover:text-ink",
              )}
            >
              {script.label}
            </button>
          ))}
        </span>
      )}
    </div>
  );
}
