"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "البث المباشر", href: "/live" },
    { name: "المباريات", href: "/matches" },
    { name: "القنوات", href: "/channels" },
    { name: "الأخبار", href: "/news" },
    { name: "المساعدة", href: "/support" },
  ];

  return (
    <nav className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4 pointer-events-none transition-all duration-300">
      <div 
          className="
              pointer-events-auto 
              container mx-auto max-w-5xl
              flex items-center justify-between 
              bg-black/60 backdrop-blur-2xl border border-white/10
              rounded-full py-3 px-8
              shadow-[0_8px_32px_rgba(0,0,0,0.4)]
              hover:shadow-[0_8px_40px_rgba(114,191,68,0.15)] hover:border-white/20
              transition-all duration-500 hover:scale-[1.01]
          "
      >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0 me-4">
             <span className="font-black text-2xl tracking-tighter text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">
                ALSAHA<span className="text-alsaha-green group-hover:drop-shadow-[0_0_15px_rgba(114,191,68,0.5)] transition-all">.SPORT</span>
             </span>
          </Link>
          
          {/* Desktop Nav Items */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-1">
             {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                   <Link 
                      key={link.href}
                      href={link.href} 
                      className={`
                        relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300
                        ${isActive ? "text-white" : "text-white/60 hover:text-white hover:bg-white/5"}
                      `}
                   >
                     <span className="relative z-10">{link.name}</span>
                     {isActive && (
                        <motion.span 
                            layoutId="navbar-active"
                            className="absolute inset-0 bg-alsaha-green/20 border border-alsaha-green/30 rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                     )}
                   </Link>
                );
             })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-shrink-0 ms-4">
              <Link href="/subscription">
                 <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-alsaha-green hover:bg-[#65aa3c] text-black text-sm font-black transition-all shadow-[0_0_20px_rgba(114,191,68,0.2)] hover:shadow-[0_0_30px_rgba(114,191,68,0.4)] transform hover:scale-105 active:scale-95">
                    <span>اشترك الآن</span>
                 </button>
              </Link>
          </div>
      </div>
    </nav>
  );
}
