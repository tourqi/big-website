import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function SeoLinkHub() {
  const cities = ["Bogor","Depok","Jakarta","Tangerang","Bekasi"];
  const styles = ["Japandi","Minimalis","Industrial","Shaker","Handleless"];
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Telusuri Kitchen Set per Kota & Gaya</CardTitle>
        <CardDescription>Untuk memudahkan pencarian & SEO.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="font-medium mb-2">Kota</div>
            <div className="flex flex-wrap gap-2">
              {cities.map((c)=>(<Button key={c} variant="outline" size="sm" className="rounded-xl">{c}</Button>))}
            </div>
          </div>
          <div>
            <div className="font-medium mb-2">Gaya</div>
            <div className="flex flex-wrap gap-2">
              {styles.map((s)=>(<Button key={s} variant="outline" size="sm" className="rounded-xl">{s}</Button>))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
