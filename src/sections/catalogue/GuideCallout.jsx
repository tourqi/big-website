import React from "react";
import { BookOpen, Layers, Calculator, HelpCircle } from "lucide-react";

const BULLETS = [
  { icon: BookOpen,   title: "Dasar-dasar",   desc: "Apa itu carcass, front, top, hardware." },
  { icon: Layers,     title: "Finishing & Top", desc: "HPL, duco, veneer; granite vs quartz." },
  { icon: Calculator, title: "Estimasi cepat", desc: "Rumusan harga per meter + adder." },
  { icon: HelpCircle, title: "FAQ pemula",     desc: "Panjang ideal, lead time, perawatan." },
];

const Bullet = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border px-4 py-3 bg-white flex items-start gap-3">
    {Icon && <Icon className="w-5 h-5 mt-1 shrink-0 text-gray-500" />}
    <div>
      <div className="font-medium text-sm">{title}</div>
      <div className="text-sm text-zinc-600">{desc}</div>
    </div>
  </div>
);

export default function GuideCallout() {
  return (
    <div className="rounded-3xl border bg-white p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">Bingung Pilih Material? Ini Panduan Singkatnya.</h3>
          <p className="text-sm text-zinc-600 mt-1">
            Baru pertama kali? Pelajari istilah dasar, perbandingan material, dan cara hitung estimasi.
          </p>
        </div>
        <a
          href="/kitchen-guide"
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 shrink-0"
        >
          Buka Panduan
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {BULLETS.map((b) => (
          <Bullet key={b.title} {...b} />
        ))}
      </div>
    </div>
  );
}