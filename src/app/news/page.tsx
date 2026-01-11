"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewsHero from "@/components/news/NewsHero";
import NewsCard from "@/components/news/NewsCard";
import { Filter } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

// Mock Data
const MOCK_NEWS = [
  { id: 1, title: "رسمياً: ليفربول يعلن التعاقد مع موهبة برايتون", category: "انتقالات", time: "منذ ساعة", excerpt: "أعلن نادي ليفربول الإنجليزي في بيان رسمي عن إتمام أولى صفقاته الصيفية لتدعيم خط الوسط..." },
  { id: 2, title: "تحليل: كيف سيلعب ريال مدريد الموسم القادم؟", category: "تحليل", time: "منذ ساعتين", excerpt: "بعد وصول النجوم الجدد، نلقي نظرة فنية على الخيارات التكتيكية المتاحة أمام كارلو أنشيلوتي." },
  { id: 3, title: "قمة الجولة: السيتي في مواجهة نارية أمام آرسنال", category: "الدوري الإنجليزي", time: "منذ 4 ساعات", excerpt: "صراع الصدارة يشتعل مبكراً في البريميرليج بلقاء من العيار الثقيل يجمع بين الأستاذ والتلميذ." },
  { id: 4, title: "برشلونة يقترب من حل أزمته المالية", category: "اقتصاد", time: "منذ 6 ساعات", excerpt: "تقارير إسبانية تؤكد انفراجة قريبة في ملف الرافعات الاقتصادية للنادي الكتالوني." },
  { id: 5, title: "دوري روشن: الهلال يواصل سلسلة الانتصارات", category: "الدوري السعودي", time: "منذ 8 ساعات", excerpt: "الزعيم يضرب بقوة ويحقق فوزاً عريضاً يعزز به صدارته لجدول الترتيب." },
  { id: 6, title: "إصابة قوية تبعد نجم ميلان عن الملاعب", category: "إصابات", time: "منذ 12 ساعة", excerpt: "صدمة في الأوساط الإيطالية بعد تأكد غياب نجم الروسونيري لفترة طويلة." },
];

const CATEGORIES = ["الكل", "انتقالات", "الدوري الإنجليزي", "الدوري الإسباني", "الدوري السعودي", "تحليل"];

export default function NewsPage() {
  const isMobile = useMobile();
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredNews = activeCategory === "الكل" 
    ? MOCK_NEWS 
    : MOCK_NEWS.filter(news => news.category === activeCategory);

  return (
    <main className="min-h-screen pt-28 pb-32 px-4 container mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
        <div>
           <h1 className="text-4xl md:text-5xl font-black text-white mb-2">أخبار <span className="text-alsaha-green">الرياضة</span></h1>
           <p className="text-text-secondary">تغطية شاملة لأحدث الأحداث الرياضية لحظة بلحظة</p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full pb-2 md:pb-0">
             <Filter size={16} className="text-white/40 flex-shrink-0 ml-2" />
             {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                        px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border
                        ${activeCategory === cat 
                            ? "bg-alsaha-green text-black border-alsaha-green" 
                            : "bg-white/5 border-white/5 text-text-secondary hover:text-white hover:bg-white/10"}
                    `}
                >
                    {cat}
                </button>
             ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
          <NewsHero />
      </div>

      {/* Grid Section */}
      <motion.div 
         layout={!isMobile}
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
         <AnimatePresence>
             {filteredNews.map((news) => (
                 <motion.div
                    key={news.id}
                    layout={!isMobile}
                    initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={isMobile ? { duration: 0 } : { duration: 0.2 }}
                 >
                     <NewsCard {...news} />
                 </motion.div>
             ))}
         </AnimatePresence>
      </motion.div>
      
      {/* Load More Trigger */}
      <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white/5 border border-white/5 rounded-full text-white text-sm font-bold hover:bg-white/10 transition-colors">
              تحميل المزيد
          </button>
      </div>

    </main>
  );
}
