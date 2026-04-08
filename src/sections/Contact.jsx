// src/sections/Contact.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card.jsx";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const WA_PHONE = "6282145756660"; // <- ganti dengan nomor kamu (format 62... tanpa +)

// TODO: Ganti href dengan URL sosmed asli brand-mu
const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/bogorinteriorgarage", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com/profile.php?id=61578863730897", icon: Facebook },
  { name: "TikTok", href: "https://youtube.com/@bogorinteriorgarage", icon: Youtube },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/bogorinteriorgarage", icon: Linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residensial",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const to62 = (raw) => {
    // normalisasi no HP ke format 62
    let s = (raw || "").replace(/[^\d]/g, "");
    if (s.startsWith("0")) s = "62" + s.slice(1);
    if (!s.startsWith("62")) s = "62" + s; // fallback
    return s;
  };

  const buildMessage = (data) => {
    const lines = [
      "Halo BIG, saya ingin konsultasi desain interior.",
      "",
      `Nama           : ${data.name || "-"}`,
      `Email          : ${data.email || "-"}`,
      `Telepon        : ${data.phone || "-"}`,
      `Jenis Proyek   : ${data.projectType || "-"}`,
      "",
      "Detail Kebutuhan:",
      data.message || "-",
    ];
    return lines.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validasi minimal
    if (!form.name || !form.phone) {
      alert("Nama dan Telepon wajib diisi.");
      return;
    }

    const text = buildMessage(form);
    const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;

    // buka WhatsApp (tab baru kalau desktop)
    window.open(url, "_blank");
  };

  const quickWaLink = () => {
    const text = encodeURIComponent("Halo BIG, saya ingin konsultasi desain interior.");
    return `https://wa.me/${WA_PHONE}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Kontak Kami</h2>
            <p className="mt-4 text-gray-600">
              Sampaikan kebutuhan Anda. Kami akan kembali dalam 1×24 jam.
            </p>

            {/* Contact details with icons */}
            <div className="mt-6 grid gap-3 text-sm text-gray-700">
              <a
                href={`tel:+${WA_PHONE}`}
                className="flex items-center gap-3 hover:text-black transition-colors"
                aria-label="Telepon kami"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200">
                  <Phone size={16} aria-hidden="true" />
                </span>
                <span>+62 821-4575-6660</span>
              </a>

              <a
                href="mailto:hello@big-interior.id"
                className="flex items-center gap-3 hover:text-black transition-colors"
                aria-label="Email kami"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200">
                  <Mail size={16} aria-hidden="true" />
                </span>
                <span>peshasuryaconstruction@gmail.com</span>
              </a>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200">
                  <MapPin size={16} aria-hidden="true" />
                </span>
                <span>Lingkungan 02 Citatah Dalam,  Kec. Cibinong, Kab. Bogor, Jawa Barat 16918</span>
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={quickWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium rounded-xl border border-gray-300 px-3 py-2 hover:bg-gray-50"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Chat via WhatsApp
                </a>
              </div>
            </div>

            {/* Social media */}
            <div className="mt-8">
              <span className="block text-sm font-medium text-gray-900 mb-3">
                Ikuti kami
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {SOCIALS.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 hover:border-gray-300"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="text-sm text-gray-700 group-hover:text-black">
                      {name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-sm">
            <CardContent>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm">Nama</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Nama lengkap"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="email@domain.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Telepon (Whatsapp)</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, phone: to62(e.target.value) }))
                      }
                      required
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="62xxxxxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm">Jenis Proyek</label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={onChange}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option>Residensial</option>
                    <option>Komersial</option>
                    <option>Hospitality</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm">Pesan</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Ceritakan kebutuhan Anda (ukuran ruangan, gaya yang disukai, estimasi budget, dll.)"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="text-xs text-gray-500">
                    Dengan klik kirim, Anda akan diarahkan ke WhatsApp.
                  </div>
                  <Button type="submit" className="justify-center">
                    Kirim via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
