// src/components/ui/Card.jsx
import React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      {...props}
      className={`rounded-3xl border border-gray-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }) {
  return (
    <div {...props} className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }) {
  return (
    <h3 {...props} className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ className = "", children, ...props }) {
  return (
    <p {...props} className={`text-sm text-zinc-500 ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div {...props} className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children, ...props }) {
  return (
    <div {...props} className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

// opsional: dukung default import
export default Card;
