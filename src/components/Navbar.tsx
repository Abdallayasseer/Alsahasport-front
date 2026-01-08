"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "القنوات", href: "/channels" },
    { name: "LIVE", href: "/live" },
    { name: "الدعم", href: "/support" },
  ];

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        isScrolled ? "py-0" : "py-2"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${isScrolled ? "w-[95%]" : "w-full"}`}>
         <div className={`backdrop-blur-xl border border-white/5 rounded-full px-8 py-3 flex items-center justify-between shadow-2xl pointer-events-auto transition-all duration-300 ${
             isScrolled ? "bg-black/80" : "bg-black/40"
         }`}>
            {/* Logo */}
            <Link href="/" className="relative h-8 w-28 flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image 
                    src="/images/ابيض.png" 
                    alt="Alsaha Sport" 
                    width={110} 
                    height={35} 
                    className="object-contain"
                />
            </Link>

            {/* Desktop Links (Centered) */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative group ${
                        isActive ? "text-white" : "text-text-secondary hover:text-white"
                    }`}
                    >
                    {link.name}
                    {isActive && (
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1 h-1 bg-alsaha-green rounded-full shadow-[0_0_5px_#72BF44]"></span>
                    )}
                    </Link>
                );
            })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button className="text-text-secondary hover:text-white transition-colors hidden md:block">
                    <Search size={20} />
                </button>
                <div className="h-6 w-[1px] bg-white/10 hidden md:block"></div>
                <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-alsaha-green to-[#5da335] text-white text-sm font-bold rounded-full shadow-[0_0_15px_rgba(114,191,68,0.4)] hover:shadow-[0_0_25px_rgba(114,191,68,0.6)] transition-all hover:scale-105">
                    <User size={16} />
                    <span>دخول</span>
                </button>
            </div>
         </div>
      </div>
    </nav>
  );
}
