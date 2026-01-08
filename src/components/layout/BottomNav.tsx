"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Tv, Radio, CalendarDays, Newspaper, Search, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "الرئيسية", href: "/", icon: <Home size={20} /> },
    { name: "القنوات", href: "/channels", icon: <Tv size={20} /> },
    { name: "LIVE", href: "/live", icon: <Radio size={20} /> },
    { name: "المباريات", href: "/matches", icon: <CalendarDays size={20} /> },
    { name: "الأخبار", href: "/news", icon: <Newspaper size={20} /> },
    { name: "البحث", href: "/search", icon: <Search size={20} /> },
    { name: "الدعم", href: "/support", icon: <HelpCircle size={20} /> },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex justify-center pointer-events-none">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-3 shadow-2xl flex items-center gap-1 pointer-events-auto overflow-x-auto max-w-full no-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex flex-col items-center justify-center min-w-[60px] h-12 rounded-2xl transition-all duration-300 ${
                isActive ? "text-white" : "text-text-secondary hover:text-white"
              }`}
            >
              {/* Icon */}
              <div className={`relative z-10 ${isActive ? "text-alsaha-green drop-shadow-[0_0_8px_rgba(114,191,68,0.6)]" : ""}`}>
                {item.icon}
              </div>
              
              {/* Active Indicator (Dot) */}
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-dot"
                  className="absolute -bottom-1 w-1 h-1 bg-alsaha-green rounded-full shadow-[0_0_5px_#72BF44]"
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
