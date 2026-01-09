"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 z-40 justify-center pt-6 px-4 pointer-events-none">
      <div 
          className="
              pointer-events-auto 
              flex items-center justify-between 
              bg-black/20 backdrop-blur-md border border-white/5
              rounded-full py-3 px-6 
              w-full max-w-6xl
          "
      >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
             <span className="font-black text-2xl tracking-tighter text-white">
                ALSAHA<span className="text-alsaha-green">.SPORT</span>
             </span>
          </Link>
          
          {/* Desktop Nav Items */}
          <div className="flex items-center gap-8">
             <Link href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">الرئيسية</Link>
             <Link href="/live" className="text-sm font-medium text-white/70 hover:text-white transition-colors">مباشر</Link>
             <Link href="/matches" className="text-sm font-medium text-white/70 hover:text-white transition-colors">المباريات</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
              <Link href="/search">
                  <button aria-label="بحث" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all">
                      <Search size={18} />
                  </button>
              </Link>

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
