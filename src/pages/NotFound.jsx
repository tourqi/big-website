// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";
import PageMeta from "@/lib/PageMeta.jsx";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <PageMeta title="404 — Halaman Tidak Ditemukan" />
      <div className="max-w-md text-center">
        {/* 404 Header */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-900 leading-none mb-2">
            404
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-black to-gray-400 mx-auto"></div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. Mari kembali
            ke halaman utama atau jelajahi katalog kami.
          </p>
        </div>

        {/* Illustration - simple geometric shapes */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-32 h-32">
            {/* Background circles */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full opacity-50"></div>
            
            {/* Search icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 text-gray-300 opacity-50" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-900 font-medium rounded-xl hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Kembali</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
          >
            <Home size={18} />
            <span>Beranda</span>
          </button>
        </div>

        {/* Secondary Navigation */}
        <div className="space-y-2 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 pt-4 mb-3">Atau jelajahi:</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => navigate("/catalogue")}
              className="text-sm px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Katalog Produk
            </button>
            <button
              onClick={() => navigate("/kitchen-guide")}
              className="text-sm px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Panduan Dapur
            </button>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-xs text-gray-500 mt-8">
          Butuh bantuan? Hubungi kami via{" "}
          <a
            href="https://wa.me/6282145756660?text=Halo BIG, saya butuh bantuan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black font-medium underline"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}
