// src/data/kitchenCatalogue.js
// Sumber data tunggal untuk semua komponen katalog.

export const ROOM_CATEGORIES = [
  {
    id: "cat-001",
    title: "Living Room",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop",
    description: "Desain furniture dan dekorasi ruang tamu yang nyaman dan stylish.",
    count: "12+ desain",
    styles: [
      {
        id: "lr-modern",
        name: "Modern",
        image: "/catalogue/lr-modern.jpg",
        description: "Desain minimalis dengan garis tegas dan warna netral.",
        components: [
          { id: "comp-sofa-1", name: "Sofa", description: "Kursi utama ruang tamu", options: [
            { id: "opt-sofa-fabric", name: "Fabric Sofa - Gray", description: "Sofa berbalut kain minimalis abu-abu", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "opt-sofa-leather", name: "Leather Sofa - Black", description: "Sofa kulit premium hitam modern", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5000000 },
            { id: "opt-sofa-linen", name: "Linen Sofa - Cream", description: "Sofa linen natural tone minimalis", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
          ]},
          { id: "comp-table-1", name: "Coffee Table", description: "Meja tamu pusat ruang", options: [
            { id: "opt-table-wood", name: "Kayu Oak Natural", description: "Meja kayu oak dengan finishing natural", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2000000 },
            { id: "opt-table-glass", name: "Glass & Metal", description: "Meja kaca dengan frame metal minimalis", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2500000 },
            { id: "opt-table-concrete", name: "Concrete Design", description: "Meja concrete industrial modern", image: "https://images.unsplash.com/photo-1586439773649-b2b9c3ca3d9a?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3000000 },
          ]},
          { id: "comp-lighting-1", name: "Lighting", description: "Pencahayaan ruang tamu", options: [
            { id: "opt-light-pendant", name: "Pendant Modern", description: "Lampu gantung minimalis geometri", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 800000 },
            { id: "opt-light-floor", name: "Floor Lamp", description: "Lampu berdiri modern dengan dimmer", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1200000 },
            { id: "opt-light-track", name: "Track Lighting", description: "Sistem track light untuk fleksibilitas", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1500000 },
          ]},
        ],
      },
      {
        id: "lr-klasik",
        name: "Klasik",
        image: "/catalogue/lr-klasik.jpg",
        description: "Furniture elegan dengan detail tradisional yang timeless.",
        components: [
          { id: "comp-sofa-2", name: "Sofa", description: "Kursi utama ruang tamu", options: [
            { id: "opt-sofa-velvet", name: "Velvet Sofa - Wine", description: "Sofa beludru premium warna merah burgundy", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5500000 },
            { id: "opt-sofa-leather-classic", name: "Leather Classic - Brown", description: "Sofa kulit klasik warna cokelat", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop", pricePerMeter: 6000000 },
          ]},
          { id: "comp-table-2", name: "Coffee Table", description: "Meja tamu pusat ruang", options: [
            { id: "opt-table-mahogany", name: "Mahogany Solid", description: "Meja mahoni kayu solid dengan ukiran detail", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "opt-table-carved", name: "Carved Wood", description: "Meja kayu dengan detail ukiran tradisional", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
          ]},
          { id: "comp-lighting-2", name: "Lighting", description: "Pencahayaan ruang tamu", options: [
            { id: "opt-light-crystal", name: "Crystal Chandelier", description: "Kristal mewah klasik dengan frame emas", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2000000 },
            { id: "opt-light-brass", name: "Brass Sconce", description: "Lampu dinding brass dekoratif", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1500000 },
          ]},
        ],
      },
      {
        id: "lr-industrial",
        name: "Industrial",
        image: "/catalogue/lr-industrial.jpg",
        description: "Kombinasi logam, kayu, dan kursi berbahan kuat yang durabel.",
        components: [
          { id: "comp-sofa-3", name: "Sofa", description: "Kursi utama ruang tamu", options: [
            { id: "opt-sofa-canvas", name: "Canvas & Metal Frame", description: "Sofa kanvas dengan kerangka besi industrial", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
            { id: "opt-sofa-leather-industrial", name: "Industrial Leather", description: "Kulit aged dengan gigi besi exposed", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4500000 },
          ]},
          { id: "comp-table-3", name: "Coffee Table", description: "Meja tamu pusat ruang", options: [
            { id: "opt-table-metal-wood", name: "Metal & Reclaimed Wood", description: "Meja besi dengan kayu bekas industrial", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "opt-table-steel", name: "Steel Plate Top", description: "Meja baja berkarat aesthetic industrial", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
          ]},
          { id: "comp-lighting-3", name: "Lighting", description: "Pencahayaan ruang tamu", options: [
            { id: "opt-light-factory", name: "Factory Pendant", description: "Lampu pabrik vintage dengan shade logam", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1300000 },
            { id: "opt-light-track-industrial", name: "Track Metal Beam", description: "Sistem track di exposed beam metal", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1800000 },
          ]},
        ],
      },
      {
        id: "lr-scandinavian",
        name: "Scandinavian",
        image: "/catalogue/lr-scandinavian.jpg",
        description: "Terang dan simpel dengan furniture fungsional dan cozy.",
        components: [
          { id: "comp-sofa-4", name: "Sofa", description: "Kursi utama ruang tamu", options: [
            { id: "opt-sofa-linen-scandi", name: "Linen Natural", description: "Sofa linen putih cream Skandinavia", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3800000 },
            { id: "opt-sofa-wool", name: "Wool Fabric - Light", description: "Sofa wool warna terang hangat", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4200000 },
          ]},
          { id: "comp-table-4", name: "Coffee Table", description: "Meja tamu pusat ruang", options: [
            { id: "opt-table-birch", name: "Birch Wood Light", description: "Meja birch kayu muda Skandinavia", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2200000 },
            { id: "opt-table-white-oak", name: "White Oak", description: "Meja oak putih minimalis terang", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2500000 },
          ]},
          { id: "comp-lighting-4", name: "Lighting", description: "Pencahayaan ruang tamu", options: [
            { id: "opt-light-paper", name: "Paper Shade Pendant", description: "Lampu kertas soft glow Skandinavia", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 900000 },
            { id: "opt-light-wood-natural", name: "Wood Natural Light", description: "Lampu natural wood warna terang", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1100000 },
          ]},
        ],
      },
      {
        id: "lr-cozy",
        name: "Cozy",
        image: "/catalogue/lr-cozy.jpg",
        description: "Hangat dan nyaman dengan tekstur lembut dan pencahayaan ambient.",
        components: [
          { id: "comp-sofa-5", name: "Sofa", description: "Kursi utama ruang tamu", options: [
            { id: "opt-sofa-fabric-warm", name: "Fabric Warm Tone", description: "Sofa kain warna hangat taupe", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3600000 },
            { id: "opt-sofa-boucle", name: "Bouclé Textured", description: "Sofa tekstur bouclé creamy cozy", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4300000 },
          ]},
          { id: "comp-table-5", name: "Coffee Table", description: "Meja tamu pusat ruang", options: [
            { id: "opt-table-walnut", name: "Walnut Warm", description: "Meja walnut warna hangat natural", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2600000 },
            { id: "opt-table-rattan", name: "Rattan Base", description: "Meja wooden top dengan alas rattan", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2800000 },
          ]},
          { id: "comp-lighting-5", name: "Lighting", description: "Pencahayaan ruang tamu", options: [
            { id: "opt-light-warm-dimmable", name: "Warm Dimmable", description: "Lampu warm 2700K dengan dimmer", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1400000 },
            { id: "opt-light-fabric-shade", name: "Fabric Shade Warm", description: "Lampu shade kain warna hangat", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1600000 },
          ]},
        ],
      },
    ],
  },
  {
    id: "cat-002",
    title: "Bedroom",
    image: "https://images.unsplash.com/photo-1775241186452-c3d99b09f223?q=80&w=987&auto=format&fit=crop",
    description: "Kamar tidur dengan konsep modern, minimalis, hingga klasik mewah.",
    count: "15+ desain",
    styles: [
      {
        id: "br-minimalist",
        name: "Minimalist",
        image: "/catalogue/br-minimalist.jpg",
        description: "Ruang tidur gersang dengan furniture essential dan warna tenang.",
        components: [
          { id: "comp-bed-1", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-platform", name: "Platform Bed Low", description: "Ranjang platform minimalis tanpa headboard", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3000000 },
            { id: "opt-bed-wooden", name: "Wooden Frame", description: "Ranjang kayu natural minimalis", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
          ]},
          { id: "comp-mattress-1", name: "Mattress", description: "Kasur pembaringan", options: [
            { id: "opt-mattress-latex", name: "Natural Latex", description: "Kasur latex organik memory foam", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "opt-mattress-spring", name: "Pocket Spring", description: "Kasur spring koil pocket system", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2500000 },
          ]},
          { id: "comp-headboard-1", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-minimal", name: "Upholstered Gray", description: "Headboard minimalis kain abu-abu", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1200000 },
            { id: "opt-headboard-none", name: "Wall Mounted", description: "Headboard wall panel minimalis", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1500000 },
          ]},
        ],
      },
      {
        id: "br-luxury",
        name: "Luxury",
        image: "/catalogue/br-luxury.jpg",
        description: "Desain mewah dengan material premium dan dekorasi eksklusif.",
        components: [
          { id: "comp-bed-2", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-upholstered", name: "Upholstered Luxury", description: "Ranjang berlapis kain premium velvet", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5500000 },
            { id: "opt-bed-leather", name: "Leather Contemporary", description: "Ranjang leather premium warna dark", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 6500000 },
          ]},
          { id: "comp-mattress-2", name: "Mattress", description: "Kasur premium", options: [
            { id: "opt-mattress-hybrid", name: "Hybrid Premium", description: "Kasur hybrid latex + spring mewah", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5000000 },
            { id: "opt-mattress-memory", name: "Memory Foam Gel", description: "Kasur memory foam gel cooling", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4500000 },
          ]},
          { id: "comp-headboard-2", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-tall", name: "Tall Tufted", description: "Headboard tinggi dengan bantalan tufted", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2500000 },
            { id: "opt-headboard-carved", name: "Carved Wood", description: "Headboard kayu carved dengan dekorasi", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3000000 },
          ]},
        ],
      },
      {
        id: "br-japandi",
        name: "Japandi",
        image: "/catalogue/br-japandi.jpg",
        description: "Gabungan gaya Jepang dan Skandinavia yang serene dan balanced.",
        components: [
          { id: "comp-bed-3", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-low-natural", name: "Low Natural Wood", description: "Ranjang rendah kayu natural japandi", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3800000 },
            { id: "opt-bed-tatami", name: "Tatami Style", description: "Ranjang gaya tatami jepang minimalis", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3200000 },
          ]},
          { id: "comp-mattress-3", name: "Mattress", description: "Kasur", options: [
            { id: "opt-mattress-natural-fiber", name: "Natural Fiber", description: "Kasur serat alami breathable", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2800000 },
            { id: "opt-mattress-futon", name: "Futon Traditional", description: "Kasur futon tradisional jepang", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2200000 },
          ]},
          { id: "comp-headboard-3", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-wooden-slat", name: "Wooden Slat", description: "Headboard kayu slat natural japandi", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1600000 },
            { id: "opt-headboard-fabric-natural", name: "Linen Natural", description: "Headboard linen warna alami", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1800000 },
          ]},
        ],
      },
      {
        id: "br-modern",
        name: "Modern",
        image: "/catalogue/br-modern.jpg",
        description: "Tempat tidur platform dengan pencahayaan terintegrasi yang futuristik.",
        components: [
          { id: "comp-bed-4", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-platform-tech", name: "Platform Tech Bed", description: "Ranjang platform dengan USB charging", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5200000 },
            { id: "opt-bed-adjustable", name: "Adjustable Electric", description: "Ranjang elektrik dapat disesuaikan", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 7000000 },
          ]},
          { id: "comp-mattress-4", name: "Mattress", description: "Kasur premium", options: [
            { id: "opt-mattress-smart", name: "Smart Cooling", description: "Kasur gel cooling dengan teknologi", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5500000 },
            { id: "opt-mattress-adjustable", name: "Memory Adjustable", description: "Kasur memory foam firm regulable", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4800000 },
          ]},
          { id: "comp-headboard-4", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-modern-lit", name: "Integrated Lighting", description: "Headboard built-in lampu ambient", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2800000 },
            { id: "opt-headboard-smart-panel", name: "Smart Panel", description: "Headboard panel kontrol pintar", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
          ]},
        ],
      },
      {
        id: "br-bohemian",
        name: "Bohemian",
        image: "/catalogue/br-bohemian.jpg",
        description: "Mix pola, tekstur, dan warna yang eclectic dan artistik.",
        components: [
          { id: "comp-bed-5", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-macrame", name: "Macramé Style", description: "Ranjang dengan detail macramé boho", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3600000 },
            { id: "opt-bed-rattan", name: "Rattan Woven", description: "Ranjang rattan woven bohemian", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3200000 },
          ]},
          { id: "comp-mattress-5", name: "Mattress", description: "Kasur", options: [
            { id: "opt-mattress-organic", name: "Organic Cotton", description: "Kasur cotton organik breathable", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3000000 },
            { id: "opt-mattress-natural", name: "Natural Latex", description: "Kasur latex organik eco-friendly", image: "https://images.unsplash.com/photo-1566662834212-1fdf5437e153?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
          ]},
          { id: "comp-headboard-5", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-macrame-wall", name: "Macramé Wall", description: "Wall hanging macramé bohemian", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1400000 },
            { id: "opt-headboard-textile", name: "Boho Textile", description: "Headboard textile tapestry colorful", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1600000 },
          ]},
        ],
      },
    ],
  },
  {
    id: "cat-003",
    title: "Dining Room",
    image: "https://plus.unsplash.com/premium_photo-1674480165930-609ce0c29666?q=80&w=1014&auto=format&fit=crop",
    description: "Ruang makan fungsional dengan berbagai pilihan gaya interior.",
    count: "10+ desain",
    styles: [
      {
        id: "dr-formal",
        name: "Formal",
        image: "/catalogue/dr-formal.jpg",
        description: "Meja makan besar dengan kursi berkualitas tinggi untuk acara formal.",
        components: [
          { id: "comp-dining-table-1", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-mahogany-formal", name: "Mahogany Formal", description: "Meja mahoni solid ukiran formal", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 6000000 },
            { id: "opt-table-marble-formal", name: "Marble Top", description: "Meja dengan top marmer putih elegan", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 8000000 },
          ]},
          { id: "comp-dining-chairs-1", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-upholstered-formal", name: "Velvet Upholstered", description: "Kursi beludru warna burgundy formal", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1800000 },
            { id: "opt-chair-leather-formal", name: "Leather Premium", description: "Kursi kulit hitam dengan nail detail", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2200000 },
          ]},
          { id: "comp-hardware-1", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-brass", name: "Brass Handles", description: "Handle brass polished mewah", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 800000 },
            { id: "opt-hw-crystal", name: "Crystal Pulls", description: "Pulls kristal dekoratif", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1000000 },
          ]},
        ],
      },
      {
        id: "dr-casual",
        name: "Casual",
        image: "/catalogue/dr-casual.jpg",
        description: "Suasana santai dengan meja wooden dan kursi yang nyaman.",
        components: [
          { id: "comp-dining-table-2", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-wood-casual", name: "Oak Wood Natural", description: "Meja oak kayu natural casual", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "opt-table-teak", name: "Teak Reclaimed", description: "Meja teak bekas casual rustic", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
          ]},
          { id: "comp-dining-chairs-2", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-wood-casual", name: "Wooden Simple", description: "Kursi kayu sederhana casual", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1200000 },
            { id: "opt-chair-fabric-casual", name: "Fabric Cushion", description: "Kursi kain empuk casual", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1500000 },
          ]},
          { id: "comp-hardware-2", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-wood", name: "Wood Details", description: "Aksesoris kayu natural", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 400000 },
            { id: "opt-hw-metal-simple", name: "Simple Metal", description: "Handle metal sederhana", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 500000 },
          ]},
        ],
      },
      {
        id: "dr-modern",
        name: "Modern",
        image: "/catalogue/dr-modern.jpg",
        description: "Desain kontemporer dengan material inovatif dan minimalis.",
        components: [
          { id: "comp-dining-table-3", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-glass-metal", name: "Glass & Metal", description: "Meja kaca frame metal minimalis", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4500000 },
            { id: "opt-table-white-oak", name: "Light Wood", description: "Meja kayu muda dengan base metal", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
          ]},
          { id: "comp-dining-chairs-3", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-eames-style", name: "Eames Style", description: "Kursi Eames modern minimalis", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1600000 },
            { id: "opt-chair-plastic-metal", name: "Plastic & Metal", description: "Kursi plastik dengan kaki metal", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1200000 },
          ]},
          { id: "comp-hardware-3", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-chrome", name: "Chrome Finish", description: "Handle chrome polished modern", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 600000 },
            { id: "opt-hw-matte-black", name: "Matte Black", description: "Handle black matte contemporary", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 700000 },
          ]},
        ],
      },
      {
        id: "dr-rustic",
        name: "Rustic",
        image: "/catalogue/dr-rustic.jpg",
        description: "Gaya pedesaan dengan kayu natural dan aksen vintage.",
        components: [
          { id: "comp-dining-table-4", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-farmhouse", name: "Farmhouse Style", description: "Meja kayu rustic farmhouse besar", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5000000 },
            { id: "opt-table-reclaimed-large", name: "Reclaimed Wood", description: "Meja kayu bekas rustic vintage", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5500000 },
          ]},
          { id: "comp-dining-chairs-4", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-bentwood", name: "Bentwood Rustic", description: "Kursi bentwood warna cokelat tua", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1400000 },
            { id: "opt-chair-woven-rush", name: "Woven Rush", description: "Kursi rush seat tradisional", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1300000 },
          ]},
          { id: "comp-hardware-4", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-iron", name: "Iron Hardware", description: "Hardware besi wrought rustic", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 700000 },
            { id: "opt-hw-aged", name: "Aged Brass", description: "Hardware brass aged patina", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 800000 },
          ]},
        ],
      },
      {
        id: "dr-scandinavian",
        name: "Scandinavian",
        image: "/catalogue/dr-scandinavian.jpg",
        description: "Terang, fungsional, dan cozy dengan dominasi warna putih.",
        components: [
          { id: "comp-dining-table-5", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-birch-scandi", name: "Birch Light", description: "Meja birch putih terang Skandinavia", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3800000 },
            { id: "opt-table-pine-white", name: "White Pine", description: "Meja pine putih natural scandi", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
          ]},
          { id: "comp-dining-chairs-5", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-wishbone", name: "Wishbone Style", description: "Kursi wishbone natural scandi", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1300000 },
            { id: "opt-chair-simple-wooden", name: "Simple Wooden", description: "Kursi kayu sederhana terang", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1100000 },
          ]},
          { id: "comp-hardware-5", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-natural-wood", name: "Natural Wood", description: "Handle kayu natural scandi", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 500000 },
            { id: "opt-hw-minimal", name: "Minimal Metal", description: "Handle metal minimal simple", image: "https://images.unsplash.com/photo-1565636192335-14375bc267c5?q=80&w=400&auto=format&fit=crop", pricePerMeter: 600000 },
          ]},
        ],
      },
    ],
  },
  {
    id: "cat-004",
    title: "Kitchen Set",
    image: "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=1565&auto=format&fit=crop",
    description: "Dapur custom dengan layout dan material pilihan Anda.",
    count: "20+ desain",
    styles: [
      {
        id: "ks-minimalist",
        name: "Minimalist",
        image: "https://images.unsplash.com/photo-1743411316005-6c0294033437?q=80&w=1943&auto=format&fit=crop",
        description: "Kitchen set sederhana dan rapi dengan fungsi optimal tanpa berlebihan.",
        components: [
          {
            id: "comp-board-1",
            name: "Board/Carcass",
            description: "Material utama rangka kabinet",
            options: [
              { id: "opt-plywood", name: "Plywood 15mm", description: "Kayu lapis berkualitas, tahan lembap untuk zona basah", image: "https://id.chinakitchencabinets.net/Content/uploads/2023211506/20230321135938c3ed1319652e4bffb56a8b7667532dda.jpg", pricePerMeter: 800000 },
              { id: "opt-hmr", name: "HMR (High Moisture Resistant)", description: "Material tahan kelembaban tinggi, lebih awet", image: "https://static.wixstatic.com/media/3f747e_662be33eb10943bda18c3c31442b31e4~mv2.png/v1/fill/w_980,h_686,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/3f747e_662be33eb10943bda18c3c31442b31e4~mv2.png", pricePerMeter: 900000 },
              { id: "opt-pvc", name: "PVC Board", description: "Tahan air sempurna, sangat tahan lama untuk dapur", image: "https://icdn.tradew.com/file/201706/1572031/jpg/7873338.jpg?x-oss-process=image/quality,Q_90", pricePerMeter: 1000000 },
              { id: "opt-mdf", name: "MDF 18mm", description: "Permukaan halus, cocok untuk cat duco finishing", image: "https://static.wixstatic.com/media/3f747e_fd7ab11098c74718b183a2c45565d535~mv2.webp/v1/fill/w_568,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3f747e_fd7ab11098c74718b183a2c45565d535~mv2.webp", pricePerMeter: 850000 },
            ],
          },
          {
            id: "comp-hpl-1",
            name: "HPL (Door Finish)",
            description: "Material permukaan depan kabinet",
            options: [
              { id: "opt-hpl-formica", name: "Formica", description: "Brand ternama, tahan lama, banyak pilihan warna", image: "https://images.unsplash.com/photo-1574909521282-e6c96d58f370?q=80&w=400&auto=format&fit=crop", pricePerMeter: 600000 },
              { id: "opt-hpl-laminart", name: "Laminart", description: "Kualitas premium, tekstur natural wood, ketahanan tinggi", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 700000 },
              { id: "opt-hpl-aica", name: "AICA", description: "Harga terjangkau, performa standar, banyak pilihan", image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=400&auto=format&fit=crop", pricePerMeter: 450000 },
              { id: "opt-hpl-wilson", name: "Wilson", description: "Standar industri, pilihan warna lengkap, tahan gores", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=400&auto=format&fit=crop", pricePerMeter: 550000 },
            ],
          },
          {
            id: "comp-hinge-1",
            name: "Engsel/Hinge",
            description: "Mekanisme buka tutup pintu",
            options: [
              { id: "opt-hinge-soft-blum", name: "Soft-Close Blum", description: "Premium slow-motion, tutup perlahan dan halus", image: "https://kjpselecthardwoods.com/cdn/shop/products/blum-hinge-110-degree-2_800x533.jpg?v=1638153549", pricePerMeter: 450000 },
              { id: "opt-hinge-soft-hafele", name: "Soft-Close Hafele", description: "Kualitas baik, dampening shock, hemat energi", image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lodfbtu34ot587.webp", pricePerMeter: 350000 },
              { id: "opt-hinge-standar", name: "Engsel Standar", description: "Engsel biasa tanpa soft-close, budget ekonomis", image: "https://media.monotaro.id/mid01/big/Bahan%20Bangunan%2C%20Perlengkapan%20Rumah%20%26%20Cat/Perangkat%20Arsitektur/Peralatan%20Furnitur/Perkakas%20Furnitur/TACO%20Hardware%20Engsel%20Sendok%20Lurus%20Softclose/qdP108409949-3.jpg", pricePerMeter: 200000 },
            ],
          },
        ],
      },
      {
        id: "ks-scandinavian",
        name: "Scandinavian",
        image: "https://images.unsplash.com/photo-1721614665022-e9895a3dfa26?q=80&w=2070&auto=format&fit=crop",
        description: "Dapur cerah dengan finishing kayu muda dan storage cerdas.",
        components: [
          {
            id: "comp-board-2",
            name: "Board/Carcass",
            description: "Material utama rangka kabinet",
            options: [
              { id: "opt-plywood", name: "Plywood 15mm", description: "Kayu lapis berkualitas, tahan lembap untuk zona basah", pricePerMeter: 800000 },
              { id: "opt-hmr", name: "HMR (High Moisture Resistant)", description: "Material tahan kelembaban tinggi, lebih awet", pricePerMeter: 900000 },
              { id: "opt-pvc", name: "PVC Board", description: "Tahan air sempurna, sangat tahan lama untuk dapur", pricePerMeter: 1000000 },
            ],
          },
          {
            id: "comp-hpl-2",
            name: "HPL (Door Finish)",
            description: "Material permukaan depan kabinet",
            options: [
              { id: "opt-hpl-formica", name: "Formica Natural Series", description: "Finishing kayu natural tone, scandinavian vibe", pricePerMeter: 650000 },
              { id: "opt-hpl-laminart", name: "Laminart Oak", description: "Warna oak muda, modern minimalis Skandinavia", pricePerMeter: 750000 },
            ],
          },
          {
            id: "comp-hinge-2",
            name: "Engsel/Hinge",
            description: "Mekanisme buka tutup pintu",
            options: [
              { id: "opt-hinge-soft-blum", name: "Soft-Close Blum", description: "Premium slow-motion, tutup perlahan dan halus", pricePerMeter: 450000 },
              { id: "opt-hinge-standar", name: "Engsel Standar", description: "Engsel biasa tanpa soft-close", pricePerMeter: 200000 },
            ],
          },
        ],
      },
      {
        id: "ks-japandi",
        name: "Japandi",
        image: "https://media.dekoruma.com/design-and-build/projects/159161/files/KITCHEN_JAPANDI_2(6957ae62-25da-4f52-9073-46e4f37a291f).png?dpr=1.5&fit=crop&height=520&optimize=medium&quality=50",
        description: "Perpaduan elegan gaya Jepang dan Skandinavia yang warm.",
        components: [
          {
            id: "comp-board-3",
            name: "Board/Carcass",
            description: "Material utama rangka kabinet",
            options: [
              { id: "opt-plywood", name: "Plywood 15mm", description: "Kayu lapis berkualitas, tahan lembap untuk zona basah", pricePerMeter: 800000 },
              { id: "opt-hmr", name: "HMR (High Moisture Resistant)", description: "Material tahan kelembaban tinggi, lebih awet", pricePerMeter: 900000 },
            ],
          },
          {
            id: "comp-hpl-3",
            name: "Finish",
            description: "Material finishing permukaan",
            options: [
              { id: "opt-veneer", name: "Veneer Kayu Natural", description: "Finishing kayu solid, aesthetic Japandi warm", pricePerMeter: 800000 },
              { id: "opt-hpl-laminart", name: "Laminart Walnut", description: "Warna kayu hangat, matching japandi style", pricePerMeter: 750000 },
            ],
          },
          {
            id: "comp-hinge-3",
            name: "Engsel/Hinge",
            description: "Mekanisme buka tutup pintu",
            options: [
              { id: "opt-hinge-soft-blum", name: "Soft-Close Blum", description: "Premium slow-motion, tutup perlahan dan halus", pricePerMeter: 450000 },
              { id: "opt-hinge-soft-hafele", name: "Soft-Close Hafele", description: "Kualitas baik, dampening shock", pricePerMeter: 350000 },
            ],
          },
        ],
      },
      {
        id: "ks-classic",
        name: "Klasik",
        image: "https://images.unsplash.com/photo-1721614663991-1b9095c34249?q=80&w=2070&auto=format&fit=crop",
        description: "Kitchen set timeless dengan detail dekoratif dan finishing berkualitas.",
        components: [
          {
            id: "comp-board-4",
            name: "Board/Carcass",
            description: "Material utama rangka kabinet",
            options: [
              { id: "opt-hmr", name: "HMR (High Moisture Resistant)", description: "Material tahan kelembaban tinggi, lebih awet", pricePerMeter: 900000 },
              { id: "opt-pvc", name: "PVC Board", description: "Tahan air sempurna, sangat tahan lama untuk dapur", pricePerMeter: 1000000 },
            ],
          },
          {
            id: "comp-hpl-4",
            name: "HPL (Door Finish)",
            description: "Material permukaan depan kabinet",
            options: [
              { id: "opt-hpl-formica", name: "Formica Classic", description: "Warna putih cream klasik, timeless elegant", pricePerMeter: 650000 },
              { id: "opt-hpl-laminart", name: "Laminart Creme", description: "Finishing cream sophisticated, detail classic ornament", pricePerMeter: 750000 },
            ],
          },
          {
            id: "comp-hinge-4",
            name: "Engsel/Hinge",
            description: "Mekanisme buka tutup pintu",
            options: [
              { id: "opt-hinge-soft-blum", name: "Soft-Close Blum", description: "Premium soft-close, luxury classic feel", pricePerMeter: 450000 },
              { id: "opt-hinge-soft-hafele", name: "Soft-Close Hafele", description: "Kualitas baik, smooth close", pricePerMeter: 350000 },
            ],
          },
        ],
      },
      {
        id: "ks-modern",
        name: "Modern",
        image: "/catalogue/ks-modern.jpg",
        description: "Dapur futuristik dengan teknologi smart dan material contemporary.",
        components: [
          {
            id: "comp-board-5",
            name: "Board/Carcass",
            description: "Material utama rangka kabinet",
            options: [
              { id: "opt-plywood", name: "Plywood 15mm", description: "Kayu lapis berkualitas, tahan lembap untuk zona basah", pricePerMeter: 800000 },
              { id: "opt-hmr", name: "HMR (High Moisture Resistant)", description: "Material tahan kelembaban tinggi, lebih awet", pricePerMeter: 900000 },
              { id: "opt-pvc", name: "PVC Board", description: "Tahan air sempurna, sangat tahan lama untuk dapur", pricePerMeter: 1000000 },
              { id: "opt-mdf", name: "MDF 18mm", description: "Permukaan halus, cocok untuk cat duco finishing", pricePerMeter: 850000 },
            ],
          },
          {
            id: "comp-hpl-5",
            name: "HPL (Door Finish)",
            description: "Material permukaan depan kabinet",
            options: [
              { id: "opt-hpl-laminart", name: "Laminart Modern Series", description: "Warna bold minimalis, texture halus modern", pricePerMeter: 700000 },
              { id: "opt-hpl-aica", name: "AICA Graphite", description: "Warna gelap elegan, contemporary sleek look", pricePerMeter: 500000 },
              { id: "opt-duco", name: "Duco Paint", description: "Cat duco glossy premium, warna custom unlimited", pricePerMeter: 800000 },
            ],
          },
          {
            id: "comp-hinge-5",
            name: "Engsel/Hinge",
            description: "Mekanisme buka tutup pintu",
            options: [
              { id: "opt-hinge-soft-blum", name: "Soft-Close Blum", description: "Premium slow-motion, tutup perlahan dan halus", pricePerMeter: 450000 },
              { id: "opt-hinge-soft-hafele", name: "Soft-Close Hafele", description: "Kualitas baik, dampening shock, hemat energi", pricePerMeter: 350000 },
            ],
          },
        ],
      },
    ],
  },
];

export const INSPIRATION_PROJECTS = [
  {
    id: "proj-001",
    title: "Scandinavia Compact — Sentul",
    image: "/portfolio/kitchen-set-3.jpg",
    budget: [15000000, 20000000],
    run_m: 6,
    duration_weeks: 4,
    style: ["Japandi", "Minimal"],
    location: "Sentul - Bogor",
  },
  {
    id: "proj-002",
    title: "Minimalist Modern — Sentul",
    image: "/portfolio/kitchen-set-4.jpg",
    budget: [88000000, 112000000],
    run_m: 8,
    duration_weeks: 4,
    style: ["Industrial", "Modern"],
    location: "Sentul",
  },
  {
    id: "proj-003",
    title: "Classic — Bogor",
    image: "/portfolio/kitchen-set-2.jpg",
    budget: [54000000, 69000000],
    run_m: 5.5,
    duration_weeks: 3,
    style: ["Modern", "Minimal"],
    location: "Dramaga",
  },
];

export const CATALOGUE_ITEMS = [
  {
    slug: "japandi-l-quartz",
    name: "Kitchen L Japandi – Quartz",
    image: "https://foter.com/photos/423/natural-wood-japandi-kitchen-ideas-with-marble-backsplash.jpeg",
    layout: "L",
    style: ["Japandi", "Minimal"],
    carcass: { material: "Plywood", thickness_mm: 15 },
    door_finish: { type: "Duco Matte", color: "Sand" },
    worktop: { material: "Quartz", thickness_mm: 20 },
    hardware: { hinge: "Soft-close", runner: "Undermount 40kg" },
    lead_time_weeks: 3,
    price_per_m: [3500000, 4500000],
    badges: ["Survey gratis", "Soft-close full set"],
    updated_at: "2025-08-10",
  },
  {
    slug: "single-modern-hpl",
    name: "Single Line Modern – HPL",
    image: "/catalogue/single-line-modern-hpl.png",
    layout: "Single",
    style: ["Modern", "Minimal"],
    carcass: { material: "Plywood", thickness_mm: 15 },
    door_finish: { type: "HPL Textured", color: "Walnut" },
    worktop: { material: "Granite", thickness_mm: 20 },
    hardware: { hinge: "Soft-close", runner: "Undermount 30kg" },
    lead_time_weeks: 2,
    price_per_m: [2500000, 3200000],
    badges: ["Lead time cepat"],
    updated_at: "2025-08-20",
  },
  {
    slug: "island-premium-veneer",
    name: "Island Premium – Veneer",
    image: "https://www.nakedkitchens.com/image/catalog/naked-kitchens/slideshow/highgate/highgate-22.jpg",
    layout: "Island",
    style: ["Premium", "Natural"],
    carcass: { material: "Plywood", thickness_mm: 18 },
    door_finish: { type: "Veneer Oak + Clear Coat", color: "Oak" },
    worktop: { material: "Quartz", thickness_mm: 20 },
    hardware: { hinge: "Soft-close", runner: "Undermount 40kg" },
    lead_time_weeks: 4,
    price_per_m: [5500000, 7000000],
    badges: ["Premium finish", "Garansi 5 th hardware"],
    updated_at: "2025-07-15",
  },
  {
    slug: "u-handleless-solid",
    name: "Kitchen U Handleless – Solid Surface",
    image: "https://www.oppein-africa.com/wp-content/uploads/2020/02/U-Shape-Handleless-Laminate-Kitchen-Cabinet-OP20-HPL032.jpg",
    layout: "U",
    style: ["Handleless", "Modern"],
    carcass: { material: "Plywood", thickness_mm: 15 },
    door_finish: { type: "Duco Satin", color: "Ivory" },
    worktop: { material: "Solid Surface", thickness_mm: 20 },
    hardware: { hinge: "Soft-close", runner: "Undermount 40kg" },
    lead_time_weeks: 3,
    price_per_m: [4000000, 5200000],
    badges: ["Seamless top"],
    updated_at: "2025-08-05",
  },
  {
    slug: "galley-industrial-ss",
    name: "Galley Industrial – Stainless Top",
    image: "https://st.hzcdn.com/simgs/pictures/kitchens/destin-beach-house-cantoni-dallas-img~de91b7cc03bc23d7_14-2171-1-4c4a640.jpg",
    layout: "Galley",
    style: ["Industrial", "Modern"],
    carcass: { material: "Plywood", thickness_mm: 15 },
    door_finish: { type: "HPL Matte", color: "Graphite" },
    worktop: { material: "Stainless", thickness_mm: 15 },
    hardware: { hinge: "Soft-close", runner: "Undermount 30kg" },
    lead_time_weeks: 3,
    price_per_m: [3200000, 4200000],
    badges: ["Higienis"],
    updated_at: "2025-07-28",
  },
  {
    slug: "classic-shaker-granite",
    name: "Klasik Shaker – Granite",
    image: "https://archify-images-prod.s3.ap-southeast-1.amazonaws.com/blog/l/yc669w9r-1731998944.jpg",
    layout: "L",
    style: ["Klasik", "Shaker"],
    carcass: { material: "Plywood", thickness_mm: 18 },
    door_finish: { type: "Duco Gloss", color: "White" },
    worktop: { material: "Granite", thickness_mm: 20 },
    hardware: { hinge: "Soft-close", runner: "Undermount 40kg" },
    lead_time_weeks: 4,
    price_per_m: [4500000, 6000000],
    badges: ["Timeless"],
    updated_at: "2025-08-01",
  },
];

export const PACKAGES = [
  {
    name: "Basic",
    desc: "Budget hemat, material standar, tetap fungsional & rapi.",
    price_per_m: [2500000, 3200000],
    includes: [
      "Carcass plywood 15 mm (zona basah)",
      "HPL standard, edge ABS 1 mm",
      "Engsel soft-close, rel undermount 30 kg",
      "LED strip bawah kabinet (8 W/m)",
    ],
  },
  {
    name: "Pro",
    desc: "Material lebih awet, finishing rapi — estetika + daya tahan seimbang.",
    price_per_m: [3500000, 4500000],
    includes: [
      "Carcass plywood 15 mm full",
      "Duco matte / HPL premium",
      "Rel undermount 40 kg, lifter pintu atas",
      "Proteksi lembap modul sink",
    ],
  },
  {
    name: "Premium",
    desc: "Finishing mewah, material high-end, desain detail + durability tinggi.",
    price_per_m: [5000000, 7000000],
    includes: [
      "Plywood 18 mm, back 9 mm",
      "Veneer kayu / Duco gloss",
      "Aksesori sistem (pull-out, corner), lighting sensor",
      "QC + tuning onsite 2x",
    ],
  },
];

export const TOP_ADDERS = {
  HPL: 0,
  Granite: 300000,
  Quartz: 700000,
  "Solid Surface": 500000,
  Stainless: 200000,
};

export const LAYOUT_OPTIONS  = ["Single", "L", "U", "Island", "Galley"];
export const STYLE_OPTIONS   = ["Modern", "Minimal", "Japandi", "Klasik", "Premium", "Industrial", "Handleless", "Shaker", "Natural"];
export const FINISH_OPTIONS  = ["HPL", "Duco Matte", "Duco Satin", "Duco Gloss", "Veneer Oak + Clear Coat", "HPL Matte", "HPL Textured"];
export const TOP_OPTIONS     = ["Granite", "Quartz", "Solid Surface", "Stainless", "HPL"];