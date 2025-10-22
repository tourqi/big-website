import React, { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { PACKAGES, TOP_ADDERS } from "@/data/kitchenCatalogue";
import { toIDR } from "@/lib/format";

export default function Estimator() {
  const [layout, setLayout] = useState("L");
  const [pkg, setPkg] = useState("Pro");
  const [top, setTop] = useState("Quartz");
  const [length, setLength] = useState(5);

  const baseRange = useMemo(() => PACKAGES.find((x)=>x.name===pkg)?.price_per_m ?? [0,0], [pkg]);
  const add = TOP_ADDERS[top] || 0;
  const estMin = (baseRange[0] + add) * length;
  const estMax = (baseRange[1] + add) * length;

  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Hitung Anggaran Kitchen Set Anda</CardTitle>
        <CardDescription>Cukup pilih layout, ukuran, dan finishing—sistem kami akan langsung menampilkan estimasi biaya.</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label>Pilih Layout</Label>
          <Select value={layout} onValueChange={setLayout}>
            <SelectTrigger className="rounded-2xl"><SelectValue/></SelectTrigger>
            <SelectContent>{["Single","L","U","Island","Galley"].map((s)=>(<SelectItem key={s} value={s}>{s}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Pilih Paket</Label>
          <Select value={pkg} onValueChange={setPkg}>
            <SelectTrigger className="rounded-2xl"><SelectValue/></SelectTrigger>
            <SelectContent>{PACKAGES.map((p)=>(<SelectItem key={p.name} value={p.name}>{p.name}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Pilih Top table</Label>
          <Select value={top} onValueChange={setTop}>
            <SelectTrigger className="rounded-2xl"><SelectValue/></SelectTrigger>
            <SelectContent>{Object.keys(TOP_ADDERS).map((t)=>(<SelectItem key={t} value={t}>{t}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Total meter lari</Label>
          <div className="flex items-center gap-2">
            <Input inputMode="decimal" type="number" min={1} step="0.1" value={length} onChange={(e)=>setLength(parseFloat(e.target.value || 0))} className="rounded-2xl"/>
            <Badge variant="outline" className="rounded-xl">m’</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="text-sm text-muted-foreground">* Estimasi ini sebagai gambaran awal. Harga final menyesuaikan desain detail & kondisi lapangan. Konsultasi gratis tersedia untuk diskusi lebih lanjut.</div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Kisaran biaya</div>
          <div className="text-2xl font-semibold tabular-nums">{toIDR(estMin)} – {toIDR(estMax)}</div>
        </div>
      </CardFooter>
    </Card>
  );
}
