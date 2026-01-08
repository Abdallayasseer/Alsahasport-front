"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`relative p-6 rounded-2xl border transition-all duration-300 group ${
              pkg.popular
                ? "bg-white/5 border-alsaha-green/30 shadow-[0_0_30px_rgba(114,191,68,0.1)]"
                : "bg-white/4 border-white/5 hover:border-alsaha-green/30"
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-alsaha-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-black text-white">{pkg.price}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-text-secondary group-hover:text-white/90 transition-colors">
                  <CheckCircle size={16} className={`flex-shrink-0 ${pkg.popular ? "text-alsaha-green" : "text-white/20 group-hover:text-alsaha-green transition-colors"}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={`/subscription?plan=${encodeURIComponent(pkg.name)}`} className="block w-full">
                <button
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                    pkg.popular
                    ? "bg-alsaha-green text-white shadow-lg hover:shadow-[0_0_20px_rgba(114,191,68,0.4)]"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                }`}
                >
                اشترك الآن
                </button>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
