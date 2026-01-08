"use client";

import { motion } from "framer-motion";
import { MousePointerClick, CreditCard, MessageCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MousePointerClick size={40} />,
      title: "1. اختر الباقة",
      desc: "تصفح باقاتنا واختر ما يناسبك من بين الخيارات المميزة.",
    },
    {
      icon: <CreditCard size={40} />,
      title: "2. ادفع بأمان",
      desc: "طرق دفع متعددة وآمنة، تضمن لك عملية شراء سهلة وسريعة.",
    },
    {
      icon: <MessageCircle size={40} />,
      title: "3. استلم الكود",
      desc: "يصلك كود التفعيل فورًا عبر الواتساب أو البريد الإلكتروني.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-dark-base relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            كيف <span className="text-transparent bg-clip-text bg-gradient-to-r from-alsaha-green to-[#a3e670]">تبدأ؟</span>
          </h2>
          <p className="text-text-secondary text-lg">ثلاث خطوات بسيطة تفصلك عن المتعة</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
           {/* Connector Line (Desktop) */}
           <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-24 h-24 rounded-full bg-dark-surface border border-white/5 flex items-center justify-center text-alsaha-green mb-6 shadow-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-alsaha-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
