"use client";

export default function NoiseOverlay() {
  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] mix-blend-normal md:mix-blend-overlay"
      style={{
        backgroundImage: "url('/images/pattern.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "300px",
      }}
    />
  );
}
