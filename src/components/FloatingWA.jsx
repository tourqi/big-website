import React from "react";
import { createPortal } from "react-dom";

// Ganti nomor & pesan
const PHONE = "6282145756660";
const MESSAGE = encodeURIComponent(
  "Halo BIG, saya mau konsultasi desain interior. Bisa dibantu?"
);

export default function FloatingWA({ phone = PHONE, text = MESSAGE }) {
  const href = `https://wa.me/${phone}?text=${text}`;

  const node = (
    <div
      // z super tinggi + pointer-events aman
      className="fixed z-[99999] right-4 bottom-4 sm:right-6 sm:bottom-6"
      // hindari ke-clipping pada iOS safe-area
      style={{
        right: `max(1rem, env(safe-area-inset-right))`,
        bottom: `max(1rem, env(safe-area-inset-bottom))`,
      }}
    >
      {/* Tooltip desktop */}
      <div className="hidden sm:block mb-2 mr-1 rounded-full bg-black/80 text-white text-xs px-3 py-1 shadow">
        Chat via WhatsApp
      </div>

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp BIG"
        className="group relative inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all px-4 py-3"
      >
        {/* pulse ring */}
        <span className="absolute -z-10 inset-0 rounded-full animate-ping bg-[#25D366]/30"></span>

        {/* WA icon */}
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.06a5.6 5.6 0 0 1-2.02-.39c-.32-.12-.73-.27-1.26-.53-2.22-1.12-3.66-3.13-4.01-3.65-.35-.52-.96-1.38-.96-2.43 0-1.05.61-1.56.83-1.77.22-.21.48-.26.64-.26h.46c.15 0 .35-.03.54.41.19.44.65 1.52.71 1.63.06.11.1.24.02.39-.08.15-.12.24-.23.37-.11.13-.24.3-.35.4-.12.1-.25.22-.11.45.14.23.64 1.06 1.38 1.72.95.85 1.76 1.12 1.99 1.24.23.12.36.1.5-.06.14-.16.57-.66.72-.89.15-.23.31-.19.52-.11.21.08 1.31.61 1.54.72.23.11.38.17.44.27.06.1.06.58-.14 1.14-.2.56-.98 1.06-1.34 1.12-.36.06-.8.08-1.12.08ZM26.76 5.24A12.75 12.75 0 0 0 5.1 24.49l-1.86 6.24 6.39-1.68a12.74 12.74 0 0 0 19.13-14.8 12.7 12.7 0 0 0-1.99-4.99Zm-1.58 15.29a10.33 10.33 0 0 1-14.05 3.82l-.34-.2-3.8 1 .99-3.48-.22-.36a10.33 10.33 0 1 1 17.42-0.8Z"/>
        </svg>

        {/* label */}
        <span className="hidden sm:block text-sm font-semibold">Konsultasi Gratis</span>
        <span className="sm:hidden text-sm font-semibold">Chat</span>
      </a>
    </div>
  );

  // Render langsung ke body supaya tidak terpengaruh parent
  return createPortal(node, document.body);
}
