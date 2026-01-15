"use client";

import { motion } from "framer-motion";
import { Lock, LogIn, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black overflow-hidden">
        
        {/* 🎨 LEFT: The Vault Visuals (Desktop) */}
        <div className="relative hidden lg:block overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop" 
                    alt="Stadium Tunnel" 
                    fill 
                    className="object-cover opacity-60"
                />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

            {/* Content Contentier */}
            <div className="absolute bottom-0 left-0 right-0 p-12 pr-20">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="w-16 h-1 bg-alsaha-green mb-6" />
                    <h1 className="text-5xl font-black text-white leading-tight mb-4">
                        بوابتك إلى  
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-alsaha-green to-white">عالم الإثارة.</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-md leading-relaxed">
                        استمتع بتجربة مشاهدة لا مثيل لها. أكثر من 9,000 قناة بجودة 4K، بث مباشر للمباريات، ومكتبة أفلام متجددة يومياً.
                    </p>
                </motion.div>
            </div>
        </div>

        {/* 🔐 RIGHT: The Login Form */}
        <div className="relative flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 bg-[#050505]">
             
             {/* Mobile Background Glow */}
             <div className="absolute top-0 right-0 w-full h-[500px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none lg:hidden" />

             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm relative z-10"
             >
                 {/* Header */}
                 <div className="mb-10">
                     <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold mb-8 group">
                         <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                         <span>العودة للرئيسية</span>
                     </Link>
                     <h2 className="text-3xl font-black text-white mb-2">تسجيل الدخول</h2>
                     <p className="text-white/40">أدخل كود الاشتراك الخاص بك للمتابعة</p>
                 </div>

                 {/* Form */}
                 <form onSubmit={handleLogin} className="space-y-8">
                     
                     {/* Floating Label Input */}
                     <div className="relative group">
                        <input 
                            type="text" 
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-alsaha-green peer transition-colors font-mono tracking-widest placeholder-transparent"
                            placeholder="Code"
                            required
                        />
                        <label 
                            htmlFor="code" 
                            className="peer-focus:font-medium absolute text-sm text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-alsaha-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-2"
                        >
                            <Lock size={14} />
                            <span>كود الاشتراك</span>
                        </label>
                        
                        {/* Glow on Focus */}
                        <div className="absolute inset-0 -z-20 bg-alsaha-green/5 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-500 rounded-full scale-y-50 translate-y-4" />
                     </div>

                     <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-alsaha-green transition-all duration-300 shadow-[0_5px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(114,191,68,0.3)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                     >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : (
                            <>
                                <span>دخول آمن</span>
                                <LogIn size={18} className="group-hover:-translate-x-1 transition-transform" />
                            </>
                        )}
                     </button>
                 </form>

                 {/* Register Link */}
                 <div className="mt-10 pt-6 border-t border-white/5 text-center">
                     <p className="text-white/40 text-sm mb-4">ليس لديك كود اشتراك؟</p>
                     <Link href="/register" className="inline-block">
                         <span className="text-white font-bold border-b border-white/20 hover:border-alsaha-green hover:text-alsaha-green transition-all pb-0.5">
                             اشترك الآن واحصل على كود فوري
                         </span>
                     </Link>
                 </div>

             </motion.div>
        </div>
    </main>
  );
}
