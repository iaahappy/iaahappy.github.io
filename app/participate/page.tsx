import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "나눔 참여",
  description: "후원 · 자원봉사",
};

export default function ParticipatePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-24">
      <h1 className="font-myeongjo text-3xl font-bold text-cm-deep md:text-4xl">
        나눔 참여
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-cm-ink">
        후원과 봉사로 함께해 주세요. 세부 안내는 준비 중입니다.
      </p>
      <ul className="mt-10 space-y-3 text-base text-cm-deep">
        <li>
          <Link className="underline underline-offset-4 hover:text-cm-gold" href="/participate/donation">
            후원 안내
          </Link>
        </li>
        <li>
          <Link
            className="underline underline-offset-4 hover:text-cm-gold"
            href="/participate/volunteer"
          >
            자원봉사
          </Link>
        </li>
      </ul>
    </div>
  );
}
