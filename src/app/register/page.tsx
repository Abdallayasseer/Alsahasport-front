"use client";

import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black overflow-hidden">
        
        {/* 🎨 LEFT: The Vault Visuals (Desktop) */}
        <div className="relative hidden lg:block overflow-hidden order-last">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src="https://images.unsplash.com/photo-1489956782390-1c60fc456184?q=80&w=2072&auto=format&fit=crop" 
                    alt="Stadium Lights" 
                    fill 
                    className="object-cover opacity-60"
                />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

            {/* Content Contentier */}
            <div className="absolute bottom-0 left-0 right-0 p-12 pl-20 text-left" dir="ltr">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="w-16 h-1 bg-alsaha-green mb-6" />
                    <h1 className="text-5xl font-black text-white leading-tight mb-4">
                        Join the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-alsaha-green to-white">Champions.</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-md leading-relaxed">
                        Create your account today and unlock a world of premium sports entertainment. 
                    </p>
                </motion.div>
            </div>
        </div>

        {/* 🔐 RIGHT: The Register Form */}
        <div className="relative flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 bg-[#050505]">
             
             {/* Mobile Background Glow */}
             <div className="absolute top-0 left-0 w-full h-[500px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none lg:hidden" />

             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm relative z-10"
             >
                 {/* Header */}
                 <div className="mb-8">
                     <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold mb-8 group">
                         <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                         <span>العودة للرئيسية</span>
                     </Link>
                     <h2 className="text-3xl font-black text-white mb-2">إنشاء حساب جديد</h2>
                     <p className="text-white/40">انضم إلينا واستمتع بتجربة مشاهدة لا تُنسى</p>
                 </div>

                 {/* Form */}
                 <form onSubmit={handleRegister} className="space-y-6">
                     
                     {/* Name Input */}
                     <div className="relative group">
                        <input 
                            type="text" 
                            id="name"
                            className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-alsaha-green peer transition-colors placeholder-transparent"
                            placeholder="Full Name"
                            required
                        />
                        <label className="absolute text-sm text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-alsaha-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-2">
                            <User size={14} />
                            <span>الاسم الكامل</span>
                        </label>
                     </div>

                     {/* Email Input */}
                     <div className="relative group">
                        <input 
                            type="email" 
                            id="email"
                            className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-alsaha-green peer transition-colors placeholder-transparent"
                            placeholder="Email"
                            required
                        />
                        <label className="absolute text-sm text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-alsaha-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-2">
                            <Mail size={14} />
                            <span>البريد الإلكتروني</span>
                        </label>
                     </div>

                     {/* Password Input */}
                     <div className="relative group">
                        <input 
                            type="password" 
                            id="password"
                            className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-alsaha-green peer transition-colors placeholder-transparent"
                            placeholder="Password"
                            required
                        />
                        <label className="absolute text-sm text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-alsaha-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-2">
                            <Lock size={14} />
                            <span>كلمة المرور</span>
                        </label>
                     </div>

                     <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 mt-6 bg-alsaha-green text-black font-bold rounded-xl hover:bg-[#6bbf3a] transition-all duration-300 shadow-[0_5px_15px_rgba(114,191,68,0.2)] hover:shadow-[0_10px_25px_rgba(114,191,68,0.4)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                     >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : (
                            <>
                                <span>إنشاء الحساب</span>
                                <ArrowRight size={18} className="group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                            </>
                        )}
                     </button>
                 </form>

                 {/* Login Link */}
                 <div className="mt-8 pt-6 border-t border-white/5 text-center">
                     <p className="text-white/40 text-sm mb-4">لديك حساب بالفعل؟</p>
                     <Link href="/login" className="inline-block">
                         <span className="text-white font-bold border-b border-white/20 hover:border-alsaha-green hover:text-alsaha-green transition-all pb-0.5">
                             تسجيل الدخول
                         </span>
                     </Link>
                 </div>

             </motion.div>
        </div>
    </main>
  );
}
