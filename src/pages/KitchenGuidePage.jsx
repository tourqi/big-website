// src/pages/KitchenGuidePage.jsx
// Halaman panduan singkat kitchen set — route /kitchen-guide
import React from "react";

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="text-xl font-semibold mt-10">{title}</h2>
    <div className="mt-3 text-zinc-700 leading-relaxed">{children}</div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs bg-white">
    {children}
  </span>
);

const InfoCard = ({ title, img, children }) => (
  <div className="rounded-2xl border bg-white overflow-hidden h-full">
    {img && (
      <div className="aspect-[4/3] w-full bg-zinc-100">
        <img src={img} alt={title || ""} className="w-full h-full object-cover" loading="lazy" />
      </div>
    )}
    <div className="p-4 flex flex-col gap-1">
      {title && <div className="font-medium mb-1">{title}</div>}
      {children}
    </div>
  </div>
);

const NAV_ITEMS = [
  { id: "apa-itu",  label: "Apa itu kitchen set?" },
  { id: "layout",   label: "Macam layout" },
  { id: "bahan",    label: "Macam bahan" },
  { id: "finishing",label: "Finishing pintu" },
  { id: "top",      label: "Material top table" },
  { id: "hardware", label: "Hardware penting" },
  { id: "estimasi", label: "Cara hitung estimasi" },
  { id: "faq",      label: "FAQ singkat" },
];

export default function KitchenGuidePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 scroll-smooth pt-24">
      {/* Header */}
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">
            Panduan Singkat Kitchen Set: Biar Gampang Milih, Nggak Pusing
          </h1>
          <p className="text-zinc-600 mt-2 max-w-2xl">
            Baru pertama kali bikin kitchen set? Panduan ini dirancang sederhana supaya Anda
            cepat paham soal layout, material, finishing, hingga cara hitung estimasi.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>Durasi baca 5–7 menit</Pill>
            <Pill>Bahasa sederhana</Pill>
            <Pill>Cocok untuk pemula</Pill>
          </div>
        </div>
        <a
          href="/catalogue"
          className="rounded-xl bg-zinc-900 text-white px-4 py-2 font-medium shrink-0"
        >
          Lihat Katalog
        </a>
      </header>

      {/* TOC */}
      <nav className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-xl border p-3 hover:bg-zinc-50 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Konten */}
      <Section id="apa-itu" title="Apa itu kitchen set?">
        <p>
          Kitchen set adalah sistem kabinet yang dibuat menyesuaikan ukuran dapur untuk menyimpan
          peralatan dan memaksimalkan area kerja. Komponen utamanya:{" "}
          <strong>carcass</strong> (badan lemari), <strong>pintu/front</strong>,{" "}
          <strong>top table</strong>, dan <strong>hardware</strong> (engsel, rel, aksesori).
        </p>
        <div className="grid md:grid-cols-3 gap-3 mt-4 text-sm">
          <InfoCard
            title="Carcass"
            img="https://miro.medium.com/v2/1*XQQ6Ujpj2RqwsPFdzFZTWg.jpeg"
          >
            <p>Rangka utama kabinet. Umumnya plywood atau blockboard. Ketebalan populer 15–18 mm.</p>
          </InfoCard>
          <InfoCard
            title="Pintu / Front"
            img="https://oggifurniture.com/wp-content/uploads/2023/02/Rea-Kitchen-Base-Cabinet-3D.jpg"
          >
            <p>Bagian yang terlihat. Finishing mempengaruhi tampilan & biaya: HPL, Duco, Veneer.</p>
          </InfoCard>
          <InfoCard
            title="Top Table"
            img="https://media.dekoruma.com/article/2021/03/25131927/material-table-top-granit-min.jpg"
          >
            <p>Bidang kerja: HPL, Granite, Quartz, Solid Surface, Stainless. Pilih sesuai kebutuhan.</p>
          </InfoCard>
        </div>
      </Section>

      <Section id="layout" title="Macam layout (bentuk dapur)">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <InfoCard title="Single Line" img="https://top-shelf.de/cdn/shop/files/nobilia_Kuchenzeile_Easytouch_966_Lacklaminat_Fjordblau_ultramatt_305_cm_konfigurierbar_mit_Elektrogeraten_1600x.jpg?v=1634881446">
            <p>Satu sisi dinding. Hemat ruang. Ideal panjang 2–3 m.</p>
          </InfoCard>
          <InfoCard title="Letter L" img="https://img.bdjkt.com/img/1200/bsob0d3ebsodeqwks6_2/hgA4KKetEmFbieqhgAba812GWy2szyTAKXmlqmvme4Zg.jpg">
            <p>Paling populer. Alur sink–prep–cook nyaman. 3–6 m.</p>
          </InfoCard>
          <InfoCard title="Letter U" img="https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/amj-2025-1744185110-pMHWe/kitchen-1744185121-23XpE/07a-1744197707-RqMv4.jpg">
            <p>Dapur luas, storage banyak. Perlu sirkulasi yang baik.</p>
          </InfoCard>
          <InfoCard title="Island" img="https://signature.my/wp-content/uploads/2024/12/Kitchen-island-with-seating.png">
            <p>Meja tambahan di tengah. Kesan premium dan modern.</p>
          </InfoCard>
        </div>
      </Section>

      <Section id="bahan" title="Bahan dasar kabinet (carcass)">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {[
            { title: "Plywood", desc: "Paling populer. Tahan lembab dan kuat.", note: "Direkomendasikan untuk dapur utama." },
            { title: "Blockboard", desc: "Kuat dan stabil, cocok area kering.", note: "Umum untuk bagian dalam kabinet." },
            { title: "MDF HMR", desc: "Halus dan presisi, cocok finishing duco.", note: "Baik untuk pintu cat duco." },
            { title: "PVC Board", desc: "Tahan air & rayap, ringan.", note: "Cocok untuk kabinet dekat wastafel." },
          ].map(({ title, desc, note }) => (
            <InfoCard key={title} title={title}>
              <p>{desc}</p>
              <p className="mt-1 text-xs text-zinc-500">{note}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section id="finishing" title="Finishing pintu (ringkas)">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          {[
            { title: "HPL", pros: "Banyak motif, ekonomis", cons: "Tepi bisa mengelupas bila kurang rapi", price: "Rp 2,5–3,2 jt / m'" },
            { title: "Duco (Matte/Gloss)", pros: "Tampilan premium, warna solid", cons: "Perlu perawatan ekstra", price: "Rp 3,5–4,5 jt / m'" },
            { title: "Veneer Kayu", pros: "Serat alami, mewah", cons: "Biaya lebih tinggi", price: "Rp 5–7 jt / m'" },
          ].map(({ title, pros, cons, price }) => (
            <InfoCard key={title} title={title}>
              <ul className="list-disc pl-4">
                <li>+ {pros}</li>
                <li>– {cons}</li>
              </ul>
              <p className="mt-2 text-xs text-zinc-500">Kisaran: {price}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section id="top" title="Material top table (perbandingan cepat)">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          {[
            { title: "Granite",       desc: "Tahan panas, pori perlu sealing berkala.",   adder: "± Rp 300 rb/m" },
            { title: "Quartz",        desc: "Non-porous, perawatan mudah, tampilan mewah.", adder: "± Rp 700 rb/m" },
            { title: "Solid Surface", desc: "Sambungan halus, hindari panas langsung.",   adder: "± Rp 500 rb/m" },
            { title: "Stainless",     desc: "Higienis, khas industrial, mudah baret.",    adder: "± Rp 200 rb/m" },
          ].map(({ title, desc, adder }) => (
            <InfoCard key={title} title={title}>
              <p>{desc}</p>
              <p className="mt-2 text-xs text-zinc-500">Adder {adder}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section id="hardware" title="Hardware penting (singkat)">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <InfoCard title="Engsel & Rel">
            <p>Pilih soft-close. Rel undermount 40 kg untuk laci utama.</p>
          </InfoCard>
          <InfoCard title="Aksesori">
            <p>Pull-out bumbu, rak piring, corner unit — sesuai kebiasaan masak.</p>
          </InfoCard>
          <InfoCard title="Lighting">
            <p>LED strip bawah kabinet untuk area kerja lebih terang.</p>
          </InfoCard>
        </div>
      </Section>

      <Section id="estimasi" title="Cara hitung estimasi (gampang)">
        <InfoCard title="">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Tentukan <strong>layout</strong> &amp; panjang meter lari (misal 6 m).</li>
            <li>Pilih <strong>finishing</strong> pintu → tentukan kisaran harga per meter.</li>
            <li>Tambah <strong>top table adder</strong> sesuai material.</li>
            <li>Kalikan total panjang: <em>per meter × panjang</em> = estimasi.</li>
          </ol>
          <p className="mt-3 text-xs text-zinc-500">
            Catatan: harga dapat berubah setelah survey &amp; spesifikasi final.
          </p>
        </InfoCard>
        <a
          href="/catalogue#estimator"
          className="inline-flex mt-4 rounded-xl bg-zinc-900 text-white px-4 py-2 font-medium"
        >
          Buka Estimator
        </a>
      </Section>

      <Section id="faq" title="FAQ singkat">
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <InfoCard title="Berapa panjang rata-rata?">
            <p>Umumnya 5–7 meter lari untuk dapur keluarga. Studio/apartemen bisa 2–3 m.</p>
          </InfoCard>
          <InfoCard title="Lead time berapa lama?">
            <p>Rata-rata 2–4 minggu tergantung finishing &amp; antrian produksi.</p>
          </InfoCard>
        </div>
      </Section>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-2">
        <a href="/catalogue"         className="rounded-xl border px-4 py-2">Kembali ke Katalog</a>
        <a href="/catalogue#estimator" className="rounded-xl bg-zinc-900 text-white px-4 py-2">
          Coba Estimator
        </a>
      </div>
    </main>
  );
}