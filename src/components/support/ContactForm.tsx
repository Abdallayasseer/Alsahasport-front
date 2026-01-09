"use client";

import { Send, User, Mail, MessageSquare } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  return (
    <div className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <MessageSquare className="text-alsaha-green" size={24} />
            تواصل معنا مباشرة
        </h3>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
                <Input 
                    label="الاسم الكامل" 
                    placeholder="أدخل اسمك..." 
                    icon={User}
                />
                <Input 
                    label="البريد الإلكتروني" 
                    placeholder="example@mail.com" 
                    type="email"
                    icon={Mail}
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ms-1">الرسالة</label>
                <textarea 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[120px] text-white placeholder:text-white/30 focus:outline-none focus:border-alsaha-green/50 focus:ring-1 focus:ring-alsaha-green/50 transition-all resize-none"
                    placeholder="اكتب استفسارك هنا..."
                />
            </div>

            <Button 
                variant="primary" 
                className="w-full shadow-lg hover:shadow-alsaha-green/20"
                rightIcon={<Send size={18} />}
            >
                إرسال الرسالة
            </Button>
        </form>
    </div>
  );
}
