"use client";

import { motion } from "framer-motion";
import { Plus, MessageCircle, Search, FileText, CreditCard, Tv, Settings, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
      { icon: FileText, title: "الحساب والاشتراك", desc: "إدارة حسابك، تجديد الاشتراك" },
      { icon: CreditCard, title: "الدفع والفوترة", desc: "طرق الدفع، مشاكل الفواتير" },
      { icon: Tv, title: "البث والقنوات", desc: "مشاكل التقطيع، جودة البث" },
      { icon: Settings, title: "الإعدادات التقنية", desc: "إعداد التطبيق على أجهزتك" },
  ];

  const faqs = [
    { q: "كيف يمكنني الاشتراك؟", a: "يمكنك اختيار الباقة المناسبة من الصفحة الرئيسية والدفع عبر الوسائل المتاحة (زين كاش، ماستر كارد)، وسيصلك كود التفعيل فوراً عبر رسالة نصية أو واتساب." },
    { q: "هل يعمل الاشتراك على جميع الأجهزة؟", a: "نعم! اشتراك الساحة سبورت يدعم جميع الأجهزة الذكية: شاشات أندرويد، Apple TV، هواتف آيفون وأندرويد، أجهزة الكمبيوتر، والتابلت." },
    { q: "ما هي سرعة الإنترنت المطلوبة؟", a: "نستخدم تقنيات ضغط متطورة تسمح بالبث بجودة HD بسرعة 4Mbps فقط. لتجربة 4K ننصح بسرعة 15Mbps أو أعلى لضمان استقرار البث." },
    { q: "نسيت كود التفعيل، ماذا أفعل؟", a: "لا تقلق! تواصل معنا عبر الدعم الفني على تيليجرام أو واتساب وزودنا برقم الهاتف المستخدم عند الشراء وسيتم استعادة كودك فوراً." }
  ];

  return (
    <main className="min-h-screen pt-28 pb-24 px-4 container mx-auto max-w-5xl">
      
      {/* Hero Search */}
      <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-alsaha-green/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">كيف يمكننا مساعدتك؟</h1>
          
          <div className="relative max-w-2xl mx-auto group">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-alsaha-green transition-colors" />
              <input 
                type="text" 
                placeholder="ابحث عن مشكلة أو سؤال..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-4 text-white focus:outline-none focus:border-alsaha-green/50 focus:bg-white/10 transition-all shadow-lg"
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
                className="bg-white/4 border border-white/5 p-6 rounded-2xl hover:bg-white/5 hover:border-alsaha-green/20 transition-all cursor-pointer group text-center md:text-right"
              >
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 group-hover:bg-alsaha-green/10 transition-colors">
                      <cat.icon className="text-white group-hover:text-alsaha-green transition-colors" size={24} />
                  </div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-alsaha-green transition-colors">{cat.title}</h3>
                  <p className="text-xs text-text-secondary">{cat.desc}</p>
              </motion.div>
          ))}
      </div>

      {/* FAQ Section */}
      <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1">
              <h2 className="text-2xl font-black text-white mb-3">الأسئلة الشائعة</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  جمعنا لك إجابات لأكثر الأسئلة تكراراً من قبل عملائنا. إذا لم تجد إجابتك، فريقنا جاهز للمساعدة.
              </p>
              <Link href="/subscription">
                   <button className="text-alsaha-green text-sm font-bold hover:underline flex items-center gap-1">
                       تصفح كل الأسئلة <ChevronDown size={14} className="-rotate-90" />
                   </button>
              </Link>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white/4 border border-white/5 rounded-xl overflow-hidden hover:bg-white/5 transition-all">
                    <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-right"
                    >
                        <span className={`font-bold text-sm md:text-base transition-colors ${openFaq === idx ? "text-alsaha-green" : "text-white"}`}>
                            {faq.q}
                        </span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${openFaq === idx ? "bg-alsaha-green border-alsaha-green rotate-45" : "border-white/10 bg-white/5"}`}>
                             <Plus size={14} className={`transition-colors ${openFaq === idx ? "text-black" : "text-white"}`} />
                        </div>
                    </button>
                    <motion.div 
                        initial={false}
                        animate={{ height: openFaq === idx ? "auto" : 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 pt-0 text-text-secondary text-sm leading-relaxed border-t border-white/5 mx-5 mt-2 mb-2">
                            {faq.a}
                        </div>
                    </motion.div>
                </div>
            ))}
          </div>
      </div>

      {/* Contact Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-8 md:p-12 text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-alsaha-green/10 blur-[80px] rounded-full -z-0 pointer-events-none" />
          
          <div className="relative z-10 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">ما زلت بحاجة للمساعدة؟</h2>
              <p className="text-text-secondary text-sm md:text-base">
                  فريق الدعم الفني متواجد على مدار الساعة لخدمتك عبر قنوات التواصل المباشر.
              </p>
          </div>

          <div className="relative z-10 w-full md:w-auto flex justify-center">
               <Link href="https://t.me/fareedsaad" target="_blank">
                   <button className="w-full md:w-auto px-8 py-3 bg-alsaha-green text-black font-bold rounded-xl shadow-[0_0_20px_rgba(114,191,68,0.3)] hover:scale-105 transition-transform flex items-center justify-center gap-2">
                       <MessageCircle size={18} />
                       <span>محادثة مباشرة</span>
                   </button>
               </Link>
          </div>
      </div>

    </main>
  );
}
