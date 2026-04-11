import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { ROOM_CATEGORIES } from "@/data/kitchenCatalogue";
import { ArrowRight } from "lucide-react";

const PLACEHOLDER = "/catalogue/placeholder.jpg";

export default function CatalogueCategories() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/catalogue/${categoryId}`);
  };

  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle>Macam-Macam Katalog</CardTitle>
        <CardDescription>
          Jelajahi berbagai kategori ruangan dan temukan inspirasi desain yang sempurna untuk rumah Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROOM_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group rounded-2xl border overflow-hidden hover:shadow-md transition-all cursor-pointer hover:border-brand/50"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                <img
                  src={category.image || PLACEHOLDER}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER;
                  }}
                />
              </div>
              <div className="p-4">
                <div className="font-semibold text-lg">{category.title}</div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {category.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-600">
                    {category.count}
                  </span>
                  <div className="p-2 rounded-lg group-hover:bg-brand/10 transition-colors">
                    <ArrowRight className="w-4 h-4 text-brand" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
