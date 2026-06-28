import { useTranslation } from "react-i18next";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section id="home" variant="dark" animate={false} className="py-24 md:py-32">
      <Container className="text-center">
        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight md:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-slate-300 [animation-delay:120ms]">
          {t("hero.subtitle")}
        </p>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="animate-fade-in-up mt-10 inline-flex rounded-lg bg-brand-500 px-8 py-3 text-sm font-semibold text-surface-900 transition-colors hover:bg-brand-400 [animation-delay:240ms]"
        >
          {t("hero.cta")}
        </button>
      </Container>
    </Section>
  );
}
