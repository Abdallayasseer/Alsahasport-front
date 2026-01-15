"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Tv, Radio, Calendar, Newspaper, Headset } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "الرئيسية", href: "/", Icon: Home },
    { name: "المباريات", href: "/matches", Icon: Calendar },
    { name: "مباشر", href: "/live", Icon: Radio },
    { name: "القنوات", href: "/channels", Icon: Tv },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden">
      <nav className="flex items-center justify-between px-6 py-4 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.Icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex flex-col items-center justify-center"
            >
              {isActive && (
                <span className="absolute -top-10 w-12 h-12 bg-alsaha-green/20 blur-xl rounded-full" />
              )}
              
              <div className={cn(
                  "p-2 rounded-xl transition-all duration-300",
                  isActive ? "text-alsaha-green bg-alsaha-green/10" : "text-white/40 group-hover:text-white"
              )}>
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={cn("transition-transform duration-300", isActive && "scale-110")}
                />
              </div>
            </Link>
          );
        })}
        
        {/* Profile/Menu Trigger (Static for now) */}
        <button className="p-2 rounded-xl text-white/40 hover:text-white">
            <Headset size={22} />
        </button>
      </nav>
    </div>
  );
}
