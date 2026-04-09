// src/lib/format.js
// Utility functions yang dipakai lintas-komponen.

/** Format angka ke Rupiah */
export const toIDR = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

/** Gabung className secara kondisional */
export const cls = (...xs) => xs.filter(Boolean).join(" ");

// Sentinel untuk <Select> agar menghindari value=""
export const ALL = "ALL";
export const toSelectValue   = (v) => (v && String(v).length > 0 ? v : ALL);
export const fromSelectValue = (v) => (v === ALL ? "" : v);