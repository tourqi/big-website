// src/pages/CataloguePage.jsx
// Halaman Katalog — entry point untuk route /catalogue
import React, { useMemo, useState, useEffect } from "react";
import { ArrowUp, SearchX, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import PageMeta from "@/lib/PageMeta.jsx";

import CatalogueHero       from "@/sections/catalogue/CatalogueHero";
import CatalogueCategories from "@/sections/catalogue/CatalogueCategories";
import PriceEstimator      from "@/sections/catalogue/PriceEstimator";
import { CatalogueFilter, AppliedChips } from "@/sections/catalogue/CatalogueFilter";
import ProductCard         from "@/sections/catalogue/ProductCard";
import PackageCompare      from "@/sections/catalogue/PackageCompare";
import MicroEdu            from "@/sections/catalogue/MicroEdu";
import WhyUs               from "@/sections/catalogue/WhyUs";
import SeoLinkHub          from "@/sections/catalogue/SeoLinkHub";
import GuideCallout        from "@/sections/catalogue/GuideCallout";
import RoomTabs            from "@/sections/catalogue/RoomTabs";

import { CATALOGUE_ITEMS } from "@/data/roomCatalogue";

const DEFAULT_FILTERS    = { layout: "", style: "", finish: "", top: "" };
const DEFAULT_PRICE      = [2500000, 7000000];
const DEFAULT_SORT       = "Disarankan";

function applyFilters(items, filters, priceRange, query) {
  const q = query.toLowerCase();
  return items.filter((r) => {
    if (q) {
      const haystack = [
        r.name,
        ...(r.style ?? []),
        r.door_finish?.type ?? "",
        r.worktop?.material ?? "",
      ].join(" ").toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (filters.layout && r.layout !== filters.layout) return false;
    if (filters.style  && !r.style?.includes(filters.style)) return false;
    if (filters.finish && !r.door_finish?.type?.includes(filters.finish)) return false;
    if (filters.top    && r.worktop?.material !== filters.top) return false;

    const [min, max] = priceRange;
    const [lo, hi]   = r.price_per_m ?? [0, 0];
    if (lo > max || hi < min) return false;

    return true;
  });
}

function applySorting(items, sort) {
  const sorted = [...items];
  switch (sort) {
    case "Terbaru":               sorted.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); break;
    case "Harga Rendah→Tinggi":   sorted.sort((a, b) => a.price_per_m[0] - b.price_per_m[0]); break;
    case "Harga Tinggi→Rendah":   sorted.sort((a, b) => b.price_per_m[0] - a.price_per_m[0]); break;
    case "Lead time tercepat":    sorted.sort((a, b) => a.lead_time_weeks - b.lead_time_weeks); break;
    case "A–Z":                   sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: break;
  }
  return sorted;
}

export default function CataloguePage() {
  const [activeRoom, setRoom]     = useState("all");
  const [filters,    setFilters]  = useState(DEFAULT_FILTERS);
  const [sort,       setSort]     = useState(DEFAULT_SORT);
  const [priceRange, setPriceRange] = useState(DEFAULT_PRICE);
  const [query,      setQuery]    = useState("");

  // Filter items by room type first
  const roomFilteredItems = useMemo(() => {
    if (activeRoom === "all") return CATALOGUE_ITEMS;
    return CATALOGUE_ITEMS.filter((item) => {
      // Match room type from item's room property or category
      const itemRoom = item.room || item.category || "";
      return itemRoom.toLowerCase().includes(activeRoom.toLowerCase());
    });
  }, [activeRoom]);

  const visibleItems = useMemo(() => {
    const filtered = applyFilters(roomFilteredItems, filters, priceRange, query);
    return applySorting(filtered, sort);
  }, [roomFilteredItems, filters, sort, priceRange, query]);

  const handleReset = () => {
    setFilters(DEFAULT_FILTERS);
    setSort(DEFAULT_SORT);
    setQuery("");
    setPriceRange(DEFAULT_PRICE);
  };

  const handlePickStyle = (style) => setFilters((f) => ({ ...f, style }));

  // Back to Top visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 space-y-6">
      <PageMeta
        title="Katalog Kitchen Set & Furnitur"
        description="Katalog kitchen set, wardrobe, dan furnitur custom di Bogor & Jakarta. Filter by gaya, material, dan harga. Estimasi harga instan."
      />

      {/* ─── ZONA 1: HERO & NAVIGASI ──────────────────────── */}
      <CatalogueHero />

      {/* Kategori 4 Ruangan — navigasi visual ke sub-halaman */}
      <CatalogueCategories />

      {/* Room Tabs Navigation - Sticky (offset for fixed navbar) */}
      <RoomTabs activeRoom={activeRoom} onChangeRoom={setRoom} />

      {/* ─── ZONA 2: BROWSING (Filter → Produk) ──────────── */}
      <CatalogueFilter
        filters={filters}
        setFilters={setFilters}
        sort={sort}
        setSort={setSort}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        resultCount={visibleItems.length}
        query={query}
        activeRoom={activeRoom}
        setQuery={setQuery}
        onReset={handleReset}
      />

      {/* Applied chips */}
      <AppliedChips
        filters={filters}
        priceRange={priceRange}
        onClearAll={handleReset}
      />

      {/* Grid produk */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))}
        {visibleItems.length === 0 && (
          <div className="col-span-full rounded-3xl border p-10 text-center shadow-sm space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <SearchX className="h-8 w-8 text-gray-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Tidak ada item ditemukan</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Coba longgarkan filter harga atau ganti pilihan untuk melihat lebih banyak produk.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" className="rounded-xl" onClick={handleReset}>
                <RotateCcw className="mr-2 h-4 w-4" /> Reset Semua Filter
              </Button>
              <Button className="rounded-xl" asChild>
                <a href="/#contact">
                  <Sparkles className="mr-2 h-4 w-4" /> Konsultasi Custom
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* ─── ZONA 3: PERTIMBANGAN & EDUKASI ───────────────── */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* Callout panduan — setelah browse, sebelum decision */}
      <GuideCallout />

      {/* Kalkulator estimasi — tool untuk decision */}
      <PriceEstimator />

      {/* Perbandingan paket */}
      <PackageCompare />

      {/* ─── ZONA 4: TRUST & SEO ──────────────────────────── */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      <MicroEdu />
      <WhyUs />
      <SeoLinkHub />

      {/* ─── FLOATING: Back to Top ────────────────────────── */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand text-white shadow-lg hover:bg-brand/90 transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}