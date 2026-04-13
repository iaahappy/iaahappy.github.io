import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "연혁",
  description: "사회복지법인 청목원 주요 연혁",
};

const timeline = [
  {
    year: "2010년",
    events: [
      { when: "05월 06일", detail: "사회복지법인 청목원 설립" },
      { when: "06월 01일", detail: "기관 개소" },
    ],
  },
  {
    year: "2016년",
    events: [
      {
        when: "06월 01일",
        detail: "청목장애인활동지원센터 수탁 운영 시작",
      },
    ],
  },
  {
    year: "2019년",
    events: [
      {
        when: "04월 29일",
        detail:
          "산하기관(청목장애인활동지원센터, 청목노인요양센터) 통합 사무실 이전 (부산 동래구 수안메디컬센터)",
      },
    ],
  },
  {
    year: "2021년",
    events: [
      {
        when: "04월",
        detail:
          "청목장애인활동지원센터 사무실 이전 (부산 동래구 경보이리스힐)",
      },
      {
        when: "연중",
        detail: "(법인)청목장애인활동지원 부산진구센터 개원 및 운영",
      },
    ],
  },
  {
    year: "2024년",
    events: [
      {
        when: "03월",
        detail:
          "(법인)청목노인요양센터 사무실 분리 및 확장 이전 (방문요양 및 방문목욕 사업 병행 추진)",
      },
    ],
  },
] as const;

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <header className="border-b border-cm-gold/30 pb-8 text-center">
        <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
          연혁
        </h1>
        <p className="mt-4 text-lg text-cm-moss md:text-xl">
          사회복지법인 청목원 주요 연혁
        </p>
      </header>

      <div className="mt-12 space-y-12">
        {timeline.map((block) => (
          <section key={block.year} aria-labelledby={`year-${block.year}`}>
            <h2
              id={`year-${block.year}`}
              className="font-myeongjo text-2xl font-bold text-cm-deep"
            >
              {block.year}
            </h2>
            <ul className="mt-6 space-y-5 border-l-2 border-cm-gold/40 pl-6">
              {block.events.map((ev) => (
                <li key={`${block.year}-${ev.when}-${ev.detail.slice(0, 20)}`}>
                  <p className="text-base font-semibold text-cm-gold">{ev.when}</p>
                  <p className="mt-1 text-lg leading-relaxed text-cm-ink">{ev.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
