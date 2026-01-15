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
    <div className="sticky top-16 md:top-20 z-40 bg-dark-base/90 border-b border-white/5 py-4 w-full">
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
                  relative px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap border
                  ${activeCategory === cat 
                    ? "bg-alsaha-green text-black border-alsaha-green shadow-[0_4px_12px_rgba(114,191,68,0.3)]" 
                    : "bg-white/5 border-white/5 text-gray-400"}
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
