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
    <div className="fixed bottom-6 z-50 left-1/2 -translate-x-1/2 flex justify-center w-full px-4 pointer-events-none">
      <nav 
        onMouseLeave={() => setHoveredIndex(null)}
        className="
          pointer-events-auto 
          bg-[#0F0F0F]/80 backdrop-blur-2xl 
          border border-white/10 
          rounded-2xl md:rounded-full 
          p-2 
          shadow-[0_20px_40px_rgba(0,0,0,0.6)] 
          flex items-end gap-2 
          ring-1 ring-white/5 
          overflow-x-auto no-scrollbar
          max-w-[calc(100vw-32px)] md:max-w-max
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
                  min-w-[50px] md:min-w-[60px]
                  h-[50px] md:h-[60px]
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
                        ${isActive ? "text-alsaha-green drop-shadow-[0_0_8px_rgba(114,191,68,0.5)]" : "text-white/60 group-hover:text-white"}
                    `}
                 />

                 {/* Desktop Label (Tooltip Style) - Only visible on hover/active or simple faint text? 
                     User Guidelines: "Compact on mobile... MacOS style." 
                     Let's keep text mostly hidden on desktop and show on hover to be cleaner? 
                     Or stick to the previous Mobile text style but refined.
                 */}
              </motion.div>
              
              {/* Text Label - Mobile Optimized */}
              <span className={`
                flex md:hidden 
                justify-center mt-1 text-[9px] font-medium 
                ${isActive ? "text-alsaha-green" : "text-white/40"}
              `}>
                {item.name}
              </span>

              {/* Desktop Tooltip */}
              <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -45, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 border border-white/10 px-3 py-1 rounded-lg text-xs text-white backdrop-blur-md z-50"
                    >
                        {item.name}
                    </motion.div>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
