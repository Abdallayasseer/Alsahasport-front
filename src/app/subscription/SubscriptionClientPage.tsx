"use client";

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

  const features = [
    { icon: Tv, text: "49 قناة رياضية مباشرة" },
    { icon: Trophy, text: "بث مباشر لجميع المباريات العالمية والعربية" },
    { icon: Monitor, text: "جودة بث تصل إلى 4K Ultra HD" },
    { icon: Smartphone, text: "متوافق مع جميع الأجهزة" },
    { icon: Newspaper, text: "آخر أخبار الرياضة" },
    { icon: BarChart4, text: "جداول المباريات والترتيب" },
    { icon: Info, text: "معلومات شاملة عن الفرق" },
    { icon: Zap, text: "سيرفرات مستقرة" },
    { icon: MessageCircle, text: "دعم فني متواصل" },
  ];

  return (
    <main>
        <section className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
        
        {/* Subtle Static Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-alsaha-green/5 rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-[1100px] relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            <div 
                className="rounded-2xl bg-black/50 border border-white/5 p-6 md:p-8 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-alsaha-green/50 to-transparent opacity-50" />
                
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        الاشتراك في الخدمة
                    </h1>
                    <p className="text-white/60 text-base font-normal">
                        أدخل كود الاشتراك للبدء
                    </p>
                </div>

                <div className="space-y-6">
                    <Input 
                        label="كود الاشتراك"
                        placeholder="أدخل الكود..."
                        icon={Lock}
                        className="bg-black/60 shadow-inner py-4"
                    />

                    <div>
                        <Button 
                            variant="default" 
                            className="w-full py-4 text-sm font-bold shadow-[0_4px_20px_rgba(114,191,68,0.2)]"
                            rightIcon={<CheckCircle2 size={18} />}
                        >
                            تفعيل الاشتراك
                        </Button>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-xl p-5 flex items-center justify-between mt-8">
                        <div>
                            <p className="text-xs text-text-secondary mb-1">قيمة الاشتراك</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-white">5000</span>
                                <span className="text-sm text-white/60">د.ع / شهر</span>
                            </div>
                            <p className="text-[10px] text-white/40 mt-1">جميع القنوات مشمولة</p>
                        </div>
                    </div>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/5"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-black/60 px-4 text-xs text-text-secondary">للحصول على كود اشتراك</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Link href="https://t.me/fareedsaad" target="_blank" className="block">
                             <Button variant="secondary" className="w-full bg-[#229ED9]/10 border-[#229ED9]/20 text-[#229ED9]" leftIcon={<Send size={16} />}>
                                تيليجرام
                             </Button>
                        </Link>
                        <Link href="https://www.instagram.com/alsahasports?igsh=OTU0cWFhYnExbDZu" target="_blank" className="block">
                             <Button variant="secondary" className="w-full bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCA761]/10 border-white/5 text-white/80" leftIcon={<Instagram size={16} />}>
                                انستقرام
                             </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Features List */}
            <div className="pt-4 lg:pt-8 order-last lg:order-none">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                        <span className="w-8 h-1 bg-alsaha-green rounded-full block" />
                        ما تحصل عليه في الباقة
                    </h3>
                    <p className="text-text-secondary text-sm">جميع المميزات مشمولة</p>
                </div>

                <div className="space-y-3">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 p-3 rounded-lg bg-white/4 border border-white/5 cursor-default"
                        >
                            <div className="w-10 h-10 rounded-full bg-alsaha-green/10 flex items-center justify-center flex-shrink-0">
                                <feature.icon size={18} className="text-alsaha-green" />
                            </div>
                            <span className="text-sm text-white/90 font-medium leading-relaxed">
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            </div>
        </div>
        </section>

        <SubscriptionFAQ />
    </main>
  );
}
