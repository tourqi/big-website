import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileDown } from "lucide-react";

export default function Downloads() {
  const files = [
    { t: "Brosur Ringkas", d: "Rangkuman paket & spesifikasi" },
    { t: "Panduan Ukur", d: "Cara hitung meter lari & titik listrik" },
    { t: "Cut-out Sizes", d: "Ukuran tanam kompor, oven, sink" },
  ];
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Unduhan</CardTitle>
        <CardDescription>Dokumen PDF untuk dibagikan ke keluarga/kontraktor.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {files.map((f) => (
            <div key={f.t} className="rounded-2xl border p-4 flex items-start gap-3">
              <div className="mt-0.5"><FileDown className="h-4 w-4"/></div>
              <div>
                <div className="font-medium">{f.t}</div>
                <div className="text-sm text-muted-foreground">{f.d}</div>
              </div>
              <div className="ml-auto"><Button variant="secondary" className="rounded-2xl">Unduh</Button></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
