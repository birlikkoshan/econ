import { useTranslation } from "react-i18next";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/features/contact/ContactForm";
import { SITE } from "@/constants/site";

export function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact" variant="muted">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-surface-900 md:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-slate-600">{t("contact.subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              <span className="font-medium text-surface-900">Email:</span>{" "}
              <a href={`mailto:${SITE.email}`} className="hover:text-brand-600">
                {SITE.email}
              </a>
            </p>
            <p>
              <span className="font-medium text-surface-900">Телефон:</span>{" "}
              <a href={`tel:${SITE.phone}`} className="hover:text-brand-600">
                {SITE.phone}
              </a>
            </p>
            <p>
              <span className="font-medium text-surface-900">Адрес:</span>{" "}
              {SITE.address}
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
