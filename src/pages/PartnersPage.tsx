import { useTranslation } from "react-i18next";

import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PARTNER_GROUPS } from "@/constants/content";

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
      <PageHero
        eyebrow={t("partners.eyebrow")}
        title={t("partners.title")}
        lead={t("partners.lead")}
      />

      <Section>
        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_GROUPS.map((group) => (
            <div key={group.countryKey}>
              <div className="mb-4 border-b-2 border-brand pb-3 text-[13px] font-extrabold uppercase tracking-[0.06em] text-ink">
                {t(group.countryKey)}
              </div>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13.5px] leading-snug text-muted"
                  >
                    {localizePartner(item, i18n.language)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
