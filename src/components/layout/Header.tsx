import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import logo from "@/assets/logo.png";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { NAV_ITEMS } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-surface/95 backdrop-blur-sm transition-shadow duration-300",
          scrolled && "shadow-[0_6px_20px_-12px_rgba(0,0,0,0.25)]",
        )}
      >
        {/* Основная шапка */}
      <div
        className={cn(
          "flex items-center justify-between border-b border-line px-5 transition-[padding] duration-300 sm:px-8 lg:px-14 xl:px-20 2xl:px-28",
          scrolled ? "py-3 lg:py-3" : "py-4 lg:py-[18px]",
        )}
      >
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
      </header>

      {/* Затемнение фона */}
      <div
        aria-hidden
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 z-[60] bg-ink/50 transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Мобильное меню — выезжает справа */}
      <div
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-[320px] flex-col border-l border-line bg-surface transition-[transform,box-shadow] duration-300 ease-out lg:hidden",
          menuOpen
            ? "translate-x-0 shadow-[-8px_0_30px_-12px_rgba(0,0,0,0.35)]"
            : "translate-x-full shadow-none",
        )}
      >
        <div className="flex items-center justify-end border-b border-line px-5 py-4">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-line text-xl text-ink"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="flex flex-1 flex-col px-5 py-3">
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
          <div className="mt-2 flex items-center border-t border-line pt-4">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
}
