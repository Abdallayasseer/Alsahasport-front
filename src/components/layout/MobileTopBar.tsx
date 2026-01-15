"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function MobileTopBar() {
  return (
    <header className="sticky top-0 z-50 block w-full border-b border-white/10 bg-[#0B0B0B]/90 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Right Side: Logo */}
        <Link href="/" className="relative flex items-center gap-1 group">
             <span className="font-bold text-lg tracking-tighter text-white">
                ALSAHA<span className="text-alsaha-green">.SPORT</span>
             </span>
        </Link>
        
        {/* Left Side: Actions */}
        <div className="flex items-center gap-3">
            {/* Subscribe Button - High Gloss Luxury Upgrade */}
          <Link
            href="/subscription"
            className="group relative flex h-9 items-center justify-center gap-2 rounded-full border-t border-white/30 bg-gradient-to-b from-lime-400 to-[#72BF44] px-5 text-xs font-black tracking-wide text-[#0f2805] shadow-[0_0_20px_rgba(114,191,68,0.4)] transition-all hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-90"
          >
            <Search className="hidden" /> 
            

            
            <span className="drop-shadow-sm">الباقات</span>
          </Link>

          {/* Search Button - Ghost Icon */}
          <Link
            href="/search"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white active:scale-95"
          >
            <Search size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
