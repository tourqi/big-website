// src/sections/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeroSplit({
  titleLines = ["Wujudkan", "Ruang Nyaman", "& Estetis Mulai", "Rp 1,6 Juta / m²"],
  subtitle = "Interior custom yang mencerminkan gaya hidup Anda — bukan template katalog. Material terkurasi, pengerjaan rapi, timeline jelas.",
  image = "https://images.unsplash.com/photo-1634822929277-0c51ca0e8846?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // pakai aset lokal kalau ada
  ctaPrimary = { label: "Lihat Hasil Karya Kami", to: "/#portfolio" },
  ctaSecondary = { label: "Mulai Konsultasi Gratis", to: "/#contact" },
  highlight = {
    title: "Work From Home Package",
    price: "Start From Rp 1,6 Juta",
    desc: "Paket desain dan furnitur custom untuk ruang kerja di rumah yang fungsional dan estetis.",
    thumb: "https://images.unsplash.com/photo-1613413561312-e329d024ed65?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
}) {
  return (
    <section className="relative min-h-[70vh] pt-28 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: copy */}
          <div className="order-2 md:order-1">
            <h1 className="font-display leading-[0.95] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light md:font-normal text-gray-900">
              {titleLines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 font-sans leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              <Link
                to={ctaPrimary.to}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-medium bg-gray-900 text-white hover:translate-y-[-1px] hover:shadow transition-all"
              >
                {ctaPrimary.label}
              </Link>
              <Link
                to={ctaSecondary.to}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-medium border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {ctaSecondary.label}
              </Link>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">🏗️</span>
                <span>20+ Proyek Selesai</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">💰</span>
                <span>Harga Transparan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">💬</span>
                <span>Konsultasi Gratis</span>
              </div>
            </div>
          </div>

          {/* RIGHT: visual */}
          <div className="relative order-1 md:order-2 overflow-visible">
            {/* gambar dibungkus yang dipotong */}
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(2,6,23,0.25)] ring-1 ring-black/5">
              <img
                src={image}
                alt="Interior showcase"
                className="w-full h-[320px] sm:h-[420px] md:h-[560px] lg:h-[720px] object-cover"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* floating card diposisikan DI LUAR wrapper overflow */}
            <div className="absolute left-3 sm:left-6 -bottom-10 sm:-bottom-12 pointer-events-auto w-[calc(100%-24px)] sm:w-auto">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-2xl bg-white/95 backdrop-blur shadow-xl ring-1 ring-black/5 p-3 sm:p-6">
                <div className="hidden sm:block h-[76px] w-[100px] rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={highlight.thumb}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-1">
                      {highlight.title}
                    </p>
                    <span className="shrink-0 rounded-full bg-gray-900 text-white text-xs px-2.5 py-1 w-fit">
                      {highlight.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                    {highlight.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* spacer agar konten bawah tidak ketimpa card */}
            <div className="h-10 sm:h-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
