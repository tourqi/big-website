export const KITCHEN_OPTIONS = [
  {
    id: "hpl",
    name: "High Pressure Laminate (HPL)",
    door: "Custom",
    finish: "HPL",
    basePrice: 1600000, // Rp 1.600.000 / m²
    angles: [
      "/catalogue/hpl/glossy-white.png", // default angle
    ],
    swatches: [
      { key: "glossy-white", label: "Glossy White", img: "/catalogue/hpl/glossy-white.png" },
      { key: "heritage-green", label: "Heritage Green", img: "/catalogue/hpl/heritage-green.png" },
      { key: "marmer", label: "Marmer", img: "/catalogue/hpl/marmer.png" },
      { key: "rich-teak", label: "Rich Teak", img: "/catalogue/hpl/rich-teak.png" },
      { key: "walnut", label: "Walnut", img: "/catalogue/hpl/walnut.png" },
    ],
    variants: {
      "glossy-white": ["/catalogue/hpl/glossy-white.png"],
      "heritage-green": ["/catalogue/hpl/heritage-green.png"],
      "marmer": ["/catalogue/hpl/marmer.png"],
      "rich-teak": ["/catalogue/hpl/rich-teak.png"],
      "walnut": ["/catalogue/hpl/walnut.png"],
    },
  },
];
