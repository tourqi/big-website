// src/sections/About.jsx
import React from "react";

export default function About() {
  const stats = [
    { value: "100+", label: "Proyek interior terselesaikan" },
    { value: "20+", label: "Partner & vendor terpercaya" },
    { value: "99%", label: "Klien puas dengan hasil kami" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-wide text-brandAccent font-semibold">
              Tentang Kami
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Dari Workshop Kecil ke Proyek Besar
            </h2>
            <p className="mt-4 text-gray-600 max-w-prose">
              Kami berawal dari sebuah workshop sederhana dan kini telah
              berkembang menjadi tim profesional yang fokus pada desain interior,
              furnitur custom, dan konstruksi. Dengan pengalaman di berbagai
              proyek rumah, kantor, hingga kafe, kami selalu menjaga kualitas,
              ketepatan waktu, dan transparansi harga.
            </p>

            {/* Stats */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-extrabold text-gray-900 border-b-4 border-brandAccent inline-block pb-2">
                    {s.value}
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://us.images.westend61.de/0000636918pw/interior-of-a-carpenters-workshop-JUBF000017.jpg"
                alt="Interior project"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
