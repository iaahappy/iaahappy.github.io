import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "정보공개",
  description: "예결산 공고 · 이사회 회의록",
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-24">
      <h1 className="font-myeongjo text-3xl font-bold text-cm-deep md:text-4xl">
        정보공개
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-cm-ink">
        법인 운영 정보를 투명하게 안내합니다. 세부 페이지는 준비 중입니다.
      </p>
      <ul className="mt-10 space-y-3 text-base text-cm-deep">
        <li>
          <Link className="underline underline-offset-4 hover:text-cm-gold" href="/disclosure/budget">
            예결산 공고
          </Link>
        </li>
        <li>
          <Link className="underline underline-offset-4 hover:text-cm-gold" href="/disclosure/board">
            이사회 회의록
          </Link>
        </li>
      </ul>
    </div>
  );
}
