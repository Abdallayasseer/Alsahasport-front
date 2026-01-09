import type { Metadata } from 'next';
import LiveClientPage from './LiveClientPage';

export const metadata: Metadata = {
  title: "بث مباشر",
  description: "شاهد قنواتك المفضلة الآن. بث حي ومباشر بدون تقطيع لجميع الدوريات العالمية.",
};

export default function LivePage() {
  return <LiveClientPage />;
}
