import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소통 공간",
  description: "공지사항 · 활동 갤러리",
};

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-24">
      <h1 className="font-myeongjo text-3xl font-bold text-cm-deep md:text-4xl">
        소통 공간
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-cm-ink">
        공지와 활동 소식을 전합니다. 하위 페이지는 준비 중입니다.
      </p>
      <ul className="mt-10 space-y-3 text-base text-cm-deep">
        <li>
          <Link className="underline underline-offset-4 hover:text-cm-gold" href="/community/notice">
            공지사항
          </Link>
        </li>
        <li>
          <Link className="underline underline-offset-4 hover:text-cm-gold" href="/community/gallery">
            활동 갤러리
          </Link>
        </li>
      </ul>
    </div>
  );
}
