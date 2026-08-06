import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroSphere } from "@/components/ui/HeroSphere";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PartnerCarousel } from "@/components/ui/PartnerCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import {
  HOME_SERVICE_ICONS,
  PARTNERS,
  PROCESS_ICONS,
  SITE_IMAGES,
  STATS,
  WHY_ICONS,
} from "@/constants/content";
import { CARD_BORDER_HOVER } from "@/lib/utils";

/** Разбирает «2007» / «18+» / «с 2007» на префикс, число и суффикс для анимированного счётчика. */
function parseStat(value: string) {
  const match = value.match(/(\d+)/);
  if (!match) return null;
  const number = Number(match[1]);
  const prefix = value.slice(0, match.index ?? 0);
  const suffix = value.slice((match.index ?? 0) + match[1].length);
  return { number, prefix, suffix };
}

export function HomePage() {
  const { t } = useTranslation();

  const why = t("home.why.items", { returnObjects: true }) as string[];
  const services = t("home.services.items", {
    returnObjects: true,
  }) as string[];
  const steps = t("home.process.steps", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];
  return (
    <>
      {/* Hero */}
      <Section className="overflow-hidden bg-surface lg:py-[54px]">
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="animate-fade-in-up w-full max-w-[54ch] lg:max-w-[64ch] lg:flex-[1.1] *:relative *:z-10">
            <Eyebrow>{t("home.eyebrow")}</Eyebrow>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[42px] lg:max-w-none">
              {t("home.title")}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {t("home.lead")}
            </p>
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <Button to="/services" className="w-full sm:w-auto">
                {t("home.primaryCta")}
              </Button>
              <Button
                to="/contacts"
                variant="outline"
                className="w-full sm:w-auto"
              >
                {t("home.secondaryCta")}
              </Button>
            </div>
          </div>
          <div
            className="animate-fade-in-up pointer-events-none absolute right-0 top-[30%] z-0 -mr-5 -translate-y-1/2 opacity-[0.58] sm:-mr-8 lg:relative lg:right-auto lg:top-auto lg:z-auto lg:mr-0 lg:flex lg:shrink-0 lg:translate-y-0 lg:justify-end lg:opacity-100"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="relative w-[min(36vw,140px)] overflow-hidden sm:w-[min(40vw,150px)] lg:w-[min(40vw,480px)] lg:overflow-visible xl:w-[520px]">
              <HeroSphere className="max-w-none w-[min(72vw,280px)] sm:w-[min(70vw,300px)] lg:w-full" />
            </div>
          </div>
        </div>
      </Section>

      {/* Полоса статистики */}
      <div className="grid grid-cols-2 divide-y-2 divide-brand/30 border-y-2 border-brand/50 bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {STATS.map((stat, index) => {
          const parsed = parseStat(stat.value);
          return (
            <Reveal
              key={stat.labelKey}
              delay={index * 60}
              className="px-5 py-7 sm:px-8 lg:px-10 xl:px-14"
            >
              <div className="text-3xl font-extrabold tracking-tight text-brand lg:text-[34px]">
                {parsed ? (
                  <Counter
                    value={parsed.number}
                    prefix={parsed.prefix}
                    suffix={parsed.suffix}
                  />
                ) : (
                  stat.value
                )}
              </div>
              <div className="mt-1 text-[13px] text-muted-soft">
                {t(stat.labelKey)}
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* О компании — фото и краткий текст */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <SiteImage
            src={SITE_IMAGES.teamMeeting}
            alt={t("images.teamMeeting")}
            className="aspect-[4/3] lg:aspect-[5/4]"
          />
          <Reveal>
            <Eyebrow>{t("home.about.eyebrow")}</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
              {t("home.about.title")}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-medium sm:text-base">
              {t("home.about.text")}
            </p>
            <Button to="/about" variant="outline" className="mt-6">
              {t("common.readMore")}
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Почему выбирают нас */}
      <Section tint bordered>
        <div className="grid gap-10 lg:grid-cols-[1fr_min(38%,420px)] lg:items-end lg:gap-14">
          <div>
            <Reveal className="mb-8">
              <Eyebrow>{t("home.why.eyebrow")}</Eyebrow>
              <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-[28px]">
                {t("home.why.title")}
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {why.map((item, index) => (
                <Reveal
                  key={item}
                  delay={index * 90}
                  className={`group flex flex-col gap-4 border-2 border-brand/50 bg-surface p-7 ${CARD_BORDER_HOVER} ${
                    index === why.length - 1 && why.length % 2 !== 0
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={WHY_ICONS[index] as IconName} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    {item}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <SiteImage
            src={SITE_IMAGES.handshake}
            alt={t("images.handshake")}
            delay={120}
            className="hidden aspect-[4/5] lg:block"
          />
        </div>
      </Section>

      {/* Услуги компании */}
      <Section bordered>
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
              className={`group flex items-start gap-4 border-2 border-brand/50 bg-white p-5 ${CARD_BORDER_HOVER}`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon
                  name={HOME_SERVICE_ICONS[index] as IconName}
                  className="h-5 w-5"
                />
              </span>
              <p className="text-[15px] leading-snug text-ink-medium">{item}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Как мы работаем — нумерованные шаги */}
      <Section>
        <Reveal className="mb-8 max-w-[60ch]">
          <Eyebrow>{t("home.process.eyebrow")}</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
            {t("home.process.title")}
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 80}
              className={`group relative flex flex-col gap-4 border-2 border-brand/50 bg-surface p-7 ${CARD_BORDER_HOVER}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={PROCESS_ICONS[index] as IconName} />
                </span>
                <span className="text-3xl font-extrabold leading-none tracking-tight text-brand/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-bold text-ink">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Партнёры — бесконечная лента логотипов */}
      <Section tint bordered>
        <Reveal className="mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
            {t("home.geo.title")}
          </h2>
        </Reveal>
        <Reveal>
          <PartnerCarousel items={PARTNERS} />
        </Reveal>
      </Section>
    </>
  );
}
