// src/data/catalogue.js
// Data untuk Configurator section — preview kitchen set dengan pilihan warna/finishing.

export const KITCHEN_OPTIONS = [
  {
    id: "ks-japandi",
    name: "Japandi",
    door: "Slab Flat",
    finish: "HPL Matte / Veneer",
    basePrice: 3500000,
    angles: [
      "https://foter.com/photos/423/natural-wood-japandi-kitchen-ideas-with-marble-backsplash.jpeg",
      "https://media.dekoruma.com/design-and-build/projects/159161/files/KITCHEN_JAPANDI_2(6957ae62-25da-4f52-9073-46e4f37a291f).png?dpr=1.5&fit=crop&height=520&optimize=medium&quality=50",
    ],
    swatches: [
      { key: "walnut",     label: "HPL Walnut",      img: "/catalogue/hpl/walnut.png" },
      { key: "rich-teak",  label: "HPL Rich Teak",   img: "/catalogue/hpl/rich-teak.png" },
      { key: "heritage",   label: "HPL Heritage Green", img: "/catalogue/hpl/heritage-green.png" },
    ],
    variants: {
      walnut: [
        "https://foter.com/photos/423/natural-wood-japandi-kitchen-ideas-with-marble-backsplash.jpeg",
      ],
      "rich-teak": [
        "https://media.dekoruma.com/design-and-build/projects/159161/files/KITCHEN_JAPANDI_2(6957ae62-25da-4f52-9073-46e4f37a291f).png?dpr=1.5&fit=crop&height=520&optimize=medium&quality=50",
      ],
      heritage: [
        "https://foter.com/photos/423/natural-wood-japandi-kitchen-ideas-with-marble-backsplash.jpeg",
      ],
    },
  },
  {
    id: "ks-modern",
    name: "Modern Minimalist",
    door: "Slab Handleless",
    finish: "Duco Matte / HPL",
    basePrice: 4000000,
    angles: [
      "https://www.oppein-africa.com/wp-content/uploads/2020/02/U-Shape-Handleless-Laminate-Kitchen-Cabinet-OP20-HPL032.jpg",
    ],
    swatches: [
      { key: "glossy-white", label: "Duco Glossy White", img: "/catalogue/hpl/glossy-white.png" },
      { key: "marmer",       label: "HPL Marmer",        img: "/catalogue/hpl/marmer.png" },
    ],
    variants: {
      "glossy-white": [
        "https://www.oppein-africa.com/wp-content/uploads/2020/02/U-Shape-Handleless-Laminate-Kitchen-Cabinet-OP20-HPL032.jpg",
      ],
      marmer: [
        "https://www.oppein-africa.com/wp-content/uploads/2020/02/U-Shape-Handleless-Laminate-Kitchen-Cabinet-OP20-HPL032.jpg",
      ],
    },
  },
  {
    id: "ks-klasik",
    name: "Klasik Shaker",
    door: "Shaker Profile",
    finish: "Duco Gloss",
    basePrice: 4500000,
    angles: [
      "https://archify-images-prod.s3.ap-southeast-1.amazonaws.com/blog/l/yc669w9r-1731998944.jpg",
      "https://images.unsplash.com/photo-1721614663991-1b9095c34249?q=80&w=2070&auto=format&fit=crop",
    ],
    swatches: [
      { key: "glossy-white", label: "Duco Glossy White", img: "/catalogue/hpl/glossy-white.png" },
      { key: "walnut",       label: "HPL Walnut",        img: "/catalogue/hpl/walnut.png" },
    ],
    variants: {
      "glossy-white": [
        "https://archify-images-prod.s3.ap-southeast-1.amazonaws.com/blog/l/yc669w9r-1731998944.jpg",
      ],
      walnut: [
        "https://images.unsplash.com/photo-1721614663991-1b9095c34249?q=80&w=2070&auto=format&fit=crop",
      ],
    },
  },
  {
    id: "ks-industrial",
    name: "Industrial",
    door: "Flat Textured",
    finish: "HPL Matte",
    basePrice: 3200000,
    angles: [
      "https://st.hzcdn.com/simgs/pictures/kitchens/destin-beach-house-cantoni-dallas-img~de91b7cc03bc23d7_14-2171-1-4c4a640.jpg",
    ],
    swatches: [
      { key: "marmer",      label: "HPL Marmer Graphite", img: "/catalogue/hpl/marmer.png" },
      { key: "rich-teak",   label: "HPL Rich Teak",       img: "/catalogue/hpl/rich-teak.png" },
    ],
    variants: {
      marmer: [
        "https://st.hzcdn.com/simgs/pictures/kitchens/destin-beach-house-cantoni-dallas-img~de91b7cc03bc23d7_14-2171-1-4c4a640.jpg",
      ],
      "rich-teak": [
        "https://st.hzcdn.com/simgs/pictures/kitchens/destin-beach-house-cantoni-dallas-img~de91b7cc03bc23d7_14-2171-1-4c4a640.jpg",
      ],
    },
  },
  {
    id: "ks-scandinavian",
    name: "Scandinavian",
    door: "Slab Flat",
    finish: "HPL Natural Series",
    basePrice: 3500000,
    angles: [
      "https://images.unsplash.com/photo-1721614665022-e9895a3dfa26?q=80&w=2070&auto=format&fit=crop",
    ],
    swatches: [
      { key: "glossy-white", label: "HPL White Natural", img: "/catalogue/hpl/glossy-white.png" },
      { key: "walnut",       label: "HPL Oak Light",     img: "/catalogue/hpl/walnut.png" },
    ],
    variants: {
      "glossy-white": [
        "https://images.unsplash.com/photo-1721614665022-e9895a3dfa26?q=80&w=2070&auto=format&fit=crop",
      ],
      walnut: [
        "https://images.unsplash.com/photo-1721614665022-e9895a3dfa26?q=80&w=2070&auto=format&fit=crop",
      ],
    },
  },
];
