import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CompactListRow, LeadListRow } from "@/components/ui/ListMarker";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HERO_BADGES, STATS } from "@/constants/content";
import { SITE } from "@/constants/site";

export function HomePage() {
  const { t } = useTranslation();

  const why = t("home.why.items", { returnObjects: true }) as string[];
  const services = t("home.services.items", { returnObjects: true }) as string[];

  return (
    <>
      {/* Hero */}
      <Section className="lg:py-[54px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.85fr] lg:gap-13">
          <div className="animate-fade-in-up">
            <Eyebrow>{t("home.eyebrow")}</Eyebrow>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
              {t("home.title")}
            </h1>
            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted">
              {t("home.lead")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Button to="/services">{t("home.primaryCta")}</Button>
              <Button to="/contacts" variant="outline">
                {t("home.secondaryCta")}
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 border border-line-soft bg-brand-tint p-8 lg:p-[34px]">
            <img
              src={logo}
              alt={SITE.shortName}
              className="h-28 w-28 rounded-full bg-white object-contain p-2 ring-1 ring-line-mint lg:h-[132px] lg:w-[132px]"
            />
            <div className="h-px w-full bg-line-mint" />
            <div className="grid w-full grid-cols-1 gap-x-4 gap-y-[18px] text-center sm:grid-cols-3">
              {HERO_BADGES.map((badge) => (
                <div key={badge.labelKey}>
                  <div className="text-[13px] font-extrabold text-ink">
                    {badge.value}
                  </div>
                  <div className="text-[11px] text-muted-faint">
                    {t(badge.labelKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Полоса статистики */}
      <div className="grid grid-cols-1 border-y border-line bg-surface divide-line sm:grid-cols-3 sm:divide-x">
        {STATS.map((stat) => (
          <div key={stat.labelKey} className="px-5 py-7 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
            <div className="text-3xl font-extrabold tracking-tight text-brand lg:text-[34px]">
              {stat.value}
            </div>
            <div className="mt-1 text-[13px] text-muted-soft">
              {t(stat.labelKey)}
            </div>
          </div>
        ))}
      </div>

      {/* Почему выбирают нас */}
      <Section>
        <Eyebrow>{t("home.why.eyebrow")}</Eyebrow>
        <h2 className="mb-8 mt-3 text-2xl font-extrabold text-ink sm:text-[28px]">
          {t("home.why.title")}
        </h2>
        <div className="flex flex-col">
          {why.map((item, index) => (
            <LeadListRow key={item} isLast={index === why.length - 1}>
              <p className="max-w-[70ch] text-base leading-relaxed text-ink-soft sm:text-[17px]">
                {item}
              </p>
            </LeadListRow>
          ))}
        </div>
      </Section>

      {/* Услуги компании */}
      <Section tint bordered>
        <SectionHeading
          eyebrow={t("home.services.eyebrow")}
          title={t("home.services.title")}
          action={
            <Link
              to="/services"
              className="text-sm font-semibold text-brand-deep underline-offset-4 hover:underline"
            >
              {t("common.allServices")}
            </Link>
          }
          className="mb-8"
        />
        <div className="grid gap-x-12 sm:grid-cols-2">
          {services.map((item) => (
            <CompactListRow key={item} borderClass="border-line-mint">
              <p className="text-[15px] leading-snug text-ink-medium">{item}</p>
            </CompactListRow>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
