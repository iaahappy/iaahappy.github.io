import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardList, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "홈",
  description:
    "사회복지법인 청목원 — 재가노인요양·장애인활동지원. 맑고 화목한 기운으로 한결같이.",
};

const notices = [
  { date: "2026.04.01", title: "[안내] 봄맞이 건강 프로그램 일정(예시)" },
  { date: "2026.03.15", title: "[공지] 이용 안내 변경 사항(예시)" },
  { date: "2026.03.01", title: "[알림] 자원봉사 모집(예시)" },
];

export default function HomePage() {
  return (
    <div className="bg-cm-paper">
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cm-gold">
          사회복지법인 청목원
        </p>
        <h1 className="font-myeongjo mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-cm-deep md:text-5xl">
          맑고 화목한 기운으로,
          <br />
          한결같이
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cm-ink md:text-xl">
          청목(青沐)은 항상 푸르고 깨끗하게 한결같으라는 뜻을 담고 있습니다. 재가노인요양과
          장애인활동지원으로 지역과 함께 걷겠습니다.
        </p>
        <Link
          href="/about"
          className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-md border-2 border-cm-deep bg-cm-deep px-6 text-base font-semibold text-cm-cream transition-colors hover:bg-cm-deep/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cm-gold"
        >
          법인 소개
          <ArrowRight className="size-5" aria-hidden />
        </Link>
      </section>

      <section className="border-t border-cm-ink/10 bg-cm-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="font-myeongjo text-2xl font-bold text-cm-deep md:text-3xl">
            주요 사업
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-cm-moss">
            가족과 이웃을 위한 돌봄 서비스를 안내합니다.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Link
              href="/elderly-care"
              className="group flex flex-col rounded-lg border border-cm-moss/20 bg-cm-paper p-8 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cm-gold"
            >
              <HeartHandshake
                className="size-12 text-cm-gold"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="font-myeongjo mt-6 text-2xl font-bold text-cm-deep">
                재가노인요양센터
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-cm-ink">
                가정에서의 편안한 돌봄과 전문 요양 서비스를 연결합니다.
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-base font-semibold text-cm-deep group-hover:underline">
                자세히 보기
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
            <Link
              href="/disabled-support"
              className="group flex flex-col rounded-lg border border-cm-moss/20 bg-cm-paper p-8 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cm-gold"
            >
              <ClipboardList
                className="size-12 text-cm-gold"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="font-myeongjo mt-6 text-2xl font-bold text-cm-deep">
                장애인활동지원센터
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-cm-ink">
                일상 속 자립과 참여를 응원하는 맞춤 활동지원을 제공합니다.
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-base font-semibold text-cm-deep group-hover:underline">
                자세히 보기
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-myeongjo text-2xl font-bold text-cm-deep md:text-3xl">
              최신 공지사항
            </h2>
            <p className="mt-2 text-lg text-cm-moss">법인의 주요 소식을 전해 드립니다.</p>
          </div>
          <Link
            href="/community/notice"
            className="inline-flex min-h-11 items-center text-base font-semibold text-cm-deep underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cm-gold"
          >
            전체보기
          </Link>
        </div>
        <ul className="mt-10 divide-y divide-cm-ink/10 border border-cm-ink/10 bg-cm-cream/50">
          {notices.map((n) => (
            <li key={n.title}>
              <span className="flex flex-col gap-1 px-5 py-5 md:flex-row md:items-center md:gap-8">
                <time
                  className="shrink-0 text-base font-medium text-cm-moss"
                  dateTime={n.date.replace(/\./g, "-")}
                >
                  {n.date}
                </time>
                <span className="text-lg text-cm-ink">{n.title}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
