// src/data/roomCatalogue.js
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
        id: "lr-minimalist",
        name: "Minimalist",
        image: "https://www.bhg.com/thmb/zFR26CNs97iO95jd5In118A-ViM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MID_7009694_Shot_7_32acopy_preview-e1c1857231f949dd9978e2f6087d8228.jpg",
        description: "Desain minimalis dengan garis tegas dan warna netral.",
        components: [
          { id: "lr-min-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "lr-min-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "lr-min-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "lr-min-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "lr-min-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "lr-min-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "lr-min-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "lr-min-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "lr-min-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "lr-min-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "lr-min-panel", name: "Feature Panel", description: "TV backdrop, wall panel (fluted/kisi), hidden LED", options: [
            { id: "lr-min-pan-fluted", name: "Fluted Panel", description: "Wall panel fluted kayu natural minimalis", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop", pricePerMeter: 550000 },
            { id: "lr-min-pan-tv", name: "TV Backdrop Panel", description: "Panel backdrop TV dengan hidden cable system", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=400&auto=format&fit=crop", pricePerMeter: 700000 },
            { id: "lr-min-pan-led", name: "Hidden LED Panel", description: "Panel dinding dengan LED tersembunyi ambient", image: "https://images.unsplash.com/photo-1558882224-dda166ffe797?q=80&w=400&auto=format&fit=crop", pricePerMeter: 850000 },
          ]},
          { id: "lr-min-furniture", name: "Furniture", description: "Sofa, coffee table, side table, TV cabinet (loose/built-in)", options: [
            { id: "lr-min-fur-sofa-fabric", name: "Fabric Sofa - Gray", description: "Sofa berbalut kain minimalis abu-abu", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "lr-min-fur-sofa-leather", name: "Leather Sofa - Black", description: "Sofa kulit premium hitam modern", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5000000 },
            { id: "lr-min-fur-table", name: "Coffee Table Oak", description: "Meja kayu oak dengan finishing natural", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2000000 },
            { id: "lr-min-fur-tv-cabinet", name: "TV Cabinet Built-in", description: "Kabinet TV built-in dengan storage tersembunyi", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2500000 },
          ]},
          { id: "lr-min-hardware", name: "Hardware & Accessories", description: "Engsel soft close, rel laci, bracket, LED, rak display", options: [
            { id: "lr-min-hw-softclose", name: "Engsel Soft Close", description: "Set engsel soft close untuk semua pintu kabinet", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 200000 },
            { id: "lr-min-hw-drawer", name: "Rel Laci Undermount", description: "Rel laci undermount 40kg silent system", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop", pricePerMeter: 350000 },
            { id: "lr-min-hw-led", name: "LED Strip Display", description: "LED strip untuk rak display dan ambience", image: "https://images.unsplash.com/photo-1558882224-dda166ffe797?q=80&w=400&auto=format&fit=crop", pricePerMeter: 150000 },
          ]},
          { id: "lr-min-decor", name: "Decorative Elements", description: "Lukisan, tanaman, karpet, vas, aksesoris dekor", options: [
            { id: "lr-min-dec-rug", name: "Karpet Minimalis", description: "Karpet warna netral polos atau geometri simple", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=400&auto=format&fit=crop", pricePerMeter: 500000 },
            { id: "lr-min-dec-plant", name: "Tanaman Indoor", description: "Tanaman hijau indoor pot keramik minimalis", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&auto=format&fit=crop", pricePerMeter: 200000 },
            { id: "lr-min-dec-art", name: "Wall Art Abstract", description: "Lukisan abstrak tone netral framed", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=400&auto=format&fit=crop", pricePerMeter: 350000 },
          ]},
        ],
      },
      {
        id: "lr-modern",
        name: "Modern",
        image: "https://storage.googleapis.com/arsitagx-master/img_medium/6890/6985/46089/photo-living-room-modern-living-room-desain-arsitek-oleh-gm-concept.png",
        description: "Desain modern dengan garis tegas dan material kontemporer.",
        components: [
          { id: "lr-mod-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "lr-mod-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "lr-mod-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "lr-mod-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "lr-mod-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "lr-mod-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "lr-mod-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "lr-mod-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "lr-mod-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "lr-mod-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "lr-mod-panel", name: "Feature Panel", description: "TV backdrop, wall panel (fluted/kisi), hidden LED", options: [
            { id: "lr-mod-pan-marble", name: "Marble Look Panel", description: "Panel dinding motif marble modern", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop", pricePerMeter: 900000 },
            { id: "lr-mod-pan-kisi", name: "Panel Kisi Modern", description: "Panel kisi kayu geometri modern", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop", pricePerMeter: 650000 },
            { id: "lr-mod-pan-tv-led", name: "TV Panel + LED", description: "Backdrop TV dengan LED strip built-in", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=400&auto=format&fit=crop", pricePerMeter: 950000 },
          ]},
          { id: "lr-mod-furniture", name: "Furniture", description: "Sofa, coffee table, side table, TV cabinet (loose/built-in)", options: [
            { id: "lr-mod-fur-sofa", name: "Modular Sofa", description: "Sofa modular konfigurasi fleksibel", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4500000 },
            { id: "lr-mod-fur-table-glass", name: "Glass Coffee Table", description: "Meja kaca tempered dengan frame metal", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2500000 },
            { id: "lr-mod-fur-tv-float", name: "Floating TV Console", description: "TV console floating wall mount modern", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3000000 },
          ]},
          { id: "lr-mod-hardware", name: "Hardware & Accessories", description: "Engsel soft close, rel laci, bracket, LED, rak display", options: [
            { id: "lr-mod-hw-softclose", name: "Engsel Soft Close", description: "Engsel slow motion premium untuk pintu kabinet", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 200000 },
            { id: "lr-mod-hw-bracket", name: "Bracket Floating", description: "Bracket concealed untuk rak floating", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop", pricePerMeter: 180000 },
            { id: "lr-mod-hw-led", name: "LED Under Cabinet", description: "LED strip bawah kabinet cool white", image: "https://images.unsplash.com/photo-1558882224-dda166ffe797?q=80&w=400&auto=format&fit=crop", pricePerMeter: 150000 },
          ]},
          { id: "lr-mod-decor", name: "Decorative Elements", description: "Lukisan, tanaman, karpet, vas, aksesoris dekor", options: [
            { id: "lr-mod-dec-rug", name: "Karpet Geometris", description: "Karpet pola geometri modern monochrome", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=400&auto=format&fit=crop", pricePerMeter: 600000 },
            { id: "lr-mod-dec-vas", name: "Vas Keramik Modern", description: "Vas keramik bentuk modern sculptural", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=400&auto=format&fit=crop", pricePerMeter: 250000 },
          ]},
        ],
      },
      {
        id: "lr-klasik",
        name: "Klasik",
        image: "https://artfasad.com/wp-content/uploads/2023/09/wainscoting-ideas-for-living-room-6-1.jpg.webp",
        description: "Furniture elegan dengan detail tradisional yang timeless.",
        components: [
          { id: "lr-kls-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "lr-kls-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "lr-kls-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "lr-kls-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "lr-kls-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "lr-kls-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "lr-kls-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "lr-kls-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "lr-kls-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "lr-kls-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "lr-kls-panel", name: "Feature Panel", description: "TV backdrop, wall panel (fluted/kisi), hidden LED", options: [
            { id: "lr-kls-pan-wainscot", name: "Wainscoting Panel", description: "Panel wainscoting klasik dekoratif", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop", pricePerMeter: 700000 },
            { id: "lr-kls-pan-crown", name: "Crown Molding Backdrop", description: "Backdrop TV dengan crown molding detail", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop", pricePerMeter: 850000 },
          ]},
          { id: "lr-kls-furniture", name: "Furniture", description: "Sofa, coffee table, side table, TV cabinet (loose/built-in)", options: [
            { id: "lr-kls-fur-sofa-velvet", name: "Velvet Sofa - Wine", description: "Sofa beludru premium warna burgundy", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5500000 },
            { id: "lr-kls-fur-table-mah", name: "Mahogany Table", description: "Meja mahoni solid dengan detail ukiran", image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "lr-kls-fur-tv-classic", name: "TV Cabinet Klasik", description: "Kabinet TV klasik dengan glass door", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
          ]},
          { id: "lr-kls-hardware", name: "Hardware & Accessories", description: "Engsel soft close, rel laci, bracket, LED, rak display", options: [
            { id: "lr-kls-hw-brass", name: "Handle Brass Klasik", description: "Handle pintu kuningan gaya klasik", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop", pricePerMeter: 300000 },
            { id: "lr-kls-hw-hinge", name: "Engsel Dekoratif", description: "Engsel visible dekoratif brass finish", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 250000 },
          ]},
          { id: "lr-kls-decor", name: "Decorative Elements", description: "Lukisan, tanaman, karpet, vas, aksesoris dekor", options: [
            { id: "lr-kls-dec-chandelier", name: "Crystal Chandelier", description: "Lampu kristal klasik mewah sebagai focal point", image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2000000 },
            { id: "lr-kls-dec-rug", name: "Persian Rug", description: "Karpet motif persia tradisional elegan", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1200000 },
            { id: "lr-kls-dec-frame", name: "Framed Oil Painting", description: "Lukisan cat minyak dengan bingkai ornamen", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=400&auto=format&fit=crop", pricePerMeter: 800000 },
          ]},
        ],
      },
      {
        id: "lr-industrial",
        name: "Industrial",
        image: "https://i.pinimg.com/736x/c5/0f/a3/c50fa3555a8a5ffa820a84fd663a195e.jpg",
        description: "Kombinasi logam, kayu, dan kursi berbahan kuat yang durabel.",
        components: [
          { id: "lr-ind-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "lr-ind-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "lr-ind-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "lr-ind-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "lr-ind-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "lr-ind-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "lr-ind-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "lr-ind-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "lr-ind-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "lr-ind-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "lr-ind-panel", name: "Feature Panel", description: "TV backdrop, wall panel (fluted/kisi), hidden LED", options: [
            { id: "lr-ind-pan-brick", name: "Exposed Brick Panel", description: "Panel dinding bata ekspos industrial", image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=400&auto=format&fit=crop", pricePerMeter: 500000 },
            { id: "lr-ind-pan-metal-mesh", name: "Metal Mesh Panel", description: "Panel mesh logam dekoratif backdrop", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop", pricePerMeter: 600000 },
            { id: "lr-ind-pan-pipe", name: "Pipe Shelving System", description: "Rak display pipa besi industrial exposed", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop", pricePerMeter: 700000 },
          ]},
          { id: "lr-ind-furniture", name: "Furniture", description: "Sofa, coffee table, side table, TV cabinet (loose/built-in)", options: [
            { id: "lr-ind-fur-sofa-canvas", name: "Canvas & Metal Frame", description: "Sofa kanvas dengan kerangka besi industrial", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
            { id: "lr-ind-fur-table-metal", name: "Metal & Reclaimed Wood", description: "Meja besi dengan kayu bekas industrial", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "lr-ind-fur-tv-open", name: "Open Shelf TV Rack", description: "Rak TV terbuka besi + kayu tanpa pintu", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2800000 },
          ]},
          { id: "lr-ind-hardware", name: "Hardware & Accessories", description: "Engsel soft close, rel laci, bracket, LED, rak display", options: [
            { id: "lr-ind-hw-pipe-bracket", name: "Pipe Bracket", description: "Bracket rak dari pipa besi industrial", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop", pricePerMeter: 200000 },
            { id: "lr-ind-hw-cage-lamp", name: "Cage Lamp Mount", description: "Fitting lampu cage wire industrial", image: "https://images.unsplash.com/photo-1558882224-dda166ffe797?q=80&w=400&auto=format&fit=crop", pricePerMeter: 180000 },
          ]},
          { id: "lr-ind-decor", name: "Decorative Elements", description: "Lukisan, tanaman, karpet, vas, aksesoris dekor", options: [
            { id: "lr-ind-dec-factory-lamp", name: "Factory Pendant", description: "Lampu gantung pabrik vintage metal shade", image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1300000 },
            { id: "lr-ind-dec-rug", name: "Karpet Washed Out", description: "Karpet washed-out tone netral industrial", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=400&auto=format&fit=crop", pricePerMeter: 500000 },
            { id: "lr-ind-dec-clock", name: "Metal Clock Besar", description: "Jam dinding metal industrial oversized", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=400&auto=format&fit=crop", pricePerMeter: 350000 },
          ]},
        ],
      },
      {
        id: "lr-scandinavian",
        name: "Scandinavian",
        image: "https://artfasad.com/wp-content/uploads/2024/01/scandi-style-living-room-6.jpg.webp",
        description: "Terang dan simpel dengan furniture fungsional dan cozy.",
        components: [
          { id: "lr-scn-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "lr-scn-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "lr-scn-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "lr-scn-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "lr-scn-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "lr-scn-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "lr-scn-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "lr-scn-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "lr-scn-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "lr-scn-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "lr-scn-panel", name: "Feature Panel", description: "TV backdrop, wall panel (fluted/kisi), hidden LED", options: [
            { id: "lr-scn-pan-slat", name: "Wood Slat Panel", description: "Panel slat kayu natural terang Skandinavia", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop", pricePerMeter: 550000 },
            { id: "lr-scn-pan-simple", name: "Simple TV Niche", description: "Niche dinding sederhana untuk TV mount", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=400&auto=format&fit=crop", pricePerMeter: 450000 },
          ]},
          { id: "lr-scn-furniture", name: "Furniture", description: "Sofa, coffee table, side table, TV cabinet (loose/built-in)", options: [
            { id: "lr-scn-fur-sofa-linen", name: "Linen Sofa Cream", description: "Sofa linen warna cream hangat Skandinavia", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3800000 },
            { id: "lr-scn-fur-table-birch", name: "Birch Coffee Table", description: "Meja birch kayu muda ringan simpel", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2200000 },
            { id: "lr-scn-fur-tv-oak", name: "TV Stand White Oak", description: "Rak TV kayu putih oak legs natural", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2500000 },
          ]},
          { id: "lr-scn-hardware", name: "Hardware & Accessories", description: "Engsel soft close, rel laci, bracket, LED, rak display", options: [
            { id: "lr-scn-hw-softclose", name: "Engsel Soft Close", description: "Engsel soft close tone putih / nickel", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 200000 },
            { id: "lr-scn-hw-shelf", name: "Floating Shelf Bracket", description: "Bracket tersembunyi untuk rak floating", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop", pricePerMeter: 150000 },
          ]},
          { id: "lr-scn-decor", name: "Decorative Elements", description: "Lukisan, tanaman, karpet, vas, aksesoris dekor", options: [
            { id: "lr-scn-dec-paper-lamp", name: "Paper Shade Pendant", description: "Lampu kertas soft glow Skandinavia", image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=400&auto=format&fit=crop", pricePerMeter: 900000 },
            { id: "lr-scn-dec-knit", name: "Knitted Throw", description: "Selimut rajut cozy warna netral", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=400&auto=format&fit=crop", pricePerMeter: 300000 },
            { id: "lr-scn-dec-plant", name: "Hanging Planter", description: "Tanaman gantung macrame natural", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&auto=format&fit=crop", pricePerMeter: 200000 },
          ]},
        ],
      },
      {
        id: "lr-japandi",
        name: "Japandi",
        image: "https://roomofinspo.com/wp-content/uploads/RoI_Japandi-Living-Room_13_TV-Wall_11.webp",
        description: "Hangat dan nyaman dengan tekstur lembut dan pencahayaan ambient.",
        components: [
          { id: "lr-jpn-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "lr-jpn-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "lr-jpn-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "lr-jpn-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "lr-jpn-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "lr-jpn-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "lr-jpn-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "lr-jpn-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "lr-jpn-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "lr-jpn-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "lr-jpn-panel", name: "Feature Panel", description: "TV backdrop, wall panel (fluted/kisi), hidden LED", options: [
            { id: "lr-jpn-pan-shoji", name: "Shoji-inspired Panel", description: "Panel dinding bergaya shoji Jepang", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop", pricePerMeter: 650000 },
            { id: "lr-jpn-pan-tatami", name: "Tatami Accent Wall", description: "Aksen dinding motif tatami natural", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop", pricePerMeter: 600000 },
            { id: "lr-jpn-pan-fluted", name: "Fluted Wood Warm", description: "Fluted panel kayu warm tone japandi", image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=400&auto=format&fit=crop", pricePerMeter: 700000 },
          ]},
          { id: "lr-jpn-furniture", name: "Furniture", description: "Sofa, coffee table, side table, TV cabinet (loose/built-in)", options: [
            { id: "lr-jpn-fur-sofa-boucle", name: "Bouclé Sofa", description: "Sofa tekstur bouclé creamy japandi", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4300000 },
            { id: "lr-jpn-fur-table-walnut", name: "Walnut Low Table", description: "Meja walnut rendah gaya Jepang", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2600000 },
            { id: "lr-jpn-fur-tv-low", name: "Low TV Cabinet", description: "Kabinet TV rendah simpel kayu natural", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2800000 },
          ]},
          { id: "lr-jpn-hardware", name: "Hardware & Accessories", description: "Engsel soft close, rel laci, bracket, LED, rak display", options: [
            { id: "lr-jpn-hw-softclose", name: "Engsel Soft Close", description: "Engsel soft close warna natural brass", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop", pricePerMeter: 200000 },
            { id: "lr-jpn-hw-pull", name: "Minimal Pull Handle", description: "Handle tarikan simpel recessed japandi", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop", pricePerMeter: 120000 },
          ]},
          { id: "lr-jpn-decor", name: "Decorative Elements", description: "Lukisan, tanaman, karpet, vas, aksesoris dekor", options: [
            { id: "lr-jpn-dec-warm-lamp", name: "Warm Dimmable Lamp", description: "Lampu warm 2700K dengan dimmer cozy", image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1400000 },
            { id: "lr-jpn-dec-rattan", name: "Rattan Basket", description: "Keranjang rattan natural dekoratif", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=400&auto=format&fit=crop", pricePerMeter: 200000 },
            { id: "lr-jpn-dec-bonsai", name: "Bonsai / Kokedama", description: "Tanaman bonsai atau kokedama Jepang", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&auto=format&fit=crop", pricePerMeter: 350000 },
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
        image: "https://images.pexels.com/photos/7045354/pexels-photo-7045354.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Ruang tidur gersang dengan furniture essential dan warna tenang.",
        components: [
          { id: "br-min-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "br-min-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "br-min-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "br-min-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "br-min-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "br-min-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "br-min-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "br-min-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "br-min-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "br-min-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "comp-bed-1", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-platform", name: "Platform Bed Low", description: "Ranjang platform minimalis tanpa headboard", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3000000 },
            { id: "opt-bed-wooden", name: "Wooden Frame", description: "Ranjang kayu natural minimalis", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
          ]},
          { id: "comp-mattress-1", name: "Mattress", description: "Kasur pembaringan", options: [
            { id: "opt-mattress-latex", name: "Natural Latex", description: "Kasur latex organik memory foam", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "opt-mattress-spring", name: "Pocket Spring", description: "Kasur spring koil pocket system", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2500000 },
          ]},
          { id: "comp-headboard-1", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-minimal", name: "Upholstered Gray", description: "Headboard minimalis kain abu-abu", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1200000 },
            { id: "opt-headboard-none", name: "Wall Mounted", description: "Headboard wall panel minimalis", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1500000 },
          ]},
        ],
      },
      {
        id: "br-luxury",
        name: "Luxury",
        image: "https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Desain mewah dengan material premium dan dekorasi eksklusif.",
        components: [
          { id: "br-lux-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "br-lux-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "br-lux-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "br-lux-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "br-lux-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "br-lux-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "br-lux-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "br-lux-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "br-lux-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "br-lux-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "comp-bed-2", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-upholstered", name: "Upholstered Luxury", description: "Ranjang berlapis kain premium velvet", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5500000 },
            { id: "opt-bed-leather", name: "Leather Contemporary", description: "Ranjang leather premium warna dark", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=400&auto=format&fit=crop", pricePerMeter: 6500000 },
          ]},
          { id: "comp-mattress-2", name: "Mattress", description: "Kasur premium", options: [
            { id: "opt-mattress-hybrid", name: "Hybrid Premium", description: "Kasur hybrid latex + spring mewah", image: "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5000000 },
            { id: "opt-mattress-memory", name: "Memory Foam Gel", description: "Kasur memory foam gel cooling", image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4500000 },
          ]},
          { id: "comp-headboard-2", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-tall", name: "Tall Tufted", description: "Headboard tinggi dengan bantalan tufted", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2500000 },
            { id: "opt-headboard-carved", name: "Carved Wood", description: "Headboard kayu carved dengan dekorasi", image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3000000 },
          ]},
        ],
      },
      {
        id: "br-japandi",
        name: "Japandi",
        image: "https://images.pexels.com/photos/8251670/pexels-photo-8251670.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Gabungan gaya Jepang dan Skandinavia yang serene dan balanced.",
        components: [
          { id: "br-jpn-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "br-jpn-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "br-jpn-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "br-jpn-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "br-jpn-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "br-jpn-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "br-jpn-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "br-jpn-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "br-jpn-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "br-jpn-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "comp-bed-3", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-low-natural", name: "Low Natural Wood", description: "Ranjang rendah kayu natural japandi", image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3800000 },
            { id: "opt-bed-tatami", name: "Tatami Style", description: "Ranjang gaya tatami jepang minimalis", image: "https://images.pexels.com/photos/6962851/pexels-photo-6962851.jpeg?auto=compress&cs=tinysrgb&w=400", pricePerMeter: 3200000 },
          ]},
          { id: "comp-mattress-3", name: "Mattress", description: "Kasur", options: [
            { id: "opt-mattress-natural-fiber", name: "Natural Fiber", description: "Kasur serat alami breathable", image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2800000 },
            { id: "opt-mattress-futon", name: "Futon Traditional", description: "Kasur futon tradisional jepang", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2200000 },
          ]},
          { id: "comp-headboard-3", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-wooden-slat", name: "Wooden Slat", description: "Headboard kayu slat natural japandi", image: "https://images.pexels.com/photos/8251591/pexels-photo-8251591.jpeg?auto=compress&cs=tinysrgb&w=400", pricePerMeter: 1600000 },
            { id: "opt-headboard-fabric-natural", name: "Linen Natural", description: "Headboard linen warna alami", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1800000 },
          ]},
        ],
      },
      {
        id: "br-modern",
        name: "Modern",
        image: "https://images.pexels.com/photos/34754003/pexels-photo-34754003.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Tempat tidur platform dengan pencahayaan terintegrasi yang futuristik.",
        components: [
          { id: "br-mod-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "br-mod-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "br-mod-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "br-mod-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "br-mod-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "br-mod-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "br-mod-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "br-mod-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "br-mod-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "br-mod-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "comp-bed-4", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-platform-tech", name: "Platform Tech Bed", description: "Ranjang platform dengan USB charging", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5200000 },
            { id: "opt-bed-adjustable", name: "Adjustable Electric", description: "Ranjang elektrik dapat disesuaikan", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop", pricePerMeter: 7000000 },
          ]},
          { id: "comp-mattress-4", name: "Mattress", description: "Kasur premium", options: [
            { id: "opt-mattress-smart", name: "Smart Cooling", description: "Kasur gel cooling dengan teknologi", image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5500000 },
            { id: "opt-mattress-adjustable", name: "Memory Adjustable", description: "Kasur memory foam firm regulable", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4800000 },
          ]},
          { id: "comp-headboard-4", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-modern-lit", name: "Integrated Lighting", description: "Headboard built-in lampu ambient", image: "https://images.pexels.com/photos/12277279/pexels-photo-12277279.jpeg?auto=compress&cs=tinysrgb&w=400", pricePerMeter: 2800000 },
            { id: "opt-headboard-smart-panel", name: "Smart Panel", description: "Headboard panel kontrol pintar", image: "https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
          ]},
        ],
      },
      {
        id: "br-bohemian",
        name: "Bohemian",
        image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800&auto=format&fit=crop",
        description: "Mix pola, tekstur, dan warna yang eclectic dan artistik.",
        components: [
          { id: "br-boh-structure", name: "Structure (Rangka)", description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board", options: [
            { id: "br-boh-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
            { id: "br-boh-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
            { id: "br-boh-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
            { id: "br-boh-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
          ]},
          { id: "br-boh-finishing", name: "Finishing (Surface)", description: "HPL, Duco, Veneer, Tacosheet", options: [
            { id: "br-boh-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
            { id: "br-boh-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
            { id: "br-boh-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
            { id: "br-boh-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
          ]},
          { id: "comp-bed-5", name: "Bed Frame", description: "Rangka tempat tidur", options: [
            { id: "opt-bed-macrame", name: "Macramé Style", description: "Ranjang dengan detail macramé boho", image: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3600000 },
            { id: "opt-bed-rattan", name: "Rattan Woven", description: "Ranjang rattan woven bohemian", image: "https://images.unsplash.com/photo-1595514535215-95fc6629a5d0?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3200000 },
          ]},
          { id: "comp-mattress-5", name: "Mattress", description: "Kasur", options: [
            { id: "opt-mattress-organic", name: "Organic Cotton", description: "Kasur cotton organik breathable", image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3000000 },
            { id: "opt-mattress-natural", name: "Natural Latex", description: "Kasur latex organik eco-friendly", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
          ]},
          { id: "comp-headboard-5", name: "Headboard", description: "Panel kepala ranjang", options: [
            { id: "opt-headboard-macrame-wall", name: "Macramé Wall", description: "Wall hanging macramé bohemian", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1400000 },
            { id: "opt-headboard-textile", name: "Boho Textile", description: "Headboard textile tapestry colorful", image: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1600000 },
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
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
        description: "Meja makan besar dengan kursi berkualitas tinggi untuk acara formal.",
        components: [
          { id: "comp-dining-table-1", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-mahogany-formal", name: "Mahogany Formal", description: "Meja mahoni solid ukiran formal", image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?q=80&w=400&auto=format&fit=crop", pricePerMeter: 6000000 },
            { id: "opt-table-marble-formal", name: "Marble Top", description: "Meja dengan top marmer putih elegan", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 8000000 },
          ]},
          { id: "comp-dining-chairs-1", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-upholstered-formal", name: "Velvet Upholstered", description: "Kursi beludru warna burgundy formal", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1800000 },
            { id: "opt-chair-leather-formal", name: "Leather Premium", description: "Kursi kulit hitam dengan nail detail", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop", pricePerMeter: 2200000 },
          ]},
          { id: "comp-hardware-1", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-brass", name: "Brass Handles", description: "Handle brass polished mewah", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 800000 },
            { id: "opt-hw-crystal", name: "Crystal Pulls", description: "Pulls kristal dekoratif", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1000000 },
          ]},
        ],
      },
      {
        id: "dr-casual",
        name: "Casual",
        image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800&auto=format&fit=crop",
        description: "Suasana santai dengan meja wooden dan kursi yang nyaman.",
        components: [
          { id: "comp-dining-table-2", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-wood-casual", name: "Oak Wood Natural", description: "Meja oak kayu natural casual", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
            { id: "opt-table-teak", name: "Teak Reclaimed", description: "Meja teak bekas casual rustic", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
          ]},
          { id: "comp-dining-chairs-2", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-wood-casual", name: "Wooden Simple", description: "Kursi kayu sederhana casual", image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1200000 },
            { id: "opt-chair-fabric-casual", name: "Fabric Cushion", description: "Kursi kain empuk casual", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1500000 },
          ]},
          { id: "comp-hardware-2", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-wood", name: "Wood Details", description: "Aksesoris kayu natural", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop", pricePerMeter: 400000 },
            { id: "opt-hw-metal-simple", name: "Simple Metal", description: "Handle metal sederhana", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 500000 },
          ]},
        ],
      },
      {
        id: "dr-modern",
        name: "Modern",
        image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800&auto=format&fit=crop",
        description: "Desain kontemporer dengan material inovatif dan minimalis.",
        components: [
          { id: "comp-dining-table-3", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-glass-metal", name: "Glass & Metal", description: "Meja kaca frame metal minimalis", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4500000 },
            { id: "opt-table-white-oak", name: "Light Wood", description: "Meja kayu muda dengan base metal", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400&auto=format&fit=crop", pricePerMeter: 4000000 },
          ]},
          { id: "comp-dining-chairs-3", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-eames-style", name: "Eames Style", description: "Kursi Eames modern minimalis", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1600000 },
            { id: "opt-chair-plastic-metal", name: "Plastic & Metal", description: "Kursi plastik dengan kaki metal", image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1200000 },
          ]},
          { id: "comp-hardware-3", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-chrome", name: "Chrome Finish", description: "Handle chrome polished modern", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 600000 },
            { id: "opt-hw-matte-black", name: "Matte Black", description: "Handle black matte contemporary", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop", pricePerMeter: 700000 },
          ]},
        ],
      },
      {
        id: "dr-rustic",
        name: "Rustic",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
        description: "Gaya pedesaan dengan kayu natural dan aksen vintage.",
        components: [
          { id: "comp-dining-table-4", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-farmhouse", name: "Farmhouse Style", description: "Meja kayu rustic farmhouse besar", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5000000 },
            { id: "opt-table-reclaimed-large", name: "Reclaimed Wood", description: "Meja kayu bekas rustic vintage", image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?q=80&w=400&auto=format&fit=crop", pricePerMeter: 5500000 },
          ]},
          { id: "comp-dining-chairs-4", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-bentwood", name: "Bentwood Rustic", description: "Kursi bentwood warna cokelat tua", image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1400000 },
            { id: "opt-chair-woven-rush", name: "Woven Rush", description: "Kursi rush seat tradisional", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1300000 },
          ]},
          { id: "comp-hardware-4", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-iron", name: "Iron Hardware", description: "Hardware besi wrought rustic", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 700000 },
            { id: "opt-hw-aged", name: "Aged Brass", description: "Hardware brass aged patina", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop", pricePerMeter: 800000 },
          ]},
        ],
      },
      {
        id: "dr-scandinavian",
        name: "Scandinavian",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
        description: "Terang, fungsional, dan cozy dengan dominasi warna putih.",
        components: [
          { id: "comp-dining-table-5", name: "Dining Table", description: "Meja makan utama", options: [
            { id: "opt-table-birch-scandi", name: "Birch Light", description: "Meja birch putih terang Skandinavia", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3800000 },
            { id: "opt-table-pine-white", name: "White Pine", description: "Meja pine putih natural scandi", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&auto=format&fit=crop", pricePerMeter: 3500000 },
          ]},
          { id: "comp-dining-chairs-5", name: "Dining Chairs", description: "Kursi makan", options: [
            { id: "opt-chair-wishbone", name: "Wishbone Style", description: "Kursi wishbone natural scandi", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1300000 },
            { id: "opt-chair-simple-wooden", name: "Simple Wooden", description: "Kursi kayu sederhana terang", image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop", pricePerMeter: 1100000 },
          ]},
          { id: "comp-hardware-5", name: "Hardware", description: "Aksesoris", options: [
            { id: "opt-hw-natural-wood", name: "Natural Wood", description: "Handle kayu natural scandi", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop", pricePerMeter: 500000 },
            { id: "opt-hw-minimal", name: "Minimal Metal", description: "Handle metal minimal simple", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", pricePerMeter: 600000 },
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
            id: "ks-min-structure",
            name: "Structure (Rangka)",
            description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board",
            options: [
              { id: "ks-min-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
              { id: "ks-min-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
              { id: "ks-min-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
              { id: "ks-min-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
            ],
          },
          {
            id: "ks-min-finishing",
            name: "Finishing (Surface)",
            description: "HPL, Duco, Veneer, Tacosheet",
            options: [
              { id: "ks-min-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
              { id: "ks-min-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
              { id: "ks-min-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
              { id: "ks-min-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
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
            id: "ks-scn-structure",
            name: "Structure (Rangka)",
            description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board",
            options: [
              { id: "ks-scn-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
              { id: "ks-scn-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
              { id: "ks-scn-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
              { id: "ks-scn-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
            ],
          },
          {
            id: "ks-scn-finishing",
            name: "Finishing (Surface)",
            description: "HPL, Duco, Veneer, Tacosheet",
            options: [
              { id: "ks-scn-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
              { id: "ks-scn-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
              { id: "ks-scn-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
              { id: "ks-scn-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
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
            id: "ks-jpn-structure",
            name: "Structure (Rangka)",
            description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board",
            options: [
              { id: "ks-jpn-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
              { id: "ks-jpn-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
              { id: "ks-jpn-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
              { id: "ks-jpn-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
            ],
          },
          {
            id: "ks-jpn-finishing",
            name: "Finishing (Surface)",
            description: "HPL, Duco, Veneer, Tacosheet",
            options: [
              { id: "ks-jpn-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
              { id: "ks-jpn-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
              { id: "ks-jpn-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
              { id: "ks-jpn-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
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
            id: "ks-kls-structure",
            name: "Structure (Rangka)",
            description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board",
            options: [
              { id: "ks-kls-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
              { id: "ks-kls-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
              { id: "ks-kls-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
              { id: "ks-kls-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
            ],
          },
          {
            id: "ks-kls-finishing",
            name: "Finishing (Surface)",
            description: "HPL, Duco, Veneer, Tacosheet",
            options: [
              { id: "ks-kls-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
              { id: "ks-kls-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
              { id: "ks-kls-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
              { id: "ks-kls-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
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
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
        description: "Dapur futuristik dengan teknologi smart dan material contemporary.",
        components: [
          {
            id: "ks-mod-structure",
            name: "Structure (Rangka)",
            description: "Blockboard, Plywood 18mm, MDF 18mm, PVC Board",
            options: [
              { id: "ks-mod-str-blockboard", name: "Blockboard", description: "Blockboard solid untuk konstruksi utama, stabil dan kuat", image: "https://media.dekoruma.com/article/2018/12/17180915/download-31.jpg", pricePerMeter: 650000 },
              { id: "ks-mod-str-plywood", name: "Plywood 18mm", description: "Plywood 18mm furniture grade tahan lembap", image: "https://www.wburton.co.uk/wp-content/uploads/2023/08/marine_plywood_18mm.webp", pricePerMeter: 800000 },
              { id: "ks-mod-str-mdf", name: "MDF 18mm", description: "MDF 18mm permukaan halus untuk finishing rata", image: "https://static.wixstatic.com/media/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png/v1/fill/w_1000,h_700,al_c,q_90/3f747e_d7b0184fba5647a189d0366f531cd6a6~mv2.png", pricePerMeter: 600000 },
              { id: "ks-mod-str-pvc", name: "PVC Board", description: "PVC board tahan air dan rayap, sangat durable", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/18/93c40a66-9e9c-4d1e-98a9-ca75d6b343c4.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg", pricePerMeter: 950000 },
            ],
          },
          {
            id: "ks-mod-finishing",
            name: "Finishing (Surface)",
            description: "HPL, Duco, Veneer, Tacosheet",
            options: [
              { id: "ks-mod-fin-hpl", name: "HPL", description: "High Pressure Laminate tahan gores dan noda", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9e02fOu0GidJ4DPVkiKtkP0Zu0GnkQSKWx8uv8dRKsv8TE5J11bVJssyQWBS1lDLtiAQWAgQzHuvs_D6TWfRtcS026UTEsVClc4v-64IUnXYwhyyAutdfUOJkWJcXnF7pKKD-554o19fw-7-WXz-9MLYLyvGzJLbVDzTl_QTKN6NZ-beZQR7K_6XqWCoL/s842/hpl%20.png", pricePerMeter: 400000 },
              { id: "ks-mod-fin-duco", name: "Duco", description: "Cat duco premium, warna custom, halus mengkilap", image: "https://bioduco.com/assets/stocks//2025/finishing-cat-duco-putih-matte.webp", pricePerMeter: 650000 },
              { id: "ks-mod-fin-veneer", name: "Veneer", description: "Veneer kayu natural dengan clear coat finishing", image: "https://www.homarindo.com/wp-content/uploads/2025/09/Jenis-Finishing-Furniture-2.jpg", pricePerMeter: 750000 },
              { id: "ks-mod-fin-taco", name: "Tacosheet", description: "Tacosheet ekonomis dengan banyak pilihan motif", image: "https://www.mitrajayainterior.com/wp-content/uploads/2024/09/Screenshot-2024-09-21-150843.jpg", pricePerMeter: 350000 },
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
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
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