import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "이사회 회의록",
  description: "사회복지법인 청목원 이사회 회의록",
};

export default function BoardPage() {
  return <PlaceholderPage title="이사회 회의록" />;
}
