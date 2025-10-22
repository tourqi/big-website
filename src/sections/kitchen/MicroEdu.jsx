import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

export default function MicroEdu() {
  const items = [
    { t:"Plywood vs MDF", d:"Plywood lebih tahan lembap dan cocok untuk zona dekat sink. MDF halus untuk pintu finishing duco tetapi perlu tepi tertutup rapat." },
    { t:"Quartz vs Granite vs Solid Surface", d:"Quartz tahan noda & low porous, Granite tampilan natural & tahan panas, Solid Surface sambungan mulus dan mudah diperbaiki." },
    { t:"Ukuran Ergonomi", d:"Tinggi top 85–92 cm, jarak ke cabinet atas 50–60 cm, jarak hood ke kompor gas 65–75 cm / induksi 55–65 cm." },
  ];
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Belajar Singkat</CardTitle>
        <CardDescription>3 topik ringkas untuk bantu keputusan cepat.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((s) => (
            <div key={s.t} className="rounded-2xl border p-4">
              <div className="font-medium">{s.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
              <Button variant="link" className="px-0 mt-1">Pelajari <ChevronRight className="h-4 w-4 ml-1"/></Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
