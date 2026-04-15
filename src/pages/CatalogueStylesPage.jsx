import React, { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ROOM_CATEGORIES } from "@/data/roomCatalogue";
import { ArrowLeft, Sparkles, Ruler } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { handleImageError } from "@/lib/imageHandlers";

const PLACEHOLDER = "/catalogue/placeholder.jpg";

export default function CatalogueStylesPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = useMemo(
    () => ROOM_CATEGORIES.find((cat) => cat.id === categoryId),
    [categoryId]
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-white text-gray-900 pt-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-500 mb-4">Kategori tidak ditemukan</p>
          <Link to="/catalogue" className="text-brand underline hover:no-underline">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            {/* Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => navigate(-1)}
                  className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                  aria-label="Kembali"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <Link to="/catalogue" className="text-sm text-brand hover:underline font-medium">
                  Kembali ke Katalog
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Koleksi {category.title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button size="lg" className="rounded-2xl">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Konsultasi Gratis
                </Button>
                <Button size="lg" variant="secondary" className="rounded-2xl">
                  <Ruler className="mr-2 h-5 w-5" />
                  Lihat Semua Detail
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-xl">
                  {category.count}
                </Badge>
                <Badge variant="secondary" className="rounded-xl">
                  Customizable
                </Badge>
                <Badge variant="secondary" className="rounded-xl">
                  Konsultasi Gratis
                </Badge>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 min-w-[280px]">
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden border shadow-lg bg-gray-100">
                <img
                  src={category.image || PLACEHOLDER}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => handleImageError(e, PLACEHOLDER)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Styles List */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Pilihan Gaya Tersedia</h2>
          <p className="text-gray-600">Temukan gaya yang paling sesuai dengan preferensi Anda</p>
        </div>

        <div className="space-y-4">
          {category.styles && category.styles.length > 0 ? (
            category.styles.map((style, index) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group rounded-2xl border overflow-hidden hover:shadow-lg transition-all hover:border-brand/50 cursor-pointer bg-white"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="w-full md:w-64 aspect-square overflow-hidden bg-zinc-100 flex-shrink-0">
                    <img
                      src={style.image || PLACEHOLDER}
                      alt={style.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => handleImageError(e, PLACEHOLDER)}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                      {style.name}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                      {style.description}
                    </p>

                    <div className="inline-flex">
                      <button 
                        onClick={() => navigate(`/catalogue/${categoryId}/${style.id}`)}
                        className="px-6 py-3 rounded-xl bg-brand text-white font-medium hover:bg-brand/90 transition-colors flex items-center gap-2"
                      >
                        Lihat Detail
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="rounded-2xl border p-12 text-center text-muted-foreground">
              <p>Tidak ada style tersedia untuk kategori ini.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
