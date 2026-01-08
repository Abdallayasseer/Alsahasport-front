"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "اشتراك شهر",
    price: "30",
    currency: "ر.س",
    period: "/ شهر",
    features: ["جودة 4K & FHD", "جميع القنوات الرياضية", "مكتبة أفلام ومسلسلات", "دعم فني 24/7", "جهاز واحد"],
    popular: false,
  },
  {
    name: "اشتراك سنة 🔥",
    price: "150",
    currency: "ر.س",
    period: "/ سنة",
    features: ["جودة 4K & FHD", "جميع القنوات الرياضية", "مكتبة أفلام ومسلسلات ضخمة", "دعم فني VIP", "جهازين في نفس الوقت", "ضمان كامل المدة"],
    popular: true,
  },
  {
    name: "اشتراك 6 أشهر",
    price: "90",
    currency: "ر.س",
    period: "/ 6 أشهر",
    features: ["جودة 4K & FHD", "جميع القنوات الرياضية", "مكتبة أفلام ومسلسلات", "دعم فني 24/7", "جهاز واحد"],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-alsaha-green/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            اختر <span className="text-alsaha-green">باقتك المناسبة</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg"
          >
            أسعار تنافسية وخدمة لا تقبل المنافسة
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                pkg.popular 
                  ? "bg-gradient-to-b from-white/10 to-white/5 border-alsaha-green shadow-[0_0_30px_rgba(114,191,68,0.2)] scale-105 z-10" 
                  : "bg-white/5 backdrop-blur-xl border-white/5 hover:border-alsaha-green hover:shadow-[0_0_20px_rgba(114,191,68,0.3)] hover:scale-105"
              } flex flex-col h-full`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-alsaha-green text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  الأكثر طلبًا
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{pkg.price}</span>
                <span className="text-sm text-text-secondary mr-2">{pkg.currency} {pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                    <Check className="text-alsaha-green flex-shrink-0" size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                pkg.popular 
                  ? "bg-alsaha-green text-white hover:shadow-lg hover:bg-[#65aa3c]" 
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}>
                اشترك الآن
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
