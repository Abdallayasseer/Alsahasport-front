"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Tv, Radio, CalendarDays, Newspaper, Search, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "الرئيسية", href: "/", Icon: Home },
    { name: "القنوات", href: "/channels", Icon: Tv },
    { name: "LIVE", href: "/live", Icon: Radio },
    { name: "المباريات", href: "/matches", Icon: CalendarDays },
    { name: "الأخبار", href: "/news", Icon: Newspaper },
    { name: "البحث", href: "/search", Icon: Search },
    { name: "الدعم", href: "/support", Icon: HelpCircle },
  ];

  return (
    <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <nav className="pointer-events-auto bg-[#0F0F0F]/90 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-full px-2 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-between md:justify-center gap-1 md:gap-6 w-full md:w-auto max-w-lg md:max-w-none ring-1 ring-white/5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.Icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center justify-center gap-1.5 min-w-[48px] md:min-w-[64px] py-1 rounded-xl transition-all duration-300 group cursor-pointer ${
                isActive ? "text-[#72BF44]" : "text-white/50 hover:text-white"
              }`}
            >
              <div className={`relative transition-all duration-300 ${isActive ? "-translate-y-1 scale-110" : "group-hover:-translate-y-0.5"}`}>
                 {/* Glow behind icon */}
                 {isActive && (
                    <div className="absolute inset-0 bg-[#72BF44] blur-[12px] opacity-40 rounded-full" />
                 )}
                 <Icon 
                    size={24} 
                    strokeWidth={isActive ? 2.5 : 1.5} 
                    className={`relative z-10 transition-all duration-300 ${isActive ? "drop-shadow-[0_0_8px_rgba(114,191,68,0.5)]" : ""}`}
                    fill={isActive ? "currentColor" : "none"}
                    fillOpacity={isActive ? 0.2 : 0}
                 />
              </div>

              <span className={`text-[10px] font-medium tracking-wide transition-all duration-300 ${isActive ? "font-bold text-[#72BF44]" : ""}`}>
                {item.name}
              </span>
              
              {/* Optional Active Indicator Dot */}
              {isActive && (
                 <motion.div 
                    layoutId="nav-pill"
                    className="absolute -bottom-2 w-1 h-1 bg-[#72BF44] rounded-full shadow-[0_0_5px_#72BF44]"
                 />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
