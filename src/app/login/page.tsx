"use client";

import { motion } from "framer-motion";
import { Lock, LogIn, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [code, setCode] = useState("");

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-dark-base z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-alsaha-green/5 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 z-0 bg-center" />

        {/* Login Card */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md"
        >
            <div className="bg-black/40 backdrop-blur-2xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-alsaha-green/50 to-transparent opacity-50" />

                <div className="text-center mb-8">
                     <h1 className="text-3xl font-black text-white mb-2 tracking-tight">
                         الساحة<span className="text-alsaha-green">.سبورت</span>
                     </h1>
                     <p className="text-text-secondary text-sm">أدخل كود الاشتراك للدخول إلى حسابك</p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div className="space-y-2">
                         <label className="text-xs font-bold text-white/60 mr-1 block">كود الاشتراك</label>
                         <div className="relative group">
                             <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-alsaha-green transition-colors" size={18} />
                             <input 
                                type="text" 
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="ادخل الكود هنا..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pr-12 pl-4 text-white placeholder:text-white/20 focus:outline-none focus:border-alsaha-green/50 focus:bg-white/10 transition-all font-mono text-lg tracking-widest text-center shadow-inner"
                             />
                         </div>
                    </div>

                    <button className="w-full py-4 bg-alsaha-green hover:bg-[#6bbf3a] text-black font-bold rounded-xl text-base transition-all shadow-[0_0_20px_rgba(114,191,68,0.2)] hover:shadow-[0_0_30px_rgba(114,191,68,0.4)] flex items-center justify-center gap-2 group">
                        <span>تسجيل الدخول</span>
                        <LogIn size={18} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/5 text-center space-y-4">
                     <p className="text-white/40 text-xs">ليس لديك اشتراك؟</p>
                     <Link href="/subscription">
                         <button className="text-white text-sm font-bold hover:text-alsaha-green transition-colors flex items-center justify-center gap-1 mx-auto group">
                             <span>احصل على كود الآن</span>
                             <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                         </button>
                     </Link>
                </div>
            </div>
        </motion.div>

        {/* Footer */}
        <div className="absolute bottom-6 text-center w-full z-10">
            <Link href="/" className="text-white/20 hover:text-white/40 text-xs transition-colors">
                العودة للصفحة الرئيسية
            </Link>
        </div>

    </main>
  );
}
