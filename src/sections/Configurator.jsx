// src/sections/Configurator.jsx
// Update: show visible "jenis HPL" (swatch label) so users know exactly which type is selected.

import React, { useMemo, useState } from "react";
import { KITCHEN_OPTIONS } from "@/data/configuratorData.js";
import { ChevronLeft, ChevronRight, ZoomIn, Tag } from "lucide-react";
import Modal from "@/components/Modal.jsx"; // kita pakai modal kamu untuk zoom

function BlurImg({ src, alt, className = "" }) {
  const [ok, setOk] = useState(false);
  return (
    <div className={"relative overflow-hidden " + className}>
      <img
        src={src}
        alt={alt}
        className={
          "h-full w-full object-cover transition duration-500 " +
          (ok ? "blur-0" : "blur-xl scale-[1.02]")
        }
        onLoad={() => setOk(true)}
        onError={() => setOk(true)}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />
      {!ok && <div className="absolute inset-0 bg-black/5" />}
    </div>
  );
}

export default function Configurator() {
  // pilih produk pertama default
  const [activeId, setActiveId] = useState(KITCHEN_OPTIONS[0]?.id);
  const product = useMemo(
    () => KITCHEN_OPTIONS.find((x) => x.id === activeId),
    [activeId]
  );

  // warna/varian aktif
  const [colorKey, setColorKey] = useState(
    KITCHEN_OPTIONS[0]?.swatches?.[0]?.key || null
  );

  // cari object swatch aktif (supaya dapat label jenis HPL)
  const activeSwatch = useMemo(() => {
    if (!product || !colorKey) return null;
    return (product.swatches || []).find((s) => s.key === colorKey) || null;
  }, [product, colorKey]);

  // angle gambar aktif
  const images = useMemo(() => {
    if (!product) return [];
    if (colorKey && product.variants?.[colorKey]?.length)
      return product.variants[colorKey];
    return product.angles || [];
  }, [product, colorKey]);

  const [idx, setIdx] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  if (!product) return null;

  return (
    <section className="py-16 bg-white" id="catalogue-configurator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Catalogue</h2>
            <p className="text-gray-600">
              Pilih model pintu, finish, dan warna. Klik swatch untuk preview.
            </p>
          </div>

          {/* Picker antar product */}
          <div className="flex flex-wrap gap-2">
            {KITCHEN_OPTIONS.map((opt) => {
              const active = opt.id === activeId;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setActiveId(opt.id);
                    setColorKey(opt.swatches?.[0]?.key || null);
                    setIdx(0);
                  }}
                  className={
                    "px-3 py-1.5 rounded-full text-sm border transition-colors " +
                    (active
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400")
                  }
                >
                  {opt.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid: preview + controls */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* PREVIEW */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <BlurImg
              src={images[idx]}
              alt={`${product.name} — ${activeSwatch?.label || colorKey || product.finish}`}
              className="aspect-[16/10] md:aspect-[16/9]"
            />

            {/* zoom button */}
            <button
              onClick={() => setZoomOpen(true)}
              className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-2 text-sm shadow hover:bg-white"
            >
              <ZoomIn className="h-4 w-4" /> Perbesar
            </button>

            {/* angle controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur p-2 shadow hover:bg-white"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur p-2 shadow hover:bg-white"
                  aria-label="Berikutnya"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Badge jenis HPL aktif (selalu tampil di pojok kiri atas) */}
            {activeSwatch?.label && (
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium shadow ring-1 ring-black/5">
                  <Tag className="h-3.5 w-3.5" /> Jenis: {activeSwatch.label}
                </span>
              </div>
            )}
          </div>

          {/* CONTROLS */}
          <div>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <div className="mt-1 text-sm text-gray-600">
              Door: <b>{product.door}</b> • Finish: <b>{product.finish}</b>
            </div>

            {/* Tambahan: tampilkan jenis (label swatch) di area info juga */}
            {activeSwatch?.label && (
              <div className="mt-2 text-sm text-gray-900">
                Jenis HPL dipilih: <b>{activeSwatch.label}</b>
              </div>
            )}

            <div className="mt-2 text-gray-900 font-medium">
              Mulai <span className="text-brandAccent">Rp {product.basePrice.toLocaleString("id-ID")}</span> / m²
            </div>

            {/* Swatches */}
            <div className="mt-6">
              <div className="text-sm font-semibold mb-2">Warna / Material</div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {(product.swatches || []).map((s) => {
                  const active = s.key === colorKey;
                  return (
                    <div key={s.key} className="flex flex-col items-center gap-2">
                      <button
                        onClick={() => {
                          setColorKey(s.key);
                          setIdx(0);
                        }}
                        className={
                          "relative h-12 w-12 rounded-xl overflow-hidden ring-2 transition " +
                          (active ? "ring-black" : "ring-transparent hover:ring-gray-300")
                        }
                        title={s.label}
                        aria-pressed={active}
                      >
                        <img
                          src={s.img}
                          alt={s.label}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                      {/* Caption label terlihat */}
                      <span className={
                        "text-[11px] leading-tight text-center " +
                        (active ? "font-semibold text-gray-900" : "text-gray-600")
                      }>
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Angles thumbnails */}
            {images.length > 1 && (
              <div className="mt-6">
                <div className="text-sm font-semibold mb-2">Sudut / Angle</div>
                <div className="flex flex-wrap gap-3">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={
                        "h-16 w-24 rounded-xl overflow-hidden ring-2 transition " +
                        (i === idx ? "ring-black" : "ring-transparent hover:ring-gray-300")
                      }
                    >
                      <img src={src} alt={`Angle ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Note / CTA */}
            <div className="mt-8 rounded-2xl border border-gray-200 p-4 text-sm text-gray-600">
              *Warna pada layar dapat sedikit berbeda dari hasil akhir. Untuk akurasi, kami sediakan sample fisik saat konsultasi.
            </div>
          </div>
        </div>
      </div>

      {/* ZOOM MODAL */}
      <Modal open={zoomOpen} onClose={() => setZoomOpen(false)}>
        <div className="p-0">
          <img src={images[idx]} alt="Zoom" className="w-full h-auto rounded-2xl" />
        </div>
      </Modal>
    </section>
  );
}
