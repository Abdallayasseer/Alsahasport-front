"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(114,191,68,0.08),transparent_40%)] z-0 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-alsaha-green/5 blur-[120px] rounded-full z-0 pointer-events-none" />
      
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0" />

      <div className="container mx-auto px-6 z-10 max-w-7xl relative">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          <motion.div 
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-right"
          >
            <motion.div 
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              animate={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              transition={isMobile ? { duration: 0 } : { delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-alsaha-green/5 border border-alsaha-green/10 text-alsaha-green text-xs font-bold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(114,191,68,0.1)] hover:bg-alsaha-green/10 transition-colors cursor-default"
            >
               <span className="w-1.5 h-1.5 rounded-full bg-alsaha-green md:animate-pulse shadow-[0_0_10px_rgba(114,191,68,0.6)]" />
               <span className="tracking-wide">#1 منصة بث في الوطن العربي</span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
              شاهد العالم <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
                بجودة سينمائية
              </span>
            </h1>
            
            <p className="text-text-secondary text-base md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
              وجهتك الأولى للرياضة والترفيه. سيرفرات فائقة السرعة، جودة 4K حقيقية، ودعم فني على مدار الساعة.
              <span className="hidden md:inline text-text-primary/60"> استمتع بتجربة مشاهدة لم يسبق لها مثيل.</span>
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
               <Link href="/subscription" className="w-full md:w-auto">
                   <Button size="lg" className="w-full md:w-auto text-lg shadow-alsaha-green/20">
                    ابدأ اشتراكك الآن
                   </Button>
               </Link>
              
               <Link href="/how-it-works" className="w-full md:w-auto">
                   <Button variant="secondary" size="lg" className="w-full md:w-auto text-lg group">
                      <Play size={20} className="fill-white/30 group-hover:fill-white transition-colors" />
                      <span>جولة في المنصة</span>
                   </Button>
               </Link>
            </div>
            
            <motion.div 
                initial={isMobile ? {} : { opacity: 0 }}
                animate={isMobile ? {} : { opacity: 1 }}
                transition={isMobile ? { duration: 0 } : { delay: 0.5 }}
                className="mt-10 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            >
                <div className="flex items-center gap-2">
                    <span className="bg-white/20 w-px h-8" />
                    <span className="text-xs font-semibold text-white/50">+10,000 مشترك</span>
                </div>
                 <div className="flex items-center gap-2">
                    <span className="bg-white/20 w-px h-8" />
                    <span className="text-xs font-semibold text-white/50">دعم فني 24/7</span>
                </div>
            </motion.div>

          </motion.div>

          <div className="hidden md:flex md:col-span-5 relative justify-center items-center perspective-1000">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-alsaha-green/15 blur-[120px] rounded-full md:animate-pulse-slow pointer-events-none" />

             <div className="relative z-10 w-full max-w-[550px] animate-float will-change-transform">
                <div className="relative aspect-[4/5] w-full">
                    <Image
                        src="/images/green-new.png"
                        alt="Premium Sports Streaming"
                        fill
                        className="object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.6)] transform md:hover:scale-[1.02] md:transition-transform md:duration-700 md:ease-out"
                        priority
                        loading="eager"
                        sizes="(max-width: 768px) 0vw, 50vw"
                        quality={90}
                    />
                </div>
             </div>
             
             <div className="absolute -z-10 bottom-0 left-10 w-32 h-32 bg-alsaha-green/20 blur-[60px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
