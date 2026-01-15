"use client";

import { Zap, Tv, Globe, Headset } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "سيرفرات مستقرة",
      desc: "بنية تحتية مصممة للاستقرار والتوافر المستمر."
    },
    {
      icon: Tv,
      title: "جودة بث عالية",
      desc: "دقة تصل إلى 4K Ultra HD مع دعم HDR."
    },
    {
      icon: Globe,
      title: "تغطية شاملة",
      desc: "49 قناة رياضية مباشرة وتغطية للدوريات العالمية."
    },
    {
      icon: Headset,
      title: "دعم فني متواصل",
      desc: "فريق دعم متاح على مدار 24 ساعة."
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header - Mobile: Visible, Desktop: Fade Up */}
        <div className="text-center mb-16 md:mb-20 opacity-100 md:opacity-0 md:animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            ما يميز{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-alsaha-green to-white">
              الخدمة
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            مميزات مصممة للوضوح والاستقرار
          </p>
        </div>

        {/* Feature Cards Grid - Mobile: Visible, Desktop: Staggered Fade In + Hover Lift */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="flex flex-col p-8 rounded-2xl bg-black/30 border border-white/5 opacity-100 md:opacity-0 md:animate-fade-in md:hover:-translate-y-2 md:hover:border-white/10 md:transition-all md:duration-300"
              style={{ 
                // @ts-expect-error CSS custom property
                '--animation-delay': `${idx * 100}ms`,
                animationDelay: 'var(--animation-delay)'
              }}
            >
              <div className="p-4 bg-alsaha-green/10 rounded-xl w-fit mb-6">
                <feature.icon size={32} className="text-alsaha-green" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
