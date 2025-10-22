import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/config/site.js";

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Layanan" },
  { id: "portfolio", label: "Portofolio" },
  { id: "about", label: "Tentang" },
  { id: "contact", label: "Kontak" },
  { id: "catalogue", label: "Katalog", href: "/catalogue" }, // menu baru
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const itemClass =
    "text-base font-bold uppercase tracking-wide text-gray-700 hover:text-brand transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo + brand */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-9 w-auto" />
            <span className="font-bold tracking-wide uppercase text-brand">
              {SITE.name}
            </span>
          </div>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => {
              if (n.href) {
                // route normal (catalogue)
                return (
                  <NavLink key={n.id} to={n.href} className={itemClass}>
                    {n.label}
                  </NavLink>
                );
              }
              // scroll section di landing page
              const to = n.id === "home" ? "/" : `/#${n.id}`;
              return (
                <Link key={n.id} to={to} className={itemClass}>
                  {n.label}
                </Link>
              );
            })}
            <Link to="/#contact">
              <Button>Konsultasi Gratis</Button>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 grid gap-2">
            {NAV.map((n) => {
              const to = n.href ? n.href : (n.id === "home" ? "/" : `/#${n.id}`);
              return (
                <Link
                  key={n.id}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`${itemClass} block py-2`}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link to="/#contact" onClick={() => setOpen(false)}>
              <Button className="w-full">Konsultasi Gratis</Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
