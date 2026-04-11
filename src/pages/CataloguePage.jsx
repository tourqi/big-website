// src/pages/CataloguePage.jsx
// Halaman Katalog — entry point untuk route /catalogue
import React, { useMemo, useState } from "react";

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

import { CATALOGUE_ITEMS } from "@/data/kitchenCatalogue";

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

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 space-y-6">
      {/* Hero */}
      <CatalogueHero />

      {/* Room Tabs Navigation - Sticky */}
      <RoomTabs activeRoom={activeRoom} onChangeRoom={setRoom} />

      {/* Kategori Katalog */}
      <CatalogueCategories />

      {/* Kalkulator estimasi */}
      <PriceEstimator />

      {/* Filter */}
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

      {/* Callout panduan */}
      <GuideCallout />

      {/* Grid produk */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))}
        {visibleItems.length === 0 && (
          <div className="col-span-full rounded-3xl border p-8 text-center text-muted-foreground shadow-sm">
            Tidak ada item sesuai filter. Coba longgarkan filter harga atau ganti pilihan.
          </div>
        )}
      </div>

      {/* Seksi bawah */}
      <PackageCompare />
      <MicroEdu />
      <WhyUs />
      <SeoLinkHub />
    </div>
  );
}