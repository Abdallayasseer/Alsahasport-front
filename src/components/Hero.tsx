"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(114,191,68,0.1),transparent_50%)] z-0" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-alsaha-green/5 blur-[150px] rounded-full z-0" />
      
      <div className="container mx-auto px-6 z-10 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Text Content (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-right"
          >
            {/* Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#72BF44]/10 border border-[#72BF44]/20 text-[#72BF44] text-xs font-bold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(114,191,68,0.1)] hover:bg-[#72BF44]/20 transition-colors cursor-default"
            >
               <span className="w-2 h-2 rounded-full bg-[#72BF44] animate-pulse" />
               <span>#1 منصة بث في الوطن العربي</span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
              شاهد العالم <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-[#e0e0e0] to-[#727272]">
                بجودة سينمائية
              </span>
            </h1>
            
            <p className="text-text-secondary text-base md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
              وجهتك الأولى للرياضة والترفيه. سيرفرات فائقة السرعة، جودة 4K حقيقية، ودعم فني على مدار الساعة.
              <span className="hidden md:inline"> استمتع بتجربة مشاهدة لم يسبق لها مثيل.</span>
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
               <Link href="/subscription" className="w-full md:w-auto">
                   <motion.button 
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     className="w-full md:w-auto btn-primary text-lg"
                   >
                    <span>ابدأ اشتراكك الآن</span>
                   </motion.button>
               </Link>
              
               <Link href="/how-it-works" className="w-full md:w-auto">
                   <button className="w-full md:w-auto btn-secondary text-lg group">
                      <Play size={20} className="fill-white/30 group-hover:fill-white transition-colors" />
                      <span>جولة في المنصة</span>
                   </button>
               </Link>
            </div>
          </motion.div>

          {/* Visual Content (Span 5) - DESKTOP ONLY */}
          <div className="hidden md:flex md:col-span-5 relative justify-center items-center">
             {/* Glow - Optimized for TBT */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-alsaha-green/20 blur-[100px] rounded-full animate-pulse-slow pointer-events-none will-change-transform" />

             {/* Main Image - CSS Animation for Performance */}
             <div className="relative z-10 w-full max-w-[500px] animate-float will-change-transform transform-gpu">
                <div className="relative aspect-[4/5] w-full">
                    <Image
                    src="/images/green-new.png"
                    alt="Premium Sports Streaming"
                    fill
                    className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700"
                    priority
                    loading="eager"
                    sizes="(max-width: 768px) 0vw, 50vw"
                    quality={90}
                    />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
