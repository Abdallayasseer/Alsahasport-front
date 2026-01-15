"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-0 bg-black">
      
      {/* 🌑 PHASE 4: CINEMATIC ENGINE & LIGHTING SYSTEM */}
      <div className="absolute inset-0 z-0">
        
        {/* 1. 4K RENDERING ENGINE */}
        <div className="relative w-full h-full md:animate-scale-slow">
          <Image
            src="/images/hero-stadium-4k.jpg"
            alt="Stadium Atmosphere"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center opacity-80"
            draggable={false}
          />
        </div>

        {/* 2. ATMOSPHERIC LIGHTING SYSTEM (THE "PHYSICS") */}
        
        {/* Base: Vignette & Clarity */}
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />

        {/* Gradient 1: The "Fade to Black" (Seamless Blend into Body) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent start-0 top-[20%]" />

        {/* Gradient 2: RTL/Side Protection (Enhances Arabic Readability) */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/60 to-black/95" />

        {/* Gradient 3: The "Spotlight" (Subtle Top-Right Source) */}
        <div className="absolute -top-[20%] -right-[10%] w-[1200px] h-[1200px] bg-[#72BF44]/20 blur-[200px] rounded-full pointer-events-none mix-blend-screen opacity-50 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[1400px]">
        <div className="max-w-5xl">
          
          {/* Badges: The "Glass Labels" */}
          <div className="flex flex-wrap items-center gap-4 mb-10 opacity-100 md:opacity-0 md:animate-fade-in md:delay-200">
            <span className="px-5 py-2 rounded-full bg-red-600/90 text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase flex items-center gap-2 shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-red-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white md:animate-pulse shadow-[0_0_10px_white]" />
              LIVE
            </span>
            <span className="px-5 py-2 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] text-white/90 font-bold text-[10px] md:text-xs tracking-widest shadow-lg">
              4K HDR
            </span>
          </div>

          {/* Typography: THE AUTHORITY (Massive Scale) */}
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10 drop-shadow-2xl opacity-100 md:opacity-0 md:animate-fade-up md:delay-300">
            <span className="block drop-shadow-2xl">
              استمتع بالمشاهدة
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#72BF44] via-green-400 to-white drop-shadow-[0_0_30px_rgba(114,191,68,0.3)]">
              بأفضل جودة
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl mb-14 drop-shadow-lg opacity-100 md:opacity-0 md:animate-fade-up md:delay-400">
            أقوى البطولات العالمية والمحلية بين يديك. بدون تقطيع، وبجودة سينمائية حقيقية تناسب ذوقك الرفيع.
          </p>

          {/* CTAs: The "Magnetic" Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 opacity-100 md:opacity-0 md:animate-fade-in md:delay-500">
             <Link href="/subscription" className="flex-1 sm:flex-initial">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto h-16 md:h-20 px-10 md:px-14 text-xl md:text-2xl font-black rounded-2xl shadow-[0_0_50px_-10px_rgba(114,191,68,0.6),inset_0_2px_20px_rgba(255,255,255,0.2)] border border-[#72BF44] bg-[#72BF44] text-black hover:bg-[#65aa3c] md:hover:scale-105 md:transition-transform duration-300 active:scale-95"
              >
                <Play className="fill-black ml-4 w-6 h-6 md:w-7 md:h-7" />
                 اشترك الآن
              </Button>
            </Link>
            
            <Link href="/matches" className="flex-1 sm:flex-initial">
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl font-bold bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-2xl text-white hover:bg-white/[0.1] hover:border-white/[0.2] md:hover:scale-105 md:transition-transform duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] active:scale-95"
              >
                <Calendar className="ml-3 w-5 h-5 md:w-6 md:h-6 text-white/70" />
                المباريات
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
