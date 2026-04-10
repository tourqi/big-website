// src/sections/catalogue/ProductCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { toIDR } from "@/lib/format";

const FALLBACK_SRC =
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

function resolveImage(item) {
  const candidates = [
    item?.image,
    item?.thumbnail,
    item?.cover,
    item?.img,
  ];
  for (const c of candidates) {
    if (typeof c === "string" && c) return c;
    if (c?.src) return c.src;
  }
  return FALLBACK_SRC;
}

export default function ProductCard({ item }) {
  if (!item || typeof item !== "object") return null;

  const imgSrc      = resolveImage(item);
  const name        = item.name || "Tanpa Nama";
  const slug        = item.slug || "";
  const styles      = Array.isArray(item.style) ? item.style : [];
  const layout      = item.layout || "";
  const finish      = item.door_finish?.type || item.finish || "";
  const top         = item.worktop?.material || item.top || "";
  const leadWeeks   = Number.isFinite(item.lead_time_weeks) ? item.lead_time_weeks : null;
  const priceRange  = Array.isArray(item.price_per_m) ? item.price_per_m : null;
  const priceText   = priceRange
    ? `${toIDR(priceRange[0])} – ${toIDR(priceRange[1])}/m'`
    : item.price_text || null;
  const badges      = Array.isArray(item.badges) ? item.badges : [];

  const handleView = () => {
    if (slug) window.location.href = `/catalogue/${slug}`;
  };

  return (
    <Card className="group overflow-hidden rounded-2xl border border-gray-100 transition hover:shadow-md">
      {/* Gambar */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={imgSrc}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          onError={(e) => { e.currentTarget.src = FALLBACK_SRC; }}
        />
        {/* Badges di atas gambar */}
        {badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-black/70 text-white text-[11px] px-2 py-0.5"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Nama + Lead time */}
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-semibold text-gray-900">{name}</h3>
          {leadWeeks !== null && (
            <Badge className="shrink-0 rounded-lg" variant="secondary">
              {leadWeeks} minggu
            </Badge>
          )}
        </div>

        {/* Meta */}
        <div className="mb-2 flex flex-wrap items-center gap-1 text-xs text-gray-600">
          {layout && <Badge variant="outline" className="rounded-md">{layout}</Badge>}
          {styles.slice(0, 2).map((s, i) => (
            <Badge key={i} variant="outline" className="rounded-md">{s}</Badge>
          ))}
          {finish && <Badge variant="outline" className="rounded-md">{finish}</Badge>}
          {top    && <Badge variant="outline" className="rounded-md">Top: {top}</Badge>}
        </div>

        {/* Harga */}
        {priceText
          ? <div className="mb-3 text-sm font-medium text-gray-900">{priceText}</div>
          : <div className="mb-3 text-sm text-gray-500">Harga menyesuaikan spesifikasi.</div>
        }

        <Button className="w-full rounded-xl" onClick={handleView}>
          Pelajari lebih lanjut
        </Button>
      </CardContent>
    </Card>
  );
}