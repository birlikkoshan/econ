import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { NAV_ITEMS } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-surface backdrop-blur-sm">
      {/* Основная шапка */}
      <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-8 lg:px-14 lg:py-[18px] xl:px-20 2xl:px-28">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3.5">
          <img
            src={logo}
            alt={SITE.shortName}
            className="h-10 w-10 object-contain lg:h-[42px] lg:w-[42px]"
          />
          <span className="text-[15px] font-extrabold leading-[1.25] tracking-[0.02em] text-ink">
            {t("site.brand")}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-brand",
                  isActive ? "text-brand" : "text-ink-soft",
                )
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
          <LanguageSwitcher className="text-sm" />
          <Button to="/contacts" className="px-[18px] py-2.5 text-sm">
            {t("common.cta")}
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-line text-xl text-ink lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={cn(
          "border-b border-line bg-surface lg:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col px-5 py-3 sm:px-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                cn(
                  "py-2.5 text-sm font-medium transition-colors",
                  isActive ? "text-brand" : "text-ink-soft",
                )
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
          <div className="flex items-center justify-between border-t border-line pt-4 mt-2">
            <LanguageSwitcher />
            <Button to="/contacts" onClick={closeMenu} className="px-[18px] py-2.5 text-sm">
              {t("common.cta")}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
