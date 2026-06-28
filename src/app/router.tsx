import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ContactsPage } from "@/pages/ContactsPage";
import { HomePage } from "@/pages/HomePage";
import { LegislationPage } from "@/pages/LegislationPage";
import { PartnersPage } from "@/pages/PartnersPage";
import { ServicesPage } from "@/pages/ServicesPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export function AppRouter() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/legislation" element={<LegislationPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
