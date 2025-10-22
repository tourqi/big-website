import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PACKAGES } from "@/data/kitchenCatalogue";
import { toIDR, cls } from "@/lib/format";

export default function PackageCompare() {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Bandingkan Paket, Pilih Sesuai Kebutuhan</CardTitle>
        <CardDescription>Pilih level spesifikasi sesuai kebutuhan & intensitas pemakaian.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {PACKAGES.map((p, i) => (
            <div key={p.name} className={cls("rounded-2xl border p-5", i===1 && "ring-2 ring-emerald-400")}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-semibold">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.desc}</div>
                </div>
                {i===1 && <Badge className="rounded-xl">Rekomendasi</Badge>}
              </div>
              <div className="mt-3 text-lg font-semibold">{toIDR(p.price_per_m[0])} – {toIDR(p.price_per_m[1])} / m’</div>
              <ul className="mt-3 space-y-2 text-sm">
                {p.includes.map((it) => (<li key={it} className="flex items-start gap-2">• <span>{it}</span></li>))}
              </ul>
              <div className="mt-4"><Button className="w-full rounded-2xl">Pilih {p.name}</Button></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
