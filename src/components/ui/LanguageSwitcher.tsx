import { useEffect, useRef, useState } from "react";
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

function primaryOf(lng: string): SupportedLanguage {
  if (lng.startsWith("kk")) return "kk";
  if (lng.startsWith("en")) return "en";
  if (lng.startsWith("ru")) return "ru";
  return DEFAULT_LANGUAGE;
}

function currentCode(active: string): string {
  if (active === "kk-Latn") return LANGUAGE_LABELS["kk-Latn"];
  return LANGUAGE_LABELS[primaryOf(active)];
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.8 3.1 4.3 6.4 4.3 9s-1.5 5.9-4.3 9c-2.8-3.1-4.3-6.4-4.3-9S9.2 6.1 12 3z" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Компактный переключатель языка: глобус + код, список в дропдауне. */
export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const active = i18n.language ?? DEFAULT_LANGUAGE;
  const primary = primaryOf(active);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectLanguage = (lang: SupportedLanguage) => {
    void i18n.changeLanguage(lang);
    setOpen(false);
  };

  const selectPrimary = (lang: SupportedLanguage) => {
    const next = lang === "kk" && active === "kk-Latn" ? "kk-Latn" : lang;
    selectLanguage(next);
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language.label")}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-[2px] border border-line px-2.5 py-1.5",
          "text-[13px] font-semibold tracking-[0.04em] text-ink-soft transition-colors",
          "hover:border-brand/35 hover:text-brand",
          open && "border-brand/35 text-brand",
        )}
      >
        <GlobeIcon className="h-3.5 w-3.5 shrink-0" />
        <span>{currentCode(active)}</span>
        <ChevronIcon
          className={cn(
            "h-3 w-3 shrink-0 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={t("language.label")}
          className="absolute right-0 top-[calc(100%+6px)] z-50 min-w-[148px] overflow-hidden rounded-[4px] border border-line bg-surface py-1 shadow-[0_8px_24px_oklch(0.2_0.02_160/0.12)]"
        >
          {PRIMARY_LANGUAGES.map((lang) => {
            const isActive = primary === lang;

            return (
              <button
                key={lang}
                type="button"
                role="option"
                aria-selected={isActive && lang !== "kk"}
                onClick={() => selectPrimary(lang)}
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2 text-left text-[13px] transition-colors",
                  isActive && lang !== "kk"
                    ? "bg-brand-tint font-semibold text-brand"
                    : "text-ink-soft hover:bg-brand-tint/60 hover:text-ink",
                )}
              >
                <span>{LANGUAGE_LABELS[lang]}</span>
                {isActive && lang !== "kk" ? (
                  <span className="text-[11px] text-brand">✓</span>
                ) : null}
              </button>
            );
          })}

          <div className="mx-3 my-1 h-px bg-line" />

          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-muted-faint">
            {t("language.script")}
          </div>

          {KK_SCRIPTS.map((script) => {
            const isActive = active === script.lang;

            return (
              <button
                key={script.lang}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => selectLanguage(script.lang)}
                className={cn(
                  "flex w-full items-center justify-between py-2 pl-5 pr-3 text-left text-[13px] transition-colors",
                  isActive
                    ? "bg-brand-tint font-semibold text-brand"
                    : "text-ink-soft hover:bg-brand-tint/60 hover:text-ink",
                )}
              >
                <span>{script.label}</span>
                {isActive ? (
                  <span className="text-[11px] text-brand">✓</span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
