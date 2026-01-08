"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "كيف يمكنني الحصول على كود الاشتراك؟",
    a: "يمكنك شراء كود الاشتراك عبر التواصل معنا على تيليجرام أو انستقرام. أو عبر أحد وكلائنا المعتمدين في جميع المحافظات."
  },
  {
    q: "هل يعمل الاشتراك على جميع الأجهزة؟",
    a: "نعم، يعمل اشتراكنا على الهواتف (أندرويد/آيفون)، الشاشات الذكية، أجهزة الكمبيوتر، والتابلت بجودة عالية."
  },
  {
    q: "ما هي سرعة الانترنت المطلوبة؟",
    a: "نحن نستخدم تقنيات ضغط حديثة لضمان عمل البث حتى مع سرعات الانترنت المتوسطة. سرعة 4Mbps كافية لجودة HD."
  },
  {
    q: "هل يوجد ضمان للاشتراك؟",
    a: "نعم، نقدم ضمان كامل طوال فترة الاشتراك. في حال واجهت أي مشكلة، فريق الدعم الفني جاهز لخدمتك 24/7."
  }
];

export default function SubscriptionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black/20 relative">
        <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center justify-center gap-2">
                    <HelpCircle className="text-alsaha-green" size={28} />
                    أسئلة شائعة
                </h2>
                <p className="text-text-secondary mt-2">كل ما تحتاج معرفته عن الاشتراك</p>
            </div>

            <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                    <div key={idx} className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden hover:border-alsaha-green/20 transition-all">
                        <button 
                            onClick={() => setOpenIndex(disk => disk === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-5 text-right font-bold text-white transition-colors hover:text-alsaha-green"
                        >
                            <span className="text-sm md:text-base leading-relaxed">{faq.q}</span>
                            <ChevronDown 
                                size={20} 
                                className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-alsaha-green" : "text-white/40"}`} 
                            />
                        </button>
                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-5 pt-0 border-t border-white/5 text-text-secondary text-sm leading-7">
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
