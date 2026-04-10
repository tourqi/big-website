// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";

import InteriorDesignSite   from "./InteriorDesignSite";
import CataloguePage        from "@/pages/CataloguePage";        // sebelumnya: Catalogue.jsx
import CatalogueStylesPage  from "@/pages/CatalogueStylesPage";
import StyleDetailPage      from "@/pages/StyleDetailPage";
import KitchenGuidePage     from "@/pages/KitchenGuidePage";     // sebelumnya: Kitchen-Guide.jsx
import PortfolioDetailPage  from "@/pages/PortfolioDetail";
import PrivacyInfo          from "@/pages/PrivacyInfo";
import TermsInfo            from "@/pages/TermsInfo";
import NotFound             from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/"                         element={<InteriorDesignSite />} />
        <Route path="/catalogue"                element={<CataloguePage />} />
        <Route path="/catalogue/:categoryId"    element={<CatalogueStylesPage />} />
        <Route path="/catalogue/:categoryId/:styleId" element={<StyleDetailPage />} />
        <Route path="/portfolio/:id"            element={<PortfolioDetailPage />} />
        <Route path="/kitchen-guide"            element={<KitchenGuidePage />} />
        <Route path="/privacy"                  element={<PrivacyInfo />} />
        <Route path="/terms"                    element={<TermsInfo />} />
        <Route path="*"                         element={<NotFound />} />
      </Route>
    </Routes>
  );
}