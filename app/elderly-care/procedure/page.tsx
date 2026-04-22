import type { Metadata } from "next";
import { elderlyCareCenter } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "이용 절차",
  description: "재가노인요양 장기요양급여 이용 절차",
};

const stepsOverview = [
  { n: "①", label: "장기요양 인정 신청" },
  { n: "②", label: "센터 상담 및 계약" },
  { n: "③", label: "서비스 이용" },
  { n: "④", label: "본인부담금 납부" },
] as const;

export default function ElderlyProcedurePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <header className="border-b border-cm-gold/30 pb-8 text-center">
        <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
          이용 절차
        </h1>
        <p className="mt-4 text-base text-cm-moss md:text-lg">
          재가노인요양 — 장기요양급여
        </p>
      </header>

      <div className="mt-10 space-y-10 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
        <p>
          청목노인요양센터의 서비스는 「노인장기요양보험법」에 따른 장기요양급여
          제공 절차에 따라 진행됩니다. 처음이신 분도 걱정 없으시도록, 단계마다
          저희가 안내해 드립니다.
        </p>

        <section className="space-y-5">
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            <span className="mr-2" aria-hidden>
              📋
            </span>
            이용 절차 4단계
          </h2>
          <p
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 rounded-md border border-cm-ink/15 bg-cm-cream/40 px-4 py-5 text-center text-base leading-snug md:text-lg"
            aria-label="이용 절차 네 단계 요약"
          >
            {stepsOverview.map((step, i) => (
              <span key={step.n} className="inline-flex flex-wrap items-center gap-x-1">
                <span className="whitespace-nowrap font-medium text-cm-deep">
                  {step.n} {step.label}
                </span>
                {i < stepsOverview.length - 1 && (
                  <span className="mx-1 text-cm-moss" aria-hidden>
                    →
                  </span>
                )}
              </span>
            ))}
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
          <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
            STEP 1 — 장기요양 인정 신청
          </h3>
          <p>
            국민건강보험공단에 노인장기요양 인정을 신청하여 장기요양 등급 판정을
            받으십니다.
          </p>
          <p className="rounded-md bg-cm-cream/60 px-4 py-3 text-base md:text-lg">
            <span aria-hidden>📞 </span>
            국민건강보험공단 노인장기요양보험{" "}
            <a
              href="tel:1577-1000"
              className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
            >
              ☎ 1577-1000
            </a>
            {" · "}
            <a
              href="https://www.longtermcare.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
            >
              www.longtermcare.or.kr
            </a>
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
          <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
            STEP 2 — 센터 상담 및 계약
          </h3>
          <p>
            등급 판정서를 가지고 청목노인요양센터로 연락 주시면, 어르신의 건강
            상태와 가정 환경을 함께 살펴본 뒤 맞춤형 서비스 계획을 세우고 이용
            계약을 체결합니다.
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
          <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
            STEP 3 — 서비스 이용
          </h3>
          <p>
            계획된 일정에 맞춰 전담 요양보호사가 댁으로 방문하여 신체활동·가사활동
            등 필요한 서비스를 제공합니다. 서비스 내용은 어르신의 상태 변화에 따라
            조정이 가능합니다.
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
          <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
            STEP 4 — 본인부담금 납부
          </h3>
          <p>
            「노인장기요양보험법」 제40조에 따라, 장기요양급여비용 중 일정 비율의
            본인일부부담금을 센터에 납부하시면 됩니다(재가급여 일반적으로 15%).
          </p>
        </section>

        <section className="space-y-4 rounded-md border border-cm-sage/40 bg-cm-cream/50 px-5 py-6 md:px-6">
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            <span className="mr-2" aria-hidden>
              💙
            </span>
            본인부담금 경감 안내
          </h2>
          <p>
            소득·재산 기준에 따라 생계곤란자 등에 해당하는 경우, 국민건강보험공단에
            신청하여 본인부담금을 감경받으실 수 있습니다. 자세한 사항은 센터로
            문의해 주시면 안내해 드리겠습니다.
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
            어르신 돌봄, 혼자 고민하지 마세요. 청목노인요양센터가 함께하겠습니다.
          </p>
          <dl className="space-y-3 text-base md:text-lg">
            <div>
              <dt className="font-semibold text-cm-moss">전화 상담</dt>
              <dd>노인요양센터 전용 번호는 별도 안내 예정입니다.</dd>
            </div>
            <div>
              <dt className="font-semibold text-cm-moss">운영 시간</dt>
              <dd>평일 09:00 ~ 18:00</dd>
            </div>
            <div>
              <dt className="font-semibold text-cm-moss">주소</dt>
              <dd>
                {elderlyCareCenter.address}
                <span className="mt-2 block text-base text-cm-moss">
                  ※ {elderlyCareCenter.addressNote}
                </span>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </article>
  );
}
