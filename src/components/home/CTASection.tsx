"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-alsaha-green/20 via-black to-black md:from-alsaha-green/10" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="bg-gradient-to-r from-alsaha-green/20 to-transparent border border-alsaha-green/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                
                <div className="text-center md:text-right max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                        جاهز لتبدأ المتعة؟ <br/>
                        <span className="text-alsaha-green">اشترك الآن في ثواني.</span>
                    </h2>
                    <p className="text-white/70 text-lg">
                        انضم إلى آلاف المشتركين واستمتع بأقوى الدوريات العالمية بجودة لم تعهدها من قبل.
                    </p>
                </div>

                <div className="flex-shrink-0">
                    <Link href="/subscription">
                        <Button 
                            variant="default" 
                            size="lg" 
                            className="bg-white text-black hover:bg-white/90 border-transparent shadow-[0_0_30px_rgba(255,255,255,0.2)] px-6 py-4 md:px-10 md:py-6 text-base md:text-lg whitespace-nowrap w-full md:w-auto"
                            rightIcon={<ArrowRight />}
                        >
                            ابدأ اشتراكك اليوم
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    </section>
  );
}
