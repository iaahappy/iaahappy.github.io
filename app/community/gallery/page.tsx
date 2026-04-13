import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "활동 갤러리",
  description: "청목원 활동 갤러리",
};

export default function GalleryPage() {
  return <PlaceholderPage title="활동 갤러리" />;
}
