"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(114,191,68,0.15),transparent_50%)] z-0" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-right order-2 md:order-1"
          >
            {/* New Professional Badge (Relocated) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#72BF44]/10 border border-[#72BF44]/20 text-[#72BF44] text-xs font-bold mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(114,191,68,0.1)]"
            >
               <span className="w-2 h-2 rounded-full bg-[#72BF44] animate-pulse" />
               <span>سيرفرات مستقرة 100%</span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-white leading-tight mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
              استمتع بالمباريات <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E0E0E0] to-[#B0B0B0] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                بثبات وجودة عالية
              </span>
            </h1>
            <p className="text-text-secondary text-sm md:text-base max-w-xl mb-8 leading-relaxed">
              اشتراكات رياضية مميزة، تفعيل فوري، وسيرفرات مستقرة بدون تقطيع. 
              شاهد جميع دوريات العالم بجودة 4K.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-end md:justify-start">
               <Link href="/subscription">
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-8 py-4 bg-alsaha-green text-black font-black text-lg rounded-full shadow-[0_0_30px_rgba(114,191,68,0.5)] hover:shadow-[0_0_50px_rgba(114,191,68,0.7)] transition-all border border-alsaha-green"
                   >
                    اشترك الآن
                   </motion.button>
               </Link>
              
               <Link href="/how-it-works">
                   <button className="px-6 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all text-base flex items-center gap-2 group hover:border-white/30">
                      <Play size={20} className="fill-white/50 group-hover:fill-white transition-colors" />
                      <span>كيف يعمل؟</span>
                   </button>
               </Link>
            </div>
          </motion.div>

          {/* Visual Content - Tamed & Elegant */}
          <div className="relative order-1 md:order-2 flex justify-center">
             {/* Breathing Glow Behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-alsaha-green/20 blur-[100px] rounded-full animate-pulse-slow" />

             {/* Main Image (Constraint applied) */}
             <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 w-64 md:w-full max-w-md"
             >
                <Image
                  src="/images/اخظر جديد.png"
                  alt="Alsaha Sport Jersey"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  priority
                />
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
