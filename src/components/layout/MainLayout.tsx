import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { KazakhOrnamentBackground } from "@/components/layout/KazakhOrnamentBackground";

type MainLayoutProps = {
  children: ReactNode;
};

/** Полноширинный каркас: орнамент на фоне, контент поверх. */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="site-shell relative flex min-h-screen flex-col bg-surface">
      <KazakhOrnamentBackground />
      <div className="site-shell-content relative flex min-h-screen flex-col">
        <div className="h-[3px] bg-brand" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
