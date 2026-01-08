"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Tv, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ActivatePage() {
  const [macAddress, setMacAddress] = useState("");
  const [code, setCode] = useState("");

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-dark-base z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-alsaha-green/10 blur-[100px] rounded-full z-0 pointer-events-none" />
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl"
        >
            <div className="grid md:grid-cols-2 bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
                
                {/* Form Side */}
                <div className="p-8 md:p-10 order-2 md:order-1">
                    <h1 className="text-2xl font-black text-white mb-2">تفعيل جهاز جديد</h1>
                    <p className="text-text-secondary text-xs mb-8">اربط اشتراكك بجهازك الذكي للبدء</p>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                        <div className="space-y-1.5">
                             <label className="text-xs font-bold text-white/60 mr-1 block">عنوان MAC للجهاز</label>
                             <div className="relative">
                                 <Tv className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                                 <input 
                                    type="text" 
                                    value={macAddress}
                                    onChange={(e) => setMacAddress(e.target.value)}
                                    placeholder="00:1A:2B:3C:4D:5E"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pr-11 pl-4 text-white placeholder:text-white/20 focus:outline-none focus:border-alsaha-green/50 transition-all font-mono text-sm uppercase"
                                 />
                             </div>
                        </div>

                        <div className="space-y-1.5">
                             <label className="text-xs font-bold text-white/60 mr-1 block">كود الاشتراك</label>
                             <div className="relative">
                                 <Globe className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                                 <input 
                                    type="text" 
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    placeholder="أدخل الكود..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pr-11 pl-4 text-white placeholder:text-white/20 focus:outline-none focus:border-alsaha-green/50 transition-all text-sm"
                                 />
                             </div>
                        </div>

                        <button className="w-full py-3.5 bg-alsaha-green hover:bg-[#6bbf3a] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(114,191,68,0.2)] mt-2 flex items-center justify-center gap-2">
                             <span>تفعيل الآن</span>
                             <CheckCircle2 size={16} />
                        </button>
                    </form>
                </div>

                {/* Visual Side */}
                <div className="relative bg-white/5 p-8 md:p-10 flex flex-col justify-between order-1 md:order-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-alsaha-green/20 to-transparent opacity-50" />
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
                            <Tv className="text-white" size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">مشاهدة بلا حدود</h2>
                        <p className="text-white/60 text-xs leading-relaxed">
                            فعل اشتراكك الآن واستمتع بمشاهدة جميع القنوات الرياضية والعالمية بجودة 4K على جهازك المفضل.
                        </p>
                    </div>

                    <div className="relative z-10 mt-8 md:mt-0">
                        <Link href="/login" className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold transition-colors">
                            <ArrowLeft size={14} />
                            <span>لديك حساب بالفعل؟</span>
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    </main>
  );
}
