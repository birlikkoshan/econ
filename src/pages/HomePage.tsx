import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PartnerCarousel } from "@/components/ui/PartnerCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  HOME_SERVICE_ICONS,
  PARTNERS,
  PROCESS_ICONS,
  STATS,
  WHY_ICONS,
} from "@/constants/content";

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
  const steps = t("home.process.steps", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];
  const faq = t("home.faq.items", { returnObjects: true }) as {
    q: string;
    a: string;
  }[];

  return (
    <>
      {/* Hero */}
      <Section className="bg-surface lg:py-[54px]">
        <div className="animate-fade-in-up max-w-[54ch] lg:max-w-[64ch]">
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
            <Button to="/contacts" variant="outline" className="w-full sm:w-auto">
              {t("home.secondaryCta")}
            </Button>
          </div>
        </div>
      </Section>

      {/* Полоса статистики */}
      <div className="grid grid-cols-2 border-y border-line bg-surface divide-line sm:divide-x">
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
              className={`group flex flex-col gap-4 border border-line bg-surface p-7 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand-tint hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] ${
                index === why.length - 1 && why.length % 2 !== 0 ? "sm:col-span-2" : ""
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
              className="group relative flex flex-col gap-4 border border-line bg-surface p-7 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)]"
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

      {/* Частые вопросы — аккордеон */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-8">
            <Eyebrow>{t("home.faq.eyebrow")}</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
              {t("home.faq.title")}
            </h2>
          </Reveal>
          <Reveal>
            <Accordion items={faq} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
