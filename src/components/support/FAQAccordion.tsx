"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category?: string;
}

const FAQS: FAQItem[] = [
    {
        id: 1,
        category: "الاشتراكات",
        question: "كيف يمكنني تفعيل الاشتراك؟",
        answer: "يمكنك تفعيل الاشتراك عن طريق شراء كود من أحد وكلائنا المعتمدين، ثم إدخال الكود في صفحة الاشتراكات وتفعيله فوراً."
    },
    {
        id: 2,
        category: "الاشتراكات",
        question: "ما هي طرق الدفع المتوفرة؟",
        answer: "نوفر طرق دفع متعددة تشمل زين كاش، ماستر كارد، والدفع المباشر عبر الوكلاء المنتشرين في جميع المحافظات."
    },
    {
        id: 3,
        category: "المشاكل التقنية",
        question: "البث يتقطع، ماذا أفعل؟",
        answer: "يرجى التأكد من سرعة الانترنت لديك. النظام يعمل تلقائياً على تقليل الجودة عند ضعف الانترنت. إذا استمرت المشكلة، حاول تحديث الصفحة أو تغيير المتصفح."
    },
    {
        id: 4,
        category: "المشاكل التقنية",
        question: "نسيت كلمة المرور / الكود؟",
        answer: "يرجى التواصل مع الدعم الفني عبر تيليجرام وتزويدهم برقم الهاتف المرتبط بالحساب لاستعادة بياناتك."
    }
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
        {FAQS.map((faq) => (
            <div 
                key={faq.id} 
                className={`
                    border rounded-2xl overflow-hidden transition-all duration-300
                    ${openId === faq.id 
                        ? "bg-white/5 border-alsaha-green/30 shadow-[0_0_20px_rgba(114,191,68,0.1)]" 
                        : "bg-white/5 border-white/5 hover:border-white/10"
                    }
                `}
            >
                <button 
                    onClick={() => setOpenId(current => current === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-right"
                >
                    <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-full ${openId === faq.id ? "bg-alsaha-green text-black" : "bg-white/5 text-white/40"}`}>
                            <HelpCircle size={18} />
                        </div>
                        <span className={`font-bold transition-colors ${openId === faq.id ? "text-white" : "text-white/80"}`}>
                            {faq.question}
                        </span>
                    </div>
                    <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 ${openId === faq.id ? "rotate-180 text-alsaha-green" : "text-white/40"}`} 
                    />
                </button>
                
                <AnimatePresence>
                    {openId === faq.id && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="px-5 pb-5 pt-0 mr-[52px]">
                                <p className="text-text-secondary text-sm leading-relaxed border-t border-white/5 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        ))}
    </div>
  );
}
