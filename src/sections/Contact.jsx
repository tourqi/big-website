// src/sections/Contact.jsx
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card.jsx";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Check,
} from "lucide-react";

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.55V6.79a4.85 4.85 0 01-1.02-.1z" />
  </svg>
);

const WA_PHONE = "6282145756660"; // <- ganti dengan nomor kamu (format 62... tanpa +)

// TODO: Ganti href dengan URL sosmed asli brand-mu
const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/bogorinteriorgarage", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com/profile.php?id=61578863730897", icon: Facebook },
  { name: "TikTok", href: "https://tiktok.com/@bogorinteriorgarage", icon: TikTokIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/bogorinteriorgarage", icon: Linkedin },
];

// Validation functions
const validateEmail = (email) => {
  if (!email) return null; // email opsional
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? null : "Email tidak valid";
};

const validatePhone = (phone) => {
  if (!phone) return "Nomor WhatsApp wajib diisi";
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.length < 10) return "Nomor WhatsApp terlalu pendek (min 10 digit)";
  if (digits.length > 15) return "Nomor WhatsApp terlalu panjang (max 15 digit)";
  return null;
};

const validateName = (name) => {
  if (!name.trim()) return "Nama wajib diisi";
  if (name.trim().length < 2) return "Nama minimal 2 karakter";
  return null;
};

const validateMessage = (message) => {
  if (!message.trim()) return null; // opsional
  if (message.trim().length < 5) return "Pesan minimal 5 karakter";
  return null;
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residensial",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    // Clear error saat user mulai typing
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = null;
    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }
    setErrors((e) => ({ ...e, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    newErrors.name = validateName(form.name);
    newErrors.email = validateEmail(form.email);
    newErrors.phone = validatePhone(form.phone);
    newErrors.message = validateMessage(form.message);

    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, message: true, projectType: true });

    return !Object.values(newErrors).some((e) => e !== null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulasi delay (remove ini jika using real API nanti)
    setTimeout(() => {
      const text = buildMessage(form);
      const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;

      // buka WhatsApp (tab baru kalau desktop)
      window.open(url, "_blank");

      // Show success message
      setShowSuccess(true);

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "Residensial",
        message: "",
      });
      setErrors({});
      setTouched({});

      // Hide success after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);

      setIsLoading(false);
    }, 500);
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
                href="mailto:peshasuryaconstruction@gmail.com"
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
              {/* Success notification */}
              {showSuccess && (
                <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium text-green-900 text-sm">
                      Pesan terkirim!
                    </p>
                    <p className="text-xs text-green-700 mt-1">
                      Terima kasih telah menghubungi kami. Kami akan merespons dalam 1×24 jam.
                    </p>
                  </div>
                </div>
              )}

              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium">
                    Nama {errors.name && "(required)"}
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 transition-all ${
                      errors.name && touched.name
                        ? "border-red-400 bg-red-50 focus:ring-red-500"
                        : "border-gray-300 focus:ring-black"
                    }`}
                    placeholder="Nama lengkap"
                  />
                  {errors.name && touched.name && (
                    <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      onBlur={onBlur}
                      className={`mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 transition-all ${
                        errors.email && touched.email
                          ? "border-red-400 bg-red-50 focus:ring-red-500"
                          : "border-gray-300 focus:ring-black"
                      }`}
                      placeholder="email@domain.com"
                    />
                    {errors.email && touched.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      Telepon (WhatsApp) {errors.phone && touched.phone && "(required)"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => {
                        const normalized = to62(e.target.value);
                        setForm((s) => ({ ...s, phone: normalized }));
                        if (touched.phone) {
                          validateField("phone", normalized);
                        }
                      }}
                      onBlur={onBlur}
                      className={`mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone && touched.phone
                          ? "border-red-400 bg-red-50 focus:ring-red-500"
                          : "border-gray-300 focus:ring-black"
                      }`}
                      placeholder="62xxxxxxxxxxx"
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Jenis Proyek</label>
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
                  <label className="text-sm font-medium">Pesan</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 transition-all ${
                      errors.message && touched.message
                        ? "border-red-400 bg-red-50 focus:ring-red-500"
                        : "border-gray-300 focus:ring-black"
                    }`}
                    placeholder="Ceritakan kebutuhan Anda (ukuran ruangan, gaya yang disukai, estimasi budget, dll.)"
                  />
                  {errors.message && touched.message && (
                    <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="text-xs text-gray-500">
                    Dengan klik kirim, Anda akan diarahkan ke WhatsApp.
                  </div>
                  <Button
                    type="submit"
                    className="justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Kirim via WhatsApp"}
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
