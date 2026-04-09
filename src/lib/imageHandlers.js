// src/lib/imageHandlers.js
/**
 * Image error handling utilities
 * Provides consistent placeholder and error handling for images across the app
 */

// SVG placeholder for missing images
export const PLACEHOLDER_SRC =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
      <rect width='100%' height='100%' fill='#f3f4f6'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
            font-family='sans-serif' font-size='16' fill='#9ca3af'>
        Gambar tidak tersedia
      </text>
    </svg>`
  );

// SVG placeholder for loading state (optional - can be used for blurred placeholder)
export const LOADING_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
      <rect width='100%' height='100%' fill='#e5e7eb'/>
      <circle cx='400' cy='300' r='20' fill='#d1d5db'>
        <animate attributeName='opacity' values='0.5;1;0.5' dur='1.5s' repeatCount='indefinite'/>
      </circle>
    </svg>`
  );

/**
 * Handle image load errors with fallback
 * @param {Event} event - The error event from img element
 * @param {string} fallbackSrc - Fallback image source (defaults to PLACEHOLDER_SRC)
 * @returns {void}
 */
export function handleImageError(event, fallbackSrc = PLACEHOLDER_SRC) {
  if (!event?.currentTarget) return;
  
  const img = event.currentTarget;
  
  // Only set fallback if not already set
  if (img.src !== fallbackSrc) {
    img.src = fallbackSrc;
    img.classList.add('bg-gray-100');
  }
}

/**
 * Handle image with fallback chain
 * Try multiple image sources until one loads successfully
 * @param {Event} event - The error event
 * @param {Array<string>} sources - Array of image sources to try
 * @param {number} currentIndex - Current index in sources array
 * @returns {void}
 */
export function handleImageErrorWithFallback(event, sources = [], currentIndex = 0) {
  if (!event?.currentTarget) return;
  
  const img = event.currentTarget;
  const nextIndex = currentIndex + 1;
  
  // Try next source if available
  if (nextIndex < sources.length && sources[nextIndex]) {
    img.src = sources[nextIndex];
  } else {
    // All sources failed, use placeholder
    img.src = PLACEHOLDER_SRC;
  }
}

/**
 * Create a memoized image error handler for React components
 * Useful for components that render many images
 * @param {string} fallbackSrc - Fallback image source
 * @returns {Function} - Error handler function
 */
export function createImageErrorHandler(fallbackSrc = PLACEHOLDER_SRC) {
  return (event) => handleImageError(event, fallbackSrc);
}

/**
 * Resolve image source from multiple possible properties
 * Useful for components that receive data with various image properties
 * @param {Object} item - Data object that may contain image properties
 * @param {Array<string>} propertyNames - Property names to check in order
 * @param {string} fallback - Fallback image source if none found
 * @returns {string} - Resolved image source
 */
export function resolveImageSource(item = {}, propertyNames = ['image', 'src', 'cover', 'img', 'thumbnail'], fallback = PLACEHOLDER_SRC) {
  if (!item || typeof item !== 'object') return fallback;
  
  for (const prop of propertyNames) {
    const value = item[prop];
    if (typeof value === 'string' && value.trim()) {
      return value;
    }
    if (value?.src && typeof value.src === 'string') {
      return value.src;
    }
  }
  
  return fallback;
}

/**
 * Preload image and callback on load/error
 * @param {string} src - Image source
 * @param {Function} onLoad - Callback when loaded
 * @param {Function} onError - Callback on error
 * @returns {void}
 */
export function preloadImage(src, onLoad, onError) {
  if (!src) {
    onError?.();
    return;
  }
  
  const img = new Image();
  img.onload = () => onLoad?.();
  img.onerror = () => onError?.();
  img.src = src;
}

/**
 * Get image alt text with fallback
 * @param {Object} item - Item object
 * @returns {string} - Alt text for image
 */
export function getImageAlt(item = {}) {
  return (
    item.alt ||
    item.title ||
    item.name ||
    'Gambar'
  );
}
