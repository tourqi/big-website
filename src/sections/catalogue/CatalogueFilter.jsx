// src/sections/catalogue/CatalogueFilter.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Filter, Search, X } from "lucide-react";
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
}) {
  const safeRange = Array.isArray(priceRange) ? priceRange : [2500000, 7000000];
  const min = Number.isFinite(safeRange[0]) ? safeRange[0] : 2500000;
  const max = Number.isFinite(safeRange[1]) ? safeRange[1] : 7000000;

  return (
    <Card className="rounded-3xl shadow-sm">
      <CardContent className="p-4 md:p-5">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <h3 className="font-medium">Filter Katalog</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{resultCount} hasil</span>
              <Button size="sm" variant="ghost" className="rounded-2xl" onClick={onReset}>
                <X className="mr-1 h-4 w-4" /> Reset
              </Button>
            </div>
          </div>

          {/* Dropdown + Search */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            <Select
              value={toSelectValue(filters?.layout)}
              onValueChange={(v) => setFilters((f) => ({ ...f, layout: fromSelectValue(v) }))}
            >
              <SelectTrigger className="rounded-2xl"><SelectValue placeholder="Layout" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>Semua layout</SelectItem>
                {LAYOUT_OPTIONS.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
              </SelectContent>
            </Select>

            <Select
              value={toSelectValue(filters?.style)}
              onValueChange={(v) => setFilters((f) => ({ ...f, style: fromSelectValue(v) }))}
            >
              <SelectTrigger className="rounded-2xl"><SelectValue placeholder="Gaya" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>Semua gaya</SelectItem>
                {STYLE_OPTIONS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>

            <Select
              value={toSelectValue(filters?.finish)}
              onValueChange={(v) => setFilters((f) => ({ ...f, finish: fromSelectValue(v) }))}
            >
              <SelectTrigger className="rounded-2xl"><SelectValue placeholder="Finishing" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>Semua finishing</SelectItem>
                {FINISH_OPTIONS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>

            <Select
              value={toSelectValue(filters?.top)}
              onValueChange={(v) => setFilters((f) => ({ ...f, top: fromSelectValue(v) }))}
            >
              <SelectTrigger className="rounded-2xl"><SelectValue placeholder="Top table" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>Semua top</SelectItem>
                {TOP_OPTIONS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="rounded-2xl"><SelectValue placeholder="Urutkan" /></SelectTrigger>
              <SelectContent>
                {SORT_OPTIONS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 shrink-0" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari nama / gaya…"
                className="rounded-2xl"
              />
            </div>
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