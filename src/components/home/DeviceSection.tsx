"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Tablet, Cast, Laptop } from "lucide-react";

export default function DeviceSection() {
  const devices = [
    { icon: Smartphone, name: "Mobile" },
    { icon: Tablet, name: "Tablet" },
    { icon: Monitor, name: "Smart TV" },
    { icon: Laptop, name: "Computer" },
    { icon: Cast, name: "TV Box" },
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4 text-center">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                شاهد في أي مكان، وعلى <span className="text-alsaha-green">أي جهاز</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
                اشتراك واحد يعمل على جميع أجهزتك المفضلة. انتقل من هاتفك إلى شاشة التلفاز بكل سهولة.
            </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {devices.map((device, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center gap-4 group"
                >
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                        <device.icon size={40} className="text-white/80 group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-semibold text-white/60 group-hover:text-white transition-colors">{device.name}</span>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
