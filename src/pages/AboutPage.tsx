import { useTranslation } from "react-i18next";

import { CtaBand } from "@/components/ui/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export function AboutPage() {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];
  const activities = t("about.activities", { returnObjects: true }) as string[];
  const directions = t("about.directions", { returnObjects: true }) as string[];

  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        lead={t("about.lead")}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-13">
          <div className="space-y-5">
            {paragraphs.map((p) => (
              <p
                key={p}
                className="text-[15px] leading-relaxed text-ink-medium sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="h-fit border border-line-soft bg-brand-tint p-7">
            <Eyebrow>{t("about.activitiesTitle")}</Eyebrow>
            <div className="mt-1 text-[11px] text-muted-faint">
              {t("about.activitiesSubtitle")}
            </div>
            <ul className="mt-4 flex flex-col">
              {activities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-t border-line-mint py-3 text-[15px] text-ink-soft first:border-t-0 first:pt-0"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tint bordered>
        <Eyebrow>{t("about.directionsTitle")}</Eyebrow>
        <div className="mt-8 flex flex-col">
          {directions.map((item, index) => (
            <div
              key={item}
              className="grid grid-cols-[44px_1fr] items-start gap-6 border-t border-line-mint py-[22px] lg:grid-cols-[64px_1fr]"
            >
              <div className="text-[22px] font-extrabold text-brand">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="max-w-[72ch] text-base leading-relaxed text-ink-soft sm:text-[17px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
