// src/components/Footer.jsx
import React from "react";
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
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
