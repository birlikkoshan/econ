import { useTranslation } from "react-i18next";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import {
  HOME_SERVICE_ICONS,
  SERVICE_CARD_ICONS,
  SERVICE_CARD_KEYS,
  SITE_IMAGES,
} from "@/constants/content";
import { CARD_BORDER_HOVER, CARD_BORDER_HOVER_LG } from "@/lib/utils";

type ServiceItem = { title: string; description: string };

export function ServicesPage() {
  const { t } = useTranslation();

  const items = t("services.items", { returnObjects: true }) as ServiceItem[];

  return (
    <>
      <PageHero
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        lead={t("services.lead")}
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 50}
                className={`group flex items-start gap-4 border-2 border-brand/50 bg-surface p-6 ${CARD_BORDER_HOVER}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={HOME_SERVICE_ICONS[index] as IconName} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <SiteImage
            src={SITE_IMAGES.industrial}
            alt={t("images.industrial")}
            className="aspect-[4/5] lg:sticky lg:top-8"
          />
        </div>
      </Section>

      <Section tint bordered>
        <Eyebrow>{t("services.cardsTitle")}</Eyebrow>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-[28px]">
          {t("services.cardsSubtitle")}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARD_KEYS.map((key, index) => (
            <Reveal
              key={key}
              delay={index * 50}
              className={`group flex flex-col gap-3.5 border-2 border-brand/50 bg-white p-7 ${CARD_BORDER_HOVER_LG}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={SERVICE_CARD_ICONS[index] as IconName} />
              </span>
              <h3 className="text-base font-extrabold text-ink">
                {t(`services.cards.${key}.title`)}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted">
                {t(`services.cards.${key}.description`)}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
