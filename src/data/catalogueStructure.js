export const ROOM_CATEGORIES = [
  {
    name: "Bedroom",
    slug: "bedroom",
    tag: "Storage & comfort",
    image: "/portfolio/kamar-1.jpg",
    steps: [
      "List Design: rakit kebutuhan hiasan dan storage utama",
      "Detail Design: pilih finishing, lighting, dan aksesoris"
    ],
    designs: [
      {
        id: "bedroom-list",
        label: "List Design",
        type: "List Detail",
        description: "Inventaris kebutuhan utama, mulai dari headboard, storage, hingga lighting task.",
      },
      {
        id: "bedroom-detail",
        label: "Detail Design",
        type: "Detail Technical",
        description: "Tentukan finishing wardrobe, handle tersembunyi, dan pattern pencahayaan ambient.",
      },
    ],
  },
  {
    name: "Living Room",
    slug: "living-room",
    tag: "Mood & lighting",
    image: "/portfolio/ruang-tv-1.jpg",
    steps: [
      "Moodboard layout: atur sofa, rak, dan flow sirkulasi",
      "Material mix: padukan fabric, kayu, dan metal finish"
    ],
    designs: [
      {
        id: "livingroom-list",
        label: "List Design",
        type: "List Detail",
        description: "Susun zona sofa, walkway, dan display untuk menampung koleksi serta media.",
      },
      {
        id: "livingroom-detail",
        label: "Detail Design",
        type: "Detail Technical",
        description: "Rinci ukuran rak custom, finishing veneer, dan lighting task untuk focal area.",
      },
    ],
  },
  {
    name: "Dining Room",
    slug: "dining-room",
    tag: "Tamu & display",
    image: "/catalogue/placeholder.jpg",
    steps: [
      "Furniture plan: pilih meja, kursi, dan buffet point",
      "Detail Design: integrasi lighting, aksesori, dan storage"
    ],
    designs: [
      {
        id: "diningroom-list",
        label: "List Design",
        type: "List Detail",
        description: "Tentukan layout meja, kursi, buffet, dan area display artwork.",
      },
      {
        id: "diningroom-detail",
        label: "Detail Design",
        type: "Detail Technical",
        description: "Rinci pencahayaan task, finishing meja, dan storage hidden untuk tableware.",
      },
    ],
  },
  {
    name: "Kitchen Set",
    slug: "kitchen-set",
    tag: "Work triangle & fungsi",
    image: "/portfolio/kitchen-set-1.jpg",
    steps: [
      "List Design: tentukan zona cooking, prep, dan storage",
      "Detail Design: sesuaikan cabinet, drawer, dan appliance"
    ],
    designs: [
      {
        id: "kitchenset-list",
        label: "List Design",
        type: "List Detail",
        description: "Mapping zona masak, prep, dan sink, serta kebutuhan drawer untuk ustensil.",
      },
      {
        id: "kitchenset-detail",
        label: "Detail Design",
        type: "Detail Technical",
        description: "Pilih material worktop, sistem hinge soft-close, dan skema ventilasi.",
      },
    ],
  },
];

export const STYLE_OPTIONS = [
  {
    name: "Minimalis",
    tag: "Functional calm",
    summary: "Palet netral, garis bersih, storage tersembunyi untuk ruang lapang.",
  },
  {
    name: "Modern",
    tag: "Statement curved",
    summary: "Permukaan matte dan glossy, aksen logam, dan pencahayaan yang terarah.",
  },
  {
    name: "Luxury",
    tag: "Dramatic finish",
    summary: "Material premium, detail glossy, dan pencahayaan hangat menciptakan aura eksklusif.",
  },
];

export const MATERIAL_GUIDE_TOPICS = [
  {
    name: "Board",
    tag: "Kekuatan & stabilitas",
    summary: "Bandingkan particle board 18mm, plywood, dan HDF berdasarkan ketahanan dan budget.",
  },
  {
    name: "Finishing",
    tag: "Tekstur & ketahanan",
    summary: "Pilih antara HPL, lacquer, atau veneer untuk level kilap dan resistensi gores.",
  },
  {
    name: "Accessories",
    tag: "Fungsionalitas eksterior",
    summary: "Engsel soft-close, rel laci tersembunyi, handle tersembunyi, hingga lighting task.",
  },
];

export const COMPARE_MATERIALS = [
  {
    title: "Board",
    tag: "Budget vs daya tahan",
    metrics: [
      "Particle board 18mm: paling hemat dan mudah finishing.",
      "Plywood/marine board: stabil di area lembap, cocok dapur basah.",
    ],
  },
  {
    title: "Finishing",
    tag: "Look & feel",
    metrics: [
      "HPL: tahan gores, cocok tugas berat seperti dapur.",
      "Lacquer matte/glossy: tampilan premium, perlu perawatan rutin.",
    ],
  },
  {
    title: "Accessories",
    tag: "Sentuhan akhir",
    metrics: [
      "Soft-close hinges vs regular: lebih nyaman dan tidak berisik.",
      "Rel laci concealed: tampilan seamless untuk kabinet tanpa muka.",
    ],
  },
];
