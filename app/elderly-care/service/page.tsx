import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 안내",
  description: "재가노인요양 방문요양·방문목욕 서비스 안내",
};

const visitCareRows = [
  {
    category: "신체활동 지원",
    detail:
      "세면·옷 갈아입기·식사·이동 도움, 체위 변경, 복약 보조 등",
  },
  {
    category: "가사활동 지원",
    detail: "취사, 청소, 세탁, 주변 정돈, 생활 필수품 구매 동행 등",
  },
  {
    category: "정서 지원",
    detail: "말벗, 산책 동행, 인지활동 보조 등",
  },
] as const;

const recommendedFor = [
  "장기요양등급(1~5등급, 인지지원등급)을 받으신 어르신",
  "거동이 불편하시거나 치매·중풍 등으로 일상생활에 도움이 필요한 어르신",
  "가족이 직장·건강 등의 사유로 지속적인 수발이 어려운 가정",
] as const;

export default function ElderlyServicePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <header className="border-b border-cm-gold/30 pb-8 text-center">
        <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
          서비스 안내
        </h1>
        <p className="mt-4 text-base text-cm-moss md:text-lg">
          재가노인요양 — 방문요양 · 방문목욕
        </p>
      </header>

      <div className="mt-10 space-y-10 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
        <p>
          청목노인요양센터는 「노인복지법」 및 「노인장기요양보험법」에 근거하여,
          어르신의 상태에 맞춘 맞춤형 장기요양급여 서비스를 제공합니다.
        </p>

        <section className="space-y-4">
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            <span className="mr-2" aria-hidden>
              🏡
            </span>
            방문요양 서비스
          </h2>
          <p>
            전문 교육을 이수한 요양보호사가 어르신 댁에 직접 방문하여 일상생활을
            도와드립니다.
          </p>
          <div className="overflow-x-auto rounded-md border border-cm-ink/15 bg-cm-cream/40">
            <table className="w-full min-w-[20rem] border-collapse text-left text-base md:text-lg">
              <thead>
                <tr className="border-b border-cm-ink/15 bg-cm-paper">
                  <th
                    scope="col"
                    className="px-4 py-3 font-semibold text-cm-deep md:w-[28%]"
                  >
                    구분
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-cm-deep">
                    주요 내용
                  </th>
                </tr>
              </thead>
              <tbody>
                {visitCareRows.map((row) => (
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
              🛁
            </span>
            방문목욕 서비스
          </h2>
          <p>
            청결한 위생 관리와 쾌적한 생활환경을 위해, 목욕 전용 차량 등을 활용한
            전문 목욕 서비스를 제공합니다. 방문요양과 병행하여 어르신의 상태와 가정
            여건에 맞게 이용하실 수 있습니다.
          </p>
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
  );
}
