"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-alsaha-green/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-black/40 backdrop-blur-xl border border-alsaha-green/30 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(114,191,68,0.15)] overflow-hidden"
            >
                {/* Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-alsaha-green text-black font-black text-xs py-1.5 px-4 rounded-b-xl uppercase tracking-wider">
                    Most Popular
                </div>

                <h2 className="text-3xl font-black text-white mb-2">الباقة الشاملة</h2>
                <p className="text-white/60 mb-8">كل ما تحتاجه في اشتراك واحد</p>

                <div className="flex items-baseline justify-center gap-2 mb-10">
                    <span className="text-6xl font-black text-white tracking-tighter">5000</span>
                    <span className="text-xl font-bold text-alsaha-green">د.ع</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 text-right mb-10 inline-block mx-auto">
                    {[
                        "أكثر من 8000 قناة مشفرة ومفتوحة",
                        "مكتبة أفلام ومسلسلات ضخمة (VOD)",
                        "جودة 4K / FHD / HD حقيقية",
                        "يعمل على الجوال، الشاشة، والكمبيوتر",
                        "الدوري الإنجليزي، الإسباني، وأبطال أوروبا",
                        "تفعيل فوري بعد الدفع مباشرة"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/90">
                            <span className="w-6 h-6 rounded-full bg-alsaha-green/20 flex items-center justify-center flex-shrink-0">
                                <Check size={14} className="text-alsaha-green" />
                            </span>
                            <span className="font-medium">{item}</span>
                        </li>
                    ))}
                </ul>

                <Link href="/subscription" className="block w-full">
                    <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full py-6 text-lg shadow-[0_0_30px_rgba(114,191,68,0.3)] hover:shadow-[0_0_50px_rgba(114,191,68,0.5)] animate-pulse-slow"
                    >
                        اشترك الآن
                    </Button>
                </Link>
                
                <p className="mt-4 text-xs text-white/30">ضمان استرجاع الأموال في حال عدم الرضا</p>

            </motion.div>
        </div>
      </div>
    </section>
  );
}
