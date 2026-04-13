import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "자원봉사",
  description: "청목원 자원봉사",
};

export default function VolunteerPage() {
  return <PlaceholderPage title="자원봉사" />;
}
