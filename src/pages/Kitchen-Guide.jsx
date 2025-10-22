import React from "react";

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="text-xl font-semibold mt-10">{title}</h2>
    <div className="mt-3 text-zinc-700 leading-relaxed">{children}</div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs bg-white">{children}</span>
);

const Card = ({ title, img, children, className = "" }) => (
  <div className={`rounded-2xl border bg-white overflow-hidden h-full ${className}`}>
    {img && (
      <div className="aspect-[4/3] w-full bg-zinc-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={title || "Ilustrasi"} className="w-full h-full object-cover" loading="lazy" />
      </div>
    )}
    <div className="p-4 flex flex-col gap-1 h-full">
      {title && <div className="font-medium mb-1">{title}</div>}
      {children}
    </div>
  </div>
);

export default function KitchenSetGuide() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 scroll-smooth pt-24">
      {/* Header */}
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Panduan Singkat Kitchen Set: Biar Gampang Milih, Nggak Pusing</h1>
          <p className="text-zinc-600 mt-2 max-w-2xl">
            Baru pertama kali bikin kitchen set? Tenang, panduan ini dirancang sederhana supaya Anda bisa cepat paham soal layout, material, finishing, hingga cara hitung estimasi.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>Durasi baca 5–7 menit</Pill>
            <Pill>Bahasa sederhana</Pill>
            <Pill>Cocok untuk pemula</Pill>
          </div>
        </div>
        <a href="/catalogue" className="rounded-xl bg-zinc-900 text-white px-4 py-2 font-medium">Lihat Katalog</a>
      </header>

      {/* TOC */}
      <nav className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
        {[{id:"apa-itu",label:"Apa itu kitchen set?"},{id:"layout",label:"Macam layout"},{id:"bahan",label:"Macam bahan"},{id:"finishing",label:"Finishing pintu"},{id:"top",label:"Material top table"},{id:"hardware",label:"Hardware penting"},{id:"estimasi",label:"Cara hitung estimasi"},{id:"faq",label:"FAQ singkat"}].map(i=> (
          <a key={i.id} href={`#${i.id}`} className="rounded-xl border p-3 hover:bg-zinc-50">{i.label}</a>
        ))}
      </nav>

      {/* Sections */}
      <Section id="apa-itu" title="Apa itu kitchen set?">
        <p>
          Kitchen set adalah sistem kabinet yang dibuat menyesuaikan ukuran dapur untuk menyimpan peralatan dan
          memaksimalkan area kerja. Komponen utamanya: <strong>carcass</strong> (badan lemari), <strong>pintu</strong>/front,
          <strong>top table</strong>, dan <strong>hardware</strong> (engsel, rel, aksesori).
        </p>
        <div className="grid md:grid-cols-3 gap-3 mt-4 text-sm">
          <Card title="Carcass" img="https://miro.medium.com/v2/1*XQQ6Ujpj2RqwsPFdzFZTWg.jpeg">
            <p>Rangka utama kabinet. Umumnya plywood atau blockboard. Ketebalan populer 15–18 mm.</p>
          </Card>
          <Card title="Pintu / Front" img="https://oggifurniture.com/wp-content/uploads/2023/02/Rea-Kitchen-Base-Cabinet-3D.jpg">
            <p>Bagian yang terlihat. Finishing mempengaruhi tampilan & biaya: HPL, Duco, Veneer.</p>
          </Card>
          <Card title="Top Table" img="https://media.dekoruma.com/article/2021/03/25131927/material-table-top-granit-min.jpg?fit=300%2C235&ssl=1">
            <p>Bidang kerja: HPL, Granite, Quartz, Solid Surface, Stainless. Pilih sesuai kebutuhan.</p>
          </Card>
        </div>
      </Section>

      <Section id="layout" title="Macam layout (bentuk dapur)">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <Card title="Single Line" img="https://top-shelf.de/cdn/shop/files/nobilia_Kuchenzeile_Easytouch_966_Lacklaminat_Fjordblau_ultramatt_305_cm_konfigurierbar_mit_Elektrogeraten_1600x.jpg?v=1634881446">
            <p>Satu sisi dinding. Hemat ruang. Ideal untuk panjang 2–3 m.</p>
          </Card>
          <Card title="L/ Letter L" img="https://img.bdjkt.com/img/1200/bsob0d3ebsodeqwks6_2/hgA4KKetEmFbieqhgAba812GWy2szyTAKXmlqmvme4Zg.jpg">
            <p>Paling populer: alur kerja nyaman (sink–prep–cook). 3–6 m.</p>
          </Card>
          <Card title="U/ Letter U" img="https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/amj-2025-1744185110-pMHWe/kitchen-1744185121-23XpE/07a-1744197707-RqMv4.jpg">
            <p>Untuk dapur lebih luas, storage banyak. Perlu sirkulasi yang baik.</p>
          </Card>
          <Card title="Island" img="https://signature.my/wp-content/uploads/2024/12/Kitchen-island-with-seating.png">
            <p>Tambahan meja tengah, dapur terlihat premium & modern.</p>
          </Card>
        </div>
      </Section>

      <Section id="bahan" title="Bahan dasar kabinet (carcass)">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <Card title="Blockmin / Blockboard" img="https://ciptanatura.co.id/wp-content/uploads/2022/09/Blockboard-Melamin-18-mm-Double-Face-1.webp">
            <p>Kuat dan stabil, cocok untuk area kering. Permukaan rata dan tahan sekrup baik.</p>
            <div className="mt-2 text-xs text-zinc-500">Umum dipakai untuk bagian dalam kabinet.</div>
          </Card>
          <Card title="Plywood" img="https://plydirect.co.uk/wp-content/uploads/2022/07/Spruce-Plywood.png">
            <p>Paling populer untuk kitchen set. Tahan lembab dan kuat, meski harga sedikit lebih tinggi.</p>
            <div className="mt-2 text-xs text-zinc-500">Direkomendasikan untuk dapur utama.</div>
          </Card>
          <Card title="MDF HMR" img="https://image.made-in-china.com/202f0j00FbqWhergncUC/Melamine-Moisture-Resistant-MDF-Mr-Hmr-MDF.webp">
            <p>Halus dan presisi, cocok untuk finishing duco. Versi HMR lebih tahan lembab dari MDF biasa.</p>
            <div className="mt-2 text-xs text-zinc-500">Baik untuk pintu atau panel dengan cat duco.</div>
          </Card>
          <Card title="PVC Board" img="https://icdn.tradew.com/file/201706/1572031/jpg/7873338.jpg">
            <p>Tahan air & rayap, ringan tapi daya sekrup rendah. Ideal untuk area basah.</p>
            <div className="mt-2 text-xs text-zinc-500">Cocok untuk kabinet bawah dekat wastafel.</div>
          </Card>
          <Card title="Aluminium Composite Panel (ACP)" img="https://www.jupiteroutpost.com/wp-content/uploads/2023/06/Perbedaan-Antara-Aluminium-Composite-Panel-dengan-Aluminium-Panel.jpg">
            <p>Tahan air dan karat total, tapi tampilan lebih industrial dan biaya tinggi.</p>
            <div className="mt-2 text-xs text-zinc-500">Solusi ekstrem untuk area lembab berat.</div>
          </Card>
        </div>
      </Section>

      <Section id="finishing" title="Finishing pintu (ringkas)">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <Card title="HPL" img="https://filebroker-cdn.lazada.co.id/kf/S8a7511e42ac44145b4766ae864a9d6a92.jpg">
            <ul className="list-disc pl-4 mt-1">
              <li>+ Banyak motif, ekonomis</li>
              <li>– Tepi bisa mengelupas bila pemasangan kurang rapi</li>
            </ul>
            <div className="mt-2 text-xs text-zinc-500">Kisaran per meter: Rp 2.5–3.2 jt</div>
          </Card>
          <Card title="Duco (Matte/Gloss)" img="https://mebeloka.com/wp-content/uploads/2022/02/kitchen-set-kayu-minimalis-duco-1-scaled.jpg">
            <ul className="list-disc pl-4 mt-1">
              <li>+ Tampilan premium, warna solid</li>
              <li>– Perlu perawatan ekstra</li>
            </ul>
            <div className="mt-2 text-xs text-zinc-500">Kisaran per meter: Rp 3.5–4.5 jt</div>
          </Card>
          <Card title="Veneer Kayu" img="https://id.chinakitchencabinets.net/Content/upload/2019211506/201902201524214161441.jpg">
            <ul className="list-disc pl-4 mt-1">
              <li>+ Serat alami, mewah</li>
              <li>– Biaya lebih tinggi</li>
            </ul>
            <div className="mt-2 text-xs text-zinc-500">Kisaran per meter: Rp 5–7 jt</div>
          </Card>
        </div>
      </Section>

      <Section id="top" title="Material top table (perbandingan cepat)">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
          <Card title="Granite" img="https://media.dekoruma.com/article/2021/03/25131927/material-table-top-granit-min.jpg?fit=300%2C235&ssl=1">
            <p>Tahan panas, pori perlu sealing berkala.</p>
            <div className="mt-2 text-xs text-zinc-500">Adder ± Rp 300 rb/m</div>
          </Card>
          <Card title="Quartz" img="https://st.hzcdn.com/simgs/16914201008c90bd_4-8218/home-design.jpg">
            <p>Non-porous, perawatan mudah, tampilan mewah.</p>
            <div className="mt-2 text-xs text-zinc-500">Adder ± Rp 700 rb/m</div>
          </Card>
          <Card title="Solid Surface" img="https://www.rancangmebel.com/assets/backoffice/images/ckeditor/1568708527-solid-coun.jpg">
            <p>Sambungan halus, hindari panas langsung.</p>
            <div className="mt-2 text-xs text-zinc-500">Adder ± Rp 500 rb/m</div>
          </Card>
          <Card title="Stainless" img="https://www.rancangmebel.com/assets/backoffice/images/ckeditor/1568708685-stainless-.jpg">
            <p>Higienis, khas industrial, mudah baret halus.</p>
            <div className="mt-2 text-xs text-zinc-500">Adder ± Rp 200 rb/m</div>
          </Card>
        </div>
      </Section>

      <Section id="hardware" title="Hardware penting (singkat)">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <Card title="Engsel & Rel" img="https://kitchenset.id/wp-content/uploads/2024/04/jenis-engsel-sendok-kitchen-set-1.webp">
            <p>Pilih soft-close. Rel undermount 40 kg untuk laci utama.</p>
          </Card>
          <Card title="Aksesori" img="https://img.waimaoniu.net/3133/3133-202211080924345537.jpg">
            <p>Pull-out bumbu, rak piring, corner unit—pilih sesuai kebiasaan masak.</p>
          </Card>
          <Card title="Lighting" img="https://archify-images-prod.s3.ap-southeast-1.amazonaws.com/blog/l/v88krs4t.jpg">
            <p>LED strip bawah kabinet untuk area kerja lebih terang.</p>
          </Card>
        </div>
      </Section>

      <Section id="estimasi" title="Cara hitung estimasi (gampang)">
        <Card img="https://foyr.com/learn/wp-content/uploads/2022/07/l-shaped-kitchen-floor-plan-with-dimensions-1024x755.png">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Tentukan <strong>layout</strong> & panjang meter lari (misal 6 m).</li>
            <li>Pilih <strong>finishing</strong> pintu → tentukan kisaran harga per meter.</li>
            <li>Tambah <strong>top table adder</strong> sesuai material.</li>
            <li>Kali-kan total panjang: <em>per meter × panjang</em> = estimasi.</li>
          </ol>
          <div className="mt-3 text-xs text-zinc-500">Catatan: harga dapat berubah setelah survey & spesifikasi final.</div>
        </Card>
        <a href="/catalogue#estimator" className="inline-flex mt-4 rounded-xl bg-zinc-900 text-white px-4 py-2 font-medium">Buka Estimator</a>
      </Section>

      <Section id="faq" title="FAQ singkat">
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Card title="Berapa panjang rata-rata?" img="https://foyr.com/learn/wp-content/uploads/2022/07/one-wall-kitchen-floor-plan-with-dimensions-1024x585.png">
            <p>Umumnya 5–7 meter lari untuk dapur keluarga. Studio/apartemen bisa 2–3 m.</p>
          </Card>
          <Card title="Lead time berapa lama?" img="https://learn.kregtool.com/content/uploads/2024/02/Woodworker-Cutting-w-Track-Saw-min.jpg">
            <p>Rata-rata 2–4 minggu tergantung finishing & antrian produksi.</p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-2">
        <a href="/catalogue" className="rounded-xl border px-4 py-2">Kembali ke Katalog</a>
        <a href="/catalogue#estimator" className="rounded-xl bg-zinc-900 text-white px-4 py-2">Coba Estimator</a>
      </div>
    </main>
  );
}
