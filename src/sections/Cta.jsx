// src/sections/CTA.jsx
import React from "react";
import { Button } from "@/components/ui/Button"; // jika alias @ belum aktif → "../components/ui/Button.jsx"

export default function CTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Siap Memulai Ruang Impian Anda?
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl">
            Kami hadir untuk membantu mewujudkan interior yang nyaman, fungsional,
            dan sesuai budget Anda. Konsultasi awal 100% gratis.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100 px-6 py-3 text-base font-semibold"
            onClick={() => (window.location.href = "/#contact")}
          >
            Konsultasi Gratis
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-6 py-3 text-base font-semibold"
            onClick={() => (window.location.href = "/#portfolio")}
          >
            Lihat Portofolio
          </Button>
        </div>
      </div>
    </section>
  );
}
