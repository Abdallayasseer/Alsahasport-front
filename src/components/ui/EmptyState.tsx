import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
    icon?: LucideIcon;
    title: string;
    description: string;
    action?: React.ReactNode;
    className?: string;
}

export default function EmptyState({ icon: Icon, title, description, action, className }: EmptyStateProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5", className)}>
            {/* Visual Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/5 relative group">
                <div className="absolute inset-0 bg-alsaha-green/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {Icon && <Icon size={32} className="text-white/40 group-hover:text-alsaha-green group-hover:scale-110 transition-all duration-300" />}
            </div>

            {/* Text */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/40 max-w-sm mx-auto mb-8 leading-relaxed">
                {description}
            </p>

            {/* Action */}
            {action && (
                <div className="animate-fade-up">
                    {action}
                </div>
            )}
        </div>
    );
}
