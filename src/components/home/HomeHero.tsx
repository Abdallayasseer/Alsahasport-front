"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, Info } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[85vh] md:h-[80vh] flex items-end pb-12 md:pb-20 overflow-hidden">
      
      {/* Background Image (Immersive) */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/pattern.png" // Using existing pattern asset
          alt="Featured Match Background"
          fill
          className="object-cover object-center opacity-20"
          priority
          draggable={false}
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
        >
             {/* Tag / Status */}
             <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    LIVE NOW
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold border border-white/10">
                    Champions League
                </span>
             </div>

             {/* Title */}
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-2xl">
                Real Madrid <span className="text-2xl font-black italic text-white/90 bg-white/10 px-3 py-1 rounded-lg mx-3 translate-y-[-4px] inline-block border border-white/5">VS</span> Man City
             </h1>

             {/* Meta Info */}
             <p className="text-white/70 text-sm md:text-base font-medium mb-8 max-w-xl line-clamp-2">
                قمة دوري أبطال أوروبا في بث مباشر وحصري بجودة 4K. تعليق عربي، سيرفرات ثابتة، وتغطية شاملة للمباراة.
             </p>

             {/* Actions */}
             <div className="flex items-center gap-4">
                <Link href="/live/match-1">
                    <Button variant="primary" size="lg" className="pl-6 pr-8">
                       <Play className="fill-black ml-2" size={20} />
                       شاهد المباراة
                    </Button>
                </Link>
                <Link href="/matches/1">
                    <Button variant="secondary" size="lg">
                       <Info size={20} className="ml-2" />
                       تفاصيل
                    </Button>
                </Link>
             </div>
             
             {/* Social Proof Badge */}
             <div className="mt-8 flex items-center gap-4 animate-fade-in opacity-80">
                <div className="flex -space-x-3 space-x-reverse">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/10 backdrop-blur-sm flex items-center justify-center text-[10px] text-white font-bold">
                            {i === 4 ? '+10k' : ''}
                        </div>
                    ))}
                </div>
                <div className="text-sm font-medium text-white/80">
                    أكثر من <span className="text-white font-bold">10,000 مشترك</span> يثقون بنا
                </div>
             </div>
        </motion.div>

        {/* Floating Carousel Indicators (Optional polish) */}
        <div className="absolute right-4 bottom-20 md:bottom-24 z-20 hidden md:flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-alsaha-green h-6' : 'bg-white/30'} transition-all duration-300 cursor-pointer`} />
            ))}
        </div>
      </div>
    </section>
  );
}
