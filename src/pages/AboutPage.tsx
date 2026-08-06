import { useTranslation } from "react-i18next";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { LeadListRow } from "@/components/ui/ListMarker";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { SITE_IMAGES } from "@/constants/content";

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
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
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

          <div className="h-fit border-2 border-brand/50 bg-brand-tint p-7">
            <Eyebrow>{t("about.activitiesTitle")}</Eyebrow>
            <div className="mt-1 text-[11px] text-muted-faint">
              {t("about.activitiesSubtitle")}
            </div>
            <ul className="mt-4 flex flex-col">
              {activities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-t border-brand/30 py-3 text-[15px] text-ink-soft first:border-t-0 first:pt-0"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <SiteImage
            src={SITE_IMAGES.office}
            alt={t("images.office")}
            className="aspect-[16/10]"
          />
          <SiteImage
            src={SITE_IMAGES.teamMeeting}
            alt={t("images.teamMeeting")}
            delay={80}
            className="aspect-[16/10]"
          />
        </div>
      </Section>

      <Section tint bordered>
        <div className="grid items-start gap-10 lg:grid-cols-[min(42%,480px)_1fr] lg:gap-14">
          <SiteImage
            src={SITE_IMAGES.industrial}
            alt={t("images.industrial")}
            className="aspect-[4/3]"
          />
          <div>
            <Eyebrow>{t("about.directionsTitle")}</Eyebrow>
            <div className="mt-8 flex flex-col">
              {directions.map((item, index) => (
                <LeadListRow
                  key={item}
                  isLast={index === directions.length - 1}
                  borderClass="border-brand/30"
                >
                  <p className="max-w-[72ch] text-base leading-relaxed text-ink-soft sm:text-[17px]">
                    {item}
                  </p>
                </LeadListRow>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
