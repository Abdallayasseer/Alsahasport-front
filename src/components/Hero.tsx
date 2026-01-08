"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(114,191,68,0.15),transparent_50%)] z-0" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content (Right Side for RTL) */}
        <div className="order-2 md:order-1 text-right">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-alsaha-green/10 text-alsaha-green border border-alsaha-green/20 text-sm font-semibold mb-6">
              🔥 الأفضل في الشرق الأوسط
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              استمتع بالمباريات <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E0E0E0] to-[#B0B0B0] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                بثبات وجودة عالية
              </span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              اشتراكات رياضية مميزة، تفعيل فوري، وسيرفرات مستقرة بدون تقطيع. 
              شاهد جميع دوريات العالم بجودة 4K.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-end md:justify-start">
               <button className="px-8 py-4 bg-alsaha-green text-white font-bold rounded-xl shadow-[0_0_30px_rgba(114,191,68,0.4)] hover:shadow-[0_0_50px_rgba(114,191,68,0.6)] hover:scale-105 transition-all text-lg border border-white/10 relative overflow-hidden group">
                <span className="relative z-10">اشترك الآن</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-lg flex items-center gap-2">
                <PlayCircle size={20} />
                <span>كيف يعمل؟</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Visual Content (Left Side - The "Shirt" Image) */}
        <div className="order-1 md:order-2 relative flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[500px]"
            >
                {/* Glow behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-alsaha-green/20 blur-[100px] rounded-full" />
                
                {/* Main Hero Image */}
                {/* Using 'اخظر جديد.png' (New Green) as the Hero Image based on best guess. 
                    If this is a logo, it might look small, but with the glow it might still look like a branding element.
                    Ideally this should be the 'Shirt' image. 
                */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    <Image
                        src="/images/اخظر جديد.png"
                        alt="Alsaha Sport Premium Jersey"
                        width={650}
                        height={650}
                        priority
                        className="object-contain drop-shadow-[0_20px_50px_rgba(114,191,68,0.3)] hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>
                
                {/* Floating Elements (Decorations) */}
                <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 6, delay: 1 }}
                    className="absolute top-10 -right-4 glass-card p-4 rounded-2xl z-20 hidden md:block border-alsaha-green/30"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-alsaha-green rounded-full shadow-[0_0_10px_#72BF44] animate-pulse" />
                        <span className="text-white font-bold text-sm">سيرفرات مستقرة 100%</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
