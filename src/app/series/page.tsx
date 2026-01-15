"use client";

import { Construction } from "lucide-react";
import Link from "next/link";

export default function SeriesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 animate-pulse">
        <Construction size={48} className="text-alsaha-green" />
      </div>
      <h1 className="text-4xl font-black text-white mb-4">قريباً</h1>
      <p className="text-white/50 text-xl max-w-md mb-8">
        قسم المسلسلات قيد الإنشاء. انتظرونا قريباً.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-alsaha-green text-black font-bold rounded-xl hover:scale-105 transition-transform"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
