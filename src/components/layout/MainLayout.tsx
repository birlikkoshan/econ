import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type MainLayoutProps = {
  children: ReactNode;
};

/** Полноширинный каркас: акцент-полоса, шапка, контент на всю ширину, футер. */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <div className="h-[3px] bg-brand" />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
