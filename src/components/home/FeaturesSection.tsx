"use client";

import { motion } from "framer-motion";
import { Zap, Tv, Globe, Headset } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "سيرفرات فائقة السرعة",
      desc: "تقنية بث متطورة تضمن لك مشاهدة مستقرة بدون تقطيع حتى في أوقات الذروة."
    },
    {
      icon: Tv,
      title: "جودة سينمائية حقيقية",
      desc: "استمتع بدقة 4K Ultra HD وتفاصيل ألوان مذهلة تجعلك في قلب الحدث."
    },
    {
      icon: Globe,
      title: "تغطية شاملة",
      desc: "جميع الدوريات العالمية، القنوات الرياضية، والأفلام في اشتراك واحد."
    },
    {
      icon: Headset,
      title: "دعم فني لحظي",
      desc: "فريق متخصص جاهز لمساعدتك وحل أي مشكلة تقنية على مدار 24 ساعة."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block mb-4"
          >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                لماذا يختارنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-alsaha-green to-white">الآلاف؟</span>
              </h2>
          </motion.div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            تجربة مشاهدة لا تضاهى مع مميزات حصرية صممت خصيصاً لعشاق الرياضة
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="glass-card group relative rounded-[2rem] p-8 md:hover:border-alsaha-green/20 md:transition-all md:duration-500 md:hover:-translate-y-2 md:hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-alsaha-green/10 blur-[60px] rounded-full pointer-events-none opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500" />
              
              <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 md:group-hover:scale-110 md:group-hover:bg-alsaha-green md:group-hover:rotate-3 md:transition-all md:duration-500 border border-white/5 md:group-hover:border-alsaha-green/50 shadow-lg">
                    <feature.icon className="text-alsaha-green w-7 h-7 md:group-hover:text-black md:transition-colors md:duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-alsaha-green transition-colors">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                    {feature.desc}
                  </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
