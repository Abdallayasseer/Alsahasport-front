"use client";

import { useRef } from "react";
import { Filter } from "lucide-react";
import { motion } from "framer-motion";

interface ChannelFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ChannelFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: ChannelFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-dark-base/80 backdrop-blur-xl border-b border-white/5 py-4 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3">
          {/* Filter Icon */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
             <Filter size={14} className="text-white/60" />
          </div>

          {/* Scrollable List */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full mask-linear-fade"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`
                  relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap border
                  ${activeCategory === cat 
                    ? "bg-alsaha-green text-black border-alsaha-green shadow-[0_0_15px_rgba(114,191,68,0.4)] scale-105" 
                    : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20"}
                `}
              >
                 {cat === "All" ? "الكل" : cat}
                 {activeCategory === cat && (
                    <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                 )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
