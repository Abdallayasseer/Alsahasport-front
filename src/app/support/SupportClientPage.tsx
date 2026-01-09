"use client";

import { motion } from "framer-motion";
import { Search, FileText, CreditCard, Tv, Settings, Send } from "lucide-react";
import FAQAccordion from "@/components/support/FAQAccordion";

export default function SupportClientPage() {
  const categories = [
      { icon: FileText, title: "الحساب والاشتراك", desc: "إدارة حسابك، تجديد الاشتراك" },
      { icon: CreditCard, title: "الدفع والفوترة", desc: "طرق الدفع، مشاكل الفواتير" },
      { icon: Tv, title: "البث والقنوات", desc: "مشاكل التقطيع، جودة البث" },
      { icon: Settings, title: "الإعدادات التقنية", desc: "إعداد التطبيق على أجهزتك" },
  ];

  return (
    // 1. Added overflow-x-hidden to prevent horizontal scrolling globally on this page
    <main className="min-h-screen pt-28 pb-32 px-4 container mx-auto max-w-5xl overflow-x-hidden w-full">      
      
      {/* Hero Search */}
      {/* 2. Added relative to contain the absolute blur element if it overflows */}
      <div className="text-center mb-16 relative w-full">
          
          {/* 3. Fixed Blur: Changed w-[600px] to w-full max-w-[600px] to prevent overflow on mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] md:max-w-[600px] h-[300px] md:h-[600px] bg-alsaha-green/5 blur-[80px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
          
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">كيف يمكننا مساعدتك؟</h1>
          
          <div className="relative max-w-2xl mx-auto group w-full">
              {/* 4. Fixed Search Icon: Added rtl:left-4 to ensure it stays in correct place */}
              <Search className="absolute right-4 rtl:left-4 top-1/2 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-alsaha-green transition-colors z-10" />
              <input 
                type="text" 
                placeholder="ابحث عن مشكلة أو سؤال..." 
                // 5. Fixed Input Padding: Used logical properties (pe-12 ps-4) for better RTL support
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pe-12 ps-4 text-white focus:outline-none focus:border-alsaha-green/50 focus:bg-white/10 transition-all shadow-lg"
              />
          </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/4 border border-white/5 p-5 md:p-6 rounded-2xl hover:bg-white/5 hover:border-alsaha-green/20 transition-all cursor-pointer group text-center md:text-right"
              >
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 group-hover:bg-alsaha-green/10 transition-colors">
                      <cat.icon className="text-white group-hover:text-alsaha-green transition-colors" size={24} />
                  </div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-alsaha-green transition-colors">{cat.title}</h3>
                  <p className="text-xs text-text-secondary">{cat.desc}</p>
              </motion.div>
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* FAQ Section */}
          <div className="w-full">
              <div className="mb-6 md:mb-8 text-center md:text-right">
                <h2 className="text-2xl font-black text-white mb-2">الأسئلة الشائعة</h2>
                <p className="text-text-secondary text-sm">إجابات سريعة لأغلب استفسارات المشتركين</p>
              </div>
              <FAQAccordion />
          </div>

           {/* Direct Contact Card */}
           <div className="w-full">
               {/* 6. Adjusted Padding: Reduced padding on mobile (p-6) vs desktop (md:p-10) */}
               <div className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-sm text-center shadow-2xl h-full flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">تواصل معنا مباشرة</h3>
                    <p className="text-white/60 mb-8 text-base md:text-lg leading-relaxed max-w-sm mx-auto">
                        هل تواجه مشكلة؟ فريق الدعم جاهز للرد عليك فوراً عبر تيليجرام.
                    </p>
                    
                    <a href="https://t.me/fareedsaad" target="_blank" className="block w-full group">
                        <button className="w-full py-4 md:py-5 rounded-2xl bg-alsaha-green hover:bg-[#62a639] text-black font-black text-base md:text-lg transition-all shadow-[0_0_20px_rgba(114,191,68,0.3)] hover:shadow-[0_0_40px_rgba(114,191,68,0.5)] transform group-hover:scale-[1.02] flex items-center justify-center gap-3">
                            <span>مراسلة الدعم الفني الآن</span>
                            <Send className="w-5 h-5 md:w-6 md:h-6 rtl:rotate-180" />
                        </button>
                    </a>
               </div>
           </div>
      </div>

    </main>
  );
}