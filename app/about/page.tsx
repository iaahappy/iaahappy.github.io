import type { Metadata } from "next";
import { AboutAnchorNav } from "@/components/about/AboutAnchorNav";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutNameOrigin } from "@/components/about/AboutNameOrigin";
import { AboutSpirit } from "@/components/about/AboutSpirit";
import { AboutSymbol } from "@/components/about/AboutSymbol";
import { AboutServicesPreview } from "@/components/about/AboutServicesPreview";

export const metadata: Metadata = {
  title: "법인 소개",
  description:
    "사회복지법인 청목원(青沐園)의 명칭 유래, 설립 정신, 상징 청목나무를 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <AboutAnchorNav />
      <AboutHero />
      <AboutNameOrigin />
      <AboutSpirit />
      <AboutSymbol />
      <AboutServicesPreview />
    </>
  );
}
