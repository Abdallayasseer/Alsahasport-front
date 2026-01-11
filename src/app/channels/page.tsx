"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Search, Filter } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

// Mock Data - Expanded
const allChannels = [
  { id: 1, name: "beIN Sports 1", category: "Sports", image: "https://ui-avatars.com/api/?name=beIN+1&background=5a2d82&color=fff&size=256&font-size=0.35&length=2" },
  { id: 2, name: "beIN Sports 2", category: "Sports", image: "https://ui-avatars.com/api/?name=beIN+2&background=5a2d82&color=fff&size=256&font-size=0.35&length=2" },
  { id: 3, name: "SSC 1", category: "Sports", image: "https://ui-avatars.com/api/?name=SSC+1&background=FFD700&color=000&size=256&font-size=0.4" },
  { id: 4, name: "SSC 5", category: "Sports", image: "https://ui-avatars.com/api/?name=SSC+5&background=FFD700&color=000&size=256&font-size=0.4" },
  { id: 5, name: "MBC Action", category: "Entertainment", image: "https://ui-avatars.com/api/?name=MBC+A&background=e3001b&color=fff&size=256&font-size=0.4" },
  { id: 6, name: "MBC 2", category: "Movies", image: "https://ui-avatars.com/api/?name=MBC+2&background=e3001b&color=fff&size=256&font-size=0.4" },
  { id: 7, name: "OSN Movies", category: "Movies", image: "https://ui-avatars.com/api/?name=OSN+M&background=000000&color=fff&size=256&font-size=0.4" },
  { id: 8, name: "Al Jazeera", category: "News", image: "https://ui-avatars.com/api/?name=AJ&background=e86c00&color=fff&size=256&font-size=0.5" },
  { id: 9, name: "Al Arabiya", category: "News", image: "https://ui-avatars.com/api/?name=AA&background=7c3aed&color=fff&size=256&font-size=0.5" },
  { id: 10, name: "Spacetoon", category: "Kids", image: "https://ui-avatars.com/api/?name=ST&background=facc15&color=000&size=256&font-size=0.5" },
  { id: 11, name: "CN Arabic", category: "Kids", image: "https://ui-avatars.com/api/?name=CN&background=000000&color=fff&size=256&font-size=0.5" },
  { id: 12, name: "Rotana Cinema", category: "Movies", image: "https://ui-avatars.com/api/?name=Rotana&background=16a34a&color=fff&size=256&font-size=0.3" },
  { id: 13, name: "AD Sports 1", category: "Sports", image: "https://ui-avatars.com/api/?name=AD+1&background=0284c7&color=fff&size=256&font-size=0.4" },
  { id: 14, name: "Al Kass One", category: "Sports", image: "https://ui-avatars.com/api/?name=Kass&background=b91c1c&color=fff&size=256&font-size=0.4" },
  { id: 15, name: "Nat Geo", category: "Documentary", image: "https://ui-avatars.com/api/?name=NatGeo&background=fbbf24&color=000&size=256&font-size=0.3" },
  // Duplicate for demo volume
  { id: 16, name: "beIN Sports 3", category: "Sports", image: "https://ui-avatars.com/api/?name=beIN+3&background=5a2d82&color=fff&size=256&font-size=0.35" },
  { id: 17, name: "beIN Sports 4", category: "Sports", image: "https://ui-avatars.com/api/?name=beIN+4&background=5a2d82&color=fff&size=256&font-size=0.35" },
  { id: 18, name: "SSC Extra 1", category: "Sports", image: "https://ui-avatars.com/api/?name=SSC+X&background=FFD700&color=000&size=256&font-size=0.35" },
];

const categories = ["All", "Sports", "Movies", "News", "Kids", "Entertainment", "Documentary"];
const ITEMS_PER_PAGE = 12;

export default function ChannelsPage() {
  const isMobile = useMobile();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Filter Data
  const filteredChannels = allChannels.filter(channel => {
    const matchesCategory = activeCategory === "All" || channel.category === activeCategory;
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleChannels = filteredChannels.slice(0, visibleCount);
  const hasMore = visibleCount < filteredChannels.length;

  // Simulate API Delay & Reset Pagination
  useEffect(() => {
    let mounted = true;
    
    // Using simple timeout to debounce state updates slightly
    const timer = setTimeout(() => {
       if (mounted) {
         setIsLoading(false);
       }
    }, 800);

    // Set initial loading state only if needed (e.g., query changed)
    // We avoid setting it true inside effect to prevent loops. 
    // Ideally, perform set true in change handlers.
    
    // For now, to satisfy lint and logic:
    return () => { 
        mounted = false; 
        clearTimeout(timer); 
    };
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setIsLoading(true);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setIsLoading(true); // Trigger loading here
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const ChannelSkeleton = () => (
      <div className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/5 animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10" />
      </div>
  );

  return (
    <main className="min-h-screen pt-28 pb-32 px-4 md:px-6 container mx-auto">
      
      {/* Header & Controls */}
      <div className="md:sticky static top-20 z-30 bg-dark-base/80 backdrop-blur-xl -mx-4 px-4 py-4 mb-8 border-b border-white/5 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto">
            
            {/* Title */}
            <div className="hidden md:block">
               <h1 className="text-2xl font-black text-white">القنوات <span className="text-alsaha-green">({filteredChannels.length})</span></h1>
            </div>

            {/* Controls Wrapper */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                
                {/* Search Bar */}
                <div className="relative w-full md:w-64 group">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-alsaha-green transition-colors" size={18} />
                    <input 
                        type="text" 
                        placeholder="ابحث عن قناة..." 
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pr-10 pl-4 text-sm text-white focus:outline-none focus:border-alsaha-green/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                    />
                </div>

                {/* Categories - Scrollable */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
                    <Filter size={16} className="text-white/40 flex-shrink-0 ml-2" />
                    {categories.map((cat) => (
                        <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`
                            px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border
                            ${activeCategory === cat 
                            ? "bg-alsaha-green text-white border-alsaha-green shadow-[0_0_15px_rgba(114,191,68,0.3)] scale-105" 
                            : "bg-white/5 border-white/5 text-text-secondary hover:text-white hover:bg-white/10 hover:border-white/10"}
                        `}
                        >
                        {cat === "All" ? "الكل" : cat}
                        </button>
                    ))}
                </div>
            </div>
          </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
        {isLoading 
            ? Array.from({ length: 8 }).map((_, i) => <ChannelSkeleton key={i} />)
            : visibleChannels.map((channel) => (
                <Link key={channel.id} href="/subscription" className="block outline-none focus:outline-none group">
                <motion.div
                    layout={!isMobile}
                    initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
                    transition={isMobile ? { duration: 0 } : {}}
                    className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 rounded-2xl overflow-hidden glass-card hover:border-alsaha-green/40 transition-all shadow-lg"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-alsaha-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Channel Image */}
                    <div className="absolute inset-0 p-6 z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                         <div className="relative w-full h-full">
                            <Image 
                                src={channel.image} 
                                alt={channel.name}
                                fill
                                className="object-contain drop-shadow-lg"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                            />
                         </div>
                    </div>

                    {/* Overlay Info */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-between items-end">
                        <div className="w-full">
                            <span className="text-[10px] font-bold text-alsaha-green uppercase tracking-wider mb-0.5 block">{channel.category}</span>
                            <h3 className="text-sm md:text-base font-bold text-white leading-tight line-clamp-2">{channel.name}</h3>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-alsaha-green flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(114,191,68,0.5)] transform translate-y-4 group-hover:translate-y-0 shrink-0 ms-2">
                            <Play size={14} className="fill-black text-black ml-0.5" />
                        </div>
                    </div>
                </motion.div>
                </Link>
            ))
        }
      </div>

      {/* Empty State */}
      {!isLoading && filteredChannels.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search size={48} className="text-white/10 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">لا توجد قنوات مطابقة</h3>
              <p className="text-text-secondary">جرب البحث بكلمة أخرى أو تغيير التصنيف.</p>
          </div>
      )}

      {/* Load More Button */}
      {!isLoading && hasMore && (
        <div className="flex justify-center mt-12">
            <button 
                onClick={() => setVisibleCount(c => c + ITEMS_PER_PAGE)}
                className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-text-secondary font-bold transition-all active:scale-95 flex items-center gap-2"
            >
                {/* Spinner if fetching actual data, but here instant */}
                <span>عرض المزيد</span>
            </button>
        </div>
      )}

    </main>
  );
}
