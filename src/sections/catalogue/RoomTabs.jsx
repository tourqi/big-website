// src/sections/catalogue/RoomTabs.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Armchair, Bed, Bath } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const ROOM_TYPES = [
  { id: "all", name: "Semua", icon: null, count: "48 desain" },
  { id: "living-room", name: "Living Room", icon: Armchair, count: "12 desain" },
  { id: "bedroom", name: "Bedroom", icon: Bed, count: "14 desain" },
  { id: "dining-room", name: "Dining Room", icon: ChefHat, count: "10 desain" },
  { id: "bathroom", name: "Bathroom", icon: Bath, count: "12 desain" },
];

export default function RoomTabs({ activeRoom, onChangeRoom }) {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b py-3">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {ROOM_TYPES.map((room) => {
            const isActive = activeRoom === room.id;
            const Icon = room.icon;

            return (
              <button
                key={room.id}
                onClick={() => onChangeRoom(room.id)}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                  transition-all duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? "bg-brand text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand rounded-xl -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {Icon && <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-600"}`} />}
                <span>{room.name}</span>
                {room.count && (
                  <Badge
                    variant={isActive ? "secondary" : "outline"}
                    className={`
                      h-5 text-[10px] px-1.5 rounded-full
                      ${isActive ? "bg-white/20 text-white" : "bg-white text-gray-600"}
                    `}
                  >
                    {room.count}
                  </Badge>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
