import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Ruler, Sparkles, FileDown, ShieldCheck, Star, Truck } from "lucide-react";

export default function Hero() {
  // 🔸 Ganti link di bawah sesuai foto kamu (misal dari website, Google Drive direct, atau Cloudinary)
  const heroImage =
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=774&auto=format&fit=crop";

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-8 md:p-12 shadow-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Text */}
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Temukan Kitchen Set yang Pas dengan Gaya & Anggaran Anda
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Pilih dari berbagai inspirasi nyata, cek estimasi harga dalam hitungan detik,
              dan konsultasikan desain Anda secara gratis. Transparan, cepat, tanpa ribet.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl">
                <Sparkles className="mr-2 h-5 w-5" /> Konsultasi Gratis
              </Button>
              <Button size="lg" variant="secondary" className="rounded-2xl">
                <Ruler className="mr-2 h-5 w-5" /> Hitung Estimasi
              </Button>
              <Button size="lg" variant="ghost" className="rounded-2xl">
                <FileDown className="mr-2 h-5 w-5" /> Unduh Brosur
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

          {/* 🔸 pakai link image */}
          <div className="flex-1 min-w-[260px]">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden border shadow-inner">
              <img
                src={heroImage}
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
