"use client";

import { useState } from "react";
import { Search, Tv, Satellite } from "lucide-react";
import ChannelCard from "@/components/channels/ChannelCard";
import ChannelFilter from "@/components/channels/ChannelFilter";
import Button from "@/components/ui/Button";

// Mock Data (Expanded for Grid Demo)
const allChannels = [
  { id: 1, name: "beIN Sports 1", category: "Sports", quality: "4K", isLive: true, image: "https://ui-avatars.com/api/?name=beIN+1&background=5a2d82&color=fff&size=256&font-size=0.35&length=2&rounded=true" },
  { id: 2, name: "beIN Sports 2", category: "Sports", quality: "HD", isLive: true, image: "https://ui-avatars.com/api/?name=beIN+2&background=5a2d82&color=fff&size=256&font-size=0.35&length=2&rounded=true" },
  { id: 3, name: "SSC 1", category: "Sports", quality: "4K", isLive: true, image: "https://ui-avatars.com/api/?name=SSC+1&background=FFD700&color=000&size=256&font-size=0.4&rounded=true" },
  { id: 4, name: "SSC 5", category: "Sports", quality: "HD", isLive: false, image: "https://ui-avatars.com/api/?name=SSC+5&background=FFD700&color=000&size=256&font-size=0.4&rounded=true" },
  { id: 5, name: "MBC Action", category: "Entertainment", quality: "HD", isLive: false, image: "https://ui-avatars.com/api/?name=MBC+A&background=e3001b&color=fff&size=256&font-size=0.4&rounded=true" },
  { id: 6, name: "MBC 2", category: "Movies", quality: "HD", isLive: false, image: "https://ui-avatars.com/api/?name=MBC+2&background=e3001b&color=fff&size=256&font-size=0.4&rounded=true" },
  { id: 7, name: "OSN Movies", category: "Movies", quality: "4K", isLive: false, image: "https://ui-avatars.com/api/?name=OSN+M&background=000000&color=fff&size=256&font-size=0.4&rounded=true" },
  { id: 8, name: "Al Jazeera", category: "News", quality: "HD", isLive: true, image: "https://ui-avatars.com/api/?name=AJ&background=e86c00&color=fff&size=256&font-size=0.5&rounded=true" },
  { id: 9, name: "Al Arabiya", category: "News", quality: "HD", isLive: true, image: "https://ui-avatars.com/api/?name=AA&background=7c3aed&color=fff&size=256&font-size=0.5&rounded=true" },
  { id: 10, name: "Spacetoon", category: "Kids", quality: "SD", isLive: false, image: "https://ui-avatars.com/api/?name=ST&background=facc15&color=000&size=256&font-size=0.5&rounded=true" },
  { id: 11, name: "CN Arabic", category: "Kids", quality: "HD", isLive: false, image: "https://ui-avatars.com/api/?name=CN&background=000000&color=fff&size=256&font-size=0.5&rounded=true" },
  { id: 12, name: "Rotana Cinema", category: "Movies", quality: "HD", isLive: false, image: "https://ui-avatars.com/api/?name=Rotana&background=16a34a&color=fff&size=256&font-size=0.3&rounded=true" },
  { id: 13, name: "AD Sports 1", category: "Sports", quality: "HD", isLive: true, image: "https://ui-avatars.com/api/?name=AD+1&background=0284c7&color=fff&size=256&font-size=0.4&rounded=true" },
  { id: 14, name: "Al Kass One", category: "Sports", quality: "4K", isLive: true, image: "https://ui-avatars.com/api/?name=Kass&background=b91c1c&color=fff&size=256&font-size=0.4&rounded=true" },
  { id: 15, name: "Nat Geo", category: "Documentary", quality: "HD", isLive: false, image: "https://ui-avatars.com/api/?name=NatGeo&background=fbbf24&color=000&size=256&font-size=0.3&rounded=true" },
  { id: 16, name: "beIN Sports 3", category: "Sports", quality: "HD", isLive: false, image: "https://ui-avatars.com/api/?name=beIN+3&background=5a2d82&color=fff&size=256&font-size=0.35&length=2&rounded=true" },
  { id: 17, name: "beIN Sports 4", category: "Sports", quality: "HD", isLive: false, image: "https://ui-avatars.com/api/?name=beIN+4&background=5a2d82&color=fff&size=256&font-size=0.35&length=2&rounded=true" },
  { id: 18, name: "SSC Extra 1", category: "Sports", quality: "SD", isLive: false, image: "https://ui-avatars.com/api/?name=SSC+X&background=FFD700&color=000&size=256&font-size=0.35&rounded=true" },
] as const;

const categories = ["All", "Sports", "Movies", "News", "Kids", "Entertainment", "Documentary"];
const ITEMS_PER_PAGE = 24;

export default function ChannelsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Filter Data - Instant
  const filteredChannels = allChannels.filter(channel => {
    const matchesCategory = activeCategory === "All" || channel.category === activeCategory;
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleChannels = filteredChannels.slice(0, visibleCount);
  const hasMore = visibleCount < filteredChannels.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <main className="min-h-screen bg-[#050505] pb-32 relative overflow-hidden">
        
        {/* Atmosphere Background */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Header Wrapper */}
        <div className="relative pt-28 pb-6">
             <div className="container mx-auto px-5 md:px-8 max-w-7xl">
                
                {/* Search & Hero */}
                <div className="flex flex-col items-center justify-center text-center mb-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold mb-6 backdrop-blur-md">
                        <Satellite size={14} className="text-alsaha-green" />
                        <span>أكثر من 9,000 قناة متاحة</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-black text-white px-4 leading-tight mb-8">
                         استكشف عالمك <span className="text-transparent bg-clip-text bg-gradient-to-l from-alsaha-green to-white">الترفيهي</span>
                    </h1>

                    {/* Massive Glass Search Bar */}
                    <div className="relative w-full group">
                        <div className="absolute inset-0 bg-alsaha-green/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 focus-within:border-alsaha-green/50 focus-within:bg-white/[0.05]">
                            <div className="pl-6 text-white/40">
                                <Search size={24} />
                            </div>
                            <input 
                                type="text" 
                                placeholder="ابحث عن قناة، فيلم، أو رياضة..." 
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                className="w-full h-16 md:h-20 bg-transparent border-none text-lg md:text-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-0 px-4"
                            />
                        </div>
                    </div>
                </div>
             </div>

             {/* Sticky Filter Bar */}
             <ChannelFilter 
                categories={categories} 
                activeCategory={activeCategory} 
                onCategoryChange={handleCategoryChange} 
             />
        </div>

      {/* Grid Content */}
      <div className="container mx-auto px-5 md:px-8 mt-8 max-w-[1600px]">
        
        {/* Results Info */}
        <div className="flex items-center gap-2 mb-6 text-white/40 text-sm font-medium px-2">
            <Tv size={16} />
            <span>عرض {visibleChannels.length} من أصل {filteredChannels.length} قناة</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 md:gap-6">
            {visibleChannels.map((channel) => (
                <ChannelCard key={channel.id} channel={channel} />
            ))}
        </div>

        {/* Empty State */}
        {filteredChannels.length === 0 && (
            <div className="flex flex-col items-center justify-center py-40 text-center">
                <div className="w-24 h-24 rounded-[32px] bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 animate-pulse">
                    <Search size={40} className="text-white/20" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">لا توجد نتائج مطابقة</h3>
                <p className="text-white/40 max-w-sm mx-auto text-base">لم نتمكن من العثور على أي قناة تطابق بحثك. جرب البحث عن اسم مختلف أو تصفح فئة أخرى.</p>
                <button 
                     onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                     className="mt-8 px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-colors"
                >
                    مسح الفلاتر
                </button>
            </div>
        )}

        {/* Load More */}
        {hasMore && (
            <div className="flex justify-center mt-20 mb-20">
                <Button 
                    variant="secondary"
                    onClick={() => setVisibleCount(c => c + ITEMS_PER_PAGE)}
                    className="px-12 py-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-lg font-bold min-w-[200px]"
                >
                    تحميل المزيد
                </Button>
            </div>
        )}
      </div>
    </main>
  );
}
