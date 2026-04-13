import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "장애인활동지원센터",
  description: "장애인활동지원센터 소개",
};

export default function DisabledSupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-24">
      <h1 className="font-myeongjo text-3xl font-bold text-cm-deep md:text-4xl">
        장애인활동지원센터
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-cm-ink">
        장애인활동지원센터 안내 페이지입니다. 세부 메뉴는 준비 중입니다.
      </p>
      <ul className="mt-10 space-y-3 text-base text-cm-deep">
        <li>
          <Link
            className="underline underline-offset-4 hover:text-cm-gold"
            href="/disabled-support/info"
          >
            센터 소개
          </Link>
        </li>
        <li>
          <Link
            className="underline underline-offset-4 hover:text-cm-gold"
            href="/disabled-support/service"
          >
            서비스 안내
          </Link>
        </li>
        <li>
          <Link
            className="underline underline-offset-4 hover:text-cm-gold"
            href="/disabled-support/procedure"
          >
            이용 절차
          </Link>
        </li>
      </ul>
    </div>
  );
}
