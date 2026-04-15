// src/sections/catalogue/PriceEstimator.jsx
import React, { useMemo, useState, useEffect } from "react";
import {
  Card, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle,
} from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ROOM_CATEGORIES } from "@/data/roomCatalogue";
import { toIDR } from "@/lib/format";
import { ChefHat, Armchair, Bed, UtensilsCrossed, Check } from "lucide-react";

// Map ROOM_CATEGORIES ke format yang bisa dipakai kalkulator
const ROOM_TYPES = [
  { categoryId: "cat-004", name: "Kitchen Set", icon: ChefHat, sizeLabel: "Total meter lari", sizeUnit: "m'", sizeRange: "3-10" },
  { categoryId: "cat-001", name: "Living Room", icon: Armchair, sizeLabel: "Luas ruangan", sizeUnit: "m²", sizeRange: "9-30" },
  { categoryId: "cat-002", name: "Bedroom", icon: Bed, sizeLabel: "Luas ruangan", sizeUnit: "m²", sizeRange: "9-25" },
  { categoryId: "cat-003", name: "Dining Room", icon: UtensilsCrossed, sizeLabel: "Luas ruangan", sizeUnit: "m²", sizeRange: "9-20" },
];

export default function PriceEstimator() {
  const [activeCategoryId, setActiveCategoryId] = useState("cat-004");
  const [activeStyleId, setActiveStyleId] = useState(null);
  const [length, setLength] = useState(5);
  const [selectedComponents, setSelectedComponents] = useState({});

  // Cari kategori aktif dari ROOM_CATEGORIES
  const activeCategory = useMemo(
    () => ROOM_CATEGORIES.find((c) => c.id === activeCategoryId),
    [activeCategoryId]
  );

  // Cari room type info (label, icon, dll)
  const roomTypeInfo = useMemo(
    () => ROOM_TYPES.find((r) => r.categoryId === activeCategoryId) || ROOM_TYPES[0],
    [activeCategoryId]
  );

  // Daftar styles dari kategori aktif
  const styles = activeCategory?.styles || [];

  // Style aktif
  const activeStyle = useMemo(
    () => styles.find((s) => s.id === activeStyleId) || styles[0] || null,
    [styles, activeStyleId]
  );

  // Komponen dari style aktif (langsung dari ROOM_CATEGORIES!)
  const components = activeStyle?.components || [];

  // Reset pilihan saat ganti kategori atau style
  useEffect(() => {
    setSelectedComponents({});
    if (styles.length > 0 && !styles.find((s) => s.id === activeStyleId)) {
      setActiveStyleId(styles[0].id);
    }
  }, [activeCategoryId]);

  useEffect(() => {
    setSelectedComponents({});
  }, [activeStyleId]);

  // Hitung harga berdasarkan komponen yang dipilih
  const calculatedPrice = useMemo(() => {
    let basePrice = 0;

    components.forEach((component) => {
      const selectedOptionId = selectedComponents[component.id];
      if (selectedOptionId) {
        const option = component.options.find((opt) => opt.id === selectedOptionId);
        if (option && option.pricePerMeter) {
          basePrice += option.pricePerMeter;
        }
      }
    });

    // Jika belum ada yang dipilih, ambil harga minimum dari tiap komponen
    if (basePrice === 0 && components.length > 0) {
      components.forEach((comp) => {
        const minPrice = Math.min(...comp.options.map((o) => o.pricePerMeter || 0));
        basePrice += minPrice;
      });
    }

    const total = basePrice * length;
    return {
      min: total,
      max: total * 1.2,
    };
  }, [components, selectedComponents, length]);

  const handleComponentSelect = (componentId, optionId) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [componentId]: optionId,
    }));
  };

  return (
    <Card id="estimator" className="rounded-3xl shadow-sm scroll-mt-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <roomTypeInfo.icon className="h-5 w-5" />
          Kalkulator Biaya Interior
        </CardTitle>
        <CardDescription>
          Pilih ruangan, gaya, lalu komponen — estimasi biaya dihitung otomatis.
        </CardDescription>
      </CardHeader>

      {/* Room Type Toggle */}
      <div className="px-6 pb-4 space-y-4">
        <div className="flex flex-wrap gap-2">
          {ROOM_TYPES.map((room) => (
            <Button
              key={room.categoryId}
              variant={activeCategoryId === room.categoryId ? "default" : "outline"}
              className="rounded-xl flex items-center gap-2"
              onClick={() => setActiveCategoryId(room.categoryId)}
            >
              <room.icon className="h-4 w-4" />
              {room.name}
            </Button>
          ))}
        </div>

        {/* Style Selector */}
        {styles.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {styles.map((style) => {
              const isActive = activeStyle?.id === style.id;
              return (
                <button
                  key={style.id}
                  onClick={() => setActiveStyleId(style.id)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium border transition-all ${
                    isActive
                      ? "border-brand bg-brand/10 text-brand"
                      : "border-gray-200 text-gray-600 hover:border-brand/50 hover:text-brand"
                  }`}
                >
                  {style.name}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Size Input */}
      <CardContent className="space-y-6">
        <div className="border-b pb-4">
          <div className="space-y-2">
            <Label className="text-base font-semibold">{roomTypeInfo.sizeLabel}</Label>
            <div className="flex items-center gap-3">
              <Input
                inputMode="decimal"
                type="number"
                min={1}
                max={50}
                step="0.5"
                value={length}
                onChange={(e) => setLength(parseFloat(e.target.value || 0))}
                className="rounded-2xl w-32"
              />
              <Badge variant="outline" className="rounded-xl text-sm">{roomTypeInfo.sizeUnit}</Badge>
              <span className="text-sm text-muted-foreground">
                (Rekomendasi: {roomTypeInfo.sizeRange} {roomTypeInfo.sizeUnit})
              </span>
            </div>
          </div>
        </div>

        {/* Components Selection — langsung dari ROOM_CATEGORIES */}
        {components.length > 0 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-3">Pilih Komponen & Material</h4>
              <p className="text-xs text-muted-foreground mb-4">
                Setiap komponen memiliki beberapa pilihan. Klik untuk memilih.
              </p>
            </div>

            {components.map((component, index) => (
              <div key={component.id} className="rounded-lg border overflow-hidden bg-white shadow-sm">
                {/* Component Header */}
                <div className="bg-gray-50 text-gray-900 p-3 border-b">
                  <h5 className="text-sm font-semibold">{component.name}</h5>
                  <p className="text-xs text-gray-600 mt-1">{component.description}</p>
                </div>

                {/* Component Options Grid */}
                <div className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {component.options.map((option) => {
                      const isSelected = selectedComponents[component.id] === option.id;
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleComponentSelect(component.id, option.id)}
                          className={`relative rounded-lg border-2 cursor-pointer transition-all overflow-hidden group text-left ${
                            isSelected
                              ? "border-brand bg-brand/10 shadow-md"
                              : "border-gray-200 hover:border-brand hover:bg-brand/5"
                          }`}
                        >
                          {/* Image */}
                          <div className="aspect-square bg-gray-100 overflow-hidden">
                            {option.image ? (
                              <img
                                src={option.image}
                                alt={option.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.src = "data:image/svg+xml;utf8," + encodeURIComponent(
                                    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
                                      <rect width='100%' height='100%' fill='#f3f4f6'/>
                                      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                                            font-family='sans-serif' font-size='14' fill='#9ca3af'>
                                        No Image
                                      </text>
                                    </svg>`
                                  );
                                }}
                              />
                            ) : (
                              <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                                No Image
                              </div>
                            )}
                          </div>

                          {/* Option Info */}
                          <div className="p-2">
                            <div className="flex items-start justify-between gap-1 mb-1">
                              <h6 className="font-medium text-gray-900 text-xs line-clamp-2">
                                {option.name}
                              </h6>
                              {/* Radio Circle */}
                              <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                                isSelected
                                  ? "border-brand bg-brand"
                                  : "border-gray-300 group-hover:border-brand"
                              }`}>
                                {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-2 leading-tight">
                              {option.description}
                            </p>
                            {option.pricePerMeter !== 0 && (
                              <p className="text-xs font-medium text-brand mt-1">
                                {option.pricePerMeter > 0 ? '+' : ''}{toIDR(option.pricePerMeter)}/m'
                              </p>
                            )}
                          </div>

                          {/* Selected Badge */}
                          {isSelected && (
                            <div className="absolute top-1 left-1 bg-brand text-white text-xs font-bold px-1.5 py-0.5 rounded">
                              ✓
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t pt-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            * Estimasi ini sebagai gambaran awal. Harga final menyesuaikan desain detail &amp; kondisi lapangan.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary" className="rounded-full">
              {roomTypeInfo.name}
            </Badge>
            {activeStyle && (
              <Badge variant="outline" className="rounded-full">
                {activeStyle.name}
              </Badge>
            )}
            <span>{length} {roomTypeInfo.sizeUnit}</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-sm text-muted-foreground">Estimasi Biaya</div>
          <div className="text-2xl md:text-3xl font-bold text-brand tabular-nums">
            {toIDR(calculatedPrice.min)}
          </div>
          {calculatedPrice.max !== calculatedPrice.min && (
            <div className="text-xs text-muted-foreground">
              s/d {toIDR(calculatedPrice.max)} dengan variasi material
            </div>
          )}
          <Button className="mt-3 rounded-xl" size="lg" asChild>
            <a href="/#contact">Konsultasi Gratis</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}