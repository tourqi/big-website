import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { KITCHEN_SET_LIST_DESIGNS } from "@/data/kitchenSetListDesigns";
import { BOARD_OPTIONS, HPL_BRAND_OPTIONS } from "@/data/materialOptions";

const MATERIAL_IMAGES = {
  board: "https://miro.medium.com/v2/1*XQQ6Ujpj2RqwsPFdzFZTWg.jpeg",
  finishing: "https://oggifurniture.com/wp-content/uploads/2023/02/Rea-Kitchen-Base-Cabinet-3D.jpg",
  worktop:
    "https://media.dekoruma.com/article/2021/03/25131927/material-table-top-granit-min.jpg?fit=300%2C235&ssl=1",
  hardware:
    "https://kitchenset.id/wp-content/uploads/2024/04/jenis-engsel-sendok-kitchen-set-1.webp",
};

function MaterialCard({ title, items, image, optionsTitle, options }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={`${title} material`}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/catalogue/placeholder.jpg";
            }}
          />
        </div>
      ) : null}

      <div className="p-4">
        <div className="text-sm font-semibold">{title}</div>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          {items.map((text) => (
            <li key={text} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        {options?.length ? (
          <div className="mt-5">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              {optionsTitle || "Opsi"}
            </div>
            <div className="mt-3 space-y-3">
              {options.map((opt) => {
                const primarySrc = opt.image || opt.fallbackImage || "/catalogue/placeholder.jpg";
                const fallbackSrc = opt.image
                  ? (opt.fallbackImage || "/catalogue/placeholder.jpg")
                  : "/catalogue/placeholder.jpg";

                return (
                  <div
                    key={opt.key || opt.name}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      <img
                        src={primarySrc}
                        alt={`${opt.name} thumbnail`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        data-fallback-src={fallbackSrc}
                        onError={(e) => {
                          const fallback = e.currentTarget.dataset.fallbackSrc;

                          // If the "real" image is missing, fall back to the dummy image first,
                          // then to the generic placeholder.
                          if (fallback && e.currentTarget.dataset.fallbackUsed !== "1") {
                            e.currentTarget.dataset.fallbackUsed = "1";
                            e.currentTarget.src = fallback;
                            return;
                          }

                          e.currentTarget.src = "/catalogue/placeholder.jpg";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-base font-semibold text-slate-900">{opt.name}</div>
                      {opt.summary ? (
                        <p className="mt-2 text-sm text-slate-500">{opt.summary}</p>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function KitchenSetDesignDetailPage() {
  const { designSlug } = useParams();

  const design = useMemo(() => {
    return KITCHEN_SET_LIST_DESIGNS.find((item) => item.slug === designSlug);
  }, [designSlug]);

  if (!design) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 pt-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold">Detail design tidak ditemukan</h1>
          <p className="mt-2 text-sm text-slate-500">
            Detail design kitchen set ini belum tersedia. Silakan kembali ke halaman kitchen set.
          </p>
          <Link
            to="/catalogue/kitchen-set"
            className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-50"
          >
            <ArrowLeft size={16} /> Kembali ke Kitchen Set
          </Link>
        </div>
      </main>
    );
  }

  const materials = design.materials || {};
  const showHplBrands =
    Array.isArray(materials.finishing) &&
    materials.finishing.some((text) => String(text).toLowerCase().includes("hpl"));

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 pt-24">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">KITCHEN SET</p>
          <h1 className="mt-1 text-3xl font-semibold">{design.title}</h1>
          <p className="mt-2 text-sm text-slate-500">{design.summary}</p>
        </div>

        <Link
          to="/catalogue/kitchen-set"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-50"
        >
          <ArrowLeft size={16} /> Kembali
        </Link>
      </header>

      <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <img
            src={design.image || "/catalogue/placeholder.jpg"}
            alt={design.title}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/catalogue/placeholder.jpg";
            }}
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold">Material yang digunakan</h2>
          <p className="mt-2 text-sm text-slate-500">
            Berikut panduan material untuk {design.title}. Anda bisa jadikan ini sebagai referensi awal sebelum konsultasi.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {materials.board?.length ? (
              <MaterialCard
                title="Board"
                items={materials.board}
                image={MATERIAL_IMAGES.board}
                optionsTitle="Opsi Board"
                options={BOARD_OPTIONS}
              />
            ) : null}
            {materials.finishing?.length ? (
              <MaterialCard
                title="Finishing"
                items={materials.finishing}
                image={MATERIAL_IMAGES.finishing}
                optionsTitle={showHplBrands ? "Brand HPL" : "Brand HPL (opsional)"}
                options={HPL_BRAND_OPTIONS}
              />
            ) : null}
            {materials.worktop?.length ? (
              <MaterialCard
                title="Worktop"
                items={materials.worktop}
                image={MATERIAL_IMAGES.worktop}
              />
            ) : null}
            {materials.hardware?.length ? (
              <MaterialCard
                title="Hardware & Accessories"
                items={materials.hardware}
                image={MATERIAL_IMAGES.hardware}
              />
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
