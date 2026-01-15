"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, SearchX } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* 🏟️ Background Atmosphere */}
      <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=2676&auto=format&fit=crop"
            alt="Empty Stadium"
            fill
            className="object-cover opacity-10 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
      </div>

      <div className="text-center relative z-10 max-w-lg mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* 404 Big Text */}
            <h1 className="text-[10rem] md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none select-none">
                404
            </h1>

            <div className="relative -mt-12 md:-mt-16 mb-8">
                <div className="w-20 h-20 bg-alsaha-green/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-alsaha-green/20 backdrop-blur-md">
                    <SearchX size={40} className="text-alsaha-green" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                    أطفئت الأنوار!
                </h2>
                <p className="text-white/40 text-lg leading-relaxed">
                    يبدو أن المباراة التي تبحث عنها قد انتهت أو أن الصفحة غير موجودة حالياً.
                </p>
            </div>

            <div className="flex justify-center gap-4">
                <Link href="/">
                    <Button 
                        variant="default" 
                        size="lg"
                        className="shadow-[0_0_20px_rgba(114,191,68,0.15)] hover:shadow-[0_0_40px_rgba(114,191,68,0.3)]"
                        rightIcon={<Home size={18} />}
                    >
                        العودة للرئيسية
                    </Button>
                </Link>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
