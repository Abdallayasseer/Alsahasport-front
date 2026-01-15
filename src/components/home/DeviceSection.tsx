"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Tablet, Cast, Laptop, Gamepad2 } from "lucide-react";

export default function DeviceSection() {
  const devices = [
    { icon: Smartphone, name: "الهواتف الذكية", delay: 0 },
    { icon: Tablet, name: "الأجهزة اللوحية", delay: 0.2 },
    { icon: Monitor, name: "الشاشات الذكية", delay: 0.4 },
    { icon: Laptop, name: "الكمبيوتر", delay: 0.1 },
    { icon: Cast, name: "TV Box", delay: 0.3 },
    { icon: Gamepad2, name: "منصات الألعاب", delay: 0.5 },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      
      {/* 🟢 ATMOSPHERE GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="text-right space-y-8">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 rounded-full bg-alsaha-green/10 border border-alsaha-green/20 text-alsaha-green text-sm font-black"
                >
                    نظام متكامل
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    شاهد في أي مكان، <br/>
                    وعلى <span className="text-transparent bg-clip-text bg-gradient-to-l from-alsaha-green to-white">أي جهاز</span>
                </h2>
                
                <p className="text-white/50 text-xl leading-relaxed max-w-lg">
                    اشتراك واحد يفتح لك عالم من الترفيه على جميع أجهزتك المفضلة. انتقل من هاتفك إلى شاشة التلفاز بكل سهولة وسلاسة.
                </p>

                <div className="flex gap-4 pt-4">
                    <div className="flex -space-x-4 space-x-reverse">
                        <div className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] bg-white/10 flex items-center justify-center text-xs text-white">IOS</div>
                        <div className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] bg-white/10 flex items-center justify-center text-xs text-white">Win</div>
                        <div className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] bg-white/10 flex items-center justify-center text-xs text-white">TV</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-white font-bold text-sm">يدعم جميع الأنظمة</span>
                        <span className="text-white/40 text-xs">تحديث فوري وتزامن لحظي</span>
                    </div>
                </div>
            </div>

            {/* Floating Devices Visualization */}
            <div className="relative h-[500px] flex items-center justify-center">
                {/* Central Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-alsaha-green/20 blur-[100px] animate-pulse-slow" />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative">
                    {devices.map((device, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: device.delay }}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl flex flex-col items-center gap-4 hover:border-alsaha-green/50 hover:shadow-[0_0_30px_rgba(114,191,68,0.2)] transition-all duration-300 group"
                            animate={{ 
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 4 + (idx % 3), // Deterministic duration based on index
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: device.delay
                            }}
                        >
                             <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-alsaha-green group-hover:text-black transition-colors duration-300">
                                 <device.icon size={32} />
                             </div>
                             <span className="text-white/60 font-bold text-sm group-hover:text-white">{device.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
