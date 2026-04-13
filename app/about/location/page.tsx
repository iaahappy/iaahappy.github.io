import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "사회복지법인 청목원 오시는 길",
};

export default function LocationPage() {
  return <PlaceholderPage title="오시는 길" />;
}
