"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Info } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] md:h-[85vh] flex items-center md:items-end pb-16 md:pb-32 overflow-hidden pt-32 md:pt-0 md:mt-24">
      
      {/* Background Image (Immersive) */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/pattern.png" 
          alt="Featured Match Background"
          fill
          className="object-cover object-center opacity-30 mix-blend-overlay"
          priority
          draggable={false}
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />
        {/* Spotlight Effect */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-alsaha-green/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full mb-8 md:mb-0">
        <motion.div 
            initial={isMobile ? {} : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { delay: 0.2, duration: 0.8 }}
            className="w-full mx-auto md:mx-0"
        >
             {/* Tag / Status */}
             <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
                <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-xs font-black tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] border border-red-500/30 md:animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
                    LIVE NOW
                </span>
                <span className="px-5 py-1.5 rounded-full glass text-white/90 text-xs font-bold border border-white/10 flex items-center gap-2 shadow-lg backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-alsaha-green shadow-[0_0_10px_#72BF44]" />
                    Champions League
                </span>
             </div>

             {/* Matchup Visual (Text Only) */}
             <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-10 mb-8">
                {/* Home Team */}
                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-[0.9] tracking-tighter drop-shadow-2xl whitespace-nowrap">
                    Real Madrid
                 </h1>

                {/* VS Badge */}
                <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-2xl glass border border-white/10 backdrop-blur-xl rotate-3 md:rotate-0 md:mb-4 shrink-0 my-3 md:my-0 shadow-[0_0_40px_rgba(0,0,0,0.6)] group md:hover:scale-110 md:transition-transform md:duration-500 hover:border-alsaha-green/30">
                    <span className="font-black italic text-2xl md:text-3xl text-white/90 group-hover:text-alsaha-green transition-colors tracking-tighter">VS</span>
                </div>

                {/* Away Team */}
                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-[0.9] tracking-tighter text-right drop-shadow-2xl whitespace-nowrap">
                    Man City
                 </h1>
             </div>

             {/* Meta Info */}
             <p className="text-white/80 text-base md:text-xl font-medium mb-10 max-w-xl text-center md:text-right line-clamp-2 md:line-clamp-none mx-auto md:mx-0 leading-relaxed md:mr-1">
                قمة دوري أبطال أوروبا في بث مباشر وحصري بجودة 4K. تعليق عربي، سيرفرات ثابتة، وتغطية شاملة للمباراة.
             </p>

             {/* Actions */}
             <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start w-full md:w-auto">
                <Link href="/live" className="w-full md:w-auto group" data-trigger-cta="true">
                    <Button variant="default" size="lg" className="pl-6 pr-8 w-full md:w-auto py-7 text-lg shadow-[0_0_30px_rgba(114,191,68,0.25)] hover:shadow-[0_0_50px_rgba(114,191,68,0.5)] md:transition-all md:duration-500 rounded-2xl">
                       <Play className="fill-black ml-2 md:group-hover:scale-110 md:transition-transform" size={24} />
                       شاهد المباراة مجاناً
                    </Button>
                </Link>
                <Link href="/matches" className="w-full md:w-auto">
                    <Button variant="secondary" size="lg" className="w-full md:w-auto py-7 text-lg glass-card hover:bg-white/10 rounded-2xl border-white/10">
                       <Info size={24} className="ml-2" />
                       تفاصيل المباراة
                    </Button>
                </Link>
             </div>
             
             {/* Social Proof Badge */}
             <div className="mt-10 flex items-center justify-center md:justify-start gap-4 opacity-90">
                <div className="flex -space-x-3 space-x-reverse">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0B0B0B] bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] text-white font-bold first:bg-alsaha-green first:text-black">
                            {i === 4 ? '+10k' : ''}
                        </div>
                    ))}
                </div>
                <div className="text-sm font-medium text-white/80">
                    أكثر من <span className="text-white font-bold ml-1">10,000 مشاهد</span> الآن يتابعون المباراة
                </div>
             </div>
        </motion.div>

        {/* Floating Carousel Indicators (Optional polish) */}
        <div className="absolute right-6 bottom-32 md:bottom-32 z-20 hidden md:flex flex-col gap-3">
            {[0, 1, 2].map((i) => (
                <div key={i} className={`w-1.5 rounded-full ${i === 0 ? 'bg-alsaha-green h-8 shadow-[0_0_10px_rgba(114,191,68,0.5)]' : 'bg-white/20 h-1.5 hover:bg-white/50'} md:transition-all md:duration-500 cursor-pointer`} />
            ))}
        </div>
      </div>
    </section>
  );
}
