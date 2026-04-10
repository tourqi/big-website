// src/sections/catalogue/CatalogueHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Ruler, Sparkles, ShieldCheck, Star, Truck } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=774&auto=format&fit=crop";

export default function CatalogueHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-8 md:p-12 shadow-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Teks */}
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Temukan Inspirasi Interior yang Sesuai dengan Gaya &amp; Kebutuhan Anda
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Katalog ini bukan sekadar inspirasi, tapi panduan untuk memahami setiap detail interior mulai dari material, finishing, hingga fungsi ruang.

              Pelajari tiap konsep dan temukan solusi yang tidak hanya indah, tapi juga fungsional dan tahan lama.

              Karena interior yang baik adalah yang nyaman dan berkualitas untuk digunakan setiap hari.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <a href="/#contact">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Konsultasi Gratis
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-2xl" asChild>
                <a href="#estimator">
                  <Ruler className="mr-2 h-5 w-5" />
                  Hitung Estimasi
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-xl">
                <ShieldCheck className="h-3.5 w-3.5 mr-1" /> Garansi 3 Bulan
              </Badge>
              <Badge variant="secondary" className="rounded-xl">
                <Star className="h-3.5 w-3.5 mr-1" /> Soft-close full set
              </Badge>
              <Badge variant="secondary" className="rounded-xl">
                <Truck className="h-3.5 w-3.5 mr-1" /> Lead time 2–3 minggu
              </Badge>
            </div>
          </div>

          {/* Gambar */}
          <div className="flex-1 min-w-[260px]">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden border shadow-inner">
              <img
                src={HERO_IMAGE}
                alt="Foto proyek unggulan BIG"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}