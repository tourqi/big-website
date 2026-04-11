// src/sections/catalogue/SeoLinkHub.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, Palette } from "lucide-react";

const CITIES  = ["Bogor", "Depok", "Jakarta", "Tangerang", "Bekasi"];
const STYLES  = ["Japandi", "Minimalis", "Industrial", "Shaker", "Handleless"];

function toSlug(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export default function SeoLinkHub() {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Telusuri Kitchen Set per Kota &amp; Gaya</CardTitle>
        <CardDescription>Temukan inspirasi sesuai lokasi dan selera desain Anda.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="font-medium mb-2 flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              Kota
            </div>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <Button key={c} variant="outline" size="sm" className="rounded-xl" asChild>
                  <Link to={`/catalogue?kota=${toSlug(c)}`}>
                    {c}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium mb-2 flex items-center gap-1.5">
              <Palette className="h-4 w-4 text-muted-foreground" />
              Gaya
            </div>
            <div className="flex flex-wrap gap-2">
              {STYLES.map((s) => (
                <Button key={s} variant="outline" size="sm" className="rounded-xl" asChild>
                  <Link to={`/catalogue?gaya=${toSlug(s)}`}>
                    {s}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}