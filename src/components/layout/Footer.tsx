import { useTranslation } from "react-i18next";

import { Container } from "@/components/ui/Container";
import { SITE } from "@/constants/site";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-surface-900 py-8 text-slate-300">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{SITE.shortName}</p>
          <p className="mt-1 text-sm">{SITE.address}</p>
        </div>
        <p className="text-sm">
          © {year} {SITE.name}. {t("footer.rights")}.
        </p>
      </Container>
    </footer>
  );
}
