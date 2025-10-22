import * as React from "react";

/**
 * Slider kompatibel API shadcn sederhana.
 * - Menerima value array: [minValue] atau [minValue, maxValue]
 * - onValueChange dipanggil dengan array yang sama bentuknya
 * - UI: dua <input type="range"> jika 2 nilai; satu jika 1 nilai
 */

export function Slider({
  value = [0, 100],
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  className = "",
}) {
  const isRange = Array.isArray(value) && value.length > 1;
  const [v1, v2] = Array.isArray(value) ? value : [value?.[0] ?? min, undefined];

  const update = (next) => {
    onValueChange?.(next);
  };

  const handleChange1 = (e) => {
    const n = clamp(parseFloat(e.target.value), min, isRange ? Math.min(v2 ?? max, max) : max);
    if (isRange) update([Math.min(n, v2 ?? max), v2 ?? max]);
    else update([n]);
  };

  const handleChange2 = (e) => {
    const n = clamp(parseFloat(e.target.value), isRange ? v1 ?? min : min, max);
    update([v1 ?? min, Math.max(n, v1 ?? min)]);
  };

  return (
    <div className={"flex items-center gap-2 " + className}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sanitizeNumber(v1, min)}
        onChange={handleChange1}
        className="w-full h-2 rounded-lg bg-zinc-200 accent-emerald-500 cursor-pointer"
      />
      {isRange && (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={sanitizeNumber(v2, max)}
          onChange={handleChange2}
          className="w-full h-2 rounded-lg bg-zinc-200 accent-emerald-500 cursor-pointer"
        />
      )}
    </div>
  );
}

function clamp(n, a, b) {
  const x = Number.isFinite(n) ? n : a;
  return Math.min(Math.max(x, a), b);
}
function sanitizeNumber(n, fallback) {
  return Number.isFinite(n) ? n : fallback;
}
