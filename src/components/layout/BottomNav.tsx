"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Tv, Radio, CalendarDays, Newspaper, Search, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <div className="fixed bottom-0 md:bottom-6 z-50 left-0 md:left-1/2 md:-translate-x-1/2 flex justify-center w-full px-2 md:px-4 pointer-events-none pb-4 md:pb-0">
      <nav 
        onMouseLeave={() => setHoveredIndex(null)}
        className="
          pointer-events-auto 
          bg-[#0F0F0F]/90 backdrop-blur-2xl 
          border border-white/10 
          rounded-2xl md:rounded-full 
          p-2 pb-4 md:p-2
          shadow-[0_20px_40px_rgba(0,0,0,0.8)] 
          flex items-end gap-2 
          ring-1 ring-white/5 
          overflow-x-auto no-scrollbar
          w-full md:w-auto md:max-w-max
        "
      >
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredIndex === index;
          const Icon = item.Icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative group focus:outline-none"
            >
              <motion.div
                layout
                className={`
                  relative flex flex-col items-center justify-center 
                  bg-white/5 border border-white/5
                  rounded-xl md:rounded-2xl
                  ${isActive ? "bg-white/10 border-alsaha-green/30" : "hover:bg-white/10"}
                  transition-colors duration-300
                  min-w-[48px] md:min-w-[60px]
                  h-[48px] md:h-[60px]
                `}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  y: isHovered ? -5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                 {/* Active Indicator (Dot) */}
                 {isActive && (
                    <motion.div 
                        layoutId="active-dot"
                        className="absolute -top-1 md:-top-1.5 w-1.5 h-1.5 rounded-full bg-alsaha-green shadow-[0_0_10px_#72BF44]" 
                    />
                 )}

                  <Icon 
                    size={24} 
                    strokeWidth={isActive ? 2 : 1.5} 
                    className={`
                        transition-all duration-300 
                        ${isActive ? "text-alsaha-green drop-shadow-[0_0_8px_rgba(114,191,68,0.5)]" : "text-white/70 group-hover:text-white"}
                    `}
                 />

              </motion.div>
              
              {/* Text Label - Visible on Mobile AND Desktop now */}
              <span className={`
                flex
                justify-center mt-1 text-[9px] md:text-[10px] font-medium 
                ${isActive ? "text-alsaha-green" : "text-white/50 group-hover:text-white/70"}
              `}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

