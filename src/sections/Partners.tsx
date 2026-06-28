import { useTranslation } from "react-i18next";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Partners() {
  const { t } = useTranslation();

  return (
    <Section id="partners">
      <Container className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-surface-900 md:text-4xl">
          {t("partners.title")}
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          {t("partners.description")}
        </p>
      </Container>
    </Section>
  );
}
