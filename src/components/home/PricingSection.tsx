"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-alsaha-green/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative bg-[#111]/80 backdrop-blur-2xl border border-alsaha-green/30 rounded-[2.5rem] p-8 md:p-14 text-center shadow-[0_0_80px_rgba(114,191,68,0.2)] overflow-hidden group"
            >
                {/* Floating shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-alsaha-green to-[#65aa3c] text-black font-black text-sm py-2 px-6 rounded-b-2xl uppercase tracking-widest shadow-[0_5px_15px_rgba(114,191,68,0.4)]">
                    Most Popular
                </div>

                <div className="mt-6 mb-8">
                    <h2 className="text-4xl font-black text-white mb-3 tracking-tight">الباقة <span className="text-alsaha-green">الشاملة</span></h2>
                    <p className="text-white/60 text-lg">كل ما تحتاجه في اشتراك واحد</p>
                </div>

                <div className="flex items-baseline justify-center gap-1 mb-12 direction-ltr">
                    <span className="text-7xl font-black text-white tracking-tighter drop-shadow-md">5000</span>
                    <div className="flex flex-col items-start leading-none ml-2">
                        <span className="text-xl font-bold text-alsaha-green">د.ع</span>
                        <span className="text-xs text-white/40 font-medium">/ شهرياً</span>
                    </div>
                </div>

                {/* Features List */}
                <ul className="space-y-5 text-right mb-12 inline-block mx-auto w-full">
                    {[
                        "أكثر من 8000 قناة مشفرة ومفتوحة",
                        "مكتبة أفلام ومسلسلات ضخمة (VOD)",
                        "جودة 4K / FHD / HD حقيقية",
                        "يعمل على الجوال، الشاشة، والكمبيوتر",
                        "الدوري الإنجليزي، الإسباني، وأبطال أوروبا",
                        "دعم فني وتحديثات مستمرة 24/7"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-white/90 group/item">
                            <span className="w-8 h-8 rounded-full bg-alsaha-green/10 flex items-center justify-center flex-shrink-0 border border-alsaha-green/20 group-hover/item:bg-alsaha-green group-hover/item:text-black transition-colors duration-300">
                                <Check size={16} className="text-alsaha-green group-hover/item:text-black transition-colors" />
                            </span>
                            <span className="font-bold text-sm md:text-base">{item}</span>
                        </li>
                    ))}
                </ul>

                <Link href="/subscription" className="block w-full relative z-20">
                    <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full py-6 text-xl shadow-[0_0_40px_rgba(114,191,68,0.3)] hover:shadow-[0_0_60px_rgba(114,191,68,0.5)] animate-pulse-slow rounded-2xl"
                    >
                        اشترك الآن
                    </Button>
                </Link>
                
                <p className="mt-6 text-xs text-white/30 font-medium">ضمان استرجاع الأموال في حال عدم الرضا</p>

            </motion.div>
        </div>
      </div>
    </section>
  );
}
