"use client";

import { motion } from "framer-motion";
import { Plus, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "كيف يمكنني الاشتراك؟", a: "يمكنك اختيار الباقة المناسبة من الصفحة الرئيسية والدفع عبر الوسائل المتاحة، وسيصلك الكود فوراً." },
    { q: "هل يعمل الاشتراك على جميع الأجهزة؟", a: "نعم، ندعم جميع الشاشات الذكية، الهواتف (أندرويد وآيفون)، وأجهزة الكمبيوتر." },
    { q: "ما هي سرعة الإنترنت المطلوبة؟", a: "نوصي بسرعة 10 ميجابايت على الأقل لضمان جودة 4K وثبات البث." }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 container mx-auto max-w-4xl">
      <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">مركز المساعدة</h1>
          <p className="text-text-secondary">نحن هنا للإجابة على استفساراتك وحل مشاكلك</p>
      </div>

      <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-right hover:bg-white/5 transition-colors"
                  >
                      <span className="font-bold text-white text-lg">{faq.q}</span>
                      <Plus className={`text-alsaha-green transition-transform duration-300 ${openFaq === idx ? "rotate-45" : ""}`} />
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: openFaq === idx ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                      <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-white/5">
                          {faq.a}
                      </div>
                  </motion.div>
              </div>
          ))}
      </div>

      <div className="bg-gradient-to-br from-alsaha-green/20 to-transparent p-8 rounded-3xl border border-alsaha-green/20 text-center relative overflow-hidden">
          <div className="relative z-10">
              <HelpCircle className="mx-auto text-alsaha-green mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">لم تجد إجابتك؟</h3>
              <p className="text-white/70 mb-6">فريق الدعم المباشر جاهز لمساعدتك</p>
              <Link href="https://t.me/fareedsaad" target="_blank">
                  <button className="bg-alsaha-green text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#65aa3c] transition-colors flex items-center gap-2 mx-auto">
                      <MessageCircle size={20} />
                      <span>تحدث معنا</span>
                  </button>
              </Link>
          </div>
      </div>
    </main>
  );
}
