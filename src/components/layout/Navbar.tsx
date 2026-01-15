"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { Crown, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // 🖱️ SCROLL LISTENER (The "Ghost" Logic)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "البث المباشر", href: "/live" },
    { name: "المباريات", href: "/matches" },
    { name: "القنوات", href: "/channels" },
    { name: "الأخبار", href: "/news" },
    { name: "المساعدة", href: "/support" },
  ];

  return (
    <nav 
        className={cn(
            "hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center transition-all duration-500",
            isScrolled ? "py-4" : "py-8"
        )}
    >
      <div 
          className={cn(
              "container mx-auto max-w-7xl flex items-center justify-between px-10 transition-all duration-500",
              // 👻 GHOST STATE -> GLASS STATE
              // "Cinema" spec: h-20 (approx via py), glass, transparent start
              isScrolled 
                ? "bg-black/60 backdrop-blur-2xl border border-white/5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full" 
                : "bg-transparent border border-transparent py-6"
          )}
      >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0 me-8">
             <span className="font-black text-2xl tracking-tighter text-white transition-all group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                ALSAHA<span className="text-alsaha-green group-hover:drop-shadow-[0_0_20px_rgba(114,191,68,0.6)] text-3xl">.</span>SPORT
             </span>
          </Link>
          
          {/* Desktop Nav Items */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-2">
             {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                   <Link 
                      key={link.href}
                      href={link.href} 
                      className={cn(
                        "relative px-6 py-2 text-sm font-bold transition-all duration-300",
                        isActive ? "text-white" : "text-white/60 hover:text-white"
                      )}
                   >
                     <span className="relative z-10">{link.name}</span>
                     
                     {/* ✨ GLOWING ACTIVE DOT */}
                     {isActive && (
                        <motion.div 
                            layoutId="navbar-active"
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-alsaha-green shadow-[0_0_8px_#72BF44]"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                     )}
                   </Link>
                );
             })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-shrink-0 ms-8">
              <Link href="/search">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    <Search size={20} />
                </button>
              </Link>

              <Link href="/subscription">
                 <Button 
                    size="sm" 
                    className={cn(
                        "rounded-full px-8 h-10 text-sm font-black transition-all duration-300",
                        // 🔮 GLASS PILL CTA
                        "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-alsaha-green/50 text-white backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(114,191,68,0.2)]"
                    )}
                 >
                    <Crown size={16} className="me-2 text-alsaha-green" />
                    الاشتراك
                 </Button>
              </Link>
          </div>
      </div>
    </nav>
  );
}
