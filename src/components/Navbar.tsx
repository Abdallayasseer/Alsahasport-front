"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 pointer-events-none transition-all duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Glass Capsule */}
        <div 
            className={`
                pointer-events-auto mx-auto 
                flex items-center justify-between 
                rounded-full border border-white/5 
                backdrop-blur-xl transition-all duration-500
                ${isScrolled ? "bg-[#050505]/80 shadow-2xl py-2 px-6 w-[98%] ring-1 ring-white/5" : "bg-[#050505]/40 shadow-lg py-3 px-8 w-full hover:bg-[#050505]/60"}
            `}
        >
            
            {/* Logo - Extremely Minimal & Subtle */}
            <Link href="/" className="relative flex items-center group">
                <div className="relative w-12 h-10 md:w-14 md:h-12 transition-transform group-hover:scale-105">
                    <Image 
                        src="/images/ابيض.png" 
                        alt="Alsaha Sport" 
                        fill
                        className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                        priority
                    />
                </div>
            </Link>
            
            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
                <Link href="/subscription">
                    <button className="flex items-center gap-2 px-5 py-2 bg-[#72BF44] text-white text-[13px] font-bold rounded-full shadow-[0_0_15px_rgba(114,191,68,0.3)] hover:shadow-[0_0_20px_rgba(114,191,68,0.5)] transition-all hover:scale-105 active:scale-95 group">
                        <Zap size={14} className="fill-current group-hover:scale-110 transition-transform" />
                        <span>اشترك الآن</span>
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </nav>
  );
}
