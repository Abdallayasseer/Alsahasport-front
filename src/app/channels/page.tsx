"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Search, Filter } from "lucide-react";

// Mock Data - Expanded
const allChannels = [
  { id: 1, name: "beIN Sports 1", category: "Sports", image: "/images/channels/bein1.png" },
  { id: 2, name: "beIN Sports 2", category: "Sports", image: "/images/channels/bein2.png" },
  { id: 3, name: "SSC 1", category: "Sports", image: "/images/channels/ssc1.png" },
  { id: 4, name: "SSC 5", category: "Sports", image: "/images/channels/ssc5.png" },
  { id: 5, name: "MBC Action", category: "Entertainment", image: "/images/channels/mbc.png" },
  { id: 6, name: "MBC 2", category: "Movies", image: "/images/channels/mbc2.png" },
  { id: 7, name: "OSN Movies", category: "Movies", image: "/images/channels/osn.png" },
  { id: 8, name: "Al Jazeera", category: "News", image: "/images/channels/jazeera.png" },
  { id: 9, name: "Al Arabiya", category: "News", image: "/images/channels/arabiya.png" },
  { id: 10, name: "Spacetoon", category: "Kids", image: "/images/channels/spacetoon.png" },
  { id: 11, name: "CN Arabic", category: "Kids", image: "/images/channels/cn.png" },
  { id: 12, name: "Rotana Cinema", category: "Movies", image: "/images/channels/rotana.png" },
  { id: 13, name: "AD Sports 1", category: "Sports", image: "/images/channels/ad1.png" },
  { id: 14, name: "Al Kass One", category: "Sports", image: "/images/channels/alkass.png" },
  { id: 15, name: "Nat Geo", category: "Documentary", image: "/images/channels/natgeo.png" },
];

const categories = ["All", "Sports", "Movies", "News", "Kids", "Entertainment", "Documentary"];

export default function ChannelsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChannels = allChannels.filter(channel => {
    const matchesCategory = activeCategory === "All" || channel.category === activeCategory;
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-28 pb-32 px-4 md:px-6 container mx-auto">
      
      {/* Header & Controls */}
      <div className="sticky top-20 z-30 bg-dark-base/80 backdrop-blur-xl -mx-4 px-4 py-4 mb-8 border-b border-white/5 shadow-md">
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
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pr-10 pl-4 text-sm text-white focus:outline-none focus:border-alsaha-green/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                    />
                </div>

                {/* Categories - Scrollable */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
                    <Filter size={16} className="text-white/40 flex-shrink-0 ml-2" />
                    {categories.map((cat) => (
                        <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
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
      <AnimatePresence mode="popLayout">
        <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto"
        >
            {filteredChannels.map((channel) => (
                <Link key={channel.id} href="/subscription" className="block outline-none focus:outline-none group">
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 rounded-2xl overflow-hidden glass-card hover:border-alsaha-green/40 transition-all shadow-lg"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-alsaha-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Channel Icon / Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 z-10 transition-transform duration-500 group-hover:scale-110">
                        {/* Fallback Text Icon */}
                        <span className="text-3xl md:text-4xl font-black text-white/20 group-hover:text-white transition-colors uppercase tracking-widest drop-shadow-md">
                            {channel.name.substring(0, 3)}
                        </span>
                    </div>

                    {/* Overlay Info */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-between items-end">
                        <div>
                            <span className="text-[10px] font-bold text-alsaha-green uppercase tracking-wider mb-0.5 block">{channel.category}</span>
                            <h3 className="text-sm md:text-base font-bold text-white leading-tight">{channel.name}</h3>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-alsaha-green flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(114,191,68,0.5)] transform translate-y-4 group-hover:translate-y-0">
                            <Play size={14} className="fill-black text-black ml-0.5" />
                        </div>
                    </div>
                    
                    {/* Locked Status (Optional visual for prompt requirement) */}
                    <div className="absolute top-3 left-3 z-20">
                         <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse" />
                    </div>

                </motion.div>
                </Link>
            ))}
        </motion.div>
      </AnimatePresence>
      
      {/* Empty State */}
      {filteredChannels.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search size={48} className="text-white/10 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">لا توجد قنوات مطابقة</h3>
              <p className="text-text-secondary">جرب البحث بكلمة أخرى أو تغيير التصنيف.</p>
          </div>
      )}

    </main>
  );
}
