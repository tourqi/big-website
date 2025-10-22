import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Image as ImageIcon } from "lucide-react";
import { PROJECTS } from "@/data/kitchenCatalogue";
import { toIDR } from "@/lib/format";

export default function InspirationCarousel({ onPickStyle }) {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Inspirasi Nyata di Sekitar Bogor</CardTitle>
        <CardDescription>
          Lihat hasil proyek kitchen set yang sudah kami kerjakan di Bogor & sekitarnya.
          Semua foto 100% real, tanpa edit berlebihan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <div key={p.id} className="rounded-2xl border overflow-hidden">
              {/* 🔸 tampilkan foto asli project */}
              <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                <img
                  src={p.image || p.img || p.cover || p.thumbnail || "/catalogue/placeholder.jpg"}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = "/catalogue/placeholder.jpg"; }}
                />
              </div>

              <div className="p-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {toIDR(p.budget[0])} – {toIDR(p.budget[1])} • {p.run_m} m’ • {p.duration_weeks} minggu • {p.location}
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {p.style.map((s) => (
                    <Button
                      key={s}
                      size="sm"
                      variant="secondary"
                      className="rounded-xl"
                      onClick={() => onPickStyle?.(s)}
                    >
                      #{s}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
