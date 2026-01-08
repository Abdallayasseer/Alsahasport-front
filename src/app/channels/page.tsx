"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

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
    <main className="min-h-screen pt-32 pb-24 px-6 container mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div>
           <h1 className="text-4xl md:text-5xl font-black text-white mb-2">القنوات</h1>
           <p className="text-text-secondary">اكتشف عالمًا من الترفيه اللامتناهي</p>
        </div>
        
        {/* Filters */}
        <div className="flex items-center gap-2 p-1 bg-white/5 rounded-full backdrop-blur-md border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-alsaha-green text-white shadow-[0_0_15px_rgba(114,191,68,0.4)]" 
                  : "text-text-secondary hover:text-white"
              }`}
            >
              {cat === "All" ? "الكل" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredChannels.map((channel, idx) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative aspect-video bg-white/5 border border-white/5 rounded-2xl overflow-hidden cursor-pointer backdrop-blur-sm hover:border-alsaha-green/50 hover:shadow-[0_0_30px_rgba(114,191,68,0.2)] transition-all"
            >
                {/* Channel Preview Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />
                
                <div className="absolute inset-0 flex items-center justify-center z-10 text-white font-bold text-lg opacity-50 group-hover:opacity-100 transition-opacity">
                    {/* Placeholder Icon */}
                    <span className="text-2xl">{channel.name.charAt(0)}</span>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-between items-center">
                    <span className="text-white text-sm font-bold">{channel.name}</span>
                    <Play size={16} className="text-alsaha-green fill-alsaha-green" />
                </div>
            </motion.div>
        ))}
      </div>
    </main>
  );
}
