import React from "react";
import { Card, CardContent } from "@/components/ui/Card.jsx"; // ganti ke "../components/ui/Card.jsx" jika alias @ belum aktif
import {
  Wrench,
  Hammer,
  UtensilsCrossed,
  Home,
  Building2,
  Coffee,
  ChevronRight,
} from "lucide-react";

const SERVICES = [
  {
    id: "custom-furniture",
    icon: UtensilsCrossed,
    title: "Custom Furniture",
    desc:
      "Furnitur custom sesuai kebutuhan ruang & gaya hidup—material berkualitas, pengerjaan detail.",
    bullets: [
      "Kitchen set modern & fungsional",
      "Bedroom set (lemari, ranjang, storage)",
      "Ruang TV / Living room & kabinet",
      "Bathroom cabinet & vanity",
    ],
    targets: [
      { label: "Rumah", icon: Home },
      { label: "Kantor", icon: Building2 },
      { label: "Kafe/Bisnis", icon: Coffee },
    ],
    cta: { label: "Lihat Portofolio", href: "/#portfolio" },
  },
  {
    id: "service-maintenance",
    icon: Wrench,
    title: "Service & Perawatan",
    desc:
      "Interior tetap prima untuk pemakaian harian. Cek, perbaikan, hingga perawatan berkala.",
    bullets: [
      "Perbaikan & penyesuaian furnitur",
      "Maintenance kitchen set & hardware",
      "Perapihan jalur kabel & instalasi ringan",
      "Kontrak perawatan bulanan/kuartalan",
    ],
    targets: [
      { label: "Rumah", icon: Home },
      { label: "Kantor", icon: Building2 },
      { label: "Kafe/Bisnis", icon: Coffee },
    ],
    cta: { label: "Ajukan Penawaran", href: "/#contact" },
  },
  {
    id: "construction",
    icon: Hammer,
    title: "Konstruksi & Renovasi Interior",
    desc:
      "Dari struktur hingga finishing: satu tim yang menangani semuanya—praktis, efisien, dan presisi.",
    bullets: [
      "Renovasi ruang rumah & kantor",
      "Pekerjaan partisi, plafon, flooring",
      "Instalasi listrik & plumbing dasar",
      "Finishing material & detail joinery",
    ],
    targets: [
      { label: "Rumah", icon: Home },
      { label: "Kantor", icon: Building2 },
      { label: "Kafe/Bisnis", icon: Coffee },
    ],
    cta: { label: "Konsultasi Gratis", href: "/#contact" },
  },
];

function TargetChips({ items = [] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map(({ label, icon: Icon }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-2.5 py-1 text-xs text-gray-700"
        >
          <Icon className="h-3.5 w-3.5 block shrink-0 -translate-y-[0.5px]" aria-hidden="true" />
          <span className="leading-[1.1]">{label}</span>
        </span>
      ))}
    </div>
  );
}


function ServiceCard({ s }) {
  const Icon = s.icon;
  return (
    <Card className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white shrink-0">
            {/* block = hilangkan baseline, translate-y = koreksi optik tipis */}
            <Icon className="h-5 w-5 block -translate-y-[1px]" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold tracking-tight leading-none">
            {s.title}
          </h3>
        </div>

        <p className="mt-3 text-gray-600">{s.desc}</p>

        <ul className="mt-4 grid gap-2 text-sm text-gray-700 leading-relaxed">
          {s.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-gray-900" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <TargetChips items={s.targets} />

        <a
          href={s.cta.href}
          className="mt-6 inline-flex items-center gap-2 align-middle rounded-2xl border border-gray-300 px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
        >
          {s.cta.label}
          <ChevronRight className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800">
            Layanan Kami
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Solusi Interior Menyeluruh
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            Dari custom furniture hingga konstruksi & perawatan, kami bantu rumah, kantor, kafe, dan bisnis Anda
            tampil fungsional sekaligus estetik.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
