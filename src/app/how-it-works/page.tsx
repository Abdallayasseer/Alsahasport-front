"use client";

import { motion } from "framer-motion";
import { MousePointerClick, CreditCard, MessageCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <MousePointerClick size={48} />,
      title: "1. اختر الباقة",
      desc: "تصفح باقاتنا المتنوعة واختر ما يناسب احتياجاتك من بين الخيارات المرنة.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <CreditCard size={48} />,
      title: "2. ادفع بأمان",
      desc: "طرق دفع متعددة وآمنة 100%، تضمن لك عملية شراء سهلة وسريعة.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <MessageCircle size={48} />,
      title: "3. استلم الكود",
      desc: "يصلك كود التفعيل فورًا عبر الواتساب أو البريد الإلكتروني مع تعليمات التشغيل.",
      color: "from-alsaha-green to-green-500"
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden flex flex-col items-center">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-alsaha-green/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-alsaha-green text-sm font-bold mb-6 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-alsaha-green animate-pulse" />
                    <span>سهولة وسرعة</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    ابدأ رحلتك في <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-alsaha-green to-[#a3e670]">3 خطوات بسيطة</span>
                </h1>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                    لا تعقيدات، لا انتظار. صممنا عملية الاشتراك لتكون الأسرع والأسهل، 
                    لتنطلق في المشاهدة خلال دقائق.
                </p>
            </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative items-start mb-20">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[100px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10 border-t border-dashed border-white/10" />

            {steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    className="relative flex flex-col items-center text-center group"
                >
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs font-bold text-white backdrop-blur-md z-20">
                        {idx + 1}
                    </div>

                    {/* Icon Card */}
                    <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        <div className="text-white group-hover:scale-110 transition-transform duration-500">
                            {step.icon}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed max-w-xs">
                        {step.desc}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Final CTA */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 md:p-12 text-center max-w-3xl mx-auto backdrop-blur-xl relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-alsaha-green to-transparent opacity-30" />
            
            <h2 className="text-3xl font-bold text-white mb-6">جاهز للانطلاق؟</h2>
            <p className="text-text-secondary mb-8 text-lg">
                انضم إلى الآلاف من المشتركين واستمتع بأفضل تجربة مشاهدة رياضية.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/subscription">
                    <button className="px-8 py-4 bg-alsaha-green text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(114,191,68,0.4)] transition-all flex items-center gap-2 group">
                        <span>اشترك الآن</span>
                        <CheckCircle2 size={18} />
                    </button>
                </Link>
                <Link href="/">
                    <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>عودة للرئيسية</span>
                    </button>
                </Link>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
