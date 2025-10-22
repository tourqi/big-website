// util kecil yg dipakai lintas-komponen
export const toIDR = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

export const cls = (...xs) => xs.filter(Boolean).join(" ");

// sentinel Select (hindari value="")
export const ALL = "ALL";
export const toSelectValue = (v) => (v && String(v).length > 0 ? v : ALL);
export const fromSelectValue = (v) => (v === ALL ? "" : v);
