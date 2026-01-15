"use client";

import { Construction, Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function EsportsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="w-24 h-24 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 animate-pulse">
        <Gamepad2 size={48} className="text-purple-500" />
      </div>
      <h1 className="text-4xl font-black text-white mb-4">الرياضات الإلكترونية</h1>
      <p className="text-white/50 text-xl max-w-md mb-8">
        بطولات وتغطيات مباشرة قريباً.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-transform"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
