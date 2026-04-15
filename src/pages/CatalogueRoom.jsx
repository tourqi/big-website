import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { ROOM_CATEGORIES } from "@/data/roomCatalogue";
import { KITCHEN_SET_LIST_DESIGNS } from "@/data/kitchenSetListDesigns";

const DESIGN_TYPE_OPTIONS = ["List Detail", "Detail Technical", "Concept Note"];

export default function CatalogueRoomPage() {
  const { roomSlug } = useParams();

  const room = useMemo(() => {
    return ROOM_CATEGORIES.find((item) => item.slug === roomSlug);
  }, [roomSlug]);

  const [designs, setDesigns] = useState(() => room?.designs?.map((d) => ({ ...d })) ?? []);
  const [newDesign, setNewDesign] = useState({
    label: "List Design",
    type: "List Detail",
    description: "",
  });

  useEffect(() => {
    setDesigns(room?.designs?.map((d) => ({ ...d })) ?? []);
    setNewDesign({ label: "List Design", type: "List Detail", description: "" });
  }, [roomSlug, room]);

  if (!room) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 pt-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold">Kategori tidak ditemukan</h1>
          <p className="mt-2 text-sm text-slate-500">
            Kategori katalog ini belum tersedia. Silakan kembali ke halaman katalog.
          </p>
          <Link
            to="/catalogue"
            className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-50"
          >
            <ArrowLeft size={16} /> Kembali ke Katalog
          </Link>
        </div>
      </main>
    );
  }

  if (room.slug === "kitchen-set") {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 pt-24">
        <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">KATALOG</p>
            <h1 className="mt-1 text-3xl font-semibold">{room.name}</h1>
            <p className="mt-2 text-sm text-slate-500">{room.tag}</p>
          </div>

          <Link
            to="/catalogue"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-50"
          >
            <ArrowLeft size={16} /> Kembali
          </Link>
        </header>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">List Design</h2>
              <p className="mt-2 text-sm text-slate-500">
                Pilih salah satu list design di bawah untuk masuk ke detail design dan melihat rekomendasi material.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {KITCHEN_SET_LIST_DESIGNS.map((design) => (
              <Link
                key={design.slug}
                to={`/catalogue/kitchen-set/${design.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:border-emerald-400 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={design.image || "/catalogue/placeholder.jpg"}
                    alt={design.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/catalogue/placeholder.jpg";
                    }}
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold">{design.title}</div>
                      <div className="mt-2 text-sm text-slate-500">{design.summary}</div>
                    </div>
                    <ArrowRight className="mt-1 text-emerald-500 opacity-0 transition group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    );
  }

  const onChangeDesign = (id, field, value) => {
    setDesigns((prev) => prev.map((d) => (d.id === id ? { ...d, [field]: value } : d)));
  };

  const onAddDesign = (event) => {
    event.preventDefault();
    if (!newDesign.description.trim()) return;

    setDesigns((prev) => [
      ...prev,
      {
        id: `${room.slug}-${Date.now()}`,
        label: newDesign.label || "List Design",
        type: newDesign.type,
        description: newDesign.description,
      },
    ]);

    setNewDesign({ label: "List Design", type: "List Detail", description: "" });
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 pt-24">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">KATALOG</p>
          <h1 className="mt-1 text-3xl font-semibold">{room.name}</h1>
          <p className="mt-2 text-sm text-slate-500">{room.tag}</p>
        </div>

        <Link
          to="/catalogue"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-50"
        >
          <ArrowLeft size={16} /> Kembali
        </Link>
      </header>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">List Design</h2>
        <p className="mt-2 text-sm text-slate-500">
          Anda bisa edit judul, jenis, dan keterangan setiap list. (Saat ini masih tersimpan sementara di browser.)
        </p>

        <div className="mt-6 space-y-4">
          {designs.map((design) => (
            <div
              key={design.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <div className="grid gap-3 md:grid-cols-2">
                <label className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Judul
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm"
                    value={design.label}
                    onChange={(e) => onChangeDesign(design.id, "label", e.target.value)}
                  />
                </label>

                <label className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Jenis
                  <select
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm"
                    value={design.type}
                    onChange={(e) => onChangeDesign(design.id, "type", e.target.value)}
                  >
                    {DESIGN_TYPE_OPTIONS.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="mt-3 block text-xs uppercase tracking-[0.3em] text-slate-500">
                Keterangan
                <textarea
                  className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm"
                  rows={3}
                  value={design.description}
                  onChange={(e) => onChangeDesign(design.id, "description", e.target.value)}
                />
              </label>
            </div>
          ))}
        </div>

        <form
          onSubmit={onAddDesign}
          className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-4"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-sm font-semibold">Tambah list design baru</h3>
              <p className="mt-1 text-sm text-slate-500">
                Isi keterangan untuk menyimpan item.
              </p>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              <Plus size={16} /> Tambah
            </button>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Judul
              <input
                className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm"
                value={newDesign.label}
                onChange={(e) => setNewDesign((prev) => ({ ...prev, label: e.target.value }))}
              />
            </label>

            <label className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Jenis
              <select
                className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm"
                value={newDesign.type}
                onChange={(e) => setNewDesign((prev) => ({ ...prev, type: e.target.value }))}
              >
                {DESIGN_TYPE_OPTIONS.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-3 block text-xs uppercase tracking-[0.3em] text-slate-500">
            Keterangan
            <textarea
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm"
              rows={3}
              value={newDesign.description}
              onChange={(e) =>
                setNewDesign((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </label>
        </form>
      </section>
    </main>
  );
}
