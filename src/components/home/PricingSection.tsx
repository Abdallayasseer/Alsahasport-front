"use client";

import { Check, ShieldCheck, Crown, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "الباقة الأساسية",
    price: "3500",
    period: "شهر",
    description: "للبداية وتجربة الخدمة",
    features: ["4000 قناة مباشرة", "جودة FHD", "جهاز واحد", "دعم فني قياسي"],
    highlight: false,
    icon: Zap,
    color: "gray"
  },
  {
    name: "باقة المحترفين (VIP)",
    price: "5000",
    period: "3 أشهر",
    description: "الأكثر طلباً للأبطال الحقيقيين",
    features: ["+9000 قناة VIP مشفرة", "مكتبة أفلام 4K ضخمة", "جهازين في وقت واحد", "جودة 4K HDR حقيقية", "دعم فني خاص على واتساب"],
    highlight: true,
    icon: Crown,
    color: "gold"
  },
  {
    name: "الباقة السنوية",
    price: "15000",
    period: "سنة",
    description: "راحة بال واقتصاد ذكي",
    features: ["كل مميزات VIP", "سيرفرات خاصة للأحداث الكبرى", "اشتراك إضافي هدية", "خصم 30% عند التجديد", "وصول حصري للميزات الجديدة"],
    highlight: false,
    icon: ShieldCheck,
    color: "blue"
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">
       {/* 🌑 ATMOSPHERE */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-7xl">
        
        <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold mb-6 backdrop-blur-md">
                <ShieldCheck size={14} className="text-alsaha-green" />
                <span>ضمان استعادة الأموال لمدة 7 أيام</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                اختر خطة <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-alsaha-green to-white">البطولات</span>
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
                استثمر في متعتك الكروية مع باقات صممت لتعطيك أفضل قيمة وأعلى جودة ممكنة.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {PLANS.map((plan, idx) => (
                <div 
                    key={idx}
                    className={cn(
                        "relative flex flex-col p-8 rounded-[2.5rem] border backdrop-blur-2xl transition-all duration-500 group",
                        // Base styles
                        "bg-[#0A0A0A]/80",

                        // Highlight Logic (The Trophy Effect)
                        plan.highlight 
                            ? "border-yellow-500/50 shadow-[0_0_60px_rgba(234,179,8,0.15)] md:scale-110 z-10" 
                            : "border-white/5 hover:border-white/10 hover:bg-[#111] z-0 md:hover:scale-[1.02]"
                    )}
                >
                    {/* 🏆 RIBBON FOR VIP */}
                    {plan.highlight && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                             <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-black font-black text-xs py-2 px-8 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(234,179,8,0.4)] flex items-center gap-2 ring-4 ring-black">
                                <Crown size={14} className="fill-black" />
                                القيمة الأفضل
                            </div>
                        </div>
                    )}

                    {/* Header */}
                    <div className="mb-8">
                        <div className={cn(
                            "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-2xl",
                            plan.highlight ? "bg-gradient-to-br from-yellow-400/20 to-yellow-600/5 border border-yellow-500/30" : "bg-white/5 border border-white/5"
                        )}>
                            <plan.icon size={28} className={cn(
                                "transition-colors duration-300", 
                                plan.highlight ? "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" : "text-white/50 group-hover:text-white"
                            )} />
                        </div>
                        <h3 className={cn("text-xl font-bold mb-2", plan.highlight ? "text-white" : "text-white/90")}>{plan.name}</h3>
                        <p className="text-white/40 text-sm font-medium">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-10 direction-ltr">
                        <span className={cn(
                            "font-black tracking-tighter",
                            plan.highlight 
                                ? "text-6xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-lg" 
                                : "text-5xl text-white"
                        )}>
                            {plan.price}
                        </span>
                        <div className="flex flex-col text-xs font-bold text-white/40">
                            <span>د.ع</span>
                            <span>/ {plan.period}</span>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <ul className="space-y-5 mb-10 flex-1">
                        {plan.features.map((feature, i) => (
                             <li key={i} className="flex items-start gap-3 group/item">
                                <div className={cn(
                                    "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                                    plan.highlight 
                                        ? "bg-yellow-500/10 text-yellow-400 group-hover/item:bg-yellow-500/20 group-hover/item:shadow-[0_0_10px_rgba(250,204,21,0.3)]" 
                                        : "bg-white/5 text-white/30 group-hover/item:text-white group-hover/item:bg-white/10"
                                )}>
                                    <Check size={10} strokeWidth={4} />
                                 </div>
                                 <span className={cn(
                                     "text-sm font-medium transition-colors",
                                     plan.highlight ? "text-white/90" : "text-white/60 group-hover/item:text-white/80"
                                 )}>{feature}</span>
                             </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href="/subscription" className="w-full mt-auto">
                        <Button 
                            variant="default" // Force default structure
                            className={cn(
                                "w-full py-7 text-lg font-black rounded-2xl transition-all duration-500",
                                plan.highlight 
                                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black border-none hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:scale-[1.02]"
                                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                            )}
                        >
                            {plan.highlight ? "اشترك وأصبح VIP" : "اشترك الآن"}
                        </Button>
                    </Link>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
