import type { Metadata } from 'next';
import SubscriptionClientPage from './SubscriptionClientPage';

export const metadata: Metadata = {
  title: "باقات الاشتراك",
  description: "أفضل الأسعار في العراق! اشترك الآن بـ 5000 د.ع فقط واستمتع بمشاهدة غير محدودة.",
};

export default function SubscriptionPage() {
  return <SubscriptionClientPage />;
}
