// src/sections/kitchen/KitchenGuide.jsx
import React from "react";

const Card = ({ title, children }) => (
  <div className="rounded-2xl border p-4 bg-white">
    <div className="font-medium">{title}</div>
    <div className="mt-1 text-sm text-zinc-700">{children}</div>
  </div>
);

export default function KitchenGuide() {
  return (
    <div className="rounded-3xl border p-5 bg-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Panduan Singkat Kitchen Set</h3>
          <p className="text-sm text-zinc-600 mt-1">
            Baru pertama kali? Baca ringkasan ini: istilah dasar, pilihan material, dan cara hitung estimasi.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-sm">
        <Card title="Apa itu kitchen set?">
          Sistem kabinet menyesuaikan ukuran dapur: <b>carcass</b>, <b>pintu (front)</b>, <b>top table</b>, <b>hardware</b>.
        </Card>
        <Card title="Finishing pintu (ringkas)">
          <b>HPL</b> — ekonomis, banyak motif. <b>Duco</b> — premium, perlu perawatan. <b>Veneer</b> — serat natural, biaya tinggi.
        </Card>
        <Card title="Top table (adder)">
          Granite (≈+300rb/m), Quartz (≈+700rb/m), Solid Surface (≈+500rb/m), Stainless (≈+200rb/m).
        </Card>
        <Card title="Hardware">
          Pilih engsel & rel <b>soft-close</b>. Laci utama: rel undermount 40kg.
        </Card>
        <Card title="Cara hitung cepat">
          (harga/m) + adder top → kalikan panjang (m’). Angka final akan disesuaikan saat survey.
        </Card>
        <Card title="Tips cepat">
          Utamakan alur kerja sink–prep–cook & pencahayaan kerja (LED strip).
        </Card>
      </div>
    </div>
  );
}
