import { useTranslation } from "react-i18next";

import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PARTNER_GROUPS } from "@/constants/content";

/** Флаги стран-партнёров (декоративные, по ключу страны). */
const COUNTRY_FLAGS: Record<string, string> = {
  "partners.countries.usa": "🇺🇸",
  "partners.countries.eu": "🇪🇺",
  "partners.countries.canada": "🇨🇦",
  "partners.countries.kz": "🇰🇿",
};

/**
 * Названия компаний — имена собственные, но юридическую форму в казахской версии
 * показываем по-казахски: ТОО → ЖШС, ОЮЛ → ЗТБ (с переносом в конец, как принято).
 */
function localizePartner(name: string, lang: string): string {
  if (!lang.startsWith("kk")) return name;
  const forms: Array<[RegExp, string]> = [
    [/^ТОО\s+(.+)$/u, "$1 ЖШС"],
    [/^ОЮЛ\s+(.+)$/u, "$1 ЗТБ"],
  ];
  for (const [re, repl] of forms) {
    if (re.test(name)) return name.replace(re, repl);
  }
  return name;
}

export function PartnersPage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <PageHero eyebrow={t("partners.eyebrow")} lead={t("partners.lead")} />

      <Section>
        <div className="flex flex-col gap-10">
          {PARTNER_GROUPS.map((group, groupIndex) => (
            <Reveal key={group.countryKey} delay={groupIndex * 70}>
              <div className="flex items-center gap-3 border-b border-line-mint pb-3">
                <span aria-hidden className="text-2xl leading-none">
                  {COUNTRY_FLAGS[group.countryKey]}
                </span>
                <h2 className="text-lg font-extrabold text-ink">
                  {t(group.countryKey)}
                </h2>
                <span className="ml-auto text-[13px] font-semibold text-muted-faint">
                  {group.items.length}
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-line bg-surface p-4 transition-colors hover:border-brand/40"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                    <p className="text-[14px] leading-snug text-ink-medium">
                      {localizePartner(item, i18n.language)}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
