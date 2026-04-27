// src/data/projects.js

const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const PROJECTS = [

  // ── ORIGINAL LOCAL PROJECTS ───────────────────────────────────────────────

  // 1. Kitchen Set 1
  {
    id: "kitchen-set-1",
    title: "Island - Classic Modern",
    category: "Kitchen Set",
    client: "Keluarga T",
    year: "2025",
    location: "Jakarta",
    scope: "Design & Build",
    cover:
      "/portfolio/kitchenset-1/1.JPG",
    summary:
      "Kitchen set island minimalis untuk keluarga T di Jakarta — island compact dengan finishing HPL matte dan top granite, memaksimalkan area masak di dapur kecil.",
    tags: ["Kitchen Set", "Island", "Classic", "Modern", "Duco"],
    images: [
      "/portfolio/kitchenset-1/2.JPG",
      "/portfolio/kitchenset-1/3.JPG",
      "/portfolio/kitchenset-1/4.JPG",
      "/portfolio/kitchenset-1/5.JPG",
      "/portfolio/kitchenset-1/6.JPG",
      "/portfolio/kitchenset-1/7.JPG",
      "/portfolio/kitchenset-1/8.JPG",
      "/portfolio/kitchenset-1/9.JPG",
    ],
    sections: [
      {
        id: "brief",
        heading: "Project Brief",
        body:
          "Di tengah ritme Jakarta yang tidak pernah benar-benar berhenti, dapur bagi keluarga T bukan sekadar ruang memasak melainkan ruang berkumpul, ruang cerita, dan ruang pulang setelah hari yang panjang. Namun kondisi awal tidak mencerminkan itu. Dapur terasa sempit, alur kerja kurang efisien, dan tidak memiliki titik fokus yang bisa menyatukan aktivitas keluarga. Area persiapan, memasak, hingga penyimpanan terasa terpisah secara fungsi maupun pengalaman.Keluarga T datang dengan satu harapan sederhana namun kuat: menciptakan dapur yang bukan hanya indah secara visual, tetapi juga hidup—ruang yang bisa digunakan bersama, tanpa terasa sempit, tanpa terasa terbatas.:",
        gallery: [
          "/portfolio/kitchenset-1/1.JPG",
          "/portfolio/kitchenset-1/2.JPG",
          "/portfolio/kitchenset-1/3.JPG",
        ]
      },
      {
        id: "approach",
        heading: "Design Approach",
        body:
          "Kami memulai dengan satu pertanyaan utama: bagaimana membuat dapur terasa lebih luas tanpa menambah ruang? Jawabannya kami temukan melalui pendekatan classic modern yang bersih, elegan, dan timeless. Sebuah island menjadi pusat dari seluruh desain—bukan hanya sebagai elemen estetika, tetapi sebagai jantung aktivitas. Material dipilih dengan sangat hati-hati. Finishing berwarna terang dipadukan dengan tekstur marmer untuk menciptakan kesan luas dan mewah tanpa terasa berlebihan. Permukaan dibuat seamless untuk menjaga visual tetap rapi dan ringan. Setiap detail dirancang untuk mendukung kenyamanan:\n\n• Penyimpanan tersembunyi agar dapur selalu terlihat bersih\n• Pencahayaan hangat untuk menciptakan suasana yang lebih hidup\n• Komposisi vertikal yang memberikan kesan tinggi dan lega\n\nIsland tidak hanya menjadi meja—ia menjadi tempat sarapan pagi, tempat berbincang santai, bahkan tempat anak-anak mengerjakan tugas sambil ditemani orang tua memasak.",
      },
      {
        id: "process",
        heading: "Process & Challenges",
        body:
          "Tantangan terbesar proyek ini bukan pada desain, tetapi pada realisasi di lapangan. Ruang yang terbatas menuntut presisi tinggi dalam setiap pengukuran. Penempatan instalasi air dan listrik harus disesuaikan ulang agar island bisa berfungsi maksimal tanpa mengganggu sirkulasi. Selain itu, setiap modul kabinet dibuat secara custom untuk memastikan tidak ada ruang yang terbuang. Proses produksi dilakukan dengan detail tinggi—mulai dari pemilihan material, finishing, hingga pemasangan hardware yang harus presisi dan tahan lama. Koordinasi menjadi kunci. Dengan ruang kerja yang aktif dan waktu yang terbatas, setiap tahap harus berjalan efisien tanpa mengorbankan kualitas. Dan seperti banyak proyek yang penuh tantangan, justru di situlah karakter desain ini terbentuk—lebih matang, lebih terarah, dan lebih bermakna.",
      },
      {
        id: "result",
        heading: "Results",
        body:
          "Hasil akhirnya bukan hanya dapur baru. Ia adalah ruang yang benar-benar berubah cara digunakan. Dapur yang sebelumnya terasa sempit kini menjadi terbuka dan mengundang. Aktivitas memasak tidak lagi terasa terisolasi—justru menjadi bagian dari interaksi keluarga sehari-hari. Island yang menjadi pusat desain kini menjadi pusat kehidupan kecil di rumah itu:\n• Tempat sarapan cepat sebelum beraktivitas. \n• Tempat berbagi cerita setelah hari yang panjang \n• Tempat di mana momen sederhana terasa lebih hangat, \n• Secara visual, dapur ini tampil elegan dan bersih. Namun yang lebih penting, ia terasa hidup.Bagi keluarga T, dapur ini bukan lagi sekadar ruang fungsi. Ia menjadi ruang yang menyatukan. Dan bagi kami, itulah esensi sebenarnya dari sebuah desain—bukan hanya terlihat baik, tetapi benar-benar terasa berarti.\"*",
      },
    ],
  },

  // 2. Musholla
  {
    id: "musholla",
    title: "Musholla",
    category: "Musholla",
    client: "Tuan T",
    year: "2025",
    location: "Jakarta",
    scope: "Interior Build",
    cover:
      "/portfolio/musholla/1.JPG",
    summary:
      "Renovasi musholla lama menjadi musholla minimalis modern — keramik besar, rain shower, dan vanity floating untuk kesan bersih dan lapang.",
    tags: ["Musholla", "Minimalist", "Residential"],
    images: [
      "/portfolio/musholla/2.JPG",
      "/portfolio/musholla/3.JPG",
      "/portfolio/musholla/4.JPG",
      "/portfolio/musholla/5.JPG",
      "/portfolio/musholla/6.JPG",
    ],
    sections: [
      {
        id: "brief",
        heading: "Project Brief",
        body:
          "Di dalam rumah yang terus bergerak mengikuti ritme kota Jakarta, keluarga T menyadari bahwa mereka membutuhkan satu ruang yang berbeda—ruang untuk berhenti sejenak, menenangkan diri, dan kembali terhubung secara spiritual. Sebuah musholla yang bukan hanya hadir sebagai pelengkap, tetapi benar-benar menjadi tempat yang menghadirkan rasa tenang setiap kali dimasuki. Kondisi awal ruang ini masih sangat sederhana dan belum memiliki karakter. Pencahayaan terasa kurang hangat, penataan belum terarah, dan suasana yang tercipta belum mampu memberikan kenyamanan untuk beribadah dengan khusyuk. Keluarga T menginginkan sebuah musholla yang terasa bersih, tenang, dan memiliki sentuhan estetika yang halus tanpa kehilangan kesederhanaannya.",
      },
      {
        id: "approach",
        heading: "Design Approach",
        body:
          "Kami memulai dengan memahami bahwa musholla bukan sekadar ruang fisik, tetapi ruang rasa. Karena itu, pendekatan yang kami ambil berfokus pada ketenangan visual dan kehangatan suasana. Konsep minimalist kami pilih untuk menjaga ruang tetap ringan dan tidak berlebihan, sementara sentuhan detail lembut kami hadirkan untuk memberikan karakter yang elegan. Warna-warna netral menjadi dasar, menciptakan latar yang bersih dan menenangkan, sementara permainan pencahayaan dibuat lebih hangat agar suasana terasa lebih intim. Elemen dinding dirancang dengan komposisi sederhana namun berirama, memberikan fokus tanpa terasa ramai. Setiap garis dan proporsi dipikirkan agar selaras, menciptakan keseimbangan yang secara tidak sadar membuat siapa pun yang berada di dalamnya merasa lebih tenang. Material dipilih tidak hanya dari segi tampilan, tetapi juga dari bagaimana ia memantulkan cahaya, menyerap suasana, dan menghadirkan kenyamanan secara keseluruhan. Tidak ada yang berlebihan, namun setiap elemen memiliki peran.",
      },
      {
        id: "process",
        heading: "Process & Challenges",
        body:
          "Dalam prosesnya, tantangan utama adalah menjaga keseimbangan antara kesederhanaan dan karakter. Musholla ini tidak boleh terasa kosong, namun juga tidak boleh terasa penuh. Setiap detail harus dipertimbangkan dengan cermat, mulai dari tinggi panel, komposisi bidang, hingga intensitas pencahayaan. Penyesuaian dilakukan berulang kali untuk mendapatkan rasa yang tepat—bukan hanya secara visual, tetapi juga secara emosional. Pengerjaan dilakukan dengan presisi tinggi, terutama pada bagian finishing dan pemasangan lighting. Karena dalam ruang seperti ini, detail kecil justru menjadi penentu utama apakah suasana yang diinginkan benar-benar tercapai atau tidak.",
      },
      {
        id: "result",
        heading: "Results",
        body:
          "Hasil akhirnya adalah sebuah ruang yang terasa berbeda sejak langkah pertama masuk. Musholla ini tidak mencolok, namun justru di situlah kekuatannya. Ia menghadirkan ketenangan yang halus, suasana yang hangat, dan ruang yang terasa personal. Cahaya jatuh dengan lembut, menciptakan bayangan yang tenang dan mendukung momen ibadah menjadi lebih khusyuk. Kini, musholla bukan lagi sekadar ruang tambahan di rumah keluarga T. Ia menjadi tempat untuk berhenti sejenak dari kesibukan, tempat untuk menenangkan pikiran, dan tempat untuk kembali pada hal yang paling esensial.",
      },
    ],
  },

  // 3. Living Room - Japandi
  {
    id: "living-room-japandi",
    title: "Living Room - Japandi",
    category: "Living Room",
    client: "Tuan X",
    year: "2025",
    location: "Jakarta",
    scope: "Interior Build",
    cover:
      "/portfolio/living-room/1.JPG",
    summary:
      "Penataan ulang ruang TV keluarga bergaya Japandi — perpaduan minimalis Jepang dan kehangatan Scandinavian untuk ruang berkumpul yang tenang dan nyaman.",
    tags: ["Living Room", "Japandi", "Residential", "Furniture", "HPL"],
    images: [
      "/portfolio/living-room/2.JPG",
      "/portfolio/living-room/3.JPG",
      "/portfolio/living-room/4.JPG",
      "/portfolio/living-room/5.JPG",
      "/portfolio/living-room/6.JPG",
    ],
    sections: [
      {
        id: "brief",
        heading: "Project Brief",
        body:
          "Ruang keluarga bagi keluarga T adalah pusat dari hampir semua aktivitas di rumah—tempat berkumpul, berbincang, menerima tamu, hingga sekadar melepas lelah setelah hari yang panjang. Namun kondisi sebelumnya belum mampu mengakomodasi semua itu dengan baik. Tampilan ruang terasa kurang menyatu, beberapa elemen terlihat berdiri sendiri tanpa hubungan yang jelas. Penyimpanan belum terorganisir dengan optimal, sementara secara visual ruang masih terasa berat dan kurang memiliki karakter yang kuat. Keluarga T menginginkan sebuah living room yang terasa hangat, rapi, dan modern, namun tetap nyaman digunakan setiap hari. Sebuah ruang yang tidak hanya enak dilihat, tetapi juga terasa hidup dan fungsional dalam keseharian.",
      },
      {
        id: "approach",
        heading: "Design Approach",
        body:
          "Pendekatan yang kami ambil adalah menciptakan keseimbangan antara estetika dan fungsi melalui penggunaan finishing HPL yang fleksibel, rapi, dan konsisten secara visual. Kami membangun konsep contemporary dengan sentuhan hangat melalui kombinasi warna netral dan tekstur kayu. HPL dipilih bukan hanya karena tampilannya yang clean, tetapi juga karena kemampuannya menjaga konsistensi finishing di seluruh elemen—mulai dari panel dinding, kabinet TV, hingga storage tersembunyi. Permainan bidang menjadi kunci utama dalam desain ini. Dinding tidak hanya berfungsi sebagai pembatas, tetapi juga menjadi elemen visual yang membingkai ruang. Komposisi panel dibuat berlapis namun tetap sederhana, menciptakan kedalaman tanpa terasa ramai. Pencahayaan dirancang untuk memperkuat suasana. Hidden lighting ditempatkan secara strategis untuk menonjolkan tekstur dan memberikan efek hangat yang halus, sehingga ruang terasa lebih nyaman terutama di malam hari.",
      },
      {
        id: "process",
        heading: "Process & Challenges",
        body:
          "Tantangan utama dalam proyek ini adalah menjaga agar penggunaan HPL tidak terasa monoton. Karena material ini memiliki karakter yang seragam, diperlukan komposisi desain yang tepat agar tetap menarik secara visual. Kami melakukan eksplorasi pada pola panel, pertemuan antar bidang, serta permainan tone warna untuk menciptakan variasi yang halus namun tetap elegan. Setiap sambungan harus presisi, karena detail kecil pada finishing seperti ini sangat terlihat dan berpengaruh pada hasil akhir. Selain itu, integrasi antara fungsi storage dan estetika juga menjadi perhatian utama. Semua penyimpanan dirancang agar menyatu dengan desain, tanpa terlihat seperti tambahan yang terpisah. Proses produksi dan pemasangan dilakukan dengan ketelitian tinggi untuk memastikan hasil akhir benar-benar rapi, seamless, dan sesuai dengan konsep yang telah dirancang.",
      },
      {
        id: "result",
        heading: "Results",
        body:
          "Hasil akhirnya adalah ruang keluarga yang terasa jauh lebih terstruktur, hangat, dan menyatu. Visual yang sebelumnya terpecah kini menjadi lebih harmonis, dengan satu benang merah desain yang jelas. Area TV menjadi focal point yang kuat, namun tetap menyatu dengan keseluruhan ruang. Penggunaan HPL memberikan tampilan yang clean dan modern, sekaligus memudahkan perawatan dalam jangka panjang. Ruang terasa lebih rapi karena semua fungsi penyimpanan tersembunyi dengan baik. Kini, living room keluarga T benar-benar menjadi pusat aktivitas yang nyaman. Tempat di mana keluarga bisa berkumpul tanpa merasa sumpek, tempat di mana tamu disambut dengan suasana yang hangat, dan tempat di mana setiap sudutnya terasa dipikirkan dengan matang. Sebuah ruang yang tidak hanya dirancang untuk dilihat, tetapi untuk dirasakan setiap hari.",
      },
    ],
  },

  // 4. Bedroom - Minimalist
  {
    id: "bedroom-minimalist",
    title: "Bedroom - Minimalist",
    category: "Bedroom",
    client: "Tuan X",
    year: "2025",
    location: "Jakarta",
    scope: "Interior Build",
    cover:
      "/portfolio/bedroom-1/after-13.jpg",
    summary:
      "Penataan ulang kamar tidur bergaya minimalis — perpaduan elemen sederhana dan fungsional untuk menciptakan ruang istirahat yang tenang dan nyaman.",
    tags: ["Bedroom", "Minimalist", "Residential", "Furniture", "HPL"],
    images: [
      "/portfolio/bedroom-1/after-7.jpg",
      "/portfolio/bedroom-1/after-8.jpg",
      "/portfolio/bedroom-1/after-9.jpg",
      "/portfolio/bedroom-1/after-10.jpg",
      "/portfolio/bedroom-1/after-12.jpg",
      "/portfolio/bedroom-1/after-14.jpg",
      "/portfolio/bedroom-1/after-15.jpg",
      "/portfolio/bedroom-1/after-16.jpg",
      "/portfolio/bedroom-1/after-17.jpg",
      "/portfolio/bedroom-1/after-18.jpg",
      "/portfolio/bedroom-1/after-19.jpg",
      "/portfolio/bedroom-1/after-20.jpg",
      "/portfolio/bedroom-1/after-21.jpg",
    ],
    sections: [
      {
        id: "brief",
        heading: "Project Brief",
        body:
          "Kamar tidur bagi Tuan X bukan sekadar tempat untuk tidur, melainkan ruang personal untuk beristirahat, mengisi ulang energi, dan melepaskan diri dari hiruk pikuk aktivitas harian. Namun kondisi awal kamar tidur belum mencerminkan kebutuhan tersebut. Ruang terasa sempit secara visual, penataan furnitur belum optimal, dan suasana yang tercipta belum mampu menghadirkan ketenangan yang dibutuhkan. Penyimpanan pakaian dan barang pribadi masih terlihat berantakan, sementara pencahayaan dan warna ruang belum mendukung atmosfer yang restful. Tuan X menginginkan sebuah kamar tidur yang minimalis namun hangat—ruang yang terasa bersih, teratur, dan langsung memberikan rasa tenang begitu memasukinya.",
        gallery: [
          "/portfolio/bedroom-1/before-1.jpg",
          "/portfolio/bedroom-1/before-2.jpg",
          "/portfolio/bedroom-1/before-3.jpg",
          "/portfolio/bedroom-1/before-4.jpg",
          "/portfolio/bedroom-1/before-5.jpg",
          "/portfolio/bedroom-1/before-6.jpg",
        ]
      },
      {
        id: "approach",
        heading: "Design Approach",
        body:
          "Kami mengusung konsep minimalis yang berfokus pada ketenangan dan keteraturan. Setiap elemen dirancang dengan prinsip less is more—hanya yang benar-benar dibutuhkan yang hadir di dalam ruang. Finishing HPL menjadi material utama untuk headboard dan area wardrobe, memberikan tampilan yang bersih, konsisten, dan mudah dirawat. Palet warna netral dengan sentuhan kayu natural dipilih untuk menciptakan suasana hangat tanpa terasa berat. Headboard dirancang sebagai focal point utama, dengan panel yang clean dan tegas, dipadukan dengan hidden lighting di belakangnya untuk menciptakan ambience yang lembut di malam hari. Wardrobe built-in dirancang menyatu dengan dinding, memberikan kapasitas penyimpanan maksimal tanpa memakan ruang visual. Setiap laci dan kompartemen dioptimalkan agar barang-barang tersimpan rapi dan mudah diakses.\nPencahayaan menjadi elemen kunci dalam membentuk suasana kamar:\n• Ambient lighting lembut untuk suasana relaksasi\n• Task lighting di area meja dan cermin untuk kebutuhan fungsional\n• Accent lighting pada headboard untuk menciptakan kedalaman visual",
      },
      {
        id: "process",
        heading: "Process & Challenges",
        body:
          "Tantangan utama dalam proyek ini adalah mengelola ruang yang terbatas agar tetap terasa lega sekaligus mengakomodasi semua kebutuhan penyimpanan. Dalam desain minimalis, setiap sentimeter harus dihitung dengan presisi—tidak ada ruang untuk kesalahan proporsi. Pemilihan tone HPL menjadi krusial. Warna yang terlalu gelap akan membuat kamar terasa sempit, sementara terlalu terang bisa terasa dingin dan kurang personal. Kami melakukan beberapa iterasi warna hingga menemukan keseimbangan yang tepat antara kehangatan dan kesan luas. Selain itu, integrasi antara sistem pencahayaan dan panel headboard memerlukan koordinasi yang detail. Pemasangan hidden lighting harus presisi agar efek cahaya yang dihasilkan merata dan tidak terlihat sumber cahayanya. Proses fitting wardrobe juga membutuhkan ketelitian tinggi untuk memastikan setiap modul terpasang sempurna dan seamless dengan elemen lain di ruangan.",
      },
      {
        id: "result",
        heading: "Results",
        body:
          "Hasil akhirnya menghadirkan kamar tidur yang terasa jauh berbeda dari kondisi sebelumnya. Ruang yang tadinya terasa penuh dan tidak teratur kini berubah menjadi bersih, tenang, dan menyenangkan untuk ditempati. Headboard menjadi pusat visual yang kuat namun tidak mendominasi—memberikan karakter pada ruang tanpa membuatnya terasa ramai. Wardrobe built-in berhasil menyembunyikan semua kebutuhan penyimpanan dengan rapi, menjaga lantai dan permukaan tetap bersih. Pencahayaan berlapis menciptakan fleksibilitas suasana—terang dan fungsional di pagi hari, hangat dan menenangkan di malam hari. Kini, kamar tidur Tuan X benar-benar menjadi sanctuary pribadi. Tempat di mana pikiran bisa beristirahat, tubuh bisa pulih, dan setiap malam terasa lebih berkualitas. Sebuah ruang yang membuktikan bahwa kesederhanaan, jika dirancang dengan tepat, justru menghadirkan kenyamanan yang paling dalam.",
      },
    ],
  },

  // 5. Living Room - Classic
  {
    id: "living-classic",
    title: "Living Room - Classic",
    category: "Living Room",
    client: "Tuan X",
    year: "2025",
    location: "Jakarta",
    scope: "Interior Build",
    cover:
      "/portfolio/living-room-2/1.JPG",
    summary:
      "Penataan ulang ruang TV keluarga bergaya Classic — perpaduan elemen tradisional dan modern untuk ruang berkumpul yang tenang dan nyaman.",
    tags: ["Living Room", "Classic", "Residential", "Furniture", "Duco"],
    images: [
      "/portfolio/living-room-2/2.JPG",
      "/portfolio/living-room-2/3.JPG",
      "/portfolio/living-room-2/4.JPG",
      "/portfolio/living-room-2/5.JPG",
      "/portfolio/living-room-2/6.JPG",
      "/portfolio/living-room-2/7.JPG",
      "/portfolio/living-room-2/8.JPG",
      "/portfolio/living-room-2/9.JPG",
    ],
    sections: [
      {
        id: "brief",
        heading: "Project Brief",
        body:
          "Bagi keluarga T, ruang keluarga bukan hanya tempat berkumpul, tetapi juga representasi dari karakter rumah secara keseluruhan. Mereka menginginkan sebuah ruang yang mampu memberikan kesan pertama yang kuat—elegan, bersih, dan berkelas—namun tetap nyaman untuk digunakan dalam keseharian. Kondisi awal ruang masih terasa kosong secara karakter. Secara fungsi sudah berjalan, namun belum memiliki identitas visual yang benar-benar mencerminkan selera pemilik rumah. Keluarga T menginginkan konsep klasik, tetapi dengan pendekatan yang lebih modern—tidak terlalu berat, tidak terlalu penuh ornamen, dan tetap terasa relevan dengan gaya hidup saat ini.",
      },
      {
        id: "approach",
        heading: "Design Approach",
        body:
          "Kami mengembangkan konsep classic modern dengan dominasi warna putih sebagai fondasi utama. Warna ini dipilih untuk menciptakan kesan luas, bersih, dan timeless, sekaligus menjadi kanvas yang memperkuat detail-detail klasik di dalam ruang. Finishing cat duco menjadi elemen utama untuk menghadirkan permukaan yang halus, rapi, dan konsisten. Panel dinding dirancang dengan permainan molding klasik yang proporsional—cukup untuk memberikan karakter, namun tidak berlebihan sehingga tetap terasa ringan secara visual. Sebagai focal point, kami menghadirkan backdrop TV menggunakan material marmer dengan pola natural yang kuat. Elemen ini menjadi pusat perhatian yang memberikan kontras elegan di tengah dominasi warna putih. Komposisinya dibuat simetris, dipadukan dengan built-in shelving di sisi kanan dan kiri untuk menambah keseimbangan sekaligus fungsi display. Pencahayaan dirancang berlapis untuk memperkuat suasana ruang. Ceiling dibuat dengan detail coffered yang dipadukan dengan hidden lighting, menciptakan dimensi yang mewah namun tetap hangat. Lampu gantung menjadi aksen yang mempertegas karakter klasik, sementara pencahayaan tambahan memberikan efek lembut yang menyelimuti ruang.",
      },
      {
        id: "process",
        heading: "Process & Challenges",
        body:
          "Tantangan utama dalam proyek ini adalah menjaga keseimbangan antara kemewahan dan kenyamanan. Desain klasik yang terlalu berat bisa terasa kaku, sementara pendekatan yang terlalu minimal justru menghilangkan esensinya. Setiap detail harus dihitung dengan presisi, terutama pada proporsi molding dinding dan ceiling. Finishing cat duco juga membutuhkan tingkat kerapihan tinggi agar hasil akhir benar-benar halus tanpa cacat, mengingat warna putih sangat sensitif terhadap detail kecil. Pemasangan marmer pada backdrop TV menjadi salah satu titik krusial. Pola urat alami harus disusun dengan cermat agar menghasilkan komposisi yang simetris dan estetis. Selain itu, integrasi antara elemen dekoratif dan fungsi—seperti storage dan area TV—harus tetap seamless tanpa mengganggu tampilan keseluruhan.",
      },
      {
        id: "result",
        heading: "Results",
        body:
          "Hasil akhirnya menghadirkan ruang keluarga yang terasa elegan sejak pandangan pertama, namun tetap nyaman untuk ditinggali setiap hari. Dominasi warna putih menciptakan kesan luas dan bersih, sementara detail klasik memberikan kedalaman dan karakter yang kuat. Backdrop marmer menjadi pusat perhatian yang memberikan sentuhan mewah tanpa terasa berlebihan. Ruang ini kini tidak hanya berfungsi sebagai tempat berkumpul, tetapi juga menjadi ruang yang membangun suasana—hangat di malam hari, terang dan segar di siang hari. Setiap elemen terasa menyatu, menciptakan harmoni yang halus namun terasa kuat. Bagi keluarga T, living room ini bukan sekadar ruang duduk. Ia menjadi wajah dari rumah mereka—tenang, elegan, dan penuh rasa.",
      },
    ],
  },

  // 6. Apartment - Classic Modern
  {
    id: "apartment",
    title: "Apartment - Classic Modern",
    category: "Apartment",
    client: "Tuan D",
    year: "2025",
    location: "Jakarta",
    scope: "Interior Build",
    cover:
      "/portfolio/apartment/1.jpg",
    summary:
      "Desain apartemen Tuan D dengan konsep Classic Modern: kenyamanan, estetika, dan fungsionalitas.",
    tags: ["Apartment", "Classic", "Modern", "Duco"],
    images: [
      "/portfolio/apartment/2.jpg",
      "/portfolio/apartment/3.jpg",
      "/portfolio/apartment/4.jpg",
      "/portfolio/apartment/5.jpg",
      "/portfolio/apartment/6.jpg",
      "/portfolio/apartment/7.jpg",
      "/portfolio/apartment/8.jpg",
      "/portfolio/apartment/9.jpg",
      "/portfolio/apartment/10.jpg",
      "/portfolio/apartment/11.jpg",
      "/portfolio/apartment/12.jpg",
      "/portfolio/apartment/13.jpg",
      "/portfolio/apartment/14.jpg",
      "/portfolio/apartment/15.jpg",
      "/portfolio/apartment/16.jpg",
      "/portfolio/apartment/17.jpg",
      "/portfolio/apartment/18.jpg",
      "/portfolio/apartment/19.jpg",
      "/portfolio/apartment/20.jpg",
      "/portfolio/apartment/21.jpg",
      "/portfolio/apartment/22.jpg",
      "/portfolio/apartment/23.jpg",
      "/portfolio/apartment/24.jpg",
    ],
    sections: [
      {
        id: "brief",
        heading: "Project Brief",
        body:
          "Tinggal di apartemen di tengah Jakarta berarti hidup dengan ritme yang cepat, ruang yang terbatas, dan kebutuhan akan efisiensi di setiap sudut. Bagi keluarga T, hunian ini bukan hanya tempat singgah, tetapi ruang untuk beristirahat, mengisi ulang energi, dan tetap merasa pulang di tengah kesibukan kota. Namun kondisi awal unit apartemen masih terasa standar dan belum mencerminkan karakter penghuninya. Ruang terasa datar, kurang memiliki kedalaman visual, serta belum mampu mengakomodasi kebutuhan penyimpanan secara optimal. Setiap area terasa berdiri sendiri, tanpa koneksi yang kuat secara desain. Keluarga T menginginkan sebuah apartemen yang modern, rapi, dan elegan—namun tetap hangat dan nyaman untuk ditinggali setiap hari. Sebuah ruang yang compact, tetapi terasa luas secara pengalaman.",
      },
      {
        id: "approach",
        heading: "Design Approach",
        body:
          "Kami mengembangkan pendekatan modern yang refined, dengan memaksimalkan penggunaan cat duco dan HPL sebagai elemen utama pembentuk karakter ruang. Cat duco digunakan untuk menciptakan permukaan yang halus, bersih, dan seamless. Finishing ini memberikan kesan premium yang tenang, sekaligus memperkuat nuansa modern yang ingin dicapai. Di sisi lain, HPL kami hadirkan sebagai penyeimbang—memberikan tekstur, kehangatan, dan variasi visual agar ruang tidak terasa terlalu dingin. Permainan bidang dan layering menjadi kunci utama. Dinding, kabinet, dan elemen built-in dirancang menyatu, membentuk garis-garis yang tegas namun tetap ringan. Setiap sudut dimanfaatkan secara maksimal, dengan storage tersembunyi yang menjaga ruang tetap rapi tanpa terlihat penuh. Palet warna dipilih dengan hati-hati—didominasi oleh warna netral yang lembut, dipadukan dengan aksen kayu untuk menciptakan keseimbangan antara modern dan homey. Pencahayaan dirancang berlapis, menggabungkan fungsi dan ambience untuk menciptakan suasana yang fleksibel, dari terang saat beraktivitas hingga hangat saat beristirahat.",
      },
      {
        id: "process",
        heading: "Process & Challenges",
        body:
          "Tantangan terbesar dalam proyek apartemen ini adalah bagaimana membuat ruang yang terbatas terasa lebih luas tanpa mengorbankan fungsi. Setiap keputusan desain harus presisi. Kesalahan kecil dalam proporsi atau pemilihan material bisa membuat ruang terasa sempit atau terlalu padat. Oleh karena itu, kami sangat memperhatikan detail—mulai dari ketebalan panel, garis pertemuan antar material, hingga transisi antara cat duco dan HPL agar terlihat seamless. Proses produksi juga menuntut ketelitian tinggi, terutama pada finishing cat duco yang harus benar-benar halus dan konsisten. Sementara itu, pemasangan HPL harus presisi agar pola dan teksturnya tetap selaras di seluruh area. Koordinasi di lapangan menjadi faktor penting, mengingat ruang kerja yang terbatas dan kebutuhan untuk menjaga setiap elemen tetap sesuai dengan desain awal.",
      },
      {
        id: "result",
        heading: "Results",
        body:
          "Hasil akhirnya menghadirkan apartemen yang terasa jauh lebih dari sekadar unit hunian. Ruang yang sebelumnya terasa standar kini berubah menjadi lebih hidup, lebih terstruktur, dan memiliki identitas yang kuat. Setiap area terhubung dengan harmonis, menciptakan alur yang nyaman untuk beraktivitas sehari-hari. Permukaan cat duco memberikan kesan bersih dan elegan, sementara HPL menghadirkan kehangatan yang membuat ruang terasa lebih personal. Kombinasi keduanya menciptakan keseimbangan yang pas—modern tanpa terasa kaku, rapi tanpa kehilangan rasa. Apartemen ini kini menjadi tempat di mana keluarga T bisa benar-benar beristirahat dari hiruk pikuk kota. Sebuah ruang yang tidak hanya efisien, tetapi juga memberikan kenyamanan emosional. Compact dalam ukuran, namun luas dalam pengalaman. Sederhana dalam bentuk, namun kaya dalam rasa.",
      },
    ],
  },

  // 7. Kitchen Set 2
  {
    id: "kitchen-set-2",
    title: "Layout L - Scandinavian",
    category: "Kitchen Set",
    client: "Ibu A",
    year: "2025",
    location: "Bekasi",
    scope: "Design & Build",
    cover:
      "/portfolio/kitchenset-2/3.jpeg",
    summary:
      "Kitchen set layout L bergaya Scandinavian — kabinet putih-abu dengan handle minimalis, top quartz, dan storage efisien untuk dapur keluarga.",
    tags: ["Kitchen Set", "L Layout", "Scandinavian", "HPL"],
    images: [
      "/portfolio/kitchenset-2/4.jpeg",
    ],
    sections: [
      {
        id: "brief",
        heading: "Project Brief",
        body:
          "Di tengah kesibukan harian yang padat, keluarga T menginginkan dapur yang terasa lebih ringan—bukan hanya secara visual, tetapi juga secara suasana. Sebuah ruang yang tidak melelahkan untuk dilihat, nyaman untuk digunakan, dan mampu menghadirkan rasa tenang bahkan di pagi hari yang terburu-buru. Kondisi awal dapur terasa cukup padat, dengan visual yang berat dan penataan yang belum sepenuhnya efisien. Aktivitas memasak sering terasa sempit, dan ruang belum mampu mendukung rutinitas harian dengan optimal. Keluarga T tidak mencari sesuatu yang terlalu mewah, tetapi mereka menginginkan dapur yang terasa hangat, bersih, dan menyenangkan untuk digunakan setiap hari.",
        gallery: [
          "/portfolio/kitchenset-2/1.jpeg",
        ]
      },
      {
        id: "approach",
        heading: "Design Approach",
        body:
          "Pendekatan Scandinavian kami pilih sebagai jawaban atas kebutuhan tersebut—sebuah gaya yang mengutamakan kesederhanaan, fungsi, dan kehangatan dalam satu kesatuan yang harmonis. Kami membangun suasana melalui kombinasi warna terang dan elemen kayu natural yang memberikan kesan hangat tanpa terasa berat. Putih digunakan sebagai dasar untuk memantulkan cahaya dan menciptakan ilusi ruang yang lebih luas, sementara tekstur kayu menghadirkan sentuhan alami yang membuat dapur terasa lebih hidup. Desain dibuat seefisien mungkin, dengan garis-garis yang bersih dan minim ornamen. Setiap elemen memiliki tujuan yang jelas, tidak ada yang berlebihan. Penyimpanan dirancang agar tersembunyi namun mudah diakses, menjaga dapur tetap rapi dalam keseharian. Pencahayaan menjadi bagian penting dalam membentuk atmosfer. Cahaya yang lembut dan merata membantu menciptakan suasana yang nyaman—tidak terlalu terang, namun cukup untuk mendukung setiap aktivitas dengan baik.",
      },
      {
        id: "process",
        heading: "Process & Challenges",
        body:
          "Tantangan dalam proyek ini terletak pada bagaimana menghadirkan kesan ringan tanpa membuat ruang terasa kosong atau dingin. Scandinavian yang terlalu minimal bisa terasa kaku, sementara terlalu banyak elemen justru menghilangkan esensi utamanya. Kami melakukan banyak penyesuaian pada komposisi material dan warna agar tetap seimbang. Pemilihan finishing kayu menjadi krusial, karena tone yang terlalu gelap akan menghilangkan kesan ringan, sementara terlalu terang bisa terasa datar. Selain itu, penataan layout juga harus benar-benar efisien untuk memastikan setiap aktivitas—mulai dari memasak, menyimpan, hingga membersihkan—dapat dilakukan dengan alur yang nyaman. Proses produksi dilakukan dengan detail tinggi untuk menjaga kualitas hasil akhir tetap rapi dan presisi.",
        gallery: [
          "/portfolio/kitchenset-2/2.jpeg",
        ]
      },
      {
        id: "result",
        heading: "Results",
        body:
          "Hasil akhirnya menghadirkan dapur yang terasa jauh lebih terbuka, bersih, dan menenangkan. Ruang yang sebelumnya terasa padat kini berubah menjadi lebih lapang secara visual. Setiap sudut terasa ringan, setiap elemen terasa selaras. Dapur ini tidak berusaha mencuri perhatian, namun justru menghadirkan kenyamanan yang konsisten setiap hari. Aktivitas memasak menjadi lebih menyenangkan, bukan lagi sekadar rutinitas. Cahaya yang masuk berpadu dengan material natural menciptakan suasana yang hangat, membuat dapur terasa seperti ruang yang hidup, bukan hanya ruang kerja. Bagi keluarga T, dapur ini menjadi tempat di mana hari dimulai dengan lebih tenang, dan diakhiri dengan rasa yang lebih hangat. Sebuah ruang sederhana, yang dirancang dengan perhatian pada hal-hal kecil—dan justru di situlah letak keindahannya.",
      },
    ],
  },

  // 8. Kitchen Set 3
  {
    id: "kitchen-set-3",
    title: "Layout L - Minimalist",
    category: "Kitchen Set",
    client: "Bapak S",
    year: "2025",
    location: "Bogor",
    scope: "Design & Build",
    cover:
      "/portfolio/kitchenset-3/4.jpg",
    summary:
      "Kitchen set layout L bergaya Minimalist untuk Bapak S — perpaduan kayu natural dan earth tone untuk dapur yang hangat, fungsional, dan estetik.",
    tags: ["Kitchen Set", "Island", "Minimalist", "HPL"],
    images: [
      "/portfolio/kitchenset-3/1.jpg",
      "/portfolio/kitchenset-3/2.jpg",
      "/portfolio/kitchenset-3/3.jpg",
      "/portfolio/kitchenset-3/4.jpg",
      "/portfolio/kitchenset-3/5.jpg",
      "/portfolio/kitchenset-3/6.jpg",
      "/portfolio/kitchenset-3/7.jpg",
      "/portfolio/kitchenset-3/8.jpg",
      "/portfolio/kitchenset-3/9.jpg",
    ],
    sections: [
      {
        id: "brief",
        heading: "Project Brief",
        body:
          "Bagi Bapak S, dapur bukan hanya ruang untuk memasak, tetapi bagian penting dari rutinitas harian yang harus terasa praktis, rapi, dan mudah digunakan. Dengan aktivitas yang cukup padat, beliau menginginkan sebuah kitchen set yang sederhana namun efisien—tanpa elemen berlebihan, tanpa kerumitan yang tidak perlu. Kondisi awal dapur masih belum tertata dengan baik. Area kerja terasa kurang optimal, penyimpanan belum terorganisir, dan secara visual ruang masih terlihat penuh meskipun ukurannya tidak besar. Hal ini membuat aktivitas di dapur terasa kurang nyaman dan tidak efisien. Kebutuhan utamanya jelas: dapur yang compact, fungsional, dan tetap memiliki tampilan yang bersih serta modern.",
      },
      {
        id: "approach",
        heading: "Design Approach",
        body:
          "Kami memilih pendekatan layout L sebagai solusi utama untuk memaksimalkan sudut ruang yang tersedia. Dengan konfigurasi ini, alur kerja menjadi lebih efisien karena semua aktivitas—mulai dari persiapan, memasak, hingga penyimpanan—terhubung dalam satu garis yang mengalir. Konsep minimalist diterapkan untuk menjaga visual tetap ringan dan tidak membebani ruang. Kami menggunakan palet warna netral yang bersih, dipadukan dengan finishing yang halus agar dapur terasa lebih luas secara visual. Setiap elemen dirancang dengan prinsip fungsi terlebih dahulu. Kabinet dibuat tanpa ornamen berlebihan, dengan garis tegas dan rapi. Penyimpanan dioptimalkan hingga ke sudut, memastikan tidak ada ruang yang terbuang. Area countertop dibuat cukup lega untuk mendukung aktivitas harian tanpa terasa sempit. Pencahayaan juga diperhatikan untuk memastikan dapur tetap terang dan nyaman digunakan, sekaligus memperkuat kesan bersih yang menjadi inti dari konsep ini.",
      },
      {
        id: "process",
        heading: "Process & Challenges",
        body:
          "Tantangan utama dalam proyek ini adalah mengolah ruang yang terbatas agar tetap terasa lega sekaligus fungsional. Layout L memang efektif, namun harus dirancang dengan presisi agar tidak menciptakan area mati di sudut. Kami melakukan penyesuaian detail pada dimensi kabinet dan pembagian storage untuk memastikan setiap bagian memiliki fungsi yang jelas. Proses produksi juga difokuskan pada kerapihan finishing, karena dalam desain minimalist, detail kecil akan sangat terlihat. Selain itu, koordinasi instalasi menjadi penting agar semua elemen—mulai dari kabinet, sink, hingga kompor—terpasang dengan posisi yang tepat dan mendukung alur kerja yang telah dirancang.",
      },
      {
        id: "result",
        heading: "Results",
        body:
          "Hasil akhirnya menghadirkan dapur yang jauh lebih efisien dan nyaman digunakan. Ruang yang sebelumnya terasa kurang terorganisir kini berubah menjadi lebih rapi dan terstruktur. Layout L memungkinkan aktivitas berjalan lebih lancar, tanpa harus berpindah terlalu jauh antar fungsi. Secara visual, dapur ini tampil sederhana namun modern. Tidak mencolok, tetapi justru memberikan rasa tenang dan nyaman saat digunakan. Setiap sudut terasa dimanfaatkan dengan baik, tanpa terasa penuh. Bagi Bapak S, dapur ini bukan hanya solusi dari keterbatasan ruang, tetapi juga peningkatan kualitas dalam keseharian. Aktivitas memasak menjadi lebih praktis, lebih cepat, dan lebih menyenangkan. Sebuah desain yang sederhana, namun tepat sasaran—karena pada akhirnya, fungsi yang baik adalah bentuk keindahan yang paling nyata.",
      },
    ],
  },

  // ─── ADDITIONAL PROJECTS — Unsplash ──────────────────────────────────────

  {
    id: "ks-modern-island",
    title: "Kitchen Set — Island Modern",
    category: "Kitchen Set",
    client: "Keluarga P",
    year: "2024",
    location: "Jakarta Utara",
    scope: "Design & Build",
    cover: u("1600585154340-be6161a56a0c"),
    summary: "Island kitchen modern — kabinet duco matte putih, top granite hitam, dan pendant light industrial untuk dapur terbuka yang dramatis.",
    tags: ["Kitchen Set", "Island", "Modern", "Duco"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Keluarga P ingin dapur terbuka dengan island besar yang bisa digunakan sebagai area makan sekaligus memasak. Konsep modern industrial menjadi pilihan." },
      { id: "result", heading: "Results", body: "Island 220x90 cm menjadi pusat dapur yang dramatis. Kabinet duco putih + top granite hitam menciptakan kontras yang kuat dan modern." },
    ],
  },

  {
    id: "ks-u-layout",
    title: "Kitchen Set — U-Layout Modern",
    category: "Kitchen Set",
    client: "Ibu T",
    year: "2024",
    location: "Bogor Barat",
    scope: "Design & Build",
    cover: u("1556909172-54557c7e4fb7"),
    summary: "Kitchen set U-layout untuk dapur besar — tiga sisi kabinet, kabinet atas full-wall, dan top quartz seamless untuk kapasitas memasak maksimal.",
    tags: ["Kitchen Set", "U Layout", "Modern", "Quartz"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Ibu T memiliki dapur berukuran besar (3x4 m) yang belum dioptimalkan. Dibutuhkan storage besar untuk koleksi peralatan masak yang lengkap." },
      { id: "result", heading: "Results", body: "U-layout memaksimalkan setiap sisi dinding. Tiga zona kerja — prep, masak, dan cuci — terorganisir efisien." },
    ],
  },

  {
    id: "ks-galley",
    title: "Kitchen Set — Galley Nordic",
    category: "Kitchen Set",
    client: "Pasangan M",
    year: "2024",
    location: "Tangerang Selatan",
    scope: "Design & Build",
    cover: u("1507089947368-19c1da9775ae"),
    summary: "Galley kitchen dua jalur bergaya Nordic — kabinet abu muda, handle kayu, top butcher block, dan jendela besar untuk cahaya alami.",
    tags: ["Kitchen Set", "Galley", "Nordic", "Natural"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Dapur sempit memanjang yang selama ini terasa sesak. Pasangan M menginginkan galley kitchen yang terang dan nyaman." },
      { id: "result", heading: "Results", body: "Dua jalur kabinet + rak terbuka kayu mengoptimalkan lorong dapur. Jendela besar memberikan cahaya alami sepanjang hari." },
    ],
  },

  {
    id: "ks-open-plan",
    title: "Kitchen Set — Open Plan Minimalist",
    category: "Kitchen Set",
    client: "Keluarga S",
    year: "2024",
    location: "Depok",
    scope: "Design & Build",
    cover: u("1484154218962-a197022b5858"),
    summary: "Open plan kitchen menyatu dengan ruang makan — kabinet putih handleless, island dengan bar stool, dan pantry tersembunyi di balik pintu flush.",
    tags: ["Kitchen Set", "Open Plan", "Minimalist", "Handleless"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Klien menginginkan dapur yang menyatu dengan ruang makan untuk konsep open living yang modern." },
      { id: "result", heading: "Results", body: "Island 200x90 cm dengan 3 bar stool menjadi area transisi dapur-ruang makan. Kabinet handleless menciptakan tampilan sangat bersih." },
    ],
  },

  {
    id: "ks-two-tone",
    title: "Kitchen Set — Two-Tone Forest Green",
    category: "Kitchen Set",
    client: "Tuan D",
    year: "2024",
    location: "Cibubur",
    scope: "Design & Build",
    cover: u("1565538810643-b5bdb714032a"),
    summary: "Two-tone kitchen: kabinet atas putih, kabinet bawah forest green — perpaduan trendi yang memberikan karakter kuat pada dapur minimalis.",
    tags: ["Kitchen Set", "Two Tone", "Forest Green", "Modern"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Klien ingin dapur yang beda dari yang biasa — karakter yang kuat tapi tetap timeless." },
      { id: "result", heading: "Results", body: "Kombinasi forest green dan putih menjadi statement dapur yang banyak mendapat pujian tamu." },
    ],
  },

  {
    id: "ks-black-matte",
    title: "Kitchen Set — Black Matte Industrial",
    category: "Kitchen Set",
    client: "Studio Y",
    year: "2024",
    location: "Jakarta Pusat",
    scope: "Design & Build",
    cover: u("1556455275-68b97f85b8a5"),
    summary: "Kitchen industrial bold — seluruh kabinet duco hitam matte, top baja stainless, dan rak besi exposed untuk tampilan maskulin dan berkarakter.",
    tags: ["Kitchen Set", "Industrial", "Black Matte", "Stainless"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Studio Y membutuhkan dapur yang mencerminkan identitas brand — berani, modern, dan berkarakter kuat." },
      { id: "result", heading: "Results", body: "Dapur hitam penuh menjadi area yang paling diingat tamu. Kombinasi kabinet matte + stainless menciptakan estetika industri yang otentik." },
    ],
  },

  {
    id: "ks-warm-oak",
    title: "Kitchen Set — Warm Oak Farmhouse",
    category: "Kitchen Set",
    client: "Keluarga J",
    year: "2024",
    location: "Sentul, Bogor",
    scope: "Design & Build",
    cover: u("1556909114-f6e7ad7d3136"),
    summary: "Farmhouse kitchen hangat — veneer oak natural full, top marmer putih urat abu, dan sink apron untuk nuansa rumah pedesaan yang nyaman.",
    tags: ["Kitchen Set", "Farmhouse", "Oak", "Veneer"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Rumah di Sentul membutuhkan dapur yang menyatu dengan suasana pegunungan — hangat, natural, dan nyaman." },
      { id: "result", heading: "Results", body: "Veneer oak natural menciptakan kehangatan sempurna. Sink apron putih menjadi focal point klasik yang timeless." },
    ],
  },

  {
    id: "ks-classic-shaker",
    title: "Kitchen Set — Classic Shaker White",
    category: "Kitchen Set",
    client: "Keluarga C",
    year: "2024",
    location: "Bogor Tengah",
    scope: "Design & Build",
    cover: u("1595526114035-0f64b7f0b9a2"),
    summary: "Classic shaker kitchen — profil shaker putih duco gloss, hardware brass, top quartz, dan island dengan bar stool kayu untuk dapur yang timeless.",
    tags: ["Kitchen Set", "Classic", "Shaker", "Duco Gloss"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Klien menginginkan dapur yang timeless — tidak cepat ketinggalan mode, tetap terlihat elegan 10 tahun ke depan." },
      { id: "result", heading: "Results", body: "Shaker putih + hardware brass adalah kombinasi yang tidak pernah gagal. Hasilnya elegan dan mewah sekaligus." },
    ],
  },

  {
    id: "ks-compact-studio",
    title: "Kitchen Set — Compact Studio",
    category: "Kitchen Set",
    client: "Tuan R",
    year: "2025",
    location: "Depok",
    scope: "Design & Build",
    cover: u("1600210492493-094691112c1e"),
    summary: "Kitchen set untuk unit studio 24 m² — layout I single row yang efisien, kabinet atas memaksimalkan vertikal, dan countertop lipat untuk multifungsi.",
    tags: ["Kitchen Set", "Compact", "Studio", "Efficient"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Unit studio dengan dapur hanya 2x1,5 m. Tantangan: muat semua kebutuhan dapur dalam ruang sangat terbatas." },
      { id: "result", heading: "Results", body: "Kabinet vertikal full-height + countertop lipat menjawab semua kebutuhan. Tidak ada 1 cm pun yang terbuang." },
    ],
  },

  {
    id: "ks-pastel",
    title: "Kitchen Set — Pastel Scandinavian",
    category: "Kitchen Set",
    client: "Ibu A",
    year: "2025",
    location: "Bogor",
    scope: "Design & Build",
    cover: u("1556909195-78a5bba42ae2"),
    summary: "Kitchen Scandinavian bernuansa pastel — kabinet sage green muda, hardware emas, dan tanaman herbal di windowsill untuk dapur yang cerah.",
    tags: ["Kitchen Set", "Scandinavian", "Pastel", "Sage Green"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Ibu A ingin dapur yang ceria dan menyenangkan — berbeda dari dapur putih-abu yang umum." },
      { id: "result", heading: "Results", body: "Sage green + hardware emas + tanaman herbal menciptakan dapur Scandinavian yang segar dan personal." },
    ],
  },

  {
    id: "ks-luxury-marble",
    title: "Kitchen Set — Luxury Marble Island",
    category: "Kitchen Set",
    client: "Keluarga L",
    year: "2024",
    location: "Bintaro",
    scope: "Design & Build",
    cover: u("1600566753376-12c8ab7fb75b"),
    summary: "Luxury kitchen dengan island marmer calacatta — kabinet custom lacquer putih semi-gloss, appliance built-in tersembunyi, dan pencahayaan arsitektur.",
    tags: ["Kitchen Set", "Luxury", "Marble", "Built-in Appliance"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Rumah premium Bintaro membutuhkan kitchen yang setara standar interior majalah — detail sempurna dan material premium." },
      { id: "result", heading: "Results", body: "Marmer calacatta + lacquer putih + appliance tersembunyi menciptakan kitchen yang fotografis dan sangat premium." },
    ],
  },

  {
    id: "ks-industrial",
    title: "Kitchen Set — Industrial Loft",
    category: "Kitchen Set",
    client: "Pak B",
    year: "2024",
    location: "Jakarta Barat",
    scope: "Design & Build",
    cover: u("1556910633-5099dc3971e8"),
    summary: "Loft kitchen industrial — open shelving besi, keramik metro putih, kabinet bawah hairpin leg, dan hood cerobong untuk character yang kuat.",
    tags: ["Kitchen Set", "Industrial", "Loft", "Open Shelf"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Unit loft industrial membutuhkan kitchen yang sesuai karakter ruang — tidak boleh terlalu 'rumahan', harus tetap industrial." },
      { id: "result", heading: "Results", body: "Open shelving besi + keramik metro + hood cerobong menciptakan kitchen yang menjadi focal point unit loft." },
    ],
  },

  {
    id: "bedroom-japandi",
    title: "Master Bedroom — Japandi",
    category: "Bedroom",
    client: "Pasangan L",
    year: "2024",
    location: "Bogor",
    scope: "Interior Build",
    cover: u("1616594039964-ae9021a400a0"),
    summary: "Master bedroom Japandi — headboard panel kayu oak, wardrobe built-in matte, pencahayaan amber, dan tanaman untuk nuansa tenang dan alami.",
    tags: ["Bedroom", "Japandi", "Wardrobe", "Natural"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Pasangan L menginginkan kamar tidur yang menjadi sanctuary — tenang, natural, dan bebas dari clutter." },
      { id: "result", heading: "Results", body: "Headboard panel veneer oak + wardrobe putih matte menciptakan keseimbangan Japandi sempurna." },
    ],
  },

  {
    id: "bedroom-scandi",
    title: "Bedroom — Scandinavian Light",
    category: "Bedroom",
    client: "Ibu K",
    year: "2024",
    location: "Jakarta Selatan",
    scope: "Interior Build",
    cover: u("1522771739844-6a9f6d5f14af"),
    summary: "Scandinavian bedroom terang — dominasi putih dan abu muda, bedside table kayu minimal, dan karpet wol untuk kamar tidur yang bersih dan menenangkan.",
    tags: ["Bedroom", "Scandinavian", "Light", "Minimal"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Kamar tidur yang terasa gelap dan sempit. Klien menginginkan kamar yang terang, bersih, dan menenangkan." },
      { id: "result", heading: "Results", body: "Palet putih-abu + cahaya natural mengubah kamar menjadi ruang yang cerah dan lega." },
    ],
  },

  {
    id: "wardrobe-builtin",
    title: "Wardrobe Built-in — Sliding Mirror",
    category: "Bedroom",
    client: "Ibu S",
    year: "2024",
    location: "Jakarta Timur",
    scope: "Interior Build",
    cover: u("1558997519-83ea9252edf8"),
    summary: "Wardrobe built-in full-wall dengan pintu sliding kaca buram — zona gantung, laci soft-close, rak sepatu, dan LED strip untuk kamar yang lebih lapang.",
    tags: ["Wardrobe", "Built-in", "Sliding", "Minimalist"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Lemari berdiri besar memakan sepertiga ruangan. Klien menginginkan wardrobe yang memaksimalkan dinding agar kamar lebih lapang." },
      { id: "result", heading: "Results", body: "Wardrobe full-wall menampung seluruh pakaian tanpa memakan ruang lantai." },
    ],
  },

  {
    id: "kids-room",
    title: "Kids Room — Playful Modern",
    category: "Bedroom",
    client: "Keluarga G",
    year: "2024",
    location: "Cibinong",
    scope: "Interior Build",
    cover: u("1555041469-a586c61ea9bc"),
    summary: "Kamar anak yang fungsional dan menyenangkan — loft bed dengan area belajar di bawah, storage warna-warni, dan papan tulis dinding.",
    tags: ["Kids Room", "Playful", "Loft Bed", "Colorful"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Kamar anak perlu mengakomodasi tidur, belajar, dan bermain dalam 9 m²." },
      { id: "result", heading: "Results", body: "Loft bed custom dengan meja belajar di bawah memaksimalkan ruang. Anak sangat antusias." },
    ],
  },

  {
    id: "teen-bedroom",
    title: "Teen Bedroom — Modern Industrial",
    category: "Bedroom",
    client: "Keluarga O",
    year: "2025",
    location: "Bogor",
    scope: "Interior Build",
    cover: u("1586105449897-20b5efeb3233"),
    summary: "Kamar remaja bergaya industrial — aksen beton, furniture multifungsi, desk nook dengan LED strip, dan gaming corner yang terorganisir.",
    tags: ["Bedroom", "Teen", "Industrial", "Gaming"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Remaja laki-laki menginginkan kamar yang 'keren' — industrial, gaming-ready, dan tetap rapi." },
      { id: "result", heading: "Results", body: "Desk nook L-shape dengan monitor arm dan LED strip memenuhi semua keinginan." },
    ],
  },

  {
    id: "guest-room",
    title: "Guest Room — Minimalist Cozy",
    category: "Bedroom",
    client: "Tuan V",
    year: "2024",
    location: "Bogor Utara",
    scope: "Interior Build",
    cover: u("1560185009-5bf9f2849488"),
    summary: "Kamar tamu minimalis yang nyaman — single bed, wardrobe compact, reading nook kecil, dan pencahayaan ambient untuk tamu yang betah.",
    tags: ["Guest Room", "Minimalist", "Cozy"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Kamar tamu yang selama ini sekadar tempat tidur. Klien ingin tamu merasa nyaman seperti di hotel." },
      { id: "result", heading: "Results", body: "Reading nook di dekat jendela menjadi favorit tamu." },
    ],
  },

  {
    id: "bedroom-dark",
    title: "Bedroom — Dark & Moody",
    category: "Bedroom",
    client: "Tuan E",
    year: "2024",
    location: "Jakarta Selatan",
    scope: "Interior Build",
    cover: u("1618221195710-dd6b41faaea6"),
    summary: "Kamar tidur dark moody — dinding navy, headboard beludru, pencahayaan kuning hangat, dan wardrobe charcoal untuk karakter yang bold.",
    tags: ["Bedroom", "Dark Moody", "Navy", "Bold"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Klien menginginkan kamar yang terasa dramatis dan berkarakter — tidak seperti kamar tidur pada umumnya." },
      { id: "result", heading: "Results", body: "Dark navy + beludru + pencahayaan warm amber menciptakan kamar yang eksklusif dan berkarakter." },
    ],
  },

  {
    id: "living-japandi",
    title: "Living Room — Japandi Warmth",
    category: "Living Room",
    client: "Keluarga E",
    year: "2024",
    location: "Bogor Selatan",
    scope: "Interior Build",
    cover: u("1586023492125-27b2c045efd9"),
    summary: "Living room Japandi hangat — sofa linen krem, meja kopi kayu solid, tanaman tall indoor, dan karpet jute untuk ruang yang seimbang dan tenang.",
    tags: ["Living Room", "Japandi", "Warm", "Natural"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Ruang keluarga yang terasa formal dan kaku. Klien ingin ruang yang hangat dan mengundang." },
      { id: "result", heading: "Results", body: "Palet earth tone + material natural menciptakan ruang yang selalu terasa hangat." },
    ],
  },

  {
    id: "living-open",
    title: "Living Room — Open Concept",
    category: "Living Room",
    client: "Pasangan I",
    year: "2024",
    location: "Serpong",
    scope: "Interior Build",
    cover: u("1524758631624-e2822e304c36"),
    summary: "Open concept living-dining — sofa sectional besar, dining table custom, dan TV panel yang menyatukan dua area dalam satu desain kohesif.",
    tags: ["Living Room", "Open Concept", "Sectional", "Modern"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Ruang tamu dan ruang makan terasa terputus. Pasangan I ingin open concept yang mengalir." },
      { id: "result", heading: "Results", body: "Sofa sectional abu + dining table kayu solid menciptakan zona yang berbeda namun menyatu secara visual." },
    ],
  },

  {
    id: "sofa-custom",
    title: "Custom Sofa — Scandinavian",
    category: "Living Room",
    client: "Ibu Q",
    year: "2025",
    location: "Cibinong",
    scope: "Custom Furniture",
    cover: u("1567767292278-a702c9d3d77e"),
    summary: "Sofa custom ukuran khusus bergaya Scandinavian — rangka kayu jati solid, cushion HR, kain velvet abu untuk living room yang estetis.",
    tags: ["Living Room", "Custom Sofa", "Scandinavian", "Furniture"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Klien tidak menemukan sofa ready-made yang sesuai ukuran dan karakter ruangannya." },
      { id: "result", heading: "Results", body: "Sofa velvet abu dengan kaki kayu jati solid menjadi pusat perhatian ruang tamu." },
    ],
  },

  {
    id: "living-modern-dark",
    title: "Living Room — Modern Dark",
    category: "Living Room",
    client: "Tuan P",
    year: "2024",
    location: "Jakarta Barat",
    scope: "Interior Build",
    cover: u("1616486338812-3dadae4b4ace"),
    summary: "Living room modern dengan nuansa gelap — dinding charcoal, sofa modular abu tua, dan pencahayaan arsitektur untuk ambience dramatis.",
    tags: ["Living Room", "Modern", "Dark", "Dramatic"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Klien menginginkan ruang tamu berkarakter kuat — dramatis, maskulin, dan modern." },
      { id: "result", heading: "Results", body: "Charcoal + indirect lighting menciptakan ruang tamu yang berkesan." },
    ],
  },

  {
    id: "bathroom-minimalist",
    title: "Bathroom — Modern Minimalist",
    category: "Residential",
    client: "Tuan X",
    year: "2025",
    location: "Jakarta Selatan",
    scope: "Interior Build",
    cover: u("1552321554-5fefe8c9ef14"),
    summary: "Renovasi kamar mandi lama — keramik besar 60x120, rain shower, dan vanity floating untuk kesan bersih dan lapang.",
    tags: ["Bathroom", "Minimalist", "Rain Shower", "Modern"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Kamar mandi 15 tahun — keramik menguning, shower bocor, vanity lapuk. Klien ingin bathroom modern yang low-maintenance." },
      { id: "result", heading: "Results", body: "Rain shower + keramik besar + vanity floating mengubah kamar mandi tua menjadi ruang yang terasa seperti hotel." },
    ],
  },

  {
    id: "bathroom-japandi",
    title: "Bathroom — Japandi Spa",
    category: "Residential",
    client: "Ibu M",
    year: "2024",
    location: "Bogor",
    scope: "Interior Build",
    cover: u("1604709177225-055f99402ea3"),
    summary: "Bathroom Japandi berkonsep spa — stone sink, dinding batu alam, tanaman bambu, dan pencahayaan hangat untuk ritual mandi yang menenangkan.",
    tags: ["Bathroom", "Japandi", "Spa", "Stone"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Klien menginginkan kamar mandi yang menjadi sanctuary — tempat bersantai dan melepas lelah." },
      { id: "result", heading: "Results", body: "Stone sink + batu alam + tanaman bambu menciptakan suasana spa yang autentik." },
    ],
  },

  {
    id: "bathroom-luxury",
    title: "Bathroom — Luxury Marble",
    category: "Residential",
    client: "Keluarga N",
    year: "2024",
    location: "Sentul",
    scope: "Interior Build",
    cover: u("1620626011761-996317702782"),
    summary: "Bathroom mewah dengan marmer calacatta full — freestanding bathtub, double vanity, dan shower room kaca frameless untuk pengalaman mandi eksklusif.",
    tags: ["Bathroom", "Luxury", "Marble", "Bathtub"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Villa di Sentul membutuhkan master bathroom yang setara bintang lima." },
      { id: "result", heading: "Results", body: "Marmer calacatta full + bathtub freestanding + shower room kaca menciptakan bathroom yang eksklusif." },
    ],
  },

  {
    id: "bathroom-compact",
    title: "Bathroom — Compact Renovation",
    category: "Residential",
    client: "Ibu F",
    year: "2025",
    location: "Cibinong",
    scope: "Interior Build",
    cover: u("1552176566-fbe32823b003"),
    summary: "Renovasi kamar mandi 2x1,5 m — niche dinding, mirror cabinet, dan wall-mount toilet untuk tampilan bersih dan lapang.",
    tags: ["Bathroom", "Compact", "Small Space", "Renovation"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Kamar mandi kecil 2x1,5 m yang terasa sangat sempit. Klien ingin bathroom fungsional yang tidak terasa sesak." },
      { id: "result", heading: "Results", body: "Wall-mount toilet + mirror cabinet + niche dinding mengoptimalkan ruang kecil secara maksimal." },
    ],
  },

  {
    id: "laundry-modern",
    title: "Laundry Room — Modern Utility",
    category: "Residential",
    client: "Bapak K",
    year: "2025",
    location: "Jakarta Timur",
    scope: "Interior Build",
    cover: u("1626806787461-102c1bfaaea1"),
    summary: "Penataan ruang laundry — kabinet penyimpanan custom, countertop di atas mesin cuci, dan rak jemuran lipat untuk kegiatan laundry yang nyaman.",
    tags: ["Laundry", "Utility", "Modern", "Storage"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Ruang laundry sekadar area kosong — mesin cuci tanpa alas, deterjen berserakan. Klien ingin utility room yang rapi." },
      { id: "result", heading: "Results", body: "Kabinet atas-bawah + countertop HPL + rak jemuran lipat. Semua tersembunyi dan terorganisir." },
    ],
  },

  {
    id: "office-startup",
    title: "Office — Startup Modern",
    category: "Office",
    client: "Startup X",
    year: "2025",
    location: "Jakarta Selatan",
    scope: "Interior Build",
    cover: u("1556761175-4b46a572b786"),
    summary: "Kantor startup modern untuk 40+ orang — open space kolaboratif, meeting room semi-terbuka, lounge kasual, dan identitas brand yang kuat.",
    tags: ["Office", "Startup", "Modern", "Collaborative"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Startup X berkembang pesat dan membutuhkan kantor baru yang efisien, kolaboratif, dan mencerminkan brand modern." },
      { id: "result", heading: "Results", body: "Kantor kini terasa lapang, terang, dan kolaboratif. \"Kantor baru bikin tim makin semangat kerja!\"" },
    ],
  },

  {
    id: "office-executive",
    title: "Executive Office — Premium",
    category: "Office",
    client: "PT. ABC",
    year: "2024",
    location: "Jakarta Pusat",
    scope: "Design & Build",
    cover: u("1497366216548-37526070297c"),
    summary: "Ruang direktur premium — meja eksekutif solid oak, panel dinding veneer walnut, sofa kulit untuk area meeting, dan pencahayaan yang menonjolkan status.",
    tags: ["Office", "Executive", "Premium", "Walnut"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "PT. ABC membutuhkan ruang direktur yang merepresentasikan profesionalisme dan kepercayaan klien." },
      { id: "result", heading: "Results", body: "Panel veneer walnut + meja solid oak menciptakan kesan wibawa yang kuat." },
    ],
  },

  {
    id: "home-office",
    title: "Home Office — WFH Ergonomic",
    category: "Office",
    client: "Tuan Z",
    year: "2025",
    location: "Bogor",
    scope: "Interior Build",
    cover: u("1613413561312-e329d024ed65"),
    summary: "Home office ergonomis — meja custom L-shape, storage built-in, panel akustik, dan pencahayaan memadai untuk produktivitas WFH penuh.",
    tags: ["Home Office", "WFH", "Ergonomic", "Custom Desk"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Tuan Z bekerja dari rumah full-time dan membutuhkan ruang kerja yang profesional dan ergonomis." },
      { id: "result", heading: "Results", body: "Meja L-shape + panel akustik + indirect lighting menciptakan home office setara ruang profesional." },
    ],
  },

  {
    id: "coworking",
    title: "Co-working Space — Bogor Hub",
    category: "Office",
    client: "Bogor Hub",
    year: "2024",
    location: "Kota Bogor",
    scope: "Design & Build",
    cover: u("1504384308090-c894fdcc538d"),
    summary: "Co-working space untuk komunitas pekerja kreatif — hot desk, phone booth, lounge area, dan meeting room kecil dalam satu lantai 200 m².",
    tags: ["Co-working", "Office", "Community", "Flexible"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Bogor Hub membutuhkan ruang co-working yang mengakomodasi berbagai gaya kerja." },
      { id: "result", heading: "Results", body: "Zona-zona berbeda menciptakan ekosistem kerja yang fleksibel. Okupansi 80% di bulan pertama." },
    ],
  },

  {
    id: "clinic-interior",
    title: "Medical Clinic — Clean & Calming",
    category: "Office",
    client: "Klinik Sehat",
    year: "2024",
    location: "Cibinong",
    scope: "Interior Build",
    cover: u("1497366412874-3415097a27e7"),
    summary: "Interior klinik yang bersih, tenang, dan reassuring — ruang tunggu nyaman, warna soft teal, dan sirkulasi pasien yang jelas.",
    tags: ["Clinic", "Healthcare", "Clean", "Calming"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Klinik Sehat ingin interior yang mengurangi kecemasan pasien — terasa bersih dan profesional tapi tidak dingin." },
      { id: "result", heading: "Results", body: "Warna soft teal + material warm wood + pencahayaan alami menciptakan ruang kesehatan yang menenangkan." },
    ],
  },

  {
    id: "boutique-office",
    title: "Creative Studio — Boutique Office",
    category: "Office",
    client: "Studio Kreatif XYZ",
    year: "2025",
    location: "Depok",
    scope: "Design & Build",
    cover: u("1518455027359-f3f8164ba6bd"),
    summary: "Office butik untuk studio kreatif — ruang terbuka dengan mural dinding, meja custom, area galeri karya, dan mood yang inspiratif.",
    tags: ["Office", "Creative", "Boutique", "Studio"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Studio kreatif membutuhkan kantor yang mencerminkan jiwa kreatif — berbeda, inspiratif, dan memorable." },
      { id: "result", heading: "Results", body: "Mural + display karya + material mix menciptakan office yang menjadi showcase kreativitas tim." },
    ],
  },

  {
    id: "cafe-japandi",
    title: "Cafe Interior — Japandi Concept",
    category: "Commercial",
    client: "Kopi Jingga",
    year: "2024",
    location: "Bogor",
    scope: "Design & Build",
    cover: u("1559925393-8be0ec4767c8"),
    summary: "Interior cafe Japandi untuk Kopi Jingga — kayu natural, rattan, tanaman hijau, dan pencahayaan warm untuk suasana nyaman yang mengundang.",
    tags: ["Cafe", "Japandi", "Commercial", "F&B"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Kopi Jingga ingin cafe dengan ambience yang kuat — tempat orang tidak hanya datang untuk kopi tapi juga untuk pengalaman." },
      { id: "result", heading: "Results", body: "Konsep Japandi + hangat + rindang menciptakan cafe yang selalu ramai. Instagram-worthy tanpa terasa dipaksakan." },
    ],
  },

  {
    id: "cafe-industrial",
    title: "Cafe — Urban Industrial",
    category: "Commercial",
    client: "Kedai Besi",
    year: "2024",
    location: "Kota Bogor",
    scope: "Design & Build",
    cover: u("1521017432531-fbd92d768814"),
    summary: "Cafe industrial urban — bata exposed, pipa besi visible, lampu filamen, meja beton, dan kursi kayu reclaimed untuk karakter yang autentik.",
    tags: ["Cafe", "Industrial", "Commercial", "F&B"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Kedai Besi ingin branding visual yang kuat — industrial, maskulin, dan autentik." },
      { id: "result", heading: "Results", body: "Bata exposed + pipa visible + lampu filamen menciptakan industrial yang otentik. Menjadi spot foto favorit komunitas kopi lokal." },
    ],
  },

  {
    id: "restaurant-modern",
    title: "Restaurant — Modern Dining",
    category: "Commercial",
    client: "Restoran Nusa",
    year: "2024",
    location: "Jakarta Selatan",
    scope: "Design & Build",
    cover: u("1414235077428-338989a2e8c0"),
    summary: "Interior restoran fine dining — booth seating, pencahayaan meja hangat, partisi semi-privat, dan focal point bar counter untuk pengalaman makan yang memorable.",
    tags: ["Restaurant", "Dining", "Commercial", "Fine Dining"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Restoran Nusa ingin interior yang mendukung pengalaman makan premium — nyaman, privat, tapi accessible." },
      { id: "result", heading: "Results", body: "Booth seating + pencahayaan hangat + partisi kaca. Rating Google naik dari 4.1 ke 4.7 setelah renovasi." },
    ],
  },

  {
    id: "lobby-hotel",
    title: "Hotel Lobby — Warm Welcome",
    category: "Commercial",
    client: "Hotel Panorama",
    year: "2024",
    location: "Puncak, Bogor",
    scope: "Design & Build",
    cover: u("1566073771259-6a8506099945"),
    summary: "Lobby hotel di Puncak — batu alam lokal, kayu jati, ceiling tinggi dengan lampu gantung besar, dan area lounge menghadap pemandangan gunung.",
    tags: ["Hotel", "Lobby", "Hospitality", "Commercial"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Hotel Panorama ingin lobby yang langsung memberikan kesan 'pegunungan Bogor' kepada tamu." },
      { id: "result", heading: "Results", body: "Batu alam + kayu jati + ceiling tinggi menciptakan lobby yang monumental. Tamu sering berfoto di lobby sebelum check-in." },
    ],
  },

  {
    id: "retail-boutique",
    title: "Retail Boutique — Fashion Store",
    category: "Commercial",
    client: "Butik Ara",
    year: "2025",
    location: "Bogor",
    scope: "Design & Build",
    cover: u("1555396273-367ea4eb4db5"),
    summary: "Interior butik fashion — rak display minimalis, fitting room elegan, kasir custom, pencahayaan spot yang menonjolkan produk, dan branding konsisten.",
    tags: ["Retail", "Boutique", "Fashion", "Commercial"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Butik Ara pindah ke lokasi baru dan ingin interior yang mencerminkan brand premium tapi tetap accessible." },
      { id: "result", heading: "Results", body: "Rak display minimalis + pencahayaan spot + fitting room elegan menciptakan pengalaman belanja yang menyenangkan." },
    ],
  },

  {
    id: "reno-house-full",
    title: "Full House Renovation — 2 Lantai",
    category: "Renovation",
    client: "Keluarga B",
    year: "2024",
    location: "Cibinong",
    scope: "Design & Build",
    cover: u("1534889156163-d2d6e7648bbc"),
    summary: "Renovasi total rumah 2 lantai — dari struktur, partisi, plafon, hingga furnitur custom. Transformasi rumah tua menjadi hunian modern yang fungsional.",
    tags: ["Renovation", "Full House", "2 Lantai", "Residential"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Rumah 2 lantai berusia 20 tahun membutuhkan renovasi menyeluruh — layout tidak efisien dan furnitur usang." },
      { id: "result", heading: "Results", body: "8 minggu pengerjaan mengubah rumah tua menjadi hunian modern." },
    ],
  },

  {
    id: "reno-villa",
    title: "Villa Interior — Mountain Retreat",
    category: "Renovation",
    client: "Villa Hijau",
    year: "2024",
    location: "Sentul, Bogor",
    scope: "Design & Build",
    cover: u("1512917774080-9991f1c4c750"),
    summary: "Interior villa mountain retreat — material alam lokal, furniture custom kayu reclaimed, dan desain yang menyatu dengan pemandangan alam sekitar.",
    tags: ["Villa", "Mountain", "Natural", "Renovation"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Villa di Sentul membutuhkan interior yang memperkuat pengalaman 'alam pegunungan' — bukan sekadar tempat menginap." },
      { id: "result", heading: "Results", body: "Material lokal + furniture reclaimed + jendela besar menghadap hijau menciptakan retreat yang memorable." },
    ],
  },

  {
    id: "reno-shop",
    title: "Showroom Renovation — Modern",
    category: "Renovation",
    client: "Toko Bangunan XYZ",
    year: "2024",
    location: "Bogor",
    scope: "Interior Build",
    cover: u("1441986300917-64674bd600d8"),
    summary: "Renovasi interior toko menjadi showroom modern — display area terstruktur, signage sistem baru, dan pencahayaan yang menonjolkan produk.",
    tags: ["Renovation", "Retail", "Showroom", "Commercial"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Toko bangunan tradisional ingin bertransformasi menjadi showroom modern agar lebih kompetitif." },
      { id: "result", heading: "Results", body: "Showroom modern dengan display terstruktur. Traffic toko meningkat 40% setelah renovasi." },
    ],
  },

  {
    id: "reno-apartment-2",
    title: "Apartment Renovation — BSD",
    category: "Renovation",
    client: "Tuan H",
    year: "2024",
    location: "BSD, Tangerang",
    scope: "Design & Build",
    cover: u("1560448204-e02f11c3d0e2"),
    summary: "Renovasi apartment 1BR — layout ulang dapur, wardrobe custom, dan furnitur multifungsi untuk optimasi ruang 35 m² yang maksimal.",
    tags: ["Apartment", "Renovation", "Compact", "BSD"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Apartment 1BR di BSD terasa sempit karena layout original yang tidak efisien." },
      { id: "result", heading: "Results", body: "Layout ulang + furnitur multifungsi + warna terang membuat apartment 35 m² terasa lapang." },
    ],
  },

  {
    id: "reno-kost",
    title: "Kost Renovation — Premium",
    category: "Renovation",
    client: "Pak Y",
    year: "2025",
    location: "Dramaga, Bogor",
    scope: "Design & Build",
    cover: u("1631049307264-da0ec9d70304"),
    summary: "Renovasi 10 kamar kost menjadi kost premium — furnitur built-in per kamar, shared kitchen modern, lobby minimalis, dan peningkatan fasilitas kamar mandi.",
    tags: ["Kost", "Renovation", "Premium", "Multi Unit"],
    images: [],
    sections: [
      { id: "brief", heading: "Project Brief", body: "Pak Y ingin meningkatkan nilai sewa kost — dari kost standar menjadi premium dengan renovasi menyeluruh." },
      { id: "result", heading: "Results", body: "Semua 10 kamar terisi dalam 2 minggu setelah renovasi selesai." },
    ],
  },

];
