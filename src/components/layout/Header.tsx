import { useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { cn, scrollToSection } from "@/lib/utils";

export function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="text-left text-sm font-bold text-surface-900 sm:text-base"
        >
          {SITE.shortName}
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "border-t border-slate-200 bg-white md:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {t(item.labelKey)}
            </button>
          ))}
        </Container>
      </div>
    </header>
  );
}
