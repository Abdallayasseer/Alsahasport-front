"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Radio, Trophy, Zap, Headset } from "lucide-react";
import { motion } from "framer-motion";
export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "الرئيسية", href: "/", Icon: Home },
    { name: "مباشر", href: "/live", Icon: Radio },
    { name: "المباريات", href: "/matches", Icon: Trophy },
    { name: "اشتراك", href: "/subscription", Icon: Zap },
    { name: "الدعم", href: "/support", Icon: Headset },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden flex justify-center pointer-events-none">
      <nav 
        className="
          pointer-events-auto 
          glass-dock
          rounded-2xl 
          px-2 py-3
          flex items-center justify-around
          w-full max-w-sm
        "
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.Icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group focus:outline-none flex flex-col items-center gap-1 min-w-[60px]"
            >
                {/* Active Indicator */}
                {isActive && (
                    <motion.div 
                        layoutId="active-pill"
                        className="absolute -top-3 w-1 h-1 rounded-full bg-alsaha-green shadow-[0_0_8px_#72BF44]" 
                    />
                )}

                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 1.5} 
                  className={`transition-all duration-300 ${isActive ? "text-alsaha-green" : "text-white/50"}`}
                />
                
                <span className={`text-[10px] font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-white/50"}`}>
                    {item.name}
                </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

