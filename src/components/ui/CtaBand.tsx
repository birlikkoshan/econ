import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/Button";

/** Изумрудная полоса-призыв «Приглашаем к сотрудничеству» из эталона. */
export function CtaBand() {
  const { t } = useTranslation();

  return (
    <div className="px-5 pb-12 sm:px-8 lg:px-14 lg:pb-15 xl:px-20 2xl:px-28">
      <div className="flex flex-col gap-6 rounded-[10px] bg-brand px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between lg:px-12 lg:py-12">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-[26px]">
            {t("home.cta.title")}
          </h2>
          <p className="mt-2.5 max-w-[60ch] text-[15px] leading-relaxed text-brand-on">
            {t("home.cta.text")}
          </p>
        </div>
        <Button to="/contacts" variant="white" className="shrink-0">
          {t("home.cta.button")}
        </Button>
      </div>
    </div>
  );
}
