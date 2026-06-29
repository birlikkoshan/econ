import { useTranslation } from "react-i18next";

import { PageHero } from "@/components/ui/PageHero";
import { PartnerCarousel } from "@/components/ui/PartnerCarousel";
import { Reveal } from "@/components/ui/Reveal";
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
  const localize = (name: string) => localizePartner(name, i18n.language);

  return (
    <>
      <PageHero title={t("partners.eyebrow")} lead={t("partners.lead")} />

      <Section>
        <PartnerCarousel items={PARTNERS} localize={localize} />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((item, index) => (
            <Reveal key={item} delay={index * 40}>
              <div className="flex h-full items-start gap-3 border border-line bg-surface p-4 transition-colors hover:border-brand/40">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                <p className="text-[14px] leading-snug text-ink-medium">
                  {localize(item)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
