// src/sections/catalogue/PriceEstimator.jsx
import React, { useMemo, useState } from "react";
import {
  Card, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle,
} from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PACKAGES, TOP_ADDERS } from "@/data/kitchenCatalogue";
import { toIDR } from "@/lib/format";

const LAYOUT_OPTIONS = ["Single", "L", "U", "Island", "Galley"];

export default function PriceEstimator() {
  const [layout, setLayout] = useState("L");
  const [pkg,    setPkg]    = useState("Pro");
  const [top,    setTop]    = useState("Quartz");
  const [length, setLength] = useState(5);

  const baseRange = useMemo(
    () => PACKAGES.find((x) => x.name === pkg)?.price_per_m ?? [0, 0],
    [pkg]
  );

  const adder  = TOP_ADDERS[top] || 0;
  const estMin = (baseRange[0] + adder) * length;
  const estMax = (baseRange[1] + adder) * length;

  return (
    <Card id="estimator" className="rounded-3xl shadow-sm scroll-mt-24">
      <CardHeader>
        <CardTitle>Hitung Anggaran Kitchen Set Anda</CardTitle>
        <CardDescription>
          Pilih layout, ukuran, dan finishing — estimasi biaya langsung tampil.
        </CardDescription>
      </CardHeader>

      <CardContent className="grid md:grid-cols-4 gap-4">
        {/* Layout */}
        <div className="space-y-2">
          <Label>Pilih Layout</Label>
          <Select value={layout} onValueChange={setLayout}>
            <SelectTrigger className="rounded-2xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              {LAYOUT_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Paket */}
        <div className="space-y-2">
          <Label>Pilih Paket</Label>
          <Select value={pkg} onValueChange={setPkg}>
            <SelectTrigger className="rounded-2xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              {PACKAGES.map((p) => (
                <SelectItem key={p.name} value={p.name}>{p.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Top table */}
        <div className="space-y-2">
          <Label>Top table</Label>
          <Select value={top} onValueChange={setTop}>
            <SelectTrigger className="rounded-2xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              {Object.keys(TOP_ADDERS).map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Meter lari */}
        <div className="space-y-2">
          <Label>Total meter lari</Label>
          <div className="flex items-center gap-2">
            <Input
              inputMode="decimal"
              type="number"
              min={1}
              step="0.1"
              value={length}
              onChange={(e) => setLength(parseFloat(e.target.value || 0))}
              className="rounded-2xl"
            />
            <Badge variant="outline" className="rounded-xl shrink-0">m'</Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-muted-foreground max-w-md">
          * Estimasi ini sebagai gambaran awal. Harga final menyesuaikan desain detail
          &amp; kondisi lapangan. Konsultasi gratis tersedia.
        </p>
        <div className="text-right shrink-0">
          <div className="text-sm text-muted-foreground">Kisaran biaya</div>
          <div className="text-2xl font-semibold tabular-nums">
            {toIDR(estMin)} – {toIDR(estMax)}
          </div>
          <Button className="mt-2 rounded-xl" asChild>
            <a href="/#contact">Konsultasi Gratis</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}