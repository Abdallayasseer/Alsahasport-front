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
    <nav className="fixed top-0 left-0 right-0 z-40 pointer-events-none transition-all duration-500 flex justify-center pt-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div 
            className={`
                pointer-events-auto mx-auto 
                flex items-center justify-between 
                rounded-full border border-white/5 
                transition-all duration-500
                ${isScrolled 
                  ? "bg-[#050505]/80 backdrop-blur-xl shadow-lg py-3 px-6 w-[95%] md:w-full ring-1 ring-white/5" 
                  : "bg-transparent border-transparent py-4 px-4 w-full"
                }
            `}
        >
            
            {/* Logo */}
            <Link href="/" className="relative flex items-center group">
                <div className="relative w-10 h-10 md:w-16 md:h-16 transition-transform group-hover:scale-105">
                    <Image 
                        src="/images/ابيض.png" 
                        alt="Alsaha Sport" 
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        priority
                        sizes="(max-width: 768px) 40px, 64px"
                    />
                </div>
            </Link>
            
            {/* Primary Action */}
            <Link href="/subscription">
                <button className="relative overflow-hidden flex items-center gap-2 px-6 py-2.5 bg-alsaha-green text-black font-black text-sm rounded-full shadow-[0_0_20px_rgba(114,191,68,0.3)] hover:shadow-[0_0_35px_rgba(114,191,68,0.5)] transition-all hover:scale-105 active:scale-95 group">
                    <span className="relative z-10 flex items-center gap-2">
                        <Zap size={16} className="fill-black group-hover:animate-pulse" />
                        <span>اشترك الآن</span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
            </Link>
        </div>
      </div>
    </nav>
  );
}
