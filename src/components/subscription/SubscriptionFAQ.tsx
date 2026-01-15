"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "كيف يمكنني الحصول على كود الاشتراك؟",
    a: "يمكنك شراء كود الاشتراك بسهولة عبر التواصل معنا مباشرة على تيليجرام أو انستقرام. كما يتوفر لدينا شبكة واسعة من الوكلاء المعتمدين في جميع المحافظات لخدمتك."
  },
  {
    q: "هل يعمل الاشتراك على جميع الأجهزة؟",
    a: "نعم! صممنا نظامنا ليعمل بسلاسة على الهواتف الذكية (Android/iOS)، الشاشات الذكية (Smart TV)، أجهزة الكمبيوتر، الأجهزة اللوحية، وجميع أنواع TV Box."
  },
  {
    q: "ما هي سرعة الانترنت المطلوبة؟",
    a: "نحن نستخدم أحدث تقنيات ضغط الفيديو لضمان أفضل تجربة مشاهدة. سرعة 4Mbps كافية تماماً لمشاهدة القنوات بجودة HD بدون أي تقطيع."
  },
  {
    q: "هل يوجد ضمان للاشتراك؟",
    a: "بالتأكيد. نقدم ضماناً ذهبياً شاملاً طوال فترة اشتراكك. في حال واجهت أي مشكلة تقنية، فريقنا المتخصص جاهز لخدمتك وحلها فوراً على مدار الساعة."
  },
  {
    q: "هل يمكنني تجربة الخدمة قبل الاشتراك؟",
    a: "نعم، نقدم تجربة مجانية لمدة 24 ساعة لتتأكد بنفسك من جودة وثبات السيرفرات قبل اتخاذ قرار الشراء. تواصل معنا لطلب التجربة."
  }
];

export default function SubscriptionFAQ({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first one by default
  const displayFaqs = limit ? FAQS.slice(0, limit) : FAQS;

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
        {/* Atmosphere */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-bold mb-4"
                >
                    <HelpCircle size={14} />
                    <span>مركز المساعدة</span>
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                    الأسئلة <span className="text-transparent bg-clip-text bg-gradient-to-r from-alsaha-green to-white">الشائعة</span>
                </h2>
                <p className="text-white/50 text-lg">كل ما تحتاج معرفته للبدء في رحلتك الترفيهية</p>
            </div>

            <div className="grid gap-4">
                {displayFaqs.map((faq, idx) => (
                    <div 
                        key={idx} 
                        className={`group border rounded-3xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-white/[0.03] border-alsaha-green/30' : 'bg-transparent border-white/5 hover:border-white/10'}`}
                    >
                        <button 
                            onClick={() => setOpenIndex(prev => prev === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-6 md:p-8 text-right font-bold text-white relative z-10"
                        >
                            <span className={`text-lg transition-colors duration-300 ${openIndex === idx ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                                {faq.q}
                            </span>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${openIndex === idx ? 'bg-alsaha-green border-alsaha-green rotate-180' : 'bg-white/5 border-white/10 group-hover:bg-white/10'}`}>
                                {openIndex === idx ? (
                                    <Minus size={20} className="text-black" />
                                ) : (
                                    <Plus size={20} className="text-white/60" />
                                )}
                            </div>
                        </button>
                        
                        <AnimatePresence initial={false}>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 md:px-8 pb-8 pt-0 text-white/50 leading-loose">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
