import * as React from "react";

function BadgeBase({ className = "", variant = "default", ...props }) {
  const base = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold";
  const variants = {
    default: "bg-zinc-900 text-white",
    secondary: "bg-zinc-100 text-zinc-900",
    outline: "border border-zinc-200 text-zinc-900",
  };
  return <span className={`${base} ${variants[variant] || ""} ${className}`} {...props} />;
}

export { BadgeBase as Badge };
export default BadgeBase;
