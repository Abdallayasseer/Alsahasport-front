"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const channels = [
  { id: 1, name: "beIN Sports 1", category: "Sports", image: "/images/اخظر.png" }, // Using placeholders
  { id: 2, name: "SSC 1", category: "Sports", image: "/images/اخظر.png" },
  { id: 3, name: "MBC Action", category: "Movies", image: "/images/اخظر.png" },
  { id: 4, name: "Spacetoon", category: "Kids", image: "/images/اخظر.png" },
  { id: 5, name: "AD Sports", category: "Sports", image: "/images/اخظر.png" },
  { id: 6, name: "Rotana Cinema", category: "Movies", image: "/images/اخظر.png" },
  { id: 7, name: "CN Arabic", category: "Kids", image: "/images/اخظر.png" },
  { id: 8, name: "OSN Movies", category: "Movies", image: "/images/اخظر.png" },
];

const categories = ["All", "Sports", "Movies", "Kids"];

export default function ChannelsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredChannels = activeCategory === "All" 
    ? channels 
    : channels.filter(c => c.category === activeCategory);

  return (
    <main className="min-h-screen pt-28 pb-32 px-6 container mx-auto">
      {/* Header - Compact & Clean */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6 border-b border-white/5 pb-6">
        <div>
           <h1 className="text-3xl md:text-4xl font-black text-white mb-2">القنوات</h1>
           <p className="text-text-secondary text-sm">اكتشف عالمًا من الترفيه اللامتناهي</p>
        </div>
        
        {/* Filters - Compact Pills */}
        <div className="flex items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                activeCategory === cat 
                  ? "bg-alsaha-green text-white border-alsaha-green shadow-[0_0_15px_rgba(114,191,68,0.3)]" 
                  : "bg-white/5 border-white/5 text-text-secondary hover:text-white hover:bg-white/10"
              }`}
            >
              {cat === "All" ? "الكل" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid - Tighter & Cleaner */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredChannels.map((channel, idx) => (
            <Link key={channel.id} href="/subscription" className="block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-video bg-white/4 border border-white/5 rounded-xl overflow-hidden cursor-pointer backdrop-blur-sm hover:border-alsaha-green/30 transition-all"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center z-10 text-white font-bold text-xl opacity-40 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 duration-300">
                    {channel.name.charAt(0)}
                </div>

                <div className="absolute bottom-3 right-3 left-3 z-20 flex justify-between items-center">
                    <span className="text-white text-xs font-bold truncate">{channel.name}</span>
                    <Play size={12} className="text-alsaha-green fill-alsaha-green opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0" />
                </div>
            </motion.div>
            </Link>
        ))}
      </div>
    </main>
  );
}
