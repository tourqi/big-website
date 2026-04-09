import React, { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ROOM_CATEGORIES } from "@/data/kitchenCatalogue";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { calculateTotalPrice, formatIDR } from "@/lib/pricingUtils";
import { PLACEHOLDER_SRC, handleImageError } from "@/lib/imageHandlers";

export default function StyleDetailPage() {
  const { categoryId, styleId } = useParams();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [showPricing, setShowPricing] = useState(false);
  const [quantityError, setQuantityError] = useState("");

  const style = useMemo(() => {
    const category = ROOM_CATEGORIES.find((cat) => cat.id === categoryId);
    if (!category) return null;
    return category.styles?.find((s) => s.id === styleId);
  }, [categoryId, styleId]);

  const category = useMemo(
    () => ROOM_CATEGORIES.find((cat) => cat.id === categoryId),
    [categoryId]
  );

  const priceCalculation = useMemo(() => {
    if (!style?.components || !quantity || quantity === "") return null;
    return calculateTotalPrice(selectedOptions, quantity, style.components);
  }, [selectedOptions, quantity, style?.components]);

  const isAllComponentsSelected = useMemo(() => {
    if (!style?.components) return false;
    return style.components.every((comp) => selectedOptions[comp.id]);
  }, [selectedOptions, style?.components]);

  const handleSelectOption = (componentId, optionId) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [componentId]: optionId,
    }));
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    
    // Allow empty string for clearing
    if (value === "") {
      setQuantity("");
      setQuantityError("");
      return;
    }

    // Check if it's a valid number
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setQuantityError("⚠️ Gunakan angka saja (contoh: 2, 2.5, 3)");
      return;
    }

    if (numValue <= 0) {
      setQuantityError("⚠️ Jumlah harus lebih dari 0");
      return;
    }

    if (numValue > 50) {
      setQuantityError("⚠️ Maksimal 50 meter");
      return;
    }

    setQuantity(numValue);
    setQuantityError("");
  };

  const handleQuantityBlur = () => {
    // Set default value if empty on blur
    if (quantity === "" || quantity === 0) {
      setQuantity(1);
      setQuantityError("");
    }
  };

  if (!style || !category) {
    return (
      <div className="min-h-screen bg-white text-gray-900 pt-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-500 mb-4">Detail tidak ditemukan</p>
          <Link to="/catalogue" className="text-brand underline hover:no-underline">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="border-b bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground truncate">
              {category.title} &gt; {style.name}
            </p>
            <h1 className="text-xl md:text-2xl font-bold">{style.name}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Style Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0 md:w-80">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-md">
                <img
                  src={style.image || "/catalogue/placeholder.jpg"}
                  alt={style.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">{style.name}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {style.description}
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-900">
                  ℹ️ Pilih kombinasi material dan komponen di bawah untuk membuat kitchen set impian Anda.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Components Section */}
        <div className="space-y-4">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Pilih Komponen & Material</h3>
            <p className="text-sm text-gray-600">
              Setiap komponen memiliki beberapa pilihan. Kombinasikan sesuai kebutuhan dan budget Anda.
            </p>
          </div>

          {style.components && style.components.length > 0 ? (
            style.components.map((component, compIndex) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: compIndex * 0.1 }}
                className="rounded-lg border overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Component Header */}
                <div className="bg-gray-100 text-gray-900 p-3">
                  <h4 className="text-base font-semibold">{component.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">{component.description}</p>
                </div>

                {/* Component Options Grid */}
                <div className="p-4">
                  <div className="grid md:grid-cols-3 gap-3">
                    {component.options && component.options.length > 0 ? (
                      component.options.map((option, optIndex) => {
                        const isSelected = selectedOptions[component.id] === option.id;
                        return (
                          <motion.div
                            key={option.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: optIndex * 0.05 }}
                            onClick={() => handleSelectOption(component.id, option.id)}
                            className={`relative rounded-lg border-2 cursor-pointer transition-all overflow-hidden group ${ 
                              isSelected 
                                ? "border-brand bg-brand/10 shadow-md" 
                                : "border-gray-200 hover:border-brand hover:bg-brand/5"
                            }`}
                          >
                            {/* Image Container */}
                            <div className="aspect-square bg-gray-100 overflow-hidden flex items-center justify-center">
                              {option.image ? (
                                <img
                                  src={option.image}
                                  alt={option.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                  loading="lazy"
                                  decoding="async"
                                  onError={(e) => handleImageError(e, PLACEHOLDER_SRC)}
                                />
                              ) : (
                                <div className="text-center text-gray-400">
                                  <p className="text-sm">Tidak ada gambar</p>
                                </div>
                              )}
                            </div>

                            {/* Option Details */}
                            <div className="p-3">
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <h5 className="font-medium text-gray-900 text-sm flex-1">
                                  {option.name}
                                </h5>
                                {/* Radio Circle */}
                                <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                                  isSelected 
                                    ? "border-brand bg-brand" 
                                    : "border-gray-300 group-hover:border-brand"
                                }`}>
                                  {isSelected && <Check className="w-3 h-3 text-white" />}
                                </div>
                              </div>
                              <p className="text-xs text-gray-600 leading-snug">
                                {option.description}
                              </p>
                            </div>

                            {/* Selected Badge */}
                            {isSelected && (
                              <div className="absolute top-1 left-1 bg-brand text-white text-xs font-bold px-1.5 py-0.5 rounded">
                                ✓
                              </div>
                            )}
                          </motion.div>
                        );
                      })
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="rounded-2xl border p-12 text-center text-muted-foreground">
              <p>Komponen belum tersedia untuk style ini.</p>
            </div>
          )}
        </div>

        {/* Selection Summary */}
        {Object.keys(selectedOptions).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mt-8 rounded-lg bg-gray-50 border border-gray-200 p-4"
          >
            <h4 className="text-base font-semibold text-gray-900 mb-3">📋 Ringkasan Pilihan Anda</h4>
            <div className="grid md:grid-cols-3 gap-3">
              {style.components?.map((component) => {
                const selectedOptionId = selectedOptions[component.id];
                const selectedOption = component.options?.find((opt) => opt.id === selectedOptionId);
                return selectedOption ? (
                  <div key={component.id} className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-xs font-semibold text-gray-700 mb-1">{component.name}</p>
                    <p className="text-xs font-medium text-gray-900">{selectedOption.name}</p>
                  </div>
                ) : null;
              })}
            </div>
          </motion.div>
        )}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="mt-8 space-y-4"
        >
          {/* Size Input and Calculate */}
          {isAllComponentsSelected && !showPricing && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">📏 Tentukan Ukuran</h4>
              <div className="flex flex-col sm:flex-row gap-3 items-end">
                <div className="flex-1">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah (meter / unit)
                  </label>
                  <input
                    id="quantity"
                    type="text"
                    inputMode="decimal"
                    value={quantity}
                    onChange={handleQuantityChange}
                    onBlur={handleQuantityBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                      quantityError
                        ? "border-red-400 focus:ring-red-500 bg-red-50"
                        : "border-gray-300 focus:ring-brand focus:border-transparent"
                    }`}
                    placeholder="Contoh: 2 atau 2.5"
                  />
                  {quantityError && (
                    <p className="text-sm text-red-600 mt-2 font-medium">{quantityError}</p>
                  )}
                </div>
                <Button
                  size="lg"
                  onClick={() => setShowPricing(true)}
                  disabled={!quantity || quantity === "" || quantityError}
                  className="rounded-lg px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Hitung Harga
                </Button>
              </div>
            </div>
          )}

          {/* Pricing Display */}
          {showPricing && priceCalculation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6"
            >
              <h4 className="font-semibold text-gray-900 mb-4">💰 Estimasi Harga</h4>
              
              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                {priceCalculation.breakdown.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.component}</p>
                      <p className="text-xs text-gray-600">{item.option}</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{formatIDR(item.price)}/m'</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-green-200 my-4"></div>

              {/* Summary */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700">Harga per meter:</p>
                  <p className="text-lg font-bold text-gray-900">{formatIDR(priceCalculation.pricePerMeter)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700">Panjang:</p>
                  <p className="text-sm font-medium text-gray-900">{quantity} m'</p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-green-200">
                  <p className="font-semibold text-gray-900">Total Estimasi:</p>
                  <p className="text-2xl font-bold text-green-600">{formatIDR(priceCalculation.total)}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={() => setShowPricing(false)}
                  variant="secondary"
                  className="rounded-lg"
                >
                  Ubah Pilihan
                </Button>
                <Button
                  size="lg"
                  className="rounded-lg flex-1"
                >
                  Konsultasi Tentang Penawaran Ini
                </Button>
              </div>
            </motion.div>
          )}

          {/* Initial States */}
          {!isAllComponentsSelected && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
              <p className="text-sm text-yellow-800">
                ⚠️ Silakan pilih semua komponen untuk melanjutkan
              </p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
