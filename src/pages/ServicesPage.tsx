import { useTranslation } from "react-i18next";

import { CtaBand } from "@/components/ui/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SERVICE_CARD_KEYS } from "@/constants/content";

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
        <div className="grid gap-x-12 sm:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="grid grid-cols-[40px_1fr] gap-4 border-t border-line py-6"
            >
              <div className="text-[13px] font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tint bordered>
        <Eyebrow>{t("services.cardsTitle")}</Eyebrow>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-[28px]">
          {t("services.cardsSubtitle")}
        </h2>
        <div className="mt-8 grid gap-px overflow-hidden border border-line-mint bg-line-mint sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARD_KEYS.map((key) => (
            <div key={key} className="bg-brand-tint p-7">
              <h3 className="text-base font-extrabold text-ink">
                {t(`services.cards.${key}.title`)}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                {t(`services.cards.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
