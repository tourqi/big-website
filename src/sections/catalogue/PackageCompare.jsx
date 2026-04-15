// src/sections/catalogue/PackageCompare.jsx
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PACKAGES } from "@/data/roomCatalogue";
import { toIDR, cls } from "@/lib/format";

export default function PackageCompare() {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Bandingkan Paket, Pilih Sesuai Kebutuhan</CardTitle>
        <CardDescription>
          Pilih level spesifikasi sesuai kebutuhan &amp; intensitas pemakaian.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {PACKAGES.map((pkg, i) => {
            const isRecommended = i === 1;
            return (
              <div
                key={pkg.name}
                className={cls(
                  "rounded-2xl border p-5",
                  isRecommended && "ring-2 ring-emerald-400"
                )}
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-semibold">{pkg.name}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{pkg.desc}</div>
                  </div>
                  {isRecommended && (
                    <Badge className="rounded-xl bg-emerald-100 text-emerald-800 border-emerald-200">
                      Rekomendasi
                    </Badge>
                  )}
                </div>

                {/* Harga */}
                <div className="mt-3 text-lg font-semibold">
                  {toIDR(pkg.price_per_m[0])} – {toIDR(pkg.price_per_m[1])}
                  <span className="text-sm font-normal text-muted-foreground"> / m'</span>
                </div>

                {/* Includes */}
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Button
                    className="w-full rounded-2xl"
                    variant={isRecommended ? "default" : "secondary"}
                    asChild
                  >
                    <a href="/#contact">Pilih {pkg.name}</a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}