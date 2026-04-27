// src/pages/TermsAndConditions.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageMeta from "@/lib/PageMeta.jsx";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PageMeta title="Syarat & Ketentuan" description="Syarat dan ketentuan layanan Bogor Interior Garage." />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Syarat & Ketentuan</h1>
          <p className="text-gray-600 text-lg">
            Terakhir diperbarui: 9 April 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengenalan</h2>
            <p>
              Selamat datang di PT Bogor Interior Garage ("BIG", "kami"). Syarat dan Ketentuan ini 
              mengatur penggunaan website kami dan layanan yang kami tawarkan. Dengan mengakses atau 
              menggunakan website ini, Anda menyetujui untuk terikat oleh syarat-syarat ini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penggunaan Website</h2>
            <p>Anda setuju untuk:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>Menggunakan website ini hanya untuk tujuan yang sah dan tidak melanggar hukum</li>
              <li>Tidak mengirim konten yang berbahaya, menyinggung, atau tidak sah</li>
              <li>Tidak mencoba mengakses atau mengganggu keamanan website</li>
              <li>Tidak melakukan scraping, crawling, atau automated access tanpa izin</li>
              <li>Tidak mengirim virus, malware, atau kode berbahaya lainnya</li>
              <li>Menghormati hak kekayaan intelektual kami dan pihak ketiga</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Akun dan Informasi Pribadi</h2>
            <p>
              Jika Anda membuat akun atau mengirimkan informasi melalui website, Anda bertanggung 
              jawab untuk menjaga kerahasiaan informasi Anda. Anda setuju untuk memberikan 
              informasi yang akurat, lengkap, dan terkini. Kami berhak menolak atau menonaktifkan 
              akun yang melanggar Syarat dan Ketentuan ini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Konten dan Komunikasi</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Konten Pengguna</h3>
                <p>
                  Konten apa pun yang Anda posting atau kirimkan ke website ini dapat kami gunakan 
                  untuk tujuan bisnis, marketing, dan peningkatan layanan tanpa pembayaran tambahan 
                  kepada Anda. Anda memberi kami lisensi non-eksklusif untuk menggunakan konten 
                  tersebut.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Komunikasi</h3>
                <p>
                  Dengan mengajukan pertanyaan atau formulir kontak, Anda mengizinkan kami untuk 
                  menghubungi Anda melalui email, telepon, atau WhatsApp untuk merespons pertanyaan 
                  Anda dan menawarkan layanan kami.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Layanan Konsultasi</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Konsultasi awal biasanya gratis atau dengan biaya yang akan dinegosiasikan terlebih dahulu
              </li>
              <li>
                Informasi yang diberikan saat konsultasi adalah untuk tujuan estimasi awal
              </li>
              <li>
                Harga final akan diberikan setelah survey lokasi dan diskusi detail spesifikasi
              </li>
              <li>
                Tidak ada komitmen untuk melanjutkan setelah konsultasi awal
              </li>
              <li>
                Kami berhak menolak proyek yang tidak sesuai dengan kemampuan atau standar kami
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Katalog dan Harga</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Harga yang ditampilkan di website adalah perkiraan dan dapat berubah tanpa pemberitahuan
              </li>
              <li>
                Harga final akan diberikan dalam penawaran resmi "invoice/quotation"
              </li>
              <li>
                Katalog produk dapat diperbarui, ditambah, atau dihapus kapan saja
              </li>
              <li>
                Gambar produk adalah model referensi dan mungkin berbeda dari hasil akhir
              </li>
              <li>
                Availability produk tergantung pada stok dan waktu kedatangan supplier
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Proses Proyek dan Pembayaran</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tahapan Pembayaran</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>DP/Booking: 30-50% untuk mengamankan proyek</li>
                  <li>Tahap Progress: Pembayaran mengikuti progress pekerjaan</li>
                  <li>Final: Pembayaran sisa setelah pekerjaan selesai dan inspeksi</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Jadwal Proyek</h3>
                <p>
                  Jadwal yang ditawarkan adalah estimasi. Keterlambatan dapat terjadi karena:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                  <li>Keterlambatan supplier atau material</li>
                  <li>Perubahan desain atau spesifikasi dari klien</li>
                  <li>Kondisi cuaca atau force majeure</li>
                  <li>Temuan kondisi yang tidak terduga di lapangan</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Garansi dan Tanggung Jawab</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Garansi produk/material sesuai dengan garansi pabrikan (biasanya 1-5 tahun)
              </li>
              <li>
                Garansi pengerjaan/instalasi biasanya 1-2 tahun untuk perbaikan tanpa biaya
              </li>
              <li>
                Garansi tidak berlaku untuk kerusakan akibat penggunaan tidak semestinya atau kelalaian klien
              </li>
              <li>
                Kami tidak bertanggung jawab atas kerusakan terhadap properti selama proses konstruksi 
                kecuali akibat kelalaian kami yang terbukti
              </li>
              <li>
                Perubahan desain/spesifikasi setelah kontrak ditandatangani dapat menambah biaya dan waktu
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Pembatalan dan Pengembalian Dana</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Pembatalan sebelum proyek dimulai: Pengembalian 70-80% dari DP (20-30% biaya administratif)
              </li>
              <li>
                Pembatalan setelah proyek dimulai: Biaya yang sudah dikeluarkan untuk material dan 
                tenaga kerja tidak dapat dikembalikan
              </li>
              <li>
                Pembatalan harus dilakukan secara tertulis dan diformalkan
              </li>
              <li>
                Kami berhak membatalkan proyek jika ada keterlambatan pembayaran lebih dari 30 hari
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kebijakan Pendapatan dari Referral</h2>
            <p>
              Jika ada komisi atau referral fee (jika ditawarkan), hal tersebut harus disepakati 
              secara tertulis sebelumnya dan tidak mencakup klien yang sudah dalam daftar kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Batasan Tanggung Jawab</h2>
            <p>
              Dalam keadaan apa pun, BIG tidak bertanggung jawab atas kerugian tidak langsung, 
              insidental, khusus, konsekuensial, atau punitif yang timbul dari penggunaan website 
              atau layanan kami. Tanggung jawab kami terbatas pada jumlah yang Anda bayarkan untuk 
              layanan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Perubahan Syarat</h2>
            <p>
              Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan dipublikasikan 
              di halaman ini. Penggunaan berkelanjutan terhadap website adalah persetujuan Anda 
              terhadap perubahan tersebut.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Hukum yang Berlaku</h2>
            <p>
              Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik 
              Indonesia. Semua perselisihan akan diselesaikan melalui musyawarah terlebih dahulu, 
              dan jika tidak tercapai akan diselesaikan di pengadilan yang berwenang di Bogor, 
              Jawa Barat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Hubungi Kami</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
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
