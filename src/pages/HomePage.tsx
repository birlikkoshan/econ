import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HERO_BADGES, PARTNER_GROUPS, STATS } from "@/constants/content";
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
            <div className="grid w-full grid-cols-2 gap-x-4 gap-y-[18px] text-center">
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
      <div className="grid grid-cols-2 border-y border-line divide-line sm:grid-cols-4 sm:divide-x">
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
            <div
              key={item}
              className="grid grid-cols-[44px_1fr] items-start gap-6 border-t border-line py-[22px] lg:grid-cols-[64px_1fr]"
            >
              <div className="text-[22px] font-extrabold text-brand">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="max-w-[70ch] text-base leading-relaxed text-ink-soft sm:text-[17px]">
                {item}
              </p>
            </div>
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
          {services.map((item, index) => (
            <div
              key={item}
              className="grid grid-cols-[40px_1fr] gap-4 border-t border-line-mint py-[18px]"
            >
              <div className="text-[13px] font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-[15px] leading-snug text-ink-medium">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* География */}
      <Section>
        <Eyebrow>{t("home.geo.eyebrow")}</Eyebrow>
        <h2 className="mb-8 mt-3 text-2xl font-extrabold text-ink sm:text-[28px]">
          {t("home.geo.title")}
        </h2>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {PARTNER_GROUPS.map((group) => (
            <div key={group.countryKey}>
              <div className="mb-3.5 border-b-2 border-brand pb-3 text-[13px] font-extrabold uppercase tracking-[0.06em] text-ink">
                {t(group.countryKey)}
              </div>
              <div className="flex flex-col gap-2.5">
                {group.items.slice(0, 3).map((item) => (
                  <div
                    key={item}
                    className="text-[13.5px] leading-snug text-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
