import * as React from "react";

function InputBase({ className = "", type = "text", ...props }, ref) {
  return (
    <input
      type={type}
      ref={ref}
      className={
        "flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm " +
        "placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-50 " +
        className
      }
      {...props}
    />
  );
}

const Input = React.forwardRef(InputBase);

export { Input };
export default Input;
