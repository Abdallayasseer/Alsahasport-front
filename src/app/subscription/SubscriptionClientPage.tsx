"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Tv, 
  Trophy, 
  Monitor, 
  Smartphone, 
  Newspaper, 
  BarChart4, 
  Info, 
  Zap, 
  MessageCircle, 
  Send, 
  Instagram, 
  CheckCircle2,
  Lock
} from "lucide-react";
import Link from "next/link";
import SubscriptionFAQ from "@/components/subscription/SubscriptionFAQ";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SubscriptionClientPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = isMobile ? {
    hidden: { opacity: 1 },
    visible: { opacity: 1 }
  } : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = isMobile ? {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const features = [
    { icon: Tv, text: "49 قناة رياضية مباشرة" },
    { icon: Trophy, text: "بث مباشر لجميع المباريات العالمية العربية" },
    { icon: Monitor, text: "جودة بث عالية تصل إلى 4K Ultra HD" },
    { icon: Smartphone, text: "يعمل على جميع الأجهزة (الجوال، التابلت)" },
    { icon: Newspaper, text: "آخر أخبار الرياضة العربية والعالمية" },
    { icon: BarChart4, text: "جداول المباريات والترتيب لجميع الدوريات" },
    { icon: Info, text: "معلومات شاملة عن الفرق واللاعبين" },
    { icon: Zap, text: "سيرفرات سريعة ومستقرة بدون تقطيع" },
    { icon: MessageCircle, text: "دعم فني متواصل على مدار الساعة" },
  ];

  return (
    <main>
        <section className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
        
        {/* Subtle Background Glow */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-alsaha-green/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-[1100px] relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            <motion.div 
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 p-6 md:p-8 shadow-2xl relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-alsaha-green/50 to-transparent opacity-50" />
                
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-white to-alsaha-green/80 mb-2">
                        منصة البث الرياضي الرائدة
                    </h1>
                    <p className="text-white text-lg font-medium opacity-90">
                        تفعيل الاشتراك
                    </p>
                </div>

                <div className="space-y-6">
                    <Input 
                        label="كود الاشتراك"
                        placeholder="أدخل كود الاشتراك..."
                        icon={Lock}
                        className="bg-black/60 shadow-inner py-4"
                    />

                    <div>
                        <Button 
                            variant="default" 
                            className="w-full py-4 text-sm font-bold shadow-[0_0_20px_rgba(114,191,68,0.2)] hover:shadow-[0_0_40px_rgba(114,191,68,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:brightness-110"
                            rightIcon={<CheckCircle2 size={18} />}
                        >
                            تفعيل الاشتراك
                        </Button>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-xl p-5 flex items-center justify-between mt-8">
                        <div>
                            <p className="text-xs text-text-secondary mb-1">سعر الاشتراك</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-white">5000</span>
                                <span className="text-sm text-alsaha-green">د.ع</span>
                            </div>
                            <p className="text-[10px] text-white/40 mt-1">شامل كل القنوات</p>
                        </div>
                        <div className="text-left">
                            <span className="inline-block px-3 py-1 bg-alsaha-green/10 border border-alsaha-green/20 rounded-full text-[10px] text-alsaha-green font-bold">
                                باقة مميزة
                            </span>
                        </div>
                    </div>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/5"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-black/50 px-4 text-xs text-text-secondary backdrop-blur-sm">أو تواصل معنا للحصول على كود</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Link href="https://t.me/fareedsaad" target="_blank" className="block">
                             <Button variant="secondary" className="w-full bg-[#229ED9]/10 border-[#229ED9]/20 text-[#229ED9] hover:bg-[#229ED9] hover:text-white" leftIcon={<Send size={16} />}>
                                تيليجرام
                             </Button>
                        </Link>
                        <Link href="https://www.instagram.com/alsahasports?igsh=OTU0cWFhYnExbDZu" target="_blank" className="block">
                             <Button variant="secondary" className="w-full bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCA761]/10 border-white/5 text-white/80 hover:text-white hover:border-white/20" leftIcon={<Instagram size={16} />}>
                                انستقرام
                             </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* RIGHT COLUMN: Features List (Reassurance) */}
            <div className="pt-4 lg:pt-8 order-last lg:order-none">
                <motion.div
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={isMobile ? { duration: 0 } : { duration: 0.5 }}
                    className="mb-8"
                >
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                        <span className="w-8 h-1 bg-alsaha-green rounded-full block" />
                        مميزات الموقع
                    </h3>
                    <p className="text-text-secondary text-sm">لماذا يختارنا الآلاف من المشتركين؟</p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-3"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex items-center gap-4 p-3 rounded-lg bg-white/4 border border-white/5 hover:bg-white/5 transition-colors group cursor-default"
                        >
                            <div className="w-10 h-10 rounded-full bg-alsaha-green/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon size={18} className="text-alsaha-green" />
                            </div>
                            <span className="text-sm text-white/90 font-medium leading-relaxed">
                                {feature.text}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            </div>
        </div>
        </section>

        <SubscriptionFAQ />
    </main>
  );
}
