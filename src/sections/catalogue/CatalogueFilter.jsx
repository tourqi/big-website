// src/sections/catalogue/CatalogueFilter.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Filter, Search, X, Zap, TrendingUp, DollarSign, ChevronDown, SlidersHorizontal } from "lucide-react";
import { ALL, toIDR, toSelectValue, fromSelectValue } from "@/lib/format";
import { LAYOUT_OPTIONS, STYLE_OPTIONS, FINISH_OPTIONS, TOP_OPTIONS } from "@/data/kitchenCatalogue";

const SORT_OPTIONS = [
  "Disarankan",
  "Terbaru",
  "Harga Rendah→Tinggi",
  "Harga Tinggi→Rendah",
  "Lead time tercepat",
  "A–Z",
];

// Quick filter presets
const QUICK_FILTERS = [
  { id: "budget", label: "Under 50jt", icon: DollarSign, value: { max: 50000000 } },
  { id: "premium", label: "Premium", icon: Zap, value: { min: 50000000 } },
  { id: "trending", label: "Trending", icon: TrendingUp, value: { trending: true } },
];

// ─── FilterBar ───────────────────────────────────────────────────────────────
export function CatalogueFilter({
  filters,
  setFilters,
  sort,
  setSort,
  priceRange = [2500000, 7000000],
  setPriceRange,
  resultCount,
  query,
  setQuery,
  onReset,
  activeRoom = "all",
}) {
  const [expanded, setExpanded] = useState(false);

  // Get room-specific filter config
  const roomConfig = ROOM_FILTERS_CONFIG[activeRoom] || ROOM_FILTERS_CONFIG.kitchen;
  const safeRange = Array.isArray(priceRange) ? priceRange : [2500000, 7000000];
  const min = Number.isFinite(safeRange[0]) ? safeRange[0] : 2500000;
  const max = Number.isFinite(safeRange[1]) ? safeRange[1] : 7000000;

  // Count active filters for badge
  const activeFilterCount = [
    filters.layout, filters.style, filters.finish, filters.top,
  ].filter(Boolean).length;

  return (
    <Card className="rounded-3xl shadow-sm">
      <CardContent className="p-4 md:p-5">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <h3 className="font-medium">Filter Katalog</h3>
              {activeFilterCount > 0 && (
                <Badge className="rounded-full bg-brand text-white h-5 w-5 p-0 flex items-center justify-center text-[10px]">
                  {activeFilterCount}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{resultCount} hasil</span>
              <Button size="sm" variant="ghost" className="rounded-2xl" onClick={onReset}>
                <X className="mr-1 h-4 w-4" /> Reset
              </Button>
            </div>
          </div>

          {/* Always visible: Search + Quick Filters */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari nama / gaya…"
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {QUICK_FILTERS.map((qf) => (
                <Button
                  key={qf.id}
                  variant="outline"
                  size="sm"
                  className="rounded-full flex items-center gap-1.5"
                  onClick={() => {
                    if (qf.value.max) {
                      setPriceRange([2500000, qf.value.max]);
                    } else if (qf.value.min) {
                      setPriceRange([qf.value.min, 7000000]);
                    }
                  }}
                >
                  {qf.icon && <qf.icon className="h-3.5 w-3.5" />}
                  {qf.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile: Toggle button for advanced filters */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-brand py-2 border rounded-2xl transition-colors md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {expanded ? "Sembunyikan Filter" : "Filter Lanjutan"}
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="rounded-full text-[10px] h-5 px-1.5">
                {activeFilterCount} aktif
              </Badge>
            )}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
          </button>

          {/* Advanced filters — always visible on desktop, collapsible on mobile */}
          <div className={`flex flex-col gap-4 ${expanded ? "block" : "hidden md:flex"}`}>
            {/* Dropdown filters - Dynamic per Room */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {/* Layout Filter - Dynamic */}
              <Select
                value={toSelectValue(filters?.layout)}
                onValueChange={(v) => setFilters((f) => ({ ...f, layout: fromSelectValue(v) }))}
              >
                <SelectTrigger className="rounded-2xl">
                  <SelectValue placeholder={roomConfig.layout?.label || "Layout"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Semua {roomConfig.layout?.label || "layout"}</SelectItem>
                  {(roomConfig.layout?.options || LAYOUT_OPTIONS).map((l) => (
                    <SelectItem key={l} value={l}>{l}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Style Filter - Dynamic */}
              <Select
                value={toSelectValue(filters?.style)}
                onValueChange={(v) => setFilters((f) => ({ ...f, style: fromSelectValue(v) }))}
              >
                <SelectTrigger className="rounded-2xl">
                  <SelectValue placeholder={roomConfig.style?.label || "Gaya"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Semua {roomConfig.style?.label || "gaya"}</SelectItem>
                  {(roomConfig.style?.options || STYLE_OPTIONS).map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Finish Filter - Dynamic */}
              <Select
                value={toSelectValue(filters?.finish)}
                onValueChange={(v) => setFilters((f) => ({ ...f, finish: fromSelectValue(v) }))}
              >
                <SelectTrigger className="rounded-2xl">
                  <SelectValue placeholder={roomConfig.finish?.label || "Finishing"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Semua {roomConfig.finish?.label || "finishing"}</SelectItem>
                  {(roomConfig.finish?.options || FINISH_OPTIONS).map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Top Filter - Dynamic */}
              <Select
                value={toSelectValue(filters?.top)}
                onValueChange={(v) => setFilters((f) => ({ ...f, top: fromSelectValue(v) }))}
              >
                <SelectTrigger className="rounded-2xl">
                  <SelectValue placeholder={roomConfig.top?.label || "Top"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Semua {roomConfig.top?.label || "top"}</SelectItem>
                  {(roomConfig.top?.options || TOP_OPTIONS).map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="rounded-2xl"><SelectValue placeholder="Urutkan" /></SelectTrigger>
                <SelectContent>
                  {SORT_OPTIONS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            {/* Price range */}
            <div className="grid grid-cols-10 items-center gap-3">
              <label className="col-span-10 text-sm text-gray-700 md:col-span-10">
                Range harga (Rp/m')
              </label>
              <div className="col-span-8">
                <Slider
                  value={[min, max]}
                  onValueChange={(val) =>
                    Array.isArray(val) && val.length === 2 && setPriceRange(val)
                  }
                  min={2500000}
                  max={7000000}
                  step={50000}
                  className="w-full"
                />
              </div>
              <div className="col-span-2 text-right text-sm tabular-nums text-muted-foreground">
                {toIDR(min)} – {toIDR(max)}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── AppliedChips ─────────────────────────────────────────────────────────────
export function AppliedChips({ filters = {}, priceRange, onClearAll }) {
  const localRange = Array.isArray(priceRange) ? priceRange : null;
  const chips = [];

  if (filters.layout) chips.push(`Layout: ${filters.layout}`);
  if (filters.style)  chips.push(`Gaya: ${filters.style}`);
  if (filters.finish) chips.push(`Finishing: ${filters.finish}`);
  if (filters.top)    chips.push(`Top: ${filters.top}`);
  if (localRange)     chips.push(`Harga: ${toIDR(localRange[0])}–${toIDR(localRange[1])}/m'`);

  if (!chips.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((label, i) => (
        <Badge key={i} variant="secondary" className="rounded-xl">
          {label}
        </Badge>
      ))}
      {onClearAll && (
        <Button size="sm" variant="ghost" className="rounded-2xl" onClick={onClearAll}>
          <X className="mr-1 h-4 w-4" /> Reset semua
        </Button>
      )}
    </div>
  );
}

// ─── ROOM-SPECIFIC FILTERS CONFIG ────────────────────────────────────────────
// Filter options yang berbeda untuk setiap ruangan
export const ROOM_FILTERS_CONFIG = {
  "kitchen": {
    layout: {
      label: "Layout Dapur",
      options: ["Single", "L", "U", "Island", "Galley"],
    },
    style: {
      label: "Gaya Desain",
      options: ["Modern", "Minimal", "Japandi", "Klasik", "Premium", "Industrial", "Handleless", "Shaker", "Natural"],
    },
    finish: {
      label: "Finishing Pintu",
      options: ["HPL", "Duco Matte", "Duco Satin", "Duco Gloss", "Veneer Oak + Clear Coat", "HPL Matte", "HPL Textured"],
    },
    top: {
      label: "Top Table",
      options: ["Granite", "Quartz", "Solid Surface", "Stainless", "HPL"],
    },
  },
  "living-room": {
    layout: {
      label: "Tipe Ruangan",
      options: ["Small", "Medium", "Large", "Open Plan"],
    },
    style: {
      label: "Gaya Desain",
      options: ["Modern", "Klasik", "Industrial", "Scandinavian", "Cozy", "Minimalist", "Luxury"],
    },
    finish: {
      label: "Material Utama",
      options: ["Fabric", "Leather", "Wood", "Metal", "Glass", "Velvet"],
    },
    top: {
      label: "Pencahayaan",
      options: ["LED", "Pendant", "Track Light", "Floor Lamp", "Chandelier", "Natural Light"],
    },
  },
  "bedroom": {
    layout: {
      label: "Tipe Kamar",
      options: ["Small", "Medium", "Large", "Master Bedroom", "Kids Room", "Guest Room"],
    },
    style: {
      label: "Gaya Desain",
      options: ["Modern", "Klasik", "Scandinavian", "Cozy", "Minimalist", "Luxury", "Romantic"],
    },
    finish: {
      label: "Material Headboard",
      options: ["Fabric", "Leather", "Wood", "Velvet", "Linen", "Suede"],
    },
    top: {
      label: "Tipe Ranjang",
      options: ["Sistem", "Rod", "Platform", "Storage Bed", "Canopy", "Bunk Bed"],
    },
  },
  "bathroom": {
    layout: {
      label: "Tipe Bathroom",
      options: ["Small", "Medium", "Large", "Master Bath", "Powder Room", "Walk-in Shower"],
    },
    style: {
      label: "Gaya Desain",
      options: ["Modern", "Spa", "Minimalist", "Luxury", "Classic", "Industrial"],
    },
    finish: {
      label: "Material Dinding",
      options: ["Ceramic", "Porcelain", "Marble", "Granite", "Mosaic", "Subway Tile"],
    },
    top: {
      label: "Countertop",
      options: ["Granite", "Quartz", "Marble", "Solid Surface", "Ceramic", "Glass"],
    },
  },
};