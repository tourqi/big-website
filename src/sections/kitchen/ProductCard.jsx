// src/sections/kitchen/ProductCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { toIDR } from "@/lib/format";

// Placeholder netral kalau tidak ada gambar sama sekali
const FALLBACK_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
      <rect width='100%' height='100%' fill='#f3f4f6'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
            font-family='sans-serif' font-size='16' fill='#6b7280'>
        Preview tidak tersedia
      </text>
    </svg>`
  );

// Util: ambil string URL valid dari berbagai bentuk field
function pickUrl(v) {
  if (!v) return null;
  if (typeof v === "string") return v;                // "https://..."
  if (typeof v === "object") return v.src || v.url || null; // {src}|{url}
  return null;
}

function firstImage(data) {
  // 1) common fields sebagai object/string
  const order = [
    data?.image,
    data?.thumbnail,
    data?.hero,
    data?.cover,
    data?.preview,
    data?.image_url,
    data?.img,
    data?.photo,
  ];

  for (const cand of order) {
    const u = pickUrl(cand);
    if (u) return u;
  }

  // 2) arrays: images[], photos[]
  const arrays = [data?.images, data?.photos];
  for (const arr of arrays) {
    if (Array.isArray(arr) && arr.length) {
      // dukung bentuk object {src|url} atau string langsung
      const first = arr[0];
      const u = pickUrl(first);
      if (u) return u;
    }
  }

  // 3) fallback Unsplash (agar tetap ada visual yang relevan)
  const qParts = [
    data?.name,
    ...(Array.isArray(data?.style) ? data.style : []),
    data?.layout,
    data?.worktop?.material,
    "kitchen", "interior",
  ].filter(Boolean);
  const uQuery = encodeURIComponent(qParts.join(","));
  const UNSPLASH = `https://source.unsplash.com/featured/800x600?${uQuery}`;

  return UNSPLASH || FALLBACK_SVG;
}

export default function ProductCard({ data }) {
  // Guard data kosong
  if (!data || typeof data !== "object") {
    return (
      <Card className="overflow-hidden rounded-2xl border border-gray-100">
        <div className="aspect-[4/3] bg-gray-100" />
        <CardContent className="p-4">
          <div className="text-sm text-gray-500">Data produk tidak tersedia.</div>
        </CardContent>
      </Card>
    );
  }

  const imgSrc = firstImage(data);

  // Field lain (semua dengan default supaya aman)
  const name = data?.name || "Tanpa Nama";
  const slug = data?.slug || "";
  const styles = Array.isArray(data?.style) ? data.style : [];
  const layout = data?.layout || "";
  const finish = data?.door_finish?.type || data?.finish || "";
  const top = data?.worktop?.material || data?.top || "";
  const leadWeeks = Number.isFinite(data?.lead_time_weeks) ? data.lead_time_weeks : null;

  // Harga: array [lo, hi]
  const priceRange = Array.isArray(data?.price_per_m) ? data.price_per_m : null;
  const priceText = priceRange
    ? `${toIDR(priceRange[0])} – ${toIDR(priceRange[1])}/m’`
    : data?.price_text || null;

  const onView = () => {
    if (slug) window.location.href = `/catalogue/${slug}`;
  };

  return (
    <Card className="group overflow-hidden rounded-2xl border border-gray-100 transition hover:shadow-md">
      {/* Gambar */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <CardContent className="p-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-semibold text-gray-900">{name}</h3>
          {leadWeeks != null && (
            <Badge className="shrink-0 rounded-lg" variant="secondary">
              {leadWeeks} minggu
            </Badge>
          )}
        </div>

        {/* Meta kecil */}
        <div className="mb-2 flex flex-wrap items-center gap-1 text-xs text-gray-600">
          {layout && <Badge variant="outline" className="rounded-md">{layout}</Badge>}
          {styles.slice(0, 2).map((s, i) => (
            <Badge key={i} variant="outline" className="rounded-md">
              {s}
            </Badge>
          ))}
          {finish && <Badge variant="outline" className="rounded-md">Finishing: {finish}</Badge>}
          {top && <Badge variant="outline" className="rounded-md">Top: {top}</Badge>}
        </div>

        {/* Harga */}
        {priceText ? (
          <div className="mb-3 text-sm font-medium text-gray-900">{priceText}</div>
        ) : (
          <div className="mb-3 text-sm text-gray-500">Harga menyesuaikan spesifikasi.</div>
        )}

        <div className="flex items-center justify-between">
          <Button className="rounded-xl" onClick={onView}>
            Pelajari lebih lanjut
          </Button>
          <span className="text-xs text-gray-500">Klik untuk detail</span>
        </div>
      </CardContent>
    </Card>
  );
}
