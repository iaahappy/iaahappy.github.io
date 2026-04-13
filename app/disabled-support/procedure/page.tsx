import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "이용 절차",
  description: "장애인활동지원급여 이용 절차",
};

const stepsOverview = [
  { n: "①", main: "신청 및", sub: "자격 결정" },
  { n: "②", main: "센터", sub: "상담" },
  { n: "③", main: "이용 계약", sub: "체결" },
  { n: "④", main: "활동지원사", sub: "매칭" },
  { n: "⑤", main: "서비스 이용", sub: "및 결제" },
] as const;

export default function DisabledProcedurePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <header className="border-b border-cm-gold/30 pb-8 text-center">
        <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
          이용 절차
        </h1>
        <p className="mt-4 text-base text-cm-moss md:text-lg">
          장애인활동지원 — 활동지원급여
        </p>
      </header>

      <div className="mt-10 space-y-10 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
        <p>
          장애인활동지원 서비스는 관련 법령과 지침에 따라 체계적이고 안전하게
          제공됩니다. 처음 이용하시는 분도 걱정 없으시도록, 단계마다 저희가 함께
          안내해 드립니다.
        </p>

        <section className="space-y-5">
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            <span className="mr-2" aria-hidden>
              📋
            </span>
            이용 절차 5단계
          </h2>

          <div
            className="md:hidden space-y-5 rounded-md border border-cm-ink/15 bg-cm-cream/40 px-4 py-5"
            aria-label="이용 절차 다섯 단계 요약"
          >
            {stepsOverview.map((step, i) => (
              <div key={step.n}>
                <div className="text-center">
                  <p className="font-medium text-cm-deep">
                    {step.n} {step.main}
                  </p>
                  <p className="mt-0.5 text-base text-cm-moss">{step.sub}</p>
                </div>
                {i < stepsOverview.length - 1 && (
                  <p className="mt-4 text-center text-cm-moss" aria-hidden>
                    →
                  </p>
                )}
              </div>
            ))}
          </div>

          <div
            className="hidden flex-wrap items-start justify-center gap-x-1 gap-y-3 rounded-md border border-cm-ink/15 bg-cm-cream/40 px-4 py-5 text-center md:flex"
            aria-label="이용 절차 다섯 단계 요약"
          >
            {stepsOverview.map((step, i) => (
              <Fragment key={`${step.n}-${step.main}`}>
                <div className="flex min-w-[6.5rem] shrink-0 flex-col items-center px-1">
                  <p className="font-medium leading-snug text-cm-deep">
                    {step.n} {step.main}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-cm-moss md:text-base">
                    {step.sub}
                  </p>
                </div>
                {i < stepsOverview.length - 1 && (
                  <span
                    className="mt-2 shrink-0 px-0.5 text-cm-moss md:mt-3"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </section>

        <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
          <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
            STEP 1 — 신청 및 자격 결정
          </h3>
          <p>
            거주지 읍·면·동 행정복지센터 또는 국민연금공단에 활동지원급여를
            신청하시면, 심사를 거쳐 「활동지원 수급자격 결정통지서」와 「표준급여
            이용계획서」를 발급받으십니다.
          </p>
          <p className="rounded-md bg-cm-cream/60 px-4 py-3 text-base md:text-lg">
            <span aria-hidden>📞 </span>
            국민연금공단 장애인활동지원{" "}
            <a
              href="tel:1355"
              className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
            >
              ☎ 1355
            </a>
            {" · "}
            <a
              href="https://www.ableservice.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
            >
              www.ableservice.or.kr
            </a>
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
          <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
            STEP 2 — 센터 상담
          </h3>
          <p>
            발급받으신 서류를 가지고 청목 장애인활동지원센터로 연락 주시면, 수급자
            본인 확인, 급여 구간, 희망하시는 서비스 내용을 함께 꼼꼼히 살펴봅니다.
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
          <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
            STEP 3 — 이용 계약 체결
          </h3>
          <p>
            상담 내용을 바탕으로 이용자의 요구와 상태를 반영한 「활동지원급여
            제공계획서」를 수립하고, 상호 협력 동의서와 급여 제공 계약서를
            작성합니다.
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
          <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
            STEP 4 — 활동지원사 매칭
          </h3>
          <p>
            이용자의 요구사항, 가정환경, 서비스 내용을 종합적으로 고려하여 가장
            적합한 전문 활동지원사를 연계해 드립니다. 매칭 이후에도 필요에 따라
            조정이 가능합니다.
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
          <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
            STEP 5 — 서비스 이용 및 결제
          </h3>
          <p>
            계획된 일정에 맞춰 활동지원사가 방문하여 서비스를 제공해 드립니다. 이용
            요금은 서비스 시작과 종료 시점에 바우처 카드와 전용 단말기를 통해
            결제됩니다.
          </p>
        </section>

        <section className="space-y-4 rounded-md border border-cm-sage/40 bg-cm-cream/50 px-5 py-6 md:px-6">
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            <span className="mr-2" aria-hidden>
              💙
            </span>
            본인부담금 안내
          </h2>
          <p>
            활동지원급여 이용 시 본인부담금이 발생할 수 있으며, 소득 수준에 따라
            차등 적용됩니다. 자세한 사항은 「장애인활동 지원에 관한 법률」 및
            보건복지부 고시에 따르며, 센터로 문의해 주시면 친절히 안내해
            드리겠습니다.
          </p>
        </section>

        <section className="space-y-5 border-t border-cm-gold/30 pt-10">
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            <span className="mr-2" aria-hidden>
              📞
            </span>
            문의 · 상담
          </h2>
          <p className="font-medium text-cm-deep">
            장애인 돌봄과 자립, 혼자 고민하지 마세요. 청목 장애인활동지원센터가
            함께하겠습니다.
          </p>
          <dl className="space-y-3 text-base md:text-lg">
            <div>
              <dt className="font-semibold text-cm-moss">전화 상담</dt>
              <dd>[센터 대표번호 자리표시자]</dd>
            </div>
            <div>
              <dt className="font-semibold text-cm-moss">운영 시간</dt>
              <dd>평일 09:00 ~ 18:00</dd>
            </div>
            <div>
              <dt className="font-semibold text-cm-moss">주소</dt>
              <dd>[센터 주소 자리표시자]</dd>
            </div>
          </dl>
        </section>
      </div>
    </article>
  );
}
