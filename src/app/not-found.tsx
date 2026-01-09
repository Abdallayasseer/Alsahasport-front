"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-base flex items-center justify-center p-4">
      <div className="text-center relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-alsaha-green/10 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                <AlertCircle size={48} className="text-alsaha-green animate-pulse" />
            </div>
            
            <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-2">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">هذه الصفحة غير موجودة</h2>
            <p className="text-text-secondary max-w-md mx-auto mb-8">
                عذراً، الرابط الذي تحاول الوصول إليه غير صحيح أو تم نقله.
            </p>

            <Link href="/">
                <Button 
                    variant="primary" 
                    className="shadow-[0_0_20px_rgba(114,191,68,0.2)] hover:shadow-[0_0_30px_rgba(114,191,68,0.4)]"
                    rightIcon={<Home size={18} />}
                >
                    العودة للرئيسية
                </Button>
            </Link>
        </motion.div>
      </div>
    </div>
  );
}
