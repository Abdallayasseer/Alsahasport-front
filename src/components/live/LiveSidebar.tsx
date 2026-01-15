"use client";

import { Tv, Trophy, Film, Newspaper, Baby, Clapperboard, MonitorPlay } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", name: "الكل", icon: MonitorPlay },
  { id: "sports", name: "رياضة", icon: Trophy },
  { id: "movies", name: "أفلام", icon: Film },
  { id: "news", name: "أخبار", icon: Newspaper },
  { id: "kids", name: "أطفال", icon: Baby },
  { id: "series", name: "مسلسلات", icon: Tv },
  { id: "docs", name: "وثائقية", icon: Clapperboard },
];

export default function LiveSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryClick = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      {/* 📱 MOBILE: Top Horizontal Scroll Bar */}
      <div className="lg:hidden sticky top-0 z-40 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-2 p-3 overflow-x-auto no-scrollbar pb- safe">
            {CATEGORIES.map((cat) => {
                const isActive = cat.id === currentCategory;
                const Icon = cat.icon;
                return (
                    <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all duration-300",
                            isActive 
                                ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] scale-105" 
                                : "bg-white/5 text-white/60 border border-white/5"
                        )}
                    >
                        <Icon size={14} className={isActive ? "text-black" : "text-white/60"} />
                        <span>{cat.name}</span>
                    </button>
                )
            })}
        </div>
      </div>

      {/* 🖥️ DESKTOP: Fixed Left Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 h-[calc(100vh-80px)] sticky top-[80px] border-l border-white/5 bg-[#050505]/50 backdrop-blur-md">
            
            <div className="p-6">
                <h3 className="text-xs font-black text-white/30 uppercase tracking-widest mb-4 px-2">التصنيفات</h3>
                <div className="space-y-1">
                    {CATEGORIES.map((cat) => {
                        const isActive = cat.id === currentCategory;
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryClick(cat.id)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                                    isActive 
                                        ? "bg-alsaha-green/10 text-alsaha-green font-bold" 
                                        : "text-white/60 hover:bg-white/5 hover:text-white hover:pl-5"
                                )}
                            >
                                <Icon size={18} className={cn("transition-colors", isActive ? "text-alsaha-green" : "text-white/40 group-hover:text-white")} />
                                <span>{cat.name}</span>
                                
                                {isActive && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-alsaha-green rounded-l-full shadow-[0_0_10px_#72bf44]" />
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Premium Ad / Banner Placeholder */}
            <div className="mt-auto p-6">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-alsaha-green/20 to-transparent border border-alsaha-green/20 p-5 flex flex-col justify-end relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-noise opacity-20" />
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-alsaha-green/30 blur-[40px] rounded-full group-hover:bg-alsaha-green/50 transition-colors" />
                    
                    <h4 className="font-black text-white text-lg leading-tight mb-1 relative z-10">الباقة الملكية</h4>
                    <p className="text-xs text-white/60 relative z-10">استمتع بجميع القنوات بجودة 4K</p>
                </div>
            </div>

      </aside>
    </>
  );
}
