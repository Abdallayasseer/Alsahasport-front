"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-0 bg-[#050505] bg-noise">
      
      {/* 🌑 PHASE 2: THE HEROSCAPE AND ATMOSPHERE */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic Background Image - Static Mobile / Scale Desktop */}
        <div className="relative w-full h-full md:animate-scale-slow">
          <Image
            src="/images/hero-bg.jpg"
            alt="Stadium Atmosphere"
            fill
            className="object-cover object-top opacity-40 select-none"
            priority
            draggable={false}
          />
        </div>

        {/* Cinematic Overlay: Deep Black Gradient from Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        
        {/* Cinematic Overlay: RTL Reading Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

        {/* 🟢 SPOTLIGHT: Signature Green Glow (Top Left) */}
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-[#72BF44]/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[1400px]">
        <div className="max-w-4xl">
          
          {/* Badges - Desktop Fade In */}
          <div className="flex flex-wrap items-center gap-3 mb-8 opacity-100 md:opacity-0 md:animate-fade-in md:delay-200">
            <span className="px-4 py-1.5 rounded-full bg-red-600/90 text-white text-xs md:text-sm font-bold tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] border border-white/5">
              <span className="w-2 h-2 rounded-full bg-white md:animate-pulse" />
              LIVE NOW
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs md:text-sm font-medium">
              4K Ultra HD
            </span>
          </div>

          {/* Typography - Desktop Fade Up */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-6 opacity-100 md:opacity-0 md:animate-fade-up md:delay-300">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
              المشاهدة
            </span>
            <span className="block text-gradient-green drop-shadow-[0_0_40px_rgba(114,191,68,0.3)]">
              الحية والرياضة
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl mb-10 opacity-100 md:opacity-0 md:animate-fade-up md:delay-400">
            أكبر منصة ترفيهية رياضية في الشرق الأوسط. شاهد مبارياتك المفضلة بجودة 4K وبدون تقطيع.
          </p>

          {/* CTAs - Desktop Fade In */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 opacity-100 md:opacity-0 md:animate-fade-in md:delay-500">
             <Link href="/live" className="flex-1 sm:flex-initial">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-2xl shadow-[0_0_30px_rgba(114,191,68,0.3)] border border-[#72BF44]/50 md:hover:scale-105 md:transition-transform"
              >
                <Play className="fill-black ml-3 w-6 h-6" />
                اشترك وابدأ المشاهدة
              </Button>
            </Link>
            
            <Link href="/matches" className="flex-1 sm:flex-initial">
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white hover:bg-white/10 md:hover:scale-105 md:transition-transform"
              >
                <Calendar className="ml-3 w-6 h-6" />
                جدول المباريات
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
