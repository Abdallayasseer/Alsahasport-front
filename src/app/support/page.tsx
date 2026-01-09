import type { Metadata } from 'next';
import SupportClientPage from './SupportClientPage';

export const metadata: Metadata = {
  title: "مركز المساعدة",
  description: "نحن هنا لمساعدتك. تواصل مع الدعم الفني أو تصفح الأسئلة الشائعة.",
};

export default function SupportPage() {
  return <SupportClientPage />;
}
