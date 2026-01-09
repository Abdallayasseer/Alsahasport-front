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
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            لماذا يختارنا <span className="text-alsaha-green">الآلاف؟</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            تجربة مشاهدة لا تضاهى مع مميزات حصرية صممت خصيصاً لعشاق الرياضة
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-alsaha-green/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-alsaha-green/10 flex items-center justify-center mb-6 group-hover:bg-alsaha-green/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="text-alsaha-green w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
