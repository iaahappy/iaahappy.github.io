import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "후원 안내",
  description: "청목원 후원 안내",
};

export default function DonationPage() {
  return <PlaceholderPage title="후원 안내" />;
}
