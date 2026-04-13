import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "예결산 공고",
  description: "사회복지법인 청목원 예결산 공고",
};

export default function BudgetPage() {
  return <PlaceholderPage title="예결산 공고" />;
}
