// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site.js";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Layanan", to: "/#services" },
  { label: "Portofolio", to: "/#portfolio" },
  { label: "Tentang", to: "/#about" },
  { label: "Kontak", to: "/#contact" },
];

const CATALOGUE_LINKS = [
  { label: "Katalog", to: "/catalogue" },
  { label: "Panduan Kitchen", to: "/kitchen-guide" },
];

const SOCIAL_ICONS = [
  { icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
  { icon: Facebook, href: SITE.socials.facebook, label: "Facebook" },
  { icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-bold tracking-wide uppercase text-brand text-sm">
                {SITE.name}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Solusi interior komplet untuk ruangan impian Anda. 
              Kitchen set, living room, bedroom, dan bathroom — semuanya dirancang dengan kualitas terbaik.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-brand hover:border-brand/30 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3">Navigasi</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-gray-600 hover:text-brand transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Katalog */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3">Katalog</h4>
            <ul className="space-y-2">
              {CATALOGUE_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-gray-600 hover:text-brand transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-brand transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-brand transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${SITE.phoneWA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneWA}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  Telepon Langsung
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                {SITE.city}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-brand transition-colors">Kebijakan Privasi</Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-brand transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
