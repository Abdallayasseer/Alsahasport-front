"use client";

import { Construction, Sparkles } from "lucide-react";
import Link from "next/link";

export default function KidsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="w-24 h-24 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 animate-bounce">
        <Sparkles size={48} className="text-orange-500" />
      </div>
      <h1 className="text-4xl font-black text-white mb-4">عالم الأطفال</h1>
      <p className="text-white/50 text-xl max-w-md mb-8">
        نجهز لكم أجمل الكرتون والبرامج التعليمية.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-orange-500 text-white font-bold rounded-xl hover:scale-105 transition-transform"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
