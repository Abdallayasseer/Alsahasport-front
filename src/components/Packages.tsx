"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const packages = [
  {
    name: "الباقة الشاملة",
    price: "5000",
    currency: "د.ع",
    period: "/ شهر",
    features: [
      "جودة 4K & FHD",
      "جميع القنوات الرياضية",
      "مكتبة أفلام ومسلسلات ضخمة",
      "دعم فني 24/7",
      "ضمان كامل المدة",
      "تفعيل فوري"
    ],
    popular: true,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-alsaha-green/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

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

        <div className="flex justify-center gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`relative p-8 md:p-12 rounded-3xl border transition-all duration-300 group w-full md:max-w-lg glass-card flex flex-col items-center ${
              pkg.popular
                ? "bg-gradient-to-b from-white/5 to-transparent border-alsaha-green/30 shadow-[0_0_50px_rgba(114,191,68,0.1)] hover:border-alsaha-green/50 transform hover:-translate-y-2"
                : "bg-white/4 border-white/5 hover:border-alsaha-green/30"
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-alsaha-green text-black text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_4px_15px_rgba(114,191,68,0.4)]">
                الأكثر مبيعاً
              </span>
            )}

            <h3 className="text-2xl font-black text-white mb-2 text-center mt-2">{pkg.name}</h3>
            <div className="flex flex-col items-center justify-center mb-8 text-center pt-4 pb-6 border-b border-white/5 w-full">
              <span className="text-5xl font-black text-white tracking-tight drop-shadow-xl">{pkg.price}</span>
              <span className="text-lg text-text-secondary font-medium mt-1">{pkg.currency} {pkg.period}</span>
            </div>

            <ul className="space-y-4 mb-10 w-full">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-text-secondary group-hover:text-white transition-colors duration-300">
                  <div className={`p-1 rounded-full ${pkg.popular ? "bg-alsaha-green/20" : "bg-white/10"}`}>
                      <CheckCircle size={14} className={`flex-shrink-0 ${pkg.popular ? "text-alsaha-green" : "text-white/50 group-hover:text-alsaha-green transition-colors"}`} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={`/subscription?plan=${encodeURIComponent(pkg.name)}`} className="block w-full mt-auto">
                <Button 
                   className="w-full text-lg h-14" 
                   variant={pkg.popular ? "default" : "secondary"}
                >
                  اشترك الآن
                </Button>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
