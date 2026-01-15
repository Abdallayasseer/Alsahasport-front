"use client";

import { Zap, Tv, Globe, Smartphone, ShieldCheck } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React from "react";

interface Feature {
    icon: React.ElementType;
    title: string;
    desc: string;
    color: string;
    href: string;
    className?: string;
}

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "سيرفرات فائقة السرعة",
    desc: "بنية تحتية سحابية متطورة تضمن لك مشاهدة مستقرة بدون تقطيع حتى في أوقات الذروة.",
    color: "from-yellow-400 to-orange-500",
    href: "/subscription",
    className: "md:col-span-4" 
  },
  {
    icon: Tv,
    title: "جودة 4K حقيقية",
    desc: "دقة صورة فائقة الوضوح مع دعم HDR.",
    color: "from-purple-400 to-pink-500",
    href: "/subscription",
    className: "md:col-span-2"
  },
  {
    icon: Globe,
    title: "للمغتربين والعرب",
    desc: "أكثر من 9000 قناة رياضية وترفيهية.",
    color: "from-blue-400 to-cyan-500",
    href: "/subscription",
    className: "md:col-span-2"
  },
  {
    icon: Smartphone,
    title: "على جميع الأجهزة",
    desc: "تطبيقنا متاح على الشاشات والهواتف.",
    color: "from-green-400 to-emerald-500",
    href: "/subscription",
    className: "md:col-span-2"
  },
  {
    icon: ShieldCheck,
    title: "حماية وخصوصية",
    desc: "تشفير كامل لبياناتك ومشاهدة آمنة.",
    color: "from-red-400 to-rose-500",
    href: "/subscription",
    className: "md:col-span-2"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0A]">
      
      {/* 🔮 Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-alsaha-green/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-bold mb-6"
          >
             لماذا تختار الساحة؟
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            المستقبل <span className="text-transparent bg-clip-text bg-gradient-to-l from-alsaha-green to-white">بين يديك</span>
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            نقدم لك تجربة ترفيهية متكاملة تجمع بين القوة، الأداء، والجودة التي تستحقها.
          </p>
        </div>

        {/* 🎲 Tilted Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {FEATURES.map((feature, idx) => (
            <TiltCard key={idx} feature={feature} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TiltCard({ feature, index }: { feature: Feature, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const Icon = feature.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative min-h-[300px] rounded-[32px] bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] group perspective-1000 shadow-2xl ${feature.className || ""}`}
        >
             {/* Wrap content in Link */}
             <Link href={feature.href || "/subscription"} className="absolute inset-0 z-20" />

             {/* Glass Reflection (The "Sheen") */}
             <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: "translateZ(40px)" }} />
             
             {/* Magnetic Glow Blob */}
             <div className={`absolute -inset-2 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 -z-10`} />

             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center" style={{ transform: "translateZ(20px)" }}>
                
                {/* 3D Icon Container */}
                <div className="mb-6 relative w-16 h-16 flex items-center justify-center" style={{ transform: "translateZ(40px)" }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-all duration-500 scale-75 group-hover:scale-110`} />
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#080808] border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500 group-hover:border-white/20">
                        <Icon size={28} className="text-white group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    </div>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight leading-tight" style={{ transform: "translateZ(30px)" }}>{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium" style={{ transform: "translateZ(20px)" }}>{feature.desc}</p>
             </div>
        </motion.div>
    )
}
