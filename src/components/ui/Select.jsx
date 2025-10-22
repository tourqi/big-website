import * as React from "react";

/**
 * Komponen Select kompatibel shadcn (versi sederhana):
 * - Abaikan <SelectTrigger> (hanya dipakai untuk ambil placeholder dari <SelectValue>)
 * - Ambil opsi dari dalam <SelectContent><SelectItem/></SelectContent>
 * - Render ke <select> native
 */

export function Select({ value = "", onValueChange, children, className = "" }) {
  // Kumpulkan placeholder & items dari anak-anak
  const items = [];
  let placeholder = "";

  React.Children.forEach(children, (child) => {
    if (!child || typeof child !== "object") return;

    // Ambil placeholder dari <SelectTrigger><SelectValue placeholder="..." /></SelectTrigger>
    if (child.type && child.type.__selectRole === "trigger") {
      React.Children.forEach(child.props.children, (sub) => {
        if (sub?.type && sub.type.__selectRole === "value") {
          placeholder = sub.props.placeholder || "";
        }
      });
    }

    // Ambil item dari <SelectContent><SelectItem value="...">Label</SelectItem></SelectContent>
    if (child.type && child.type.__selectRole === "content") {
      React.Children.forEach(child.props.children, (item) => {
        if (item?.type && item.type.__selectRole === "item") {
          items.push({ value: String(item.props.value ?? ""), label: item.props.children });
        }
      });
    }
  });

  return (
    <select
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      className={
        "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm " +
        "focus:outline-none focus:ring-2 focus:ring-emerald-500 " +
        "disabled:cursor-not-allowed disabled:opacity-50 " +
        className
      }
    >
      {/* placeholder sebagai opsi kosong */}
      {placeholder ? <option value="">{placeholder}</option> : null}
      {items.map((it) => (
        <option key={it.value} value={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
}

// “Shell” yang kompatibel dengan struktur shadcn
export function SelectTrigger({ children }) {
  return null; // tidak dirender; hanya dipakai untuk baca placeholder
}
SelectTrigger.__selectRole = "trigger";

export function SelectValue({ placeholder = "" }) {
  return null; // tidak dirender; nilai placeholder dibaca oleh <Select/>
}
SelectValue.__selectRole = "value";

export function SelectContent({ children }) {
  return <>{children}</>; // kontainer logis
}
SelectContent.__selectRole = "content";

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>; // jika dirender langsung
}
SelectItem.__selectRole = "item";
