import { useTranslation } from "react-i18next";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function About() {
  const { t } = useTranslation();
  const benefits = t("about.benefits", { returnObjects: true }) as string[];

  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-surface-900 md:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {t("about.description")}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-surface-900">
              {t("about.missionTitle")}
            </h3>
            <p className="mt-3 text-slate-600">{t("about.mission")}</p>
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1 text-brand-500">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
