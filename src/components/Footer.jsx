// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site.js"; // jika alias "@" belum aktif, ganti ke: "../config/site.js"

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="hover:underline">Kebijakan Privasi</Link>
            <Link to="/terms" className="hover:underline">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
