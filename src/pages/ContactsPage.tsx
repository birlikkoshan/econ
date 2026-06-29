import { useTranslation } from "react-i18next";

import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { REQUISITES, SITE } from "@/constants/site";

export function ContactsPage() {
  const { t } = useTranslation();

  const infoRows = [
    { label: t("contact.labels.address"), value: t("site.address") },
    {
      label: t("contact.labels.phone"),
      value: SITE.phone,
      href: `tel:${SITE.phoneHref}`,
    },
    {
      label: t("contact.labels.email"),
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    { label: t("contact.labels.director"), value: t("site.director") },
    { label: t("contact.labels.hours"), value: t("contact.hours") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        lead={t("contact.lead")}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-12">
          <div className="border border-line-soft bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-ink">
              {t("contact.infoTitle")}
            </h2>

            <dl className="mt-6 flex flex-col">
              {infoRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[120px_1fr] gap-4 border-t border-line py-4 first:border-t-0"
                >
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.04em] text-muted-soft">
                    {row.label}
                  </dt>
                  <dd className="text-[15px] text-ink-soft">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="text-brand-deep hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border border-line-soft bg-brand-tint p-6 sm:p-8">
            <div className="text-[13px] font-bold uppercase tracking-[0.06em] text-ink">
              {t("contact.labels.requisites")}
            </div>
            <div className="mt-3 text-[14px] leading-[1.8] text-ink-medium">
              {t("contact.labels.bin")} {REQUISITES.bin}
              <br />
              {t("contact.labels.iik")} {REQUISITES.iik}
              <br />
              {t("contact.labels.bik")} {REQUISITES.bik}
              <br />
              {t("contact.labels.bank")}: {REQUISITES.bank}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
