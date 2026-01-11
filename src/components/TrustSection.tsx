"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function TrustSection() {
  return (
    <section className="py-20 bg-dark-base relative overflow-hidden border-t border-white/5">
       {/* Ambient Light */}
       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-alsaha-green/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            لماذا يثق بنا أكثر من <span className="text-alsaha-green">15,000+ مشترك</span>؟
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
             {[
               { value: "100%", label: "ضمان التشغيل" },
               { value: "+10 سنوات", label: "خبرة في المجال" },
               { value: "24/7", label: "دعم فني سريع" },
               { value: "4K", label: "أعلى جودة بث" }
             ].map((stat, idx) => (
               <div key={idx} className="flex flex-col items-center">
                 <span className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</span>
                 <span className="text-text-secondary text-sm">{stat.label}</span>
               </div>
             ))}
          </div>

          <div className="mt-16">
             <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent w-full max-w-2xl h-[1px]"></div>
             <div className="mt-12">
               <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
                 جاهز لبدء التجربة؟
               </h3>
               <Link href="/subscription">
                 <Button 
                    size="lg" 
                    className="shadow-[0_10px_40px_rgba(114,191,68,0.3)] text-xl h-16 px-12 rounded-2xl"
                 >
                   اشترك الآن
                 </Button>
               </Link>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
