import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스 안내",
  description: "청목 장애인활동지원 부산진구센터 서비스 안내",
};

const targetRows = [
  {
    category: "기본 대상",
    detail:
      "만 6세 이상 ~ 만 65세 미만의 「장애인복지법」상 등록 장애인 중, 활동지원급여를 신청하여 수급자로 선정된 분",
  },
  {
    category: "예외 대상",
    detail:
      "기존 활동지원급여를 이용하시다 만 65세가 도래하여 노인장기요양 인정신청을 하셨으나 ‘등급 외’ 판정을 받으신 분",
  },
] as const;

const supportRows = [
  {
    icon: "🏠",
    category: "신체활동 지원",
    detail: "개인위생 관리, 식사 도움, 실내 이동 보조, 체위 변경 등",
  },
  {
    icon: "🧺",
    category: "가사활동 지원",
    detail: "청소, 세탁, 식사 준비, 목욕 보조, 주변 정돈 등",
  },
  {
    icon: "🚶",
    category: "사회활동 지원",
    detail: "외출 동행, 출퇴근·등하교 보조, 지역사회 이용 동행 등",
  },
] as const;

const recommendedFor = [
  "혼자서 일상생활을 유지하기 어려우신 등록 장애인",
  "학교·직장 생활을 위해 꾸준한 동행 지원이 필요하신 분",
  "가족의 수발 부담으로 어려움을 겪고 계신 가정",
] as const;

export default function DisabledServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <article>
        <header className="border-b border-cm-gold/30 pb-8 text-center">
          <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
            서비스 안내
          </h1>
          <p className="mt-4 text-base text-cm-moss md:text-lg">
            장애인활동지원 — 활동보조
          </p>
        </header>

        <div className="mt-10 space-y-10 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
          <p>
            청목 장애인활동지원 부산진구센터는 「장애인활동 지원에 관한 법률」에
            근거하여, 전문 교육을 이수한 활동지원사가 이용자의 가정 또는 지정
            장소로 직접 방문해 맞춤형 서비스를 제공합니다.
          </p>

          <section className="space-y-4">
            <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
              <span className="mr-2" aria-hidden>
                👥
              </span>
              이용 대상
            </h2>
            <div className="overflow-x-auto rounded-md border border-cm-ink/15 bg-cm-cream/40">
              <table className="w-full min-w-[20rem] border-collapse text-left text-base md:text-lg">
                <thead>
                  <tr className="border-b border-cm-ink/15 bg-cm-paper">
                    <th
                      scope="col"
                      className="px-4 py-3 font-semibold text-cm-deep md:w-[22%]"
                    >
                      구분
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 font-semibold text-cm-deep"
                    >
                      대상
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {targetRows.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-cm-ink/10 last:border-0"
                    >
                      <th
                        scope="row"
                        className="align-top px-4 py-3 font-medium text-cm-moss"
                      >
                        {row.category}
                      </th>
                      <td className="px-4 py-3 text-cm-ink">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
              <span className="mr-2" aria-hidden>
                🙌
              </span>
              지원 내용
            </h2>
            <div className="overflow-x-auto rounded-md border border-cm-ink/15 bg-cm-cream/40">
              <table className="w-full min-w-[20rem] border-collapse text-left text-base md:text-lg">
                <thead>
                  <tr className="border-b border-cm-ink/15 bg-cm-paper">
                    <th
                      scope="col"
                      className="px-4 py-3 font-semibold text-cm-deep md:w-[32%]"
                    >
                      구분
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 font-semibold text-cm-deep"
                    >
                      주요 내용
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {supportRows.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-cm-ink/10 last:border-0"
                    >
                      <th
                        scope="row"
                        className="align-top px-4 py-3 font-medium"
                      >
                        <span className="mr-1.5" aria-hidden>
                          {row.icon}
                        </span>
                        <span className="text-cm-moss">{row.category}</span>
                      </th>
                      <td className="px-4 py-3 text-cm-ink">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4 rounded-md border border-cm-gold/25 bg-cm-cream/50 px-5 py-6 md:px-6">
            <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
              <span className="mr-2" aria-hidden>
                💡
              </span>
              이런 분께 권해드립니다
            </h2>
            <ul className="list-disc space-y-3 pl-6 marker:text-cm-moss">
              {recommendedFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <nav
        className="mt-14 border-t border-cm-gold/30 pt-10"
        aria-label="부산진구 장애인활동지원 하위 메뉴"
      >
        <p className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-cm-moss md:text-sm">
          안내 메뉴
        </p>
        <ul className="mt-3 flex list-none flex-wrap items-center gap-x-6 gap-y-2.5 pl-4 text-[0.98rem] font-medium text-cm-deep sm:gap-x-9 sm:pl-6 md:mt-4 md:pl-8 md:text-[1.05rem]">
          <li>
            <Link
              className="rounded-sm underline decoration-cm-gold/30 underline-offset-[5px] transition-colors hover:text-cm-gold hover:decoration-cm-gold"
              href="/disabled-support/busanjin"
            >
              센터장 인사말
            </Link>
          </li>
          <li>
            <Link
              className="rounded-sm underline decoration-cm-gold/30 underline-offset-[5px] transition-colors hover:text-cm-gold hover:decoration-cm-gold"
              href="/disabled-support/busanjin/info"
            >
              센터 소개
            </Link>
          </li>
          <li>
            <Link
              className="rounded-sm underline decoration-cm-gold/30 underline-offset-[5px] transition-colors hover:text-cm-gold hover:decoration-cm-gold"
              href="/disabled-support/busanjin/procedure"
            >
              이용 절차
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
