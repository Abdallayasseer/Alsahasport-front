"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Tv, Radio, CalendarDays, Newspaper, HelpCircle, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: "الرئيسية", href: "/", Icon: Home },
    { name: "القنوات", href: "/channels", Icon: Tv },
    { name: "LIVE", href: "/live", Icon: Radio },
    { name: "المباريات", href: "/matches", Icon: Trophy },
    { name: "الأخبار", href: "/news", Icon: Newspaper },
    // Search moved to Top Navbar
    { name: "الاشتراكات", href: "/subscription", Icon: CalendarDays }, // Using Subscription as key item 
    { name: "الدعم", href: "/support", Icon: HelpCircle },
  ];

  return (
    <div className="fixed bottom-0 md:bottom-8 z-50 left-0 md:left-1/2 md:-translate-x-1/2 flex justify-center w-full px-2 md:px-4 pointer-events-none pb-4 md:pb-0">
      <nav 
        onMouseLeave={() => setHoveredIndex(null)}
        className="
          pointer-events-auto 
          glass-dock
          rounded-2xl md:rounded-full 
          p-2 pb-3 md:p-2
          flex items-end gap-1 md:gap-2
          overflow-x-auto no-scrollbar
          w-full md:w-auto md:min-w-fit
          max-w-[100vw]
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
              className="relative group focus:outline-none flex-1 md:flex-none"
            >
              <motion.div
                layout
                className={`
                  relative flex flex-col items-center justify-center 
                  rounded-xl md:rounded-2xl
                  ${isActive ? "bg-white/10" : "hover:bg-white/5"}
                  transition-colors duration-300
                  min-w-[48px] md:min-w-[64px]
                  h-[50px] md:h-[64px]
                  mx-auto
                `}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  y: isHovered ? -4 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                 {/* Active Indicator (Glow) */}
                 {isActive && (
                    <motion.div 
                        layoutId="active-glow"
                        className="absolute inset-0 rounded-xl md:rounded-2xl bg-alsaha-green/10 shadow-[0_0_20px_rgba(114,191,68,0.2)]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                 )}
                 
                 {/* Active Dot */}
                 {isActive && (
                    <motion.div 
                        layoutId="active-dot"
                        className="absolute -top-1 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-alsaha-green shadow-[0_0_10px_#72BF44]" 
                    />
                 )}

                  <Icon 
                    size={22} 
                    strokeWidth={isActive ? 2.5 : 1.5} 
                    className={`
                        z-10 transition-all duration-300 
                        ${isActive ? "text-alsaha-green drop-shadow-[0_0_8px_rgba(114,191,68,0.6)]" : "text-white/60 group-hover:text-white"}
                    `}
                 />

              </motion.div>
              
              {/* Text Label */}
              <span className={`
                flex justify-center mt-1 
                text-[10px] md:text-[11px] font-medium tracking-wide
                transition-colors duration-300
                ${isActive ? "text-alsaha-green" : "text-white/40 group-hover:text-white/70"}
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

