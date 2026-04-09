// src/components/Breadcrumbs.jsx
import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { ROOM_CATEGORIES } from "@/data/kitchenCatalogue";

/**
 * Breadcrumbs component - displays navigation breadcrumb trail
 * Automatically generates breadcrumbs based on current route
 */
export default function Breadcrumbs() {
  const location = useLocation();

  const breadcrumbs = useMemo(() => {
    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);

    if (segments.length === 0) return [];

    const items = [];

    // Always add home (only if not on homepage)
    if (path !== "/") {
      items.push({
        label: "Beranda",
        href: "/",
        icon: true,
      });
    }

    // Parse each segment
    if (segments[0] === "catalogue") {
      items.push({
        label: "Katalog",
        href: "/catalogue",
        icon: false,
      });

      // Category level: /catalogue/:categoryId
      if (segments[1] && !segments[2]) {
        const categoryId = segments[1];
        const category = ROOM_CATEGORIES.find((cat) => cat.id === categoryId);
        if (category) {
          items.push({
            label: category.name,
            href: `/catalogue/${categoryId}`,
            icon: false,
          });
        }
      }

      // Style level: /catalogue/:categoryId/:styleId
      if (segments[1] && segments[2]) {
        const categoryId = segments[1];
        const styleId = segments[2];
        const category = ROOM_CATEGORIES.find((cat) => cat.id === categoryId);
        const style = category?.styles?.find((s) => s.id === styleId);

        if (category) {
          items.push({
            label: category.name,
            href: `/catalogue/${categoryId}`,
            icon: false,
          });
        }

        if (style) {
          items.push({
            label: style.name,
            href: null, // Current page, no link
            icon: false,
            isCurrent: true,
          });
        }
      }
    }

    // Portfolio detail: /portfolio/:id
    if (segments[0] === "portfolio" && segments[1]) {
      items.push({
        label: "Portofolio",
        href: "/#portfolio",
        icon: false,
      });
      items.push({
        label: "Detail Proyek",
        href: null,
        icon: false,
        isCurrent: true,
      });
    }

    // Kitchen guide: /kitchen-guide
    if (segments[0] === "kitchen-guide") {
      items.push({
        label: "Panduan Dapur",
        href: "/kitchen-guide",
        icon: false,
        isCurrent: true,
      });
    }

    return items;
  }, [location.pathname]);

  // Don't render if no breadcrumbs
  if (breadcrumbs.length === 0) return null;

  return (
    <nav
      className="bg-gray-50 border-b border-gray-200 sticky top-[64px] z-30"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 py-3 text-sm overflow-x-auto">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <ChevronRight
                  size={16}
                  className="text-gray-400 flex-shrink-0"
                  aria-hidden="true"
                />
              )}

              {crumb.icon ? (
                <Link
                  to={crumb.href}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0"
                  aria-label={crumb.label}
                >
                  <Home size={16} />
                </Link>
              ) : crumb.isCurrent ? (
                <span className="text-gray-900 font-medium">{crumb.label}</span>
              ) : (
                <Link
                  to={crumb.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
