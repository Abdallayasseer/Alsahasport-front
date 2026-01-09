import type { Metadata } from 'next';
import MatchesClientPage from './MatchesClientPage';

export const metadata: Metadata = {
  title: "جدول المباريات",
  description: "تعرف على مواعيد مباريات اليوم، النتائج المباشرة، والقنوات الناقلة.",
};

export default function MatchesPage() {
  return <MatchesClientPage />;
}
