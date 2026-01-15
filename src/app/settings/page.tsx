"use client";

import { motion } from "framer-motion";
import { User, Bell, Shield, Moon, Globe, ChevronRight, LogOut, Smartphone, HelpCircle, FileText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// ----------------------------------------------------------------------
// Reusable Components
// ----------------------------------------------------------------------

const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button 
        onClick={onChange}
        className={`w-12 h-7 rounded-full relative transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-alsaha-green/50 ${checked ? 'bg-alsaha-green' : 'bg-white/10'}`}
    >
        <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
);

const SettingsGroup = ({ title, children }: { title?: string; children: React.ReactNode }) => (
    <div className="mb-8">
        {title && <h3 className="text-sm font-bold text-white/40 mb-3 px-4 uppercase tracking-wider">{title}</h3>}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden divide-y divide-white/5">
            {children}
        </div>
    </div>
);

const SettingsItem = ({ icon: Icon, title, subtitle, rightElement, onClick, isDestructive }: any) => (
    <div 
        onClick={onClick}
        className={`w-full p-4 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group ${onClick ? 'active:bg-white/10' : ''}`}
    >
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isDestructive ? 'bg-red-500/10 text-red-500' : 'bg-white/5 text-white'}`}>
            <Icon size={16} />
        </div>
        <div className="flex-1 min-w-0 text-right">
            <h4 className={`text-base font-medium ${isDestructive ? 'text-red-500' : 'text-white'}`}>{title}</h4>
            {subtitle && <p className="text-xs text-white/40 mt-0.5 truncate">{subtitle}</p>}
        </div>
        <div className="flex-shrink-0 text-white/40">
            {rightElement || <ChevronRight size={18} className="rtl:rotate-180" />}
        </div>
    </div>
);

// ----------------------------------------------------------------------
// Page Component
// ----------------------------------------------------------------------

export default function SettingsPage() {
    const [notifications, setNotifications] = useState(true);
    const [autoPlay, setAutoPlay] = useState(true);
    const [dataSaver, setDataSaver] = useState(false);

    return (
        <main className="min-h-screen pt-24 pb-12 px-4 container mx-auto max-w-2xl">
            
            <h1 className="text-3xl font-black text-white mb-8 px-2">الإعدادات</h1>

            <SettingsGroup title="الحساب">
                <div className="p-4 flex items-center gap-4 bg-[#0A0A0A]/50">
                    <div className="w-14 h-14 rounded-full bg-white/10 relative overflow-hidden ring-2 ring-white/10">
                        <Image src="https://ui-avatars.com/api/?name=Abdullah+User&background=111&color=fff" alt="Profile" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">Abdullah Al-User</h4>
                        <p className="text-sm text-white/40">abdullah@example.com</p>
                    </div>
                    <button className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-white hover:bg-white/10 transition-colors border border-white/5">
                        تعديل
                    </button>
                </div>
            </SettingsGroup>

            <SettingsGroup title="التفضيلات">
                <SettingsItem 
                    icon={Bell} 
                    title="الإشعارات" 
                    subtitle="تنبيهات المباريات والأخبار العاجلة"
                    rightElement={<Toggle checked={notifications} onChange={() => setNotifications(!notifications)} />} 
                />
                <SettingsItem 
                    icon={Moon} 
                    title="الوضع الليلي" 
                    subtitle="مفعل دائماً"
                    rightElement={<span className="text-xs font-bold text-white/40">تلقائي</span>} 
                />
                <SettingsItem 
                    icon={Globe} 
                    title="اللغة" 
                    subtitle="تغيير لغة التطبيق"
                    rightElement={<span className="text-xs font-bold text-white/40">العربية</span>} 
                />
            </SettingsGroup>

            <SettingsGroup title="المشاهدة">
                 <SettingsItem 
                    icon={Smartphone} 
                    title="توفير البيانات" 
                    subtitle="تقليل جودة الفيديو تلقائياً"
                    rightElement={<Toggle checked={dataSaver} onChange={() => setDataSaver(!dataSaver)} />} 
                />
                 <SettingsItem 
                    icon={Image} // Using Image icon conveniently or Tv
                    title="التشغيل التلقائي" 
                    subtitle="تشغيل القنوات عند فتح الصفحة"
                    rightElement={<Toggle checked={autoPlay} onChange={() => setAutoPlay(!autoPlay)} />} 
                />
            </SettingsGroup>

            <SettingsGroup title="الدعم والمساعدة">
                <SettingsItem icon={HelpCircle} title="مركز المساعدة" />
                <SettingsItem icon={Shield} title="سياسة الخصوصية" />
                <SettingsItem icon={FileText} title="شروط الاستخدام" />
            </SettingsGroup>

            <div className="mt-8">
                <SettingsGroup>
                    <SettingsItem 
                        icon={LogOut} 
                        title="تسجيل الخروج" 
                        isDestructive 
                        rightElement={null}
                    />
                </SettingsGroup>
            </div>
            
            <div className="text-center mt-8 pb-8">
                <p className="text-xs text-white/20 font-mono">AlSaha Sport v2.0.0 (Build 592)</p>
            </div>

        </main>
    );
}
