// src/sections/Testimonials.jsx
import React, { useMemo, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card.jsx";            // jika alias @ belum aktif → "../components/ui/Card.jsx"
import Modal from "@/components/Modal.jsx";                               // jika alias @ belum aktif → "../components/Modal.jsx"
import { TESTIMONIALS } from "@/data/testimonials.js";                    // nanti diisi datanya

function Stars({ value = 5, className = "" }) {
  return (
    <div className={"flex items-center gap-1 " + className}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            "h-4 w-4 " + (i < value ? "fill-yellow-400 text-yellow-400" : "text-gray-300")
          }
        />
      ))}
    </div>
  );
}

function Avatar({ src, name, className = "h-10 w-10" }) {
  return (
    <img
      src={src}
      alt={name}
      className={`${className} rounded-full object-cover ring-1 ring-black/5`}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
          name || "Client"
        )}&background=111827&color=fff&size=64`;
      }}
    />
  );
}

export default function Testimonials() {
  const [activeId, setActiveId] = useState(null);
  const active = useMemo(() => TESTIMONIALS.find((t) => t.id === activeId), [activeId]);

  const big = TESTIMONIALS.find((t) => t.variant === "big");
  const wide = TESTIMONIALS.find((t) => t.variant === "wide");
  const smalls = TESTIMONIALS.filter((t) => t.variant?.startsWith("small"));

  const CardShell = ({ children, dark = false, onClick, ariaLabel }) => (
    <Card
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.()}
      className={
        "cursor-pointer rounded-3xl transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brandAccent " +
        (dark ? "bg-gray-900 text-white" : "bg-white")
      }
    >
      <CardContent className="p-7 md:p-8">{children}</CardContent>
    </Card>
  );

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-brandAccent/15 text-brandAccent">
            Testimoni
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Cerita Nyata dari Klien Kami</h2>
          <p className="mt-2 text-gray-600">
            Cerita nyata dari klien kami—tentang proses yang rapi, hasil yang presisi, dan layanan yang bisa dipercaya.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 md:auto-rows-[1fr]">
          {/* LEFT big */}
          {big ? (
            <CardShell ariaLabel={`Buka testimoni ${big.name}`} onClick={() => setActiveId(big.id)}>
              {big.stat ? (
                <div className="text-6xl md:text-7xl font-extrabold tracking-tight">{big.stat}</div>
              ) : null}
              {big.title ? <div className="mt-2 text-lg font-semibold">{big.title}</div> : null}

              <div className="mt-6 relative">
                <Quote className={"absolute -left-2 -top-1 h-5 w-5 text-brandAccent/70"} />
                <p className="pl-6 leading-relaxed text-gray-700">{big.quote}</p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar src={big.avatar} name={big.name} />
                  <div>
                    <div className="font-semibold">{big.name}</div>
                    <div className="text-sm text-gray-500">{big.role}</div>
                  </div>
                </div>
                <Stars value={big.rating} />
              </div>
            </CardShell>
          ) : (
            <div className="hidden md:block" />
          )}

          {/* RIGHT column (wide + smalls) */}
          <div className="grid gap-6">
            {/* top: wide */}
            {wide ? (
              <CardShell ariaLabel={`Buka testimoni ${wide.name}`} onClick={() => setActiveId(wide.id)}>
                <div className="text-xl font-bold">
                  {wide.stat ? `${wide.stat} ` : ""}
                  <span className="font-semibold">{wide.title}</span>
                </div>
                <div className="mt-4 relative">
                  <Quote className="absolute -left-2 -top-1 h-5 w-5 text-brandAccent/70" />
                  <p className="pl-6 text-gray-700">{wide.quote}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar src={wide.avatar} name={wide.name} className="h-9 w-9" />
                    <div>
                      <div className="font-semibold">{wide.name}</div>
                      <div className="text-xs text-gray-500">{wide.role}</div>
                    </div>
                  </div>
                  <Stars value={wide.rating} />
                </div>
              </CardShell>
            ) : null}

            {/* bottom: two smalls */}
            <div className="grid sm:grid-cols-2 gap-6">
              {smalls.map((t) => {
                const dark = t.variant === "small-dark";
                return (
                  <CardShell
                    key={t.id}
                    dark={dark}
                    ariaLabel={`Buka testimoni ${t.name}`}
                    onClick={() => setActiveId(t.id)}
                  >
                    <div className="relative">
                      <Quote
                        className={
                          "absolute -left-2 -top-1 h-5 w-5 " +
                          (dark ? "text-white/60" : "text-brandAccent/70")
                        }
                      />
                      <p className={(dark ? "text-white/90" : "text-gray-700") + " pl-6"}>
                        {t.quote}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <Avatar src={t.avatar} name={t.name} className="h-9 w-9" />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className={"text-xs " + (dark ? "text-white/70" : "text-gray-500")}>
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </CardShell>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DETAIL */}
      <Modal open={!!active} onClose={() => setActiveId(null)}>
        {active && (
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Avatar src={active.avatar} name={active.name} className="h-12 w-12" />
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold truncate">{active.name}</h3>
                <p className="text-sm text-gray-500 truncate">{active.role}</p>
              </div>
              <Stars value={active.rating} />
            </div>

            {active.images?.length ? (
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {active.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`image ${i + 1}`}
                    className="rounded-xl object-cover w-full h-40"
                    loading="lazy"
                  />
                ))}
              </div>
            ) : null}

            <p className="mt-6 leading-relaxed text-gray-700">
              {active.details || active.quote}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
}