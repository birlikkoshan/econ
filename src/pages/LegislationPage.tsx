import { useTranslation } from "react-i18next";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { EXTERNAL_LINKS, LAWS } from "@/constants/content";

type Law = { title: string; meta: string; description: string };

export function LegislationPage() {
  const { t } = useTranslation();

  const laws = t("legislation.laws", { returnObjects: true }) as Law[];
  const eaeuItems = t("legislation.eaeuItems", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <PageHero
        eyebrow={t("legislation.eyebrow")}
        title={t("legislation.title")}
        lead={t("legislation.lead")}
      />

      <Section>
        <p className="max-w-[80ch] text-[15px] leading-relaxed text-ink-medium sm:text-base">
          {t("legislation.intro")}
        </p>

        <h2 className="mb-7 mt-12 text-2xl font-extrabold text-ink sm:text-[28px]">
          {t("legislation.lawsTitle")}
        </h2>
        <div className="flex flex-col gap-px overflow-hidden border border-line bg-line">
          {laws.map((law, index) => (
            <article
              key={law.title}
              className="bg-surface p-7 lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-10"
            >
              <div>
                <h3 className="text-base font-extrabold text-ink">
                  {law.title}
                </h3>
                <div className="mt-1.5 text-[13px] text-brand">{law.meta}</div>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-muted lg:mt-0">
                {law.description}
                <a
                  href={LAWS[index]?.url ?? EXTERNAL_LINKS.adilet}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 font-semibold text-brand-deep underline-offset-2 hover:underline"
                >
                  adilet.zan.kz
                </a>
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-[14px] text-muted">
          {t("legislation.adiletNote")}{" "}
          <a
            href={EXTERNAL_LINKS.adilet}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand-deep underline-offset-2 hover:underline"
          >
            {t("legislation.adiletLink")} →
          </a>
        </p>
      </Section>

      <Section tint bordered>
        <Eyebrow>{t("legislation.eyebrow")}</Eyebrow>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-[28px]">
          {t("legislation.eaeuTitle")}
        </h2>
        <p className="mt-4 text-[15px] text-ink-soft sm:text-base">
          {t("legislation.eaeuLead")}
        </p>
        <ul className="mt-6 flex flex-col">
          {eaeuItems.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-t border-line-mint py-3.5 text-[15px] text-ink-soft"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[14px] text-muted">
          {t("legislation.eaeuNote")}{" "}
          <a
            href={EXTERNAL_LINKS.eaeu}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand-deep underline-offset-2 hover:underline"
          >
            {t("legislation.eaeuLink")} →
          </a>
        </p>
      </Section>
    </>
  );
}
