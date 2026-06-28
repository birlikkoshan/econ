import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { ServiceItem } from "@/types";

const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "authorized",
    titleKey: "services.items.authorized.title",
    descriptionKey: "services.items.authorized.description",
  },
  {
    id: "certification",
    titleKey: "services.items.certification.title",
    descriptionKey: "services.items.certification.description",
  },
  {
    id: "declaration",
    titleKey: "services.items.declaration.title",
    descriptionKey: "services.items.declaration.description",
  },
  {
    id: "documentation",
    titleKey: "services.items.documentation.title",
    descriptionKey: "services.items.documentation.description",
  },
  {
    id: "testing",
    titleKey: "services.items.testing.title",
    descriptionKey: "services.items.testing.description",
  },
  {
    id: "marking",
    titleKey: "services.items.marking.title",
    descriptionKey: "services.items.marking.description",
  },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <Section id="services" variant="muted">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-surface-900 md:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-slate-600">{t("services.subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_ITEMS.map((service) => (
            <Card key={service.id}>
              <h3 className="text-lg font-semibold text-surface-900">
                {t(service.titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t(service.descriptionKey)}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
