// src/sections/Portfolio.jsx
import React, { useMemo, useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card.jsx";
import { ChevronRight } from "lucide-react";
import { PROJECTS } from "@/data/projects.js"; // ← sumber data tunggal

function Tile({ item, className = "", delay = 0 }) {
  // Normalisasi sumber & label
  const src = item.img ?? item.cover;           // gunakan cover kalau img tidak ada
  const label = item.tag ?? item.category;      // fallback ke category
  const [loaded, setLoaded] = useState(false);

  // Preload gambar lalu set loaded = true
  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.decode?.().then(() => setLoaded(true)).catch(() => setLoaded(true));
    // fallback kalau decode tidak tersedia
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true);
  }, [src]);

  return (
    <Link
      to={`/portfolio/${item.id}`}
      className={`group relative block rounded-3xl overflow-hidden ${className} transition-all`}
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={`Lihat detail proyek ${item.title}`}
    >
      {/* Background image supaya tahan blokir & tetap cover */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: src ? `url('${src}')` : "none" }}
      />
      {/* Placeholder jika src null atau gagal load */}
      {!src && <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden />}

      {/* Overlay */}
      <div
        className={
          "absolute inset-0 z-[1] transition-all " +
          (item.dark
            ? "bg-black/50 group-hover:bg-black/60"
            : "bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:from-black/60")
        }
      />

      {/* Teks */}
      <div className="absolute left-4 right-4 bottom-4 text-white z-[2]">
        {label && (
          <span
            className={
              "inline-block text-[11px] uppercase tracking-wider px-2 py-1 rounded " +
              (item.dark ? "bg-white/15" : "bg-black/30")
            }
          >
            {label}
          </span>
        )}
        <h3 className="mt-2 text-lg md:text-xl font-semibold leading-tight">{item.title}</h3>
        <div className="mt-1 inline-flex items-center text-sm opacity-90">
          Lihat detail <ChevronRight className="ml-1 h-4 w-4" />
        </div>
      </div>

      {/* Ring accent */}
      <div className="absolute inset-0 z-[2] ring-0 ring-brandAccent/40 group-hover:ring-4 transition-all rounded-3xl" />
    </Link>
  );
}


export default function Portfolio() {
  // Kategori unik + chip "Semua"
  const categories = useMemo(() => {
    const unique = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ["Semua", ...unique];
  }, []);

  const [active, setActive] = useState("Semua");
  const [isFading, setIsFading] = useState(false);

  // Data terfilter
  const filtered = useMemo(() => {
    if (active === "Semua") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  // Featured untuk mosaic (fallback kalau tidak ada)
  const featuredItem = useMemo(() => {
    return filtered.find((p) => p.featured) || filtered[0];
  }, [filtered]);

  const rest = useMemo(
    () => filtered.filter((p) => p && p !== featuredItem),
    [filtered, featuredItem]
  );

  // Animasi: fade-out → ganti data → fade-in
  const onChangeFilter = (cat) => {
    if (cat === active) return;
    setIsFading(true);
    setTimeout(() => {
      setActive(cat);
      requestAnimationFrame(() => setIsFading(false));
    }, 150);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Filter */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-bold">Portofolio</h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const activeChip = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onChangeFilter(cat)}
                  className={
                    "px-3 py-1.5 rounded-full text-sm border transition-colors " +
                    (activeChip
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400")
                  }
                  aria-pressed={activeChip}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mosaic responsif + animasi fade */}
        <div
          className={
            "grid gap-6 transition-opacity duration-300 " +
            (isFading ? "opacity-0" : "opacity-100")
          }
        >
          <div className="grid md:grid-cols-2 gap-6 auto-rows-[200px] sm:auto-rows-[260px] md:auto-rows-[320px] lg:auto-rows-[380px]">
            {/* Kiri: Featured (span 2 baris) */}
            {featuredItem && (
              <Card className="p-0 rounded-3xl border-0 shadow-lg md:row-span-2">
                <div className="aspect-[4/3] md:h-full md:aspect-auto">
                  <Tile item={featuredItem} className="h-full w-full" />
                </div>
              </Card>
            )}

            {/* Kanan atas: wide */}
            {rest[0] && (
              <Card className="p-0 rounded-3xl border-0 shadow-lg">
                <div className="aspect-[4/3] md:h-full md:aspect-auto">
                  <Tile item={rest[0]} className="h-full w-full" />
                </div>
              </Card>
            )}

            {/* Kanan bawah: dua kecil */}
            {rest.slice(1, 3).map((it) => (
              <Card key={it.id} className="p-0 rounded-3xl border-0 shadow-lg">
                <div className="aspect-[4/3] md:h-full md:aspect-auto">
                  <Tile item={it} className="h-full w-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
