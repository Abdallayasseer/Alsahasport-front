"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NewsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 container mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">آخر الأخبار</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Featured Article */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:col-span-2 lg:col-span-2 relative aspect-[16/9] bg-white/5 rounded-3xl overflow-hidden group cursor-pointer"
        >
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
             {/* Simple Placeholder Gradient as Image */}
             <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black z-0 group-hover:scale-105 transition-transform duration-700" />
             
             <div className="absolute bottom-0 left-0 p-8 z-20">
                 <span className="bg-alsaha-green text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">عاجل</span>
                 <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                    صفقة الموسم: انتقال مبابي يقلب الموازين
                 </h2>
                 <p className="text-gray-300 max-w-xl">
                    التفاصيل الكاملة لأضخم صفقة في تاريخ كرة القدم الحديث...
                 </p>
             </div>
        </motion.div>

        {/* Secondary Articles */}
        {[1, 2, 3].map((item) => (
            <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors cursor-pointer group"
            >
                <div className="aspect-video bg-white/10 rounded-xl mb-4 overflow-hidden">
                    <div className="w-full h-full bg-white/5 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-alsaha-green text-xs font-bold">الدوري الإنجليزي</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">تحليل قمة الجولة القادمة</h3>
                <p className="text-text-secondary text-sm">قراءة في أوراق المدربين والتشكيلات المتوقعة...</p>
            </motion.div>
        ))}
      </div>
    </main>
  );
}
