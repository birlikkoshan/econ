import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { CtaBand } from "@/components/ui/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  HERO_BADGES,
  HOME_SERVICE_ICONS,
  STATS,
  WHY_ICONS,
} from "@/constants/content";
import { SITE } from "@/constants/site";

/** Разбирает «2007» / «с 2007» на префикс и число для анимированного счётчика. */
function parseStat(value: string) {
  const match = value.match(/(\d+)/);
  if (!match) return null;
  const number = Number(match[1]);
  const prefix = value.slice(0, match.index ?? 0);
  return { number, prefix };
}

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
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <Button to="/services" className="w-full sm:w-auto">
                {t("home.primaryCta")}
              </Button>
              <Button to="/contacts" variant="outline" className="w-full sm:w-auto">
                {t("home.secondaryCta")}
              </Button>
            </div>
          </div>

          <div className="relative hidden overflow-hidden border border-line-soft bg-brand-tint p-8 sm:flex sm:flex-col sm:items-center sm:gap-5 lg:p-[34px]">
            {/* Декоративное кольцо-радар на фоне */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-line-mint/70"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full border border-line-mint/50"
            />
            <img
              src={logo}
              alt={SITE.shortName}
              className="relative h-28 w-28 rounded-full bg-white object-contain p-2 ring-1 ring-line-mint lg:h-[132px] lg:w-[132px]"
            />
            <div className="relative h-px w-full bg-line-mint" />
            <div className="relative grid w-full grid-cols-3 gap-x-4 gap-y-[18px] text-center">
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

          {/* Мобильная версия hero-карточки — компактная строка бейджей */}
          <div className="flex flex-wrap gap-2 sm:hidden">
            {HERO_BADGES.map((badge) => (
              <span
                key={badge.labelKey}
                className="rounded-[2px] border border-line-mint bg-brand-tint px-3 py-1.5 text-[12px] font-bold text-brand-deep"
              >
                {badge.value}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Полоса статистики */}
      <div className="grid grid-cols-2 border-y border-line bg-surface divide-line sm:grid-cols-3 sm:divide-x">
        {STATS.map((stat, index) => {
          const parsed = parseStat(stat.value);
          return (
            <div
              key={stat.labelKey}
              className={`px-5 py-7 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 ${
                index === STATS.length - 1 && STATS.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              <div className="text-3xl font-extrabold tracking-tight text-brand lg:text-[34px]">
                {parsed ? (
                  <Counter value={parsed.number} prefix={parsed.prefix} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="mt-1 text-[13px] text-muted-soft">
                {t(stat.labelKey)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Почему выбирают нас */}
      <Section>
        <Eyebrow>{t("home.why.eyebrow")}</Eyebrow>
        <h2 className="mb-8 mt-3 text-2xl font-extrabold text-ink sm:text-[28px]">
          {t("home.why.title")}
        </h2>
        <div className="grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {why.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 60}
              className="group relative flex flex-col gap-4 bg-surface p-7 transition-colors hover:bg-brand-tint"
            >
              <span
                aria-hidden
                className="absolute right-5 top-4 text-5xl font-extrabold leading-none text-brand/[0.07] transition-colors group-hover:text-brand/[0.12]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative flex h-11 w-11 items-center justify-center rounded-[3px] bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={WHY_ICONS[index] as IconName} />
              </span>
              <p className="relative text-[15px] leading-relaxed text-ink-soft">
                {item}
              </p>
            </Reveal>
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 50}
              className="group flex items-start gap-4 border border-line-mint bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={HOME_SERVICE_ICONS[index] as IconName} className="h-5 w-5" />
              </span>
              <p className="text-[15px] leading-snug text-ink-medium">{item}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
