"use client";

import { Home, Radio, CalendarDays, LayoutGrid, Newspaper, HelpCircle, Search, Menu, Crown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileNavOverlay() {
  const pathname = usePathname();

  const NAV_ITEMS = [
    { name: "الرئيسية", icon: Home, href: "/" },
    { name: "مباشر", icon: Radio, href: "/live" },
    { name: "مباريات", icon: CalendarDays, href: "/matches" },
    { name: "القنوات", icon: LayoutGrid, href: "/channels" },
    { name: "أخرى", icon: Menu, href: "/settings" }, // Changed to settings/menu for "More"
  ];

  return (
    <div className="md:hidden">
      
      {/* 1. TOP HEADER (FIXED) */}
      <div className="fixed top-0 inset-x-0 z-50 h-16 bg-black/60 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-4 transition-all duration-300">
        
        <div className="flex items-center gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <h1 className="text-lg font-black text-white tracking-tight drop-shadow-md">
                    ALSAHA<span className="text-alsaha-green">.</span>
                </h1>
            </Link>
        </div>
        
        {/* Left: Actions */}
        <div className="flex items-center gap-3">
            {/* Search */}
            <Link href="/search">
                <button className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white active:scale-95 transition-transform rounded-full bg-white/5 border border-white/5">
                    <Search size={18} />
                </button>
            </Link>

            {/* Subscribe CTA - Compact */}
            <Link href="/subscription">
                <button className="h-9 px-4 rounded-full bg-gradient-to-r from-alsaha-green to-[#5da335] text-black text-[10px] font-black tracking-wide shadow-[0_0_15px_rgba(114,191,68,0.25)] active:scale-95 transition-transform flex items-center gap-1.5 border border-white/10">
                    <Crown size={12} className="fill-black" />
                    <span>PREMIUM</span>
                </button>
            </Link>
        </div>

      </div>

      {/* 2. BOTTOM DOCK (FIXED) - "The Glass Bar" */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-[#050505]/90 backdrop-blur-3xl border-t border-white/5 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between px-1">
            {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link 
                        key={item.href} 
                        href={item.href}
                        className="flex-1 flex flex-col items-center justify-center h-[72px] relative group active:scale-95 transition-transform duration-200 tap-highlight-transparent"
                    >
                        {/* Active Stage Light */}
                        {isActive && (
                            <div className="absolute top-0 w-12 h-1 bg-gradient-to-r from-transparent via-alsaha-green to-transparent opacity-100" />
                        )}
                        {isActive && (
                            <div className="absolute -top-4 w-16 h-16 bg-alsaha-green/10 blur-[20px] rounded-full pointer-events-none" />
                        )}

                        <div className="relative z-10 flex flex-col items-center gap-1">
                            <item.icon 
                                size={22} 
                                className={cn(
                                    "transition-all duration-300",
                                    isActive 
                                        ? "text-alsaha-green fill-alsaha-green/20 drop-shadow-[0_0_8px_rgba(114,191,68,0.5)] -translate-y-0.5" 
                                        : "text-white/40 group-hover:text-white/70"
                                )} 
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            <span className={cn(
                                "text-[9px] font-bold tracking-wide transition-all duration-300",
                                isActive ? "text-white translate-y-0" : "text-white/30 translate-y-0.5"
                            )}>
                                {item.name}
                            </span>
                        </div>
                    </Link>
                );
            })}
        </div>
      </div>

    </div>
  );
}
