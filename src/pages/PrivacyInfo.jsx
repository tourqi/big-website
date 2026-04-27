// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageMeta from "@/lib/PageMeta.jsx";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PageMeta title="Kebijakan Privasi" description="Kebijakan privasi Bogor Interior Garage — bagaimana kami mengelola data pribadi Anda." />
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Kembali ke Beranda</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kebijakan Privasi</h1>
          <p className="text-gray-600 text-lg">
            Terakhir diperbarui: 9 April 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
            <p>
              PT Bogor Interior Garage ("BIG", "kami", "kami", atau "perusahaan") menghargai 
              privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
              menggunakan, mengungkapkan, dan memproses informasi pribadi Anda melalui website 
              dan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informasi yang Kami Kumpulkan</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi yang Anda Berikan</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Nama lengkap</li>
                  <li>Nomor telepon/WhatsApp</li>
                  <li>Alamat email</li>
                  <li>Alamat rumah/proyek</li>
                  <li>Detail proyek (ukuran ruangan, preferensi gaya, budget)</li>
                  <li>Pesan dan komunikasi dengan kami</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi yang Dikumpulkan Otomatis</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Informasi perangkat (browser, OS, resolusi layar)</li>
                  <li>IP address</li>
                  <li>Halaman yang dikunjungi dan waktu kunjungan</li>
                  <li>Referrer URL</li>
                  <li>Cookies dan teknologi tracking lainnya</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cara Kami Menggunakan Informasi</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Merespons pertanyaan dan permintaan konsultasi Anda</li>
              <li>Mengirim penawaran dan informasi tentang layanan kami</li>
              <li>Menghubungi Anda melalui WhatsApp, email, atau telepon</li>
              <li>Meningkatkan website dan pengalaman pengguna</li>
              <li>Menganalisis tren dan pola penggunaan website</li>
              <li>Mematuhi hukum dan regulasi yang berlaku</li>
              <li>Mencegah penipuan dan aktivitas ilegal</li>
              <li>Tujuan bisnis lainnya yang masuk akal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Berbagi Informasi</h2>
            <p>
              Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada 
              pihak ketiga. Kami mungkin membagikan informasi Anda dengan:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li><strong>Vendor Layanan:</strong> Penyedia email, hosting, atau analytics</li>
              <li><strong>Mitra Bisnis:</strong> Kontraktor atau supplier proyek yang relevan</li>
              <li><strong>Keharusan Hukum:</strong> Jika diwajibkan oleh hukum atau peraturan pemerintah</li>
              <li><strong>Keamanan:</strong> Untuk melindungi hak, privasi, keamanan kami atau pihak lain</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Keamanan Data</h2>
            <p>
              Kami mengimplementasikan langkah-langkah keamanan yang sesuai untuk melindungi 
              informasi pribadi Anda dari akses, perubahan, pengungkapan, atau penghapusan yang 
              tidak sah. Namun, tidak ada metode pengiriman melalui internet yang 100% aman.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Retensi Data</h2>
            <p>
              Kami menyimpan informasi pribadi Anda hanya selama diperlukan untuk tujuan yang 
              dinyatakan dalam kebijakan ini atau sesuai dengan hukum yang berlaku. Informasi 
              kontak disimpan untuk layanan berkala dan follow-up.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies dan Teknologi Tracking</h2>
            <p>
              Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Anda dapat 
              mengatur browser untuk menolak cookies atau memberi tahu Anda saat cookies sedang 
              dikirim. Namun, beberapa fitur website mungkin tidak berfungsi optimal tanpa cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Hak dan Pilihan Anda</h2>
            <p>Anda memiliki hak untuk:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
              <li>Meminta koreksi atau pembaruan informasi yang tidak akurat</li>
              <li>Meminta penghapusan informasi pribadi Anda</li>
              <li>Berhenti menerima komunikasi pemasaran dari kami</li>
              <li>Menolak penggunaan data untuk tujuan pemasaran</li>
            </ul>
            <p className="mt-4">
              Untuk menggunakan hak-hak ini, hubungi kami di 
              <a href="mailto:peshasuryaconstruction@gmail.com" className="text-brand underline">
                {" "}peshasuryaconstruction@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Link Pihak Ketiga</h2>
            <p>
              Website kami mungkin berisi link ke website pihak ketiga. Kami tidak bertanggung 
              jawab atas praktik privasi dari website tersebut. Kami menyarankan Anda membaca 
              kebijakan privasi mereka sebelum memberikan informasi pribadi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Perubahan Kebijakan</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
              dipublikasikan di halaman ini dengan tanggal pembaruan "Terakhir diperbarui". 
              Penggunaan berkelanjutan terhadap website adalah persetujuan Anda terhadap perubahan 
              tersebut.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Hubungi Kami</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>PT Bogor Interior Garage</strong></p>
                <p>
                  📍 Lingkungan 02 Citatah Dalam, Kec. Cibinong, Kab. Bogor, Jawa Barat 16918
                </p>
                <p>
                  📱 <a href="https://wa.me/6282145756660" className="text-brand underline">
                    +62 821-4575-6660 (WhatsApp)
                  </a>
                </p>
                <p>
                  📧 <a href="mailto:peshasuryaconstruction@gmail.com" className="text-brand underline">
                    peshasuryaconstruction@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
