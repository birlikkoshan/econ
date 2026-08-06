import { useTranslation } from "react-i18next";

import { REQUISITES } from "@/constants/site";
import { cn } from "@/lib/utils";

type RequisitesBlockProps = {
  variant?: "card" | "footer";
  className?: string;
};

export function RequisitesBlock({
  variant = "card",
  className,
}: RequisitesBlockProps) {
  const { t } = useTranslation();

  if (variant === "footer") {
    return (
      <div className={cn("text-[12.5px] leading-[1.7] text-fog-soft", className)}>
        {t("contact.labels.bin")} {REQUISITES.bin}
        <br />
        {t("contact.labels.iik")} {REQUISITES.iik}
        <br />
        {t("contact.labels.bik")} {REQUISITES.bik} · {REQUISITES.bank}
        <br />
        {t("footer.directorLabel")}: {t("site.directorShort")}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "border-2 border-brand/50 bg-brand-tint p-6 sm:p-8",
        className,
      )}
    >
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
  );
}
