"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Link from "next/link";

export default function FloatingTelegram() {
  return (
    <Link 
      href="https://t.me/@fareedsaad" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(34, 158, 217, 0.7)",
            "0 0 0 20px rgba(34, 158, 217, 0)",
          ]
        }}
        transition={{ 
          boxShadow: {
            duration: 1.5,
            repeat: Infinity
          }
        }}
        className="w-16 h-16 bg-[#229ED9] rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer"
      >
        <Send size={32} className="-ml-1 mt-1" />
      </motion.div>
    </Link>
  );
}
