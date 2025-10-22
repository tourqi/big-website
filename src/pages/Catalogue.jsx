// src/pages/Catalogue.jsx
import React, { useMemo, useState } from "react";

import DevTests from "@/sections/kitchen/DevTests";
import Hero from "@/sections/kitchen/Hero";
import InspirationCarousel from "@/sections/kitchen/InspirationCarousel";
import Estimator from "@/sections/kitchen/Estimator";
import { FilterBar, AppliedChips } from "@/sections/kitchen/FilterBar";
import ProductCard from "@/sections/kitchen/ProductCard";
import PackageCompare from "@/sections/kitchen/PackageCompare";
import MicroEdu from "@/sections/kitchen/MicroEdu";
import WhyBIG from "@/sections/kitchen/WhyBIG";
// import Downloads from "@/sections/kitchen/Downloads"; // ❌ dihapus sesuai arahan
import SeoLinkHub from "@/sections/kitchen/SeoLinkHub";
import { RANGES } from "@/data/kitchenCatalogue";
import Navbar from "@/components/Navbar";
import GuideCallout from "@/sections/kitchen/GuideCallout";

export default function CataloguePage() {
  const [filters, setFilters] = useState({ layout: "", style: "", finish: "", top: "" });
  const [sort, setSort] = useState("Disarankan");
  const [priceRange, setPriceRange] = useState([2500000, 7000000]);
  const [query, setQuery] = useState("");
  const [openGuide, setOpenGuide] = useState(false); // toggle panduan (tersedia bila diperlukan)

  const items = useMemo(() => {
    let data = RANGES.filter((r) => {
      const inQuery = query
        ? (
            r.name.toLowerCase().includes(query.toLowerCase()) ||
            r.style.join(" ").toLowerCase().includes(query.toLowerCase()) ||
            r.door_finish.type.toLowerCase().includes(query.toLowerCase()) ||
            r.worktop.material.toLowerCase().includes(query.toLowerCase())
          )
        : true;

      const inLayout = filters.layout ? r.layout === filters.layout : true;
      const inStyle  = filters.style ? r.style.includes(filters.style) : true;
      const inFinish = filters.finish ? r.door_finish.type.includes(filters.finish) : true;
      const inTop    = filters.top ? r.worktop.material === filters.top : true;

      // overlap price range
      const [min, max] = priceRange;
      const [lo, hi]   = r.price_per_m;
      const inPrice    = lo <= max && hi >= min;

      return inQuery && inLayout && inStyle && inFinish && inTop && inPrice;
    }).slice();

    if (sort === "Terbaru") data.sort((a,b)=> new Date(b.updated_at) - new Date(a.updated_at));
    else if (sort === "Harga Rendah→Tinggi") data.sort((a,b)=> a.price_per_m[0] - b.price_per_m[0]);
    else if (sort === "Harga Tinggi→Rendah") data.sort((a,b)=> b.price_per_m[0] - a.price_per_m[0]);
    else if (sort === "Lead time tercepat") data.sort((a,b)=> a.lead_time_weeks - b.lead_time_weeks);
    else if (sort === "A–Z") data.sort((a,b)=> a.name.localeCompare(b.name));

    return data;
  }, [filters, sort, priceRange, query]);

  const clearAll = () => {
    setFilters({ layout: "", style: "", finish: "", top: "" });
    setSort("Disarankan");
    setQuery("");
    setPriceRange([2500000, 7000000]);
  };

  const onPickStyle = (s) => setFilters((f)=>({ ...f, style: s }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      <DevTests />
      <Hero />
      <Navbar />

      <div className="mt-8">
        <InspirationCarousel onPickStyle={onPickStyle} />
      </div>

      <div className="mt-6">
        <Estimator />
      </div>

      <div className="mt-6">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          sort={sort}
          setSort={setSort}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          resultCount={items.length}
          onReset={clearAll}
          query={query}
          setQuery={setQuery}
        />
      </div>

      <div className="mt-3">
        <AppliedChips filters={filters} priceRange={priceRange} onClearAll={clearAll} />
      </div>

      <div className="mt-3">
        {/* Kalau mau buka via state: <GuideCallout open={openGuide} onOpenChange={setOpenGuide} /> */}
        <GuideCallout />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it)=> (<ProductCard key={it.slug} data={it} />))} {/* ✅ pakai prop 'data' */}
        {items.length === 0 && (
          <div className="col-span-full rounded-3xl border p-8 text-center text-muted-foreground shadow-sm">
            Tidak ada item sesuai filter. Coba longgarkan filter harga atau ganti finishing/top.
          </div>
        )}
      </div>

      <div className="mt-8 space-y-6">
        <PackageCompare />
        <MicroEdu />
        <WhyBIG />
        {/* <Downloads />  // ❌ dihapus */}
        <SeoLinkHub />
      </div>
    </div>
  );
}
