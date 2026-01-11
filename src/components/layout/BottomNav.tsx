"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Tv, CreditCard, Headset } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "الرئيسية", href: "/", Icon: Home },
    { name: "المباريات", href: "/matches", Icon: Calendar },
    { name: "مباشر", href: "/live", Icon: Tv },
    { name: "الاشتراكات", href: "/subscription", Icon: CreditCard },
    { name: "الدعم", href: "/support", Icon: Headset },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden w-full max-w-[90%] pointer-events-none pb-[env(safe-area-inset-bottom)]">
       {/* Use a container with max-w to avoid spanning full width on tablets/landscape mobile */}
      <nav 
        className="
          pointer-events-auto 
          glass-dock
          rounded-2xl 
          px-2 py-3
          flex items-center justify-between
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          border border-white/10
        "
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.Icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group focus:outline-none flex flex-1 flex-col items-center gap-1.5 min-w-[50px] py-1 active:scale-90 transition-transform duration-200 tap-highlight-transparent"
            >
                {/* Active Indicator Pips */}
                {isActive && (
                    <motion.div 
                        layoutId="active-pill"
                        className="absolute -top-3 w-8 h-1 rounded-full bg-alsaha-green shadow-[0_0_15px_#72BF44]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}

                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 1.5} 
                  className={`transition-all duration-300 ${isActive ? "text-alsaha-green drop-shadow-[0_0_10px_rgba(114,191,68,0.5)]" : "text-white/40 group-hover:text-white/80"}`}
                />
                
                <span className={`text-[10px] font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-white/40"}`}>
                    {item.name}
                </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
