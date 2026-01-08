"use client";

import { motion } from "framer-motion";
import { 
  Tv, 
  Trophy, 
  Monitor, 
  Smartphone, 
  Newspaper, 
  BarChart4, 
  Info, 
  Search, 
  Zap, 
  MessageCircle, 
  Send, 
  Instagram, 
  CheckCircle2,
  Lock
} from "lucide-react";
import Link from "next/link";

export default function SubscriptionPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 } // Removed explicit ease string to fix TS error
    }
  };

  const features = [
    { icon: Tv, text: "49 قناة رياضية مباشرة" },
    { icon: Trophy, text: "بث مباشر لجميع المباريات العالمية والعربية" },
    { icon: Monitor, text: "جودة بث عالية تصل إلى 4K Ultra HD" },
    { icon: Smartphone, text: "يعمل على جميع الأجهزة (الجوال، التابلت، الكمبيوتر)" },
    { icon: Newspaper, text: "آخر أخبار الرياضة العربية والعالمية" },
    { icon: BarChart4, text: "جداول المباريات والترتيب لجميع الدوريات" },
    { icon: Info, text: "معلومات شاملة عن الفرق واللاعبين والملاعب" },
    { icon: Search, text: "بحث شامل عبر جميع البيانات الرياضية" },
    { icon: Zap, text: "سيرفرات سريعة ومستقرة بدون تقطيع" },
    { icon: MessageCircle, text: "دعم فني متواصل على مدار الساعة" },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-alsaha-green/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1100px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Activation Card (Luxury Glass Console) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 p-6 md:p-8 shadow-2xl relative overflow-hidden group"
          >
            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-alsaha-green/50 to-transparent opacity-50" />
            
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-white to-alsaha-green/80 mb-2">
                    منصة البث الرياضي الرائدة
                </h1>
                <p className="text-white text-lg font-medium opacity-90">
                    تفعيل الاشتراك
                </p>
            </div>

            {/* Input Section */}
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-medium mr-1 block">
                        كود الاشتراك
                    </label>
                    <div className="relative">
                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                        <input 
                            type="text" 
                            placeholder="أدخل كود الاشتراك للوصول إلى جميع القنوات..."
                            className="w-full bg-black/60 border border-white/5 rounded-xl py-4 pr-12 pl-4 text-white placeholder:text-white/20 focus:outline-none focus:border-alsaha-green/50 focus:ring-1 focus:ring-alsaha-green/50 transition-all text-sm shadow-inner"
                        />
                    </div>
                </div>

                {/* Primary Action */}
                <button className="w-full py-4 bg-alsaha-green hover:bg-[#6bbf3a] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(114,191,68,0.2)] hover:shadow-[0_0_30px_rgba(114,191,68,0.4)] relative overflow-hidden group/btn">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>تفعيل الاشتراك</span>
                        <CheckCircle2 size={16} />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>

                {/* Price Widget */}
                <div className="bg-white/5 border border-white/5 rounded-xl p-5 flex items-center justify-between mt-8">
                    <div>
                        <p className="text-xs text-text-secondary mb-1">سعر الاشتراك</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-white">30</span>
                            <span className="text-sm text-alsaha-green">ر.س</span>
                        </div>
                        <p className="text-[10px] text-white/40 mt-1">جهاز واحد فقط</p>
                    </div>
                    <div className="text-left">
                        <span className="inline-block px-3 py-1 bg-alsaha-green/10 border border-alsaha-green/20 rounded-full text-[10px] text-alsaha-green font-bold">
                            ✨ اشتراك لمدة شهر
                        </span>
                    </div>
                </div>

                {/* Contact Divider */}
                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/5"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-black/50 px-4 text-xs text-text-secondary backdrop-blur-sm">أو تواصل معنا للحصول على كود</span>
                    </div>
                </div>

                {/* Contact Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <Link href="https://t.me/fareedsaad" target="_blank" className="flex items-center justify-center gap-2 py-3 bg-[#229ED9]/10 border border-[#229ED9]/20 text-[#229ED9] hover:bg-[#229ED9] hover:text-white rounded-xl transition-all text-sm font-medium group/tg">
                        <Send size={16} className="group-hover/tg:-translate-y-0.5 transition-transform" />
                        <span>تيليجرام</span>
                    </Link>
                    <Link href="#" className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCA761]/10 border border-white/5 text-white/80 hover:text-white hover:border-white/20 rounded-xl transition-all text-sm font-medium group/ig">
                        <Instagram size={16} className="group-hover/ig:-translate-y-0.5 transition-transform" />
                        <span>انستقرام</span>
                    </Link>
                </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Features List (Reassurance) */}
          <div className="pt-4 lg:pt-8 order-last lg:order-none">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
  );
}
