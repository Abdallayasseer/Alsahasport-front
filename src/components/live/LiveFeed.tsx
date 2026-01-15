"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ChannelCard from "@/components/channels/ChannelCard";

// Mock Data for the Feed
const MOCK_CHANNELS = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? `beIN SPORTS ${i + 1} Premium` : `SSC SPORTS ${i + 1}`,
    category: "Sports",
    image: `https://ui-avatars.com/api/?name=${i % 2 === 0 ? 'BeIN' : 'SSC'}&length=3&background=transparent&color=fff&font-size=0.3`,
    isLive: i < 5, // First 5 live
    epgNow: i < 5 ? (i % 2 === 0 ? "Real Madrid vs Man City" : "Al Hilal vs Al Nassr") : undefined,
}));

export default function LiveFeed() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="flex-1 w-full min-h-screen pb-24 lg:pb-10 p-4 md:p-8">
            
            {/* 🔍 HEADER: Search & Toolkit */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                
                {/* Search Bar */}
                <div className="relative w-full max-w-md group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search size={18} className="text-white/30 group-focus-within:text-alsaha-green transition-colors" />
                    </div>
                    <input 
                        type="text"
                        placeholder="ابحث عن قناة أو مباراة..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-12 rounded-full bg-white/5 border border-white/10 pl-11 pr-5 text-sm text-white focus:outline-none focus:border-alsaha-green/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                    />
                </div>

                {/* Filter Button */}
                <button className="flex items-center gap-2 px-5 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-bold text-white transition-all active:scale-95">
                    <SlidersHorizontal size={16} />
                    <span>تصفية</span>
                </button>
            </div>

            {/* 📺 THE CHANNEL GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {MOCK_CHANNELS.map((channel) => (
                    <ChannelCard key={channel.id} channel={channel} />
                ))}
            </div>

        </div>
    );
}
