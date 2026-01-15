"use client";

import { Check, Star, Shield, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility, if not I will use template literals

const PLANS = [
  {
    name: "الباقة الأساسية",
    price: "3500",
    period: "شهر",
    description: "للتجربة والمشاهدة السريعة",
    features: ["4000 قناة", "جودة FHD", "جهاز واحد", "دعم فني عادي"],
    highlight: false,
    icon: Star
  },
  {
    name: "الباقة الشاملة",
    price: "5000",
    period: "3 أشهر",
    description: "الأكثر طلباً وتوفيراً",
    features: ["+8000 قناة مشفرة", "مكتبة أفلام (VOD) 4K", "جهازين في نفس الوقت", "جودة 4K حقيقية", "دعم فني VIP 24/7"],
    highlight: true,
    icon: Zap
  },
  {
    name: "الباقة السنوية",
    price: "15000",
    period: "سنة",
    description: "راحة بال، اشتراك مرة واحدة",
    features: ["كل مميزات الشاملة", "أولوية في السيرفرات", "اشتراك إضافي مجاني", "خصم 20% للتجديد", "وصول مبكر للقنوات"],
    highlight: false,
    icon: Shield
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">
       {/* 🌑 PHASE 7: PRICING ATMOSPHERE */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-7xl">
        
        <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                اختر خطتك <span className="text-transparent bg-clip-text bg-gradient-to-br from-alsaha-green to-white">المناسبة</span>
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
                استمتع بأفضل تجربة مشاهدة مع باقات مصممة لتناسب احتياجاتك
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {PLANS.map((plan, idx) => (
                <div 
                    key={idx}
                    className={cn(
                        "relative flex flex-col p-8 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 group",
                        plan.highlight 
                            ? "bg-gradient-to-b from-[#72BF44]/10 to-black/40 border-alsaha-green/50 scale-100 md:scale-110 md:-translate-y-4 shadow-[0_0_50px_rgba(114,191,68,0.15)] z-10"
                            : "bg-white/5 border-white/5 md:hover:scale-105 md:hover:bg-white/10"
                    )}
                >
                    {plan.highlight && (
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-alsaha-green to-[#65aa3c] text-black font-black text-sm py-2 px-6 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
                           <Star size={14} className="fill-black" />
                           الأكثر شيوعاً
                        </div>
                    )}

                    <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit border border-white/5">
                        <plan.icon size={32} className={plan.highlight ? "text-alsaha-green" : "text-white/70"} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/50 text-sm mb-8 font-medium">{plan.description}</p>

                    <div className="flex items-baseline gap-1 mb-8 direction-ltr">
                        <span className={cn(
                            "font-black text-white tracking-tighter",
                            plan.highlight ? "text-6xl" : "text-5xl"
                        )}>
                            {plan.price}
                        </span>
                        <div className="flex flex-col text-xs font-bold text-white/40">
                            <span>د.ع</span>
                            <span>/ {plan.period}</span>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1">
                        {plan.features.map((feature, i) => (
                             <li key={i} className="flex items-start gap-3">
                                <div className={cn(
                                    "mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                                    plan.highlight ? "bg-alsaha-green text-black" : "bg-white/10 text-white/60"
                                )}>
                                    <Check size={12} strokeWidth={4} />
                                 </div>
                                 <span className={cn("text-sm font-medium", plan.highlight ? "text-white" : "text-white/70")}>{feature}</span>
                             </li>
                        ))}
                    </ul>

                    <Link href="/subscription" className="w-full">
                        <Button 
                            variant={plan.highlight ? "default" : "secondary"}
                            className={cn(
                                "w-full py-6 text-lg font-bold rounded-xl",
                                plan.highlight 
                                    ? "shadow-[0_4px_20px_rgba(114,191,68,0.3)] hover:shadow-[0_6px_30px_rgba(114,191,68,0.5)]" 
                                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                            )}
                        >
                            اشترك الآن
                        </Button>
                    </Link>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
