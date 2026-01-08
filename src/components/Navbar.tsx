"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Search } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 md:pt-6 px-4 transition-all duration-500 pointer-events-none">
      <div 
          className={`
              pointer-events-auto 
              flex items-center justify-between 
              rounded-full 
              transition-all duration-500 ease-out
              ${isScrolled 
                ? "bg-[#050505]/80 backdrop-blur-2xl shadow-2xl py-2 px-4 w-full max-w-7xl border border-white/10" 
                : "bg-transparent border-transparent py-4 px-2 w-full max-w-7xl"
              }
          `}
      >
          
          {/* Logo Section */}
          <Link href="/" className="relative flex items-center group">
              <div className="relative w-28 h-8 md:w-32 md:h-10 transition-transform duration-300 group-hover:scale-105">
                  {/* Using a text fallback if image fails, or assuming standard logo path */}
                  <div className="flex items-center gap-2">
                     <span className="font-black text-xl md:text-2xl tracking-tighter text-white">
                        ALSAHA<span className="text-alsaha-green">.SPORT</span>
                     </span>
                  </div>
              </div>
          </Link>
          
          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-4">
              
              {/* Search Trigger */}
              {/* Search Trigger */}
              <Link href="/search">
                  <button 
                    className="
                        flex items-center justify-center w-10 h-10 md:w-11 md:h-11 
                        rounded-full bg-white/5 border border-white/5 
                        text-white/80 hover:text-white hover:bg-white/10 
                        transition-all duration-300 hover:scale-110 active:scale-95
                    "
                    aria-label="Search"
                  >
                      <Search size={20} />
                  </button>
              </Link>

              {/* Primary Action */}
              <Link href="/subscription">
                  <button className="hidden md:flex relative overflow-hidden items-center gap-2 px-6 py-2.5 bg-alsaha-green text-black font-black text-sm rounded-full shadow-[0_0_20px_rgba(114,191,68,0.3)] hover:shadow-[0_0_35px_rgba(114,191,68,0.5)] transition-all hover:scale-105 active:scale-95 group">
                      <span className="relative z-10 flex items-center gap-2">
                          <Zap size={16} className="fill-black group-hover:animate-pulse" />
                          <span>اشترك الآن</span>
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                  {/* Mobile Compact Button */}
                   <button 
                      className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-alsaha-green text-black shadow-lg shadow-alsaha-green/20 hover:scale-105 transition-transform"
                      aria-label="Subscription"
                   >
                      <Zap size={20} className="fill-black" />
                  </button>
              </Link>
          </div>
      </div>
    </nav>
  );
}
