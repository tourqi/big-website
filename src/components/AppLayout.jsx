import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { scrollToId } from "@/lib/scrollToId.js";

// Scroll ke atas tiap ganti halaman
function ScrollTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

// Auto-scroll saat hash berubah (/#services, /#contact, dst.)
function HashScroller() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const t = setTimeout(() => scrollToId(id), 50); // tunggu DOM siap
    return () => clearTimeout(t);
  }, [hash]);
  return null;
}

export default function AppLayout() {
  return (
    <div className="min-h-dvh bg-white text-zinc-900">
      <ScrollTopOnRoute />
      <HashScroller />
      <Navbar />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
