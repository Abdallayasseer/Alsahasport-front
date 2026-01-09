"use client";

import { useState, useRef } from "react";
import { Send, User, Mail, MessageSquare, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { sendContactMessage } from "@/app/actions/contact";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    
    const result = await sendContactMessage(formData);

    setIsSending(false);

    if (result.success) {
        setStatus({ type: 'success', message: result.message });
        formRef.current?.reset();
        // Clear success message after 5 seconds
        setTimeout(() => setStatus({ type: null, message: '' }), 5000);
    } else {
        setStatus({ type: 'error', message: result.message });
    }
  };

  return (
    <div className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
        {/* Status Messages */}
        <AnimatePresence>
            {status.type && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`absolute top-0 left-0 right-0 p-4 text-center font-bold text-sm flex items-center justify-center gap-2 ${
                        status.type === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
                    }`}
                >
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    {status.message}
                </motion.div>
            )}
        </AnimatePresence>

        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 mt-2">
            <MessageSquare className="text-alsaha-green" size={24} />
            تواصل معنا مباشرة
        </h3>
        
        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
                <Input 
                    name="name"
                    label="الاسم الكامل" 
                    placeholder="أدخل اسمك..." 
                    icon={User}
                    required
                />
                <Input 
                    name="email"
                    label="البريد الإلكتروني" 
                    placeholder="example@mail.com" 
                    type="email"
                    icon={Mail}
                    required
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ms-1">الرسالة</label>
                <textarea 
                    name="message"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[120px] text-white placeholder:text-white/30 focus:outline-none focus:border-alsaha-green/50 focus:ring-1 focus:ring-alsaha-green/50 transition-all resize-none"
                    placeholder="اكتب استفسارك هنا..."
                    required
                />
            </div>

            <Button 
                variant="primary" 
                className="w-full shadow-lg hover:shadow-alsaha-green/20 disabled:opacity-70 disabled:cursor-not-allowed"
                rightIcon={isSending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                disabled={isSending}
                type="submit"
            >
                {isSending ? "جاري الإرسال..." : "إرسال الرسالة"}
            </Button>
        </form>
    </div>
  );
}
