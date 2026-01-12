"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Tv, Radio, Calendar, Newspaper, Headset } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "الرئيسية", href: "/", Icon: Home },
    { name: "القنوات", href: "/channels", Icon: Tv },
    { name: "مباشر", href: "/live", Icon: Radio },
    { name: "المباريات", href: "/matches", Icon: Calendar },
    { name: "الأخبار", href: "/news", Icon: Newspaper },
    { name: "المساعدة", href: "/support", Icon: Headset },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 block w-full border-t border-white/10 bg-[#0B0B0B] pb-[env(safe-area-inset-bottom)] md:hidden">
      <nav className="grid grid-cols-6 h-16 items-center px-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.Icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex h-full flex-col items-center justify-center gap-1 transition-colors ${
                isActive ? "text-alsaha-green" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <div className={`relative ${isActive ? "text-alsaha-green" : ""}`}>
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`transition-transform duration-200 ${
                    isActive ? "scale-110" : ""
                  }`}
                />
              </div>
              <span
                className={`text-[10px] font-medium whitespace-nowrap ${
                  isActive ? "text-alsaha-green" : "text-zinc-500"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
