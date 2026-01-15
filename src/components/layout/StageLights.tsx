export default function StageLights() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Top Center Green Haze */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-alsaha-green/5 blur-[120px] rounded-full opacity-60 mix-blend-screen" />
            
            {/* Corner Vignettes */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-black/40 blur-[100px] rounded-full translate-x-[-30%] translate-y-[-30%]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/40 blur-[100px] rounded-full translate-x-[30%] translate-y-[-30%]" />
        </div>
    );
}
