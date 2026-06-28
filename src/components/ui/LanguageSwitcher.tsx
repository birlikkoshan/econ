import { useTranslation } from "react-i18next";

import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from "@/constants/site";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();

  const current = (i18n.language?.slice(0, 2) ??
    DEFAULT_LANGUAGE) as SupportedLanguage;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="sr-only">{t("language.label")}</span>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => void i18n.changeLanguage(lang)}
          className={cn(
            "rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
            current === lang
              ? "bg-brand-500 text-surface-900"
              : "text-slate-500 hover:text-slate-800",
          )}
          aria-pressed={current === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
