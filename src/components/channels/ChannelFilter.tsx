"use client";

import { useRef } from "react";
import { Filter } from "lucide-react";

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
    <div className="sticky top-16 md:top-20 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4 w-full transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4">
          
          {/* Label / Icon */}
          <div className="hidden md:flex items-center gap-2 text-white/40 text-xs font-bold pl-4 border-l border-white/5">
              <Filter size={14} />
              <span>تصفية:</span>
          </div>

          {/* Scrollable List */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full py-1"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`
                  relative px-6 py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap border transition-all duration-300
                  ${activeCategory === cat 
                    ? "bg-alsaha-green text-black border-alsaha-green shadow-[0_0_20px_rgba(114,191,68,0.3)] scale-105" 
                    : "bg-white/[0.03] border-white/5 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/10"}
                `}
              >
                 {cat === "All" ? "الكل" : cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
