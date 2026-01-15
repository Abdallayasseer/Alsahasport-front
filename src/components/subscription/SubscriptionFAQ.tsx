"use client";

import { useState } from "react";
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

export default function SubscriptionFAQ({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayFaqs = limit ? FAQS.slice(0, limit) : FAQS;

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
                {displayFaqs.map((faq, idx) => (
                    <div key={idx} className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden">
                        <button 
                            onClick={() => setOpenIndex(prev => prev === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-5 text-right font-bold text-white"
                        >
                            <span className="text-sm md:text-base leading-relaxed">{faq.q}</span>
                            <ChevronDown 
                                size={20} 
                                className={`${openIndex === idx ? "rotate-180 text-alsaha-green" : "text-white/40"}`} 
                            />
                        </button>
                        
                        {openIndex === idx && (
                            <div className="p-5 pt-0 border-t border-white/5 text-text-secondary text-sm leading-7">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
