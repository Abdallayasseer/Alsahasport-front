"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
      {/* Primary Green Aurora - DESKTOP ONLY - Static */}
      <div className="hidden md:block absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-alsaha-green blur-[150px] rounded-full opacity-15" />

      {/* Secondary Deep Aurora - DESKTOP ONLY - Static */}
      <div className="hidden md:block absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] bg-[#5da335] blur-[180px] rounded-full opacity-10" />

      {/* Mobile PURE STATIC Fallback - No Blur, No Animation */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-alsaha-green/5 to-transparent pointer-events-none" />

      {/* Bottom Ambience */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}
