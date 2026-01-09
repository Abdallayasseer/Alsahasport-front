"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, Info } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[65vh] md:h-[80vh] flex items-center md:items-end pb-12 md:pb-24 overflow-hidden pt-28 md:pt-0">
      
      {/* Background Image (Immersive) */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/pattern.png" 
          alt="Featured Match Background"
          fill
          className="object-cover object-center opacity-20"
          priority
          draggable={false}
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full mb-8 md:mb-0">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto md:mx-0"
        >
             {/* Tag / Status */}
             <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    LIVE NOW
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold border border-white/10">
                    Champions League
                </span>
             </div>

             {/* Matchup Visual (Logos + Text) */}
             <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10 mb-6">
                {/* Home Team */}
                <div className="flex items-center gap-4">
                     <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-b from-white/10 to-transparent p-[1px]">
                        <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-2xl">
                              <span className="text-xl md:text-3xl font-black text-white/80 uppercase tracking-tighter">RM</span>
                        </div>
                     </div>
                     <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tight">
                        Real Madrid
                     </h1>
                </div>

                {/* VS Badge */}
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md rotate-3 md:rotate-0 md:mb-2 shrink-0">
                    <span className="font-black italic text-xl md:text-2xl text-white/80">VS</span>
                </div>

                {/* Away Team */}
                <div className="flex items-center gap-4 flex-row-reverse md:flex-row">
                     <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tight text-right">
                        Man City
                     </h1>
                     <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-b from-white/10 to-transparent p-[1px]">
                        <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-2xl">
                              <span className="text-xl md:text-3xl font-black text-white/80 uppercase tracking-tighter">MC</span>
                        </div>
                     </div>
                </div>
             </div>

             {/* Meta Info */}
             <p className="text-white/70 text-sm md:text-lg font-medium mb-8 max-w-xl text-center md:text-right line-clamp-2 md:line-clamp-none mx-auto md:mx-0">
                قمة دوري أبطال أوروبا في بث مباشر وحصري بجودة 4K. تعليق عربي، سيرفرات ثابتة، وتغطية شاملة للمباراة.
             </p>

             {/* Actions */}
             <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start w-full md:w-auto">
                <Link href="/live" className="w-full md:w-auto">
                    <Button variant="primary" size="lg" className="pl-6 pr-8 w-full md:w-auto py-6 text-lg shadow-[0_0_30px_rgba(114,191,68,0.3)] animate-pulse-slow">
                       <Play className="fill-black ml-2" size={24} />
                       شاهد المباراة مجاناً
                    </Button>
                </Link>
                <Link href="/matches" className="w-full md:w-auto">
                    <Button variant="secondary" size="lg" className="w-full md:w-auto py-6 text-lg bg-white/5 border-white/10 hover:bg-white/10">
                       <Info size={24} className="ml-2" />
                       تفاصيل المباراة
                    </Button>
                </Link>
             </div>
             
             {/* Social Proof Badge */}
             <div className="mt-8 flex items-center justify-center md:justify-start gap-4 opacity-80">
                <div className="flex -space-x-3 space-x-reverse">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/10 backdrop-blur-sm flex items-center justify-center text-[10px] text-white font-bold">
                            {i === 4 ? '+10k' : ''}
                        </div>
                    ))}
                </div>
                <div className="text-sm font-medium text-white/80">
                    أكثر من <span className="text-white font-bold">10,000 مشاهد</span> الآن
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
