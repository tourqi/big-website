import React, { useEffect, useMemo, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

export default function Lightbox({ images = [], startIndex = 0, open, onClose }) {
  const [index, setIndex] = useState(startIndex || 0);
  const [zoom, setZoom] = useState(false);
  const wrap = useRef(null);
  const startTouch = useRef(null);

  const safeImages = useMemo(() => images.filter(Boolean), [images]);

  const goTo = (i) => {
    setIndex(Math.max(0, Math.min(i, safeImages.length - 1)));
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === "Escape") onClose?.();
    else if (e.key === "ArrowLeft") goTo(index - 1);
    else if (e.key === "ArrowRight") goTo(index + 1);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, index, safeImages.length]);

  const handleTouchStart = (e) => {
    startTouch.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!startTouch.current) return;
    const end = e.changedTouches[0].clientX;
    const diff = startTouch.current - end;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? index + 1 : index - 1);
    }
    startTouch.current = null;
  };

  if (!open || !safeImages.length) return null;

  const current = safeImages[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main image */}
      <div ref={wrap} className="relative w-full h-full flex items-center justify-center px-4">
        <img
          src={current}
          alt={`Image ${index + 1}`}
          className={`max-w-full max-h-full object-contain transition-transform ${zoom ? "scale-150" : "scale-100"}`}
        />
      </div>

      {/* Navigation */}
      {safeImages.length > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Zoom button */}
      <button
        onClick={() => setZoom(!zoom)}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
        aria-label={zoom ? "Zoom out" : "Zoom in"}
      >
        {zoom ? <ZoomOut className="w-6 h-6" /> : <ZoomIn className="w-6 h-6" />}
      </button>

      {/* Counter */}
      {safeImages.length > 1 && (
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/10 text-white text-sm">
          {index + 1} / {safeImages.length}
        </div>
      )}
    </div>
  );
}
