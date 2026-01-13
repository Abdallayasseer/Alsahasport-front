"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import ChannelCard from "@/components/channels/ChannelCard";
import ChannelFilter from "@/components/channels/ChannelFilter";

// Mock Data - Detailed for Demo
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
const ITEMS_PER_PAGE = 12;

export default function ChannelsPage() {
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

  useEffect(() => {
    let mounted = true;
    const timer = setTimeout(() => {
       if (mounted) setIsLoading(false);
    }, 800);
    return () => { mounted = false; clearTimeout(timer); };
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setIsLoading(true);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setIsLoading(true);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const ChannelSkeleton = () => (
      <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/5 animate-pulse relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10" />
          </div>
          <div className="absolute bottom-3 left-0 right-0 px-4">
              <div className="h-3 w-1/2 mx-auto bg-white/10 rounded-full" />
          </div>
      </div>
  );

  return (
    <main className="min-h-screen bg-dark-base pb-32">
        {/* Sticky Header Wrapper */}
        <div className="bg-dark-base pt-24 pb-0">
             {/* Title & Search - Top Section */}
             <div className="container mx-auto px-4 md:px-6 mb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                            القنوات المباشرة <span className="text-alsaha-green text-lg md:text-2xl align-top">.</span>
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">شاهد أفضل القنوات الرياضية والترفيهية بجودة عالية</p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-72 group">
                        <Search className="absolute end-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-alsaha-green transition-colors" size={20} />
                        <input 
                            type="text" 
                            placeholder="ابحث عن قناة..." 
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pe-12 ps-4 text-sm text-white focus:outline-none focus:border-alsaha-green/50 focus:bg-white/10 transition-all placeholder:text-white/20 shadow-inner"
                        />
                    </div>
                </div>
             </div>

             {/* Smart Filter Bar (Sticky) */}
             <ChannelFilter 
                categories={categories} 
                activeCategory={activeCategory} 
                onCategoryChange={handleCategoryChange} 
             />
        </div>

      {/* Grid Content */}
      <div className="container mx-auto px-4 md:px-6 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6">
            {isLoading 
                ? Array.from({ length: 12 }).map((_, i) => <ChannelSkeleton key={i} />)
                : visibleChannels.map((channel) => (
                    <ChannelCard key={channel.id} channel={channel} />
                ))
            }
        </div>

        {/* Empty State */}
        {!isLoading && filteredChannels.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 text-center opacity-0 animate-in fade-in zoom-in duration-500 fill-mode-forwards">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Search size={32} className="text-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">لا توجد نتائج</h3>
                <p className="text-text-secondary max-w-xs mx-auto text-sm">لم نتمكن من العثور على قنوات تطابق بحثك. جرب كلمات مختلفة.</p>
            </div>
        )}

        {/* Load More */}
        {!isLoading && hasMore && (
            <div className="flex justify-center mt-16">
                <button 
                    onClick={() => setVisibleCount(c => c + ITEMS_PER_PAGE)}
                    className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all hover:border-alsaha-green/50 active:scale-95"
                >
                    <div className="absolute inset-0 bg-alsaha-green/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative text-white font-bold text-sm">عرض المزيد من القنوات</span>
                </button>
            </div>
        )}
      </div>
    </main>
  );
}
