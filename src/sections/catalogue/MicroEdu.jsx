import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

const TOPICS = [
  {
    title: "Plywood vs MDF",
    desc: "Plywood lebih tahan lembap dan cocok untuk zona dekat sink. MDF halus untuk pintu finishing duco tetapi perlu tepi tertutup rapat.",
  },
  {
    title: "Quartz vs Granite vs Solid Surface",
    desc: "Quartz tahan noda & low porous, Granite tampilan natural & tahan panas, Solid Surface sambungan mulus dan mudah diperbaiki.",
  },
  {
    title: "Ukuran Ergonomi",
    desc: "Tinggi top 85–92 cm, jarak ke cabinet atas 50–60 cm, jarak hood ke kompor gas 65–75 cm / induksi 55–65 cm.",
  },
];

const TopicCard = ({ title, desc }) => (
  <div className="rounded-2xl border p-4">
    <div className="font-medium">{title}</div>
    <div className="text-sm text-muted-foreground mt-1">{desc}</div>
    <Button variant="link" className="px-0 mt-2" asChild>
      <a href="/kitchen-guide">
        Pelajari <ChevronRight className="h-4 w-4 ml-1" />
      </a>
    </Button>
  </div>
);

export default function MicroEdu() {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Belajar Singkat</CardTitle>
        <CardDescription>3 topik ringkas untuk bantu keputusan cepat.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.title} {...topic} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}