"use client";

import { motion } from "framer-motion";
import { Tv, Zap, ShieldCheck, Globe } from "lucide-react";

const features = [
  {
    icon: <Tv size={32} className="text-alsaha-green" />,
    title: "بث ثابت بدون تقطيع",
    desc: "تمتع بمشاهدة متواصلة بفضل سيرفراتنا القوية والموزعة عالميًا.",
  },
  {
    icon: <Zap size={32} className="text-alsaha-green" />,
    title: "تفعيل فوري",
    desc: "اطلب باقتك وسيصلك كود التفعيل فورًا بعد إتمام عملية الدفع.",
  },
  {
    icon: <Globe size={32} className="text-alsaha-green" />,
    title: "جميع القنوات العالمية",
    desc: "أكثر من 10,000 قناة ومشفرة ومفتوحة بجودة 4K و FHD.",
  },
  {
    icon: <ShieldCheck size={32} className="text-alsaha-green" />,
    title: "دعم فني متواصل",
    desc: "فريق دعم فني جاهز لخدمتك على مدار الساعة عبر الواتساب.",
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-dark-surface/30 relative">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/5 transition-all group"
            >
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-alsaha-green/20 transition-colors">
                {feature.icon}
              </div>
              <h2 className="text-xl font-bold text-white">{feature.title}</h2>
              <p className="text-text-secondary leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
