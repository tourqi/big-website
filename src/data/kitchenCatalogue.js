// Mock data (boleh diganti ke CMS nanti)
export const PROJECTS = [
  { id: "proj-001", title: "Scandinavia Compact — Sentul", image: "/portfolio/kitchen-set-3.jpg", budget: [15000000, 20000000], run_m: 6, duration_weeks: 4, style: ["Japandi","Minimal"], location: "Sentul - Bogor" },

  // 🔧 Standarisasi: ganti `img` -> `image`
  { id: "proj-002", title: "Minimalist Modern — Sentul", image: "/portfolio/kitchen-set-4.jpg", budget: [88000000,112000000], run_m: 8, duration_weeks: 4, style: ["Industrial","Modern"], location: "Sentul" },
  { id: "proj-003", title: "Classic — Bogor",   image: "/portfolio/kitchen-set-2.jpg", budget: [54000000,69000000], run_m: 5.5, duration_weeks: 3, style: ["Modern","Minimal"], location: "Dramaga" },
];

export const RANGES = [
  // ✅ Tambahkan field `image` agar ProductCard menampilkan gambar
  {
    slug:"japandi-l-quartz",
    name:"Kitchen L Japandi – Quartz",
    image: "https://foter.com/photos/423/natural-wood-japandi-kitchen-ideas-with-marble-backsplash.jpeg",     // file yang sudah kamu punya
    layout:"L",
    style:["Japandi","Minimal"],
    carcass:{material:"Plywood", thickness_mm:15},
    door_finish:{type:"Duco Matte", color:"Sand"},
    worktop:{material:"Quartz", thickness_mm:20},
    hardware:{hinge:"Soft-close", runner:"Undermount 40kg"},
    lead_time_weeks:3, price_per_m:[3500000,4500000],
    badges:["Survey gratis","Soft-close full set"],
    updated_at:"2025-08-10"
  },
  {
    slug:"single-modern-hpl",
    name:"Single Line Modern – HPL",
    image: "/catalogue/single-line-modern-hpl.png",          // ganti ke file aslimu saat siap
    layout:"Single",
    style:["Modern","Minimal"],
    carcass:{material:"Plywood", thickness_mm:15},
    door_finish:{type:"HPL Textured", color:"Walnut"},
    worktop:{material:"Granite", thickness_mm:20},
    hardware:{hinge:"Soft-close", runner:"Undermount 30kg"},
    lead_time_weeks:2, price_per_m:[2500000,3200000],
    badges:["Lead time cepat"],
    updated_at:"2025-08-20"
  },
  {
    slug:"island-premium-veneer",
    name:"Island Premium – Veneer",
    image: "https://www.nakedkitchens.com/image/catalog/naked-kitchens/slideshow/highgate/highgate-22.jpg",
    layout:"Island",
    style:["Premium","Natural"],
    carcass:{material:"Plywood", thickness_mm:18},
    door_finish:{type:"Veneer Oak + Clear Coat", color:"Oak"},
    worktop:{material:"Quartz", thickness_mm:20},
    hardware:{hinge:"Soft-close", runner:"Undermount 40kg"},
    lead_time_weeks:4, price_per_m:[5500000,7000000],
    badges:["Premium finish","Garansi 5 th hardware"],
    updated_at:"2025-07-15"
  },
  {
    slug:"u-handleless-solid",
    name:"Kitchen U Handleless – Solid Surface",
    image: "https://www.oppein-africa.com/wp-content/uploads/2020/02/U-Shape-Handleless-Laminate-Kitchen-Cabinet-OP20-HPL032.jpg",
    layout:"U",
    style:["Handleless","Modern"],
    carcass:{material:"Plywood", thickness_mm:15},
    door_finish:{type:"Duco Satin", color:"Ivory"},
    worktop:{material:"Solid Surface", thickness_mm:20},
    hardware:{hinge:"Soft-close", runner:"Undermount 40kg"},
    lead_time_weeks:3, price_per_m:[4000000,5200000],
    badges:["Seamless top"],
    updated_at:"2025-08-05"
  },
  {
    slug:"galley-industrial-ss",
    name:"Galley Industrial – Stainless Top",
    image: "https://st.hzcdn.com/simgs/pictures/kitchens/destin-beach-house-cantoni-dallas-img~de91b7cc03bc23d7_14-2171-1-4c4a640.jpg",
    layout:"Galley",
    style:["Industrial","Modern"],
    carcass:{material:"Plywood", thickness_mm:15},
    door_finish:{type:"HPL Matte", color:"Graphite"},
    worktop:{material:"Stainless", thickness_mm:15},
    hardware:{hinge:"Soft-close", runner:"Undermount 30kg"},
    lead_time_weeks:3, price_per_m:[3200000,4200000],
    badges:["Higienis"],
    updated_at:"2025-07-28"
  },
  {
    slug:"classic-shaker-granite",
    name:"Klasik Shaker – Granite",
    image: "https://archify-images-prod.s3.ap-southeast-1.amazonaws.com/blog/l/yc669w9r-1731998944.jpg",
    layout:"L",
    style:["Klasik","Shaker"],
    carcass:{material:"Plywood", thickness_mm:18},
    door_finish:{type:"Duco Gloss", color:"White"},
    worktop:{material:"Granite", thickness_mm:20},
    hardware:{hinge:"Soft-close", runner:"Undermount 40kg"},
    lead_time_weeks:4, price_per_m:[4500000,6000000],
    badges:["Timeless"],
    updated_at:"2025-08-01"
  },
];

export const PACKAGES = [
  { name:"Basic", desc:"Untuk budget hemat dengan material standar, tetap fungsional & rapi.", price_per_m:[2500000,3200000], includes:["Carcass plywood 15 mm (zona basah)","HPL standard, edge ABS 1 mm","Engsel soft-close, rel undermount 30 kg","LED strip bawah kabinet (8 W/m)"] },
  { name:"Pro", desc:"Material lebih awet & finishing rapi, estetika + daya tahan seimbang.", price_per_m:[3500000,4500000], includes:["Carcass plywood 15 mm full","Duco matte / HPL premium","Rel undermount 40 kg, lifter pintu atas","Proteksi lembap modul sink"] },
  { name:"Premium", desc:"Finishing mewah dengan material high-end. Desain detail + durability tinggi.", price_per_m:[5000000,7000000], includes:["Plywood 18 mm, back 9 mm","Veneer kayu / Duco gloss","Aksesori sistem (pull-out, corner), lighting sensor","QC + tuning onsite 2x"] },
];

export const TOP_ADDERS = { HPL: 0, Granite: 300000, Quartz: 700000, "Solid Surface": 500000, Stainless: 200000 };

export const LAYOUT_OPTIONS = ["Single", "L", "U", "Island", "Galley"];
export const STYLE_OPTIONS  = ["Modern","Minimal","Japandi","Klasik","Premium","Industrial","Handleless","Shaker","Natural"];
export const FINISH_OPTIONS = ["HPL","Duco Matte","Duco Satin","Duco Gloss","Veneer Oak + Clear Coat","HPL Matte","HPL Textured"];
export const TOP_OPTIONS    = ["Granite","Quartz","Solid Surface","Stainless","HPL"];
