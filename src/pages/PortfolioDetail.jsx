// src/pages/PortfolioDetail.jsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects.js";
import Lightbox from "@/components/Lightbox.jsx";
import { PLACEHOLDER_SRC, handleImageError } from "@/lib/imageHandlers";

export default function PortfolioDetail() {
  const { id } = useParams();
  const all = PROJECTS;

  const project = useMemo(() => all.find((p) => p.id === id), [all, id]);

  // Lightbox state
  const [lbOpen, setLbOpen] = useState(false);
  const [lbList, setLbList] = useState([]);
  const [lbIndex, setLbIndex] = useState(0);

  const openLightbox = (list, index = 0) => {
    const images = (list || []).filter(Boolean);
    if (!images.length) return;
    setLbList(images);
    setLbIndex(index);
    setLbOpen(true);
  };

  if (!project) {
    return (
      <div className="pt-24 p-6">
        <p>Project tidak ditemukan.</p>
        <Link to="/" className="text-brand underline">Kembali</Link>
      </div>
    );
  }

  // cari prev/next untuk navigasi bawah
  const idx = all.findIndex((p) => p.id === project.id);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Cover Notion-like (klik untuk lightbox) */}
      <div className="w-full">
        <div className="mx-auto max-w-6xl">
          <div className="group relative aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] overflow-hidden rounded-none md:rounded-3xl bg-gray-100">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] cursor-zoom-in"
              loading="lazy"
              decoding="async"
              onClick={() => openLightbox([project.cover, ...(project.images || [])], 0)}
              onError={(e) => handleImageError(e, PLACEHOLDER_SRC)}
            />
            <div className="pointer-events-none absolute inset-0 rounded-none md:rounded-3xl ring-1 ring-black/5" />
          </div>
        </div>
      </div>

      {/* Header + meta */}
      <header className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0 mt-8">
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">← Kembali ke Portfolio</Link>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">{project.title}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="px-2.5 py-1 rounded-full bg-gray-100">{project.category}</span>
          {project.tags?.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-brandAccent/10 text-brandAccent">{t}</span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div><div className="text-gray-500">Client</div><div className="font-medium">{project.client}</div></div>
          <div><div className="text-gray-500">Year</div><div className="font-medium">{project.year}</div></div>
          <div><div className="text-gray-500">Location</div><div className="font-medium">{project.location}</div></div>
          <div><div className="text-gray-500">Scope</div><div className="font-medium">Design & Build</div></div>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">{project.summary}</p>
      </header>

      {/* Body: 2 kolom (konten + TOC sticky) */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10">
          {/* Konten utama */}
          <article className="max-w-3xl">
            {project.sections?.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="mt-10 text-2xl md:text-3xl font-semibold">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-gray-700">{s.body}</p>

                {/* gallery per section (opsional) */}
                {s.gallery?.length ? (
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {s.gallery.map((src, i) => (
                      <div key={i} className="relative group rounded-2xl overflow-hidden bg-gray-100">
                        <img
                          src={src}
                          alt="Gallery image"
                          className="rounded-2xl w-full h-56 object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                          loading="lazy"
                          decoding="async"
                          onClick={() => openLightbox(s.gallery, i)}
                          onError={(e) => handleImageError(e, PLACEHOLDER_SRC)}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}

            {/* gallery umum (opsional) */}
            {project.images?.length ? (
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {project.images.map((src, i) => (
                  <div key={i} className="relative group rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={src}
                      alt="Project image"
                      className="rounded-2xl w-full h-56 object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                      onClick={() => openLightbox(project.images, i)}
                      onError={(e) => handleImageError(e, PLACEHOLDER_SRC)}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
                  </div>
                ))}
              </div>
            ) : null}
          </article>

          {/* TOC Sticky ala Notion */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-gray-200 p-4">
              <div className="text-sm font-semibold text-gray-900">On this page</div>
              <nav className="mt-3 grid gap-2 text-sm">
                {project.sections?.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-gray-600 hover:text-gray-900">
                    {s.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-12 border-t border-gray-200 pt-6 grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link to={`/portfolio/${prev.id}`} className="block rounded-2xl border p-4 hover:shadow-sm">
              <div className="text-xs text-gray-500">Sebelumnya</div>
              <div className="font-medium">{prev.title}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/portfolio/${next.id}`} className="block rounded-2xl border p-4 text-right hover:shadow-sm">
              <div className="text-xs text-gray-500">Berikutnya</div>
              <div className="font-medium">{next.title}</div>
            </Link>
          ) : <div />}
        </div>

        {/* CTA akhir */}
        <div className="mt-12 mb-20 rounded-3xl bg-black text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-medium">Suka dengan hasil kami? Diskusikan proyek Anda.</div>
          <a href="/#contact" className="inline-flex items-center rounded-full bg-white text-black px-5 py-3">
            Konsultasi Gratis
          </a>
        </div>
      </main>

      {/* LIGHTBOX */}
      <Lightbox
        open={lbOpen}
        images={lbList}
        startIndex={lbIndex}
        onClose={() => setLbOpen(false)}
      />
    </div>
  );
}
