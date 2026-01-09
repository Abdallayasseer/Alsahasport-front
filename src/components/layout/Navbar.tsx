"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className="hidden md:flex fixed top-0 left-0 right-0 z-40 justify-center pt-6 px-4 pointer-events-none">
      <div 
          className="
              pointer-events-auto 
              container mx-auto
              flex items-center justify-between 
              bg-black/20 backdrop-blur-md border border-white/5
              rounded-full py-3 px-8
              shadow-lg
          "
      >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
             <span className="font-black text-2xl tracking-tighter text-white">
                ALSAHA<span className="text-alsaha-green">.SPORT</span>
             </span>
          </Link>
          
          {/* Desktop Nav Items */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
             {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                   <Link 
                      key={link.href}
                      href={link.href} 
                      className={`text-sm font-bold transition-all duration-300 relative ${
                        isActive 
                        ? "text-alsaha-green" 
                        : "text-white/70 hover:text-alsaha-green"
                      }`}
                   >
                     {link.name}
                     {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-alsaha-green rounded-full shadow-[0_0_8px_#72BF44]" />
                     )}
                   </Link>
                );
             })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
              <Link href="/subscription">
                 <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-alsaha-green hover:bg-[#65aa3c] text-black text-sm font-bold transition-all shadow-[0_0_20px_rgba(114,191,68,0.3)] hover:shadow-[0_0_30px_rgba(114,191,68,0.5)] transform hover:scale-105">
                    <span>اشترك الآن</span>
                 </button>
              </Link>
          </div>
      </div>
    </nav>
  );
}
