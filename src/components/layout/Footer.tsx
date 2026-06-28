import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { NAV_ITEMS } from "@/constants/navigation";
import { REQUISITES, SITE } from "@/constants/site";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-night px-5 pb-7 pt-13 text-fog sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.3fr]">
        <div>
          <div className="text-[17px] font-extrabold tracking-[0.02em] text-white">
            {SITE.shortName}
          </div>
          <p className="mt-3 max-w-[40ch] text-[13px] leading-relaxed text-fog-faint">
            {t("footer.about")}
          </p>
        </div>

        <div>
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white">
            {t("footer.sections")}
          </div>
          <ul className="flex flex-col gap-2 text-[13px]">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="text-fog-soft transition-colors hover:text-white"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white">
            {t("footer.contacts")}
          </div>
          <div className="text-[13px] leading-[1.7] text-fog-soft">
            {t("site.addressShort")}
            <br />
            <a href={`tel:${SITE.phoneHref}`} className="hover:text-white">
              {SITE.phone}
            </a>
            <br />
            <a href={`mailto:${SITE.email}`} className="hover:text-white">
              {SITE.email}
            </a>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white">
            {t("footer.requisites")}
          </div>
          <div className="text-[12.5px] leading-[1.7] text-fog-soft">
            {t("contact.labels.bin")} {REQUISITES.bin}
            <br />
            {t("contact.labels.iik")} {REQUISITES.iik}
            <br />
            {t("contact.labels.bik")} {REQUISITES.bik} · {REQUISITES.bank}
            <br />
            {t("footer.directorLabel")}: {t("site.directorShort")}
          </div>
        </div>
      </div>

      <div className="mt-9 flex flex-col gap-2 border-t border-night-line pt-[18px] text-xs text-fog-dim sm:flex-row sm:justify-between">
        <span>{t("footer.rights")}</span>
        <span>{t("footer.legal")}</span>
      </div>
    </footer>
  );
}
