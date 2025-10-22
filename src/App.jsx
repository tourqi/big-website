import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout.jsx";

import InteriorDesignSite from "./InteriorDesignSite.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import PortfolioDetail from "./pages/PortfolioDetail.jsx";
import KitchenSetGuide from "@/pages/Kitchen-Guide";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<InteriorDesignSite />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/kitchen-guide" element={<KitchenSetGuide />} />
        <Route path="*" element={<div className="p-8">Halaman tidak ditemukan.</div>} />
      </Route>
    </Routes>
  );
}
