import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ROOM_CATEGORIES } from "@/data/catalogueStructure";

export default function InspirationCarousel() {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Katalog</CardTitle>
        <CardDescription>
          Pilih kategori ruangan untuk melihat list design, detail, dan referensi yang bisa Anda edit sesuai kebutuhan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROOM_CATEGORIES.map((room) => {
            return (
              <Link
                key={room.slug}
                to={`/catalogue/${room.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:border-emerald-400 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={room.image || "/catalogue/placeholder.jpg"}
                    alt={`${room.name} thumbnail`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/catalogue/placeholder.jpg";
                    }}
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-semibold">{room.name}</div>
                    <ArrowRight className="mt-1 text-emerald-500 opacity-0 transition group-hover:opacity-100" />
                  </div>

                  <div className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">{room.tag}</div>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {room.steps.slice(0, 2).map((step) => (
                      <li key={step} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
