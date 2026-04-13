import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "공지사항",
  description: "청목원 공지사항",
};

export default function NoticePage() {
  return <PlaceholderPage title="공지사항" />;
}
