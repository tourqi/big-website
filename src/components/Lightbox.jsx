import React, { useEffect, useMemo, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

export default function Lightbox({ images = [], startIndex = 0, open, onClose }) {
  const [index, setIndex] = useState(startIndex || 0);
  const [zoom, setZoom] = useState(false);
  const wrap = useRef(null);
  const startTouch = useRef(null);

  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const has = safeImages.length > 0;
  const src = has ? safeImages[index % safeImages.length] : null;

  useEffect(() => setIndex(startIndex || 0), [startIndex, open]);
  useEffect(() => setZoom(false), [index, open]);

  // keyboard: esc / arrows
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % safeImages.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, safeImages.length, onClose]);

  // body scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  // simple swipe
  const onTouchStart = (e) => (startTouch.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const dx = (startTouch.current ?? endX) - endX;
    if (Math.abs(dx) > 40) {
      if (dx > 0) setIndex((i) => (i + 1) % safeImages.length);
      else setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
    }
    startTouch.current = null;
  };

  if (!open || !has) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-[2px] flex items-center justify-center"
      onClick={(e) => {
        // close if click outside image area
        if (e.target === wrap.current) onClose?.();
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      <button
        onClick={() => setIndex((i) => (i - 1 + safeImages.length) % safeImages.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next */}
      <button
        onClick={() => setIndex((i) => (i + 1) % safeImages.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Zoom toggle */}
      <button
        onClick={() => setZoom((z) => !z)}
        className="absolute left-4 top-4 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white"
        aria-label="Zoom"
      >
        {zoom ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
      </button>

      {/* Image area */}
      <div
        ref={wrap}
        className="max-h-[90vh] max-w-[92vw] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={src}
          alt=""
          className={
            "select-none mx-auto transition-transform duration-300 " +
            (zoom ? "cursor-zoom-out scale-110 md:scale-125" : "cursor-zoom-in scale-100")
          }
          onClick={() => setZoom((z) => !z)}
          draggable={false}
          style={{ maxHeight: "90vh", maxWidth: "92vw", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
