import { useTranslation } from "react-i18next";

import { CtaBand } from "@/components/ui/CtaBand";
import { CompactListRow } from "@/components/ui/ListMarker";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PARTNERS } from "@/constants/content";

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
        lead={t("partners.lead")}
      />

      <Section>
        <div className="grid gap-x-12 sm:grid-cols-2">
          {PARTNERS.map((item) => (
            <CompactListRow key={item}>
              <p className="text-[15px] leading-snug text-ink-medium">
                {localizePartner(item, i18n.language)}
              </p>
            </CompactListRow>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
