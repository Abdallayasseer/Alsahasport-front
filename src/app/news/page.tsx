"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NewsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 container mx-auto">
      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
        <h1 className="text-3xl md:text-5xl font-black text-white">آخر الأخبار</h1>
        <button className="text-sm text-alsaha-green hover:underline">عرض الكل</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Article - Tamed Gradient */}
        <Link href="/news" className="md:col-span-2 lg:col-span-2 block group">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-[16/9] bg-white/5 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-all"
        >
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
             <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-black z-0 group-hover:scale-105 transition-transform duration-700" />
             
             <div className="absolute bottom-0 left-0 p-8 z-20 w-full max-w-3xl">
                 <span className="bg-alsaha-green text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-lg">عاجل</span>
                 <h2 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight group-hover:text-alsaha-green transition-colors duration-300">
                    صفقة الموسم: انتقال مبابي يقلب الموازين
                 </h2>
                 <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2">
                    التفاصيل الكاملة لأضخم صفقة في تاريخ كرة القدم الحديث، وتأثيرها المباشر على موازين القوى في أوروبا.
                 </p>
             </div>
        </motion.div>
        </Link>

        {/* Secondary Articles - Compact Cards */}
        {[1, 2, 3].map((item, idx) => (
            <Link key={item} href="/news" className="block h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/4 border border-white/5 rounded-2xl p-4 hover:bg-white/5 hover:border-alsaha-green/20 transition-all cursor-pointer group flex flex-col h-full"
            >
                <div className="aspect-video bg-white/5 rounded-xl mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-grow">
                    <span className="text-alsaha-green text-[10px] font-bold uppercase tracking-wider">الدوري الإنجليزي</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2 leading-tight group-hover:text-alsaha-green transition-colors">تحليل قمة الجولة</h3>
                    <p className="text-text-secondary text-xs line-clamp-2 leading-relaxed">قراءة في أوراق المدربين والتشكيلات المتوقعة للمعركة القادمة...</p>
                </div>
            </motion.div>
            </Link>
        ))}
      </div>
    </main>
  );
}
