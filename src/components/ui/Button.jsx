import * as React from "react";

function ButtonBase({
  asChild = false,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    ghost: "bg-transparent hover:bg-zinc-100",
    outline: "border border-zinc-300 hover:bg-zinc-50",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-base",
  };

  const cls = [base, variants[variant] || variants.default, sizes[size] || sizes.md, className]
    .filter(Boolean)
    .join(" ");

  const Comp = asChild ? "span" : "button";
  return <Comp className={cls} {...props} />;
}

// Named export
export { ButtonBase as Button };
// Default export
export default ButtonBase;
