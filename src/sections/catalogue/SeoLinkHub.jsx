// src/sections/catalogue/SeoLinkHub.jsx
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const CITIES  = ["Bogor", "Depok", "Jakarta", "Tangerang", "Bekasi"];
const STYLES  = ["Japandi", "Minimalis", "Industrial", "Shaker", "Handleless"];

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
            <div className="font-medium mb-2">Kota</div>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <Button key={c} variant="outline" size="sm" className="rounded-xl">{c}</Button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium mb-2">Gaya</div>
            <div className="flex flex-wrap gap-2">
              {STYLES.map((s) => (
                <Button key={s} variant="outline" size="sm" className="rounded-xl">{s}</Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}