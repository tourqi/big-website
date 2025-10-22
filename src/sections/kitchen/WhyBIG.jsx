import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { ShieldCheck, Hand, Sparkles, Clock4 } from "lucide-react";

export default function WhyBIG() {
  const items = [
    { icon: <ShieldCheck className="h-5 w-5"/>, title: "Garansi & QC", desc: "Struktur 3 th; leveling & celah 2 mm diperiksa." },
    { icon: <Hand className="h-5 w-5"/>, title: "After-sales sigap", desc: "Tuning 1–2x dan target respon <72 jam." },
    { icon: <Sparkles className="h-5 w-5"/>, title: "Spesifikasi jelas", desc: "Plywood di zona basah, edge ABS, rel undermount 40 kg opsional." },
    { icon: <Clock4 className="h-5 w-5"/>, title: "Lead time ringkas", desc: "Mulai 2–3 minggu (HPL); duco & veneer disesuaikan." },
  ];
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Kenapa Bogor Interior Garage?</CardTitle>
        <CardDescription>Nilai yang kamu dapat sejak survei hingga after-sales.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">{it.icon}<div className="font-medium">{it.title}</div></div>
              <div className="text-sm text-muted-foreground">{it.desc}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
