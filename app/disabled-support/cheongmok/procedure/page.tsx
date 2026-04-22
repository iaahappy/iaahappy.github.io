import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import {
  disabilityCenterBusanjin,
  disabilityCenterDongnae,
} from "@/lib/site-contact";

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
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <article>
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
            제공됩니다. 처음 이용하시는 분도 걱정 없으시도록, 단계마다 저희가
            함께 안내해 드립니다.
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
              신청하시면, 심사를 거쳐 「활동지원 수급자격 결정통지서」와
              「표준급여 이용계획서」를 발급받으십니다.
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
              발급받으신 서류를 가지고 청목 장애인활동지원센터로 연락 주시면,
              수급자 본인 확인, 급여 구간, 희망하시는 서비스 내용을 함께 꼼꼼히
              살펴봅니다.
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
              이용자의 요구사항, 가정환경, 서비스 내용을 종합적으로 고려하여
              가장 적합한 전문 활동지원사를 연계해 드립니다. 매칭 이후에도
              필요에 따라 조정이 가능합니다.
            </p>
          </section>

          <section className="space-y-4 border-l-2 border-cm-gold/40 pl-5 md:pl-6">
            <h3 className="font-myeongjo text-lg font-bold text-cm-deep md:text-xl">
              STEP 5 — 서비스 이용 및 결제
            </h3>
            <p>
              계획된 일정에 맞춰 활동지원사가 방문하여 서비스를 제공해 드립니다.
              이용 요금은 서비스 시작과 종료 시점에 바우처 카드와 전용 단말기를
              통해 결제됩니다.
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
              활동지원급여 이용 시 본인부담금이 발생할 수 있으며, 소득 수준에
              따라 차등 적용됩니다. 자세한 사항은 「장애인활동 지원에 관한
              법률」 및 보건복지부 고시에 따르며, 센터로 문의해 주시면 친절히
              안내해 드리겠습니다.
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
              장애인 돌봄과 자립, 혼자 고민하지 마세요. 청목
              장애인활동지원센터가 함께하겠습니다.
            </p>
            <dl className="space-y-3 text-base md:text-lg">
              <div>
                <dt className="font-semibold text-cm-moss">센터장</dt>
                <dd>{disabilityCenterDongnae.director}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cm-moss">전화 상담</dt>
                <dd>
                  <a
                    href={`tel:${disabilityCenterDongnae.tel.replace(/-/g, "")}`}
                    className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
                  >
                    {disabilityCenterDongnae.tel}
                  </a>
                  {" · "}
                  Fax {disabilityCenterDongnae.fax}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-cm-moss">E-mail</dt>
                <dd>
                  <a
                    href={`mailto:${disabilityCenterDongnae.email}`}
                    className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
                  >
                    {disabilityCenterDongnae.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-cm-moss">운영 시간</dt>
                <dd>평일 09:00 ~ 18:00</dd>
              </div>
              <div>
                <dt className="font-semibold text-cm-moss">주소 (동래 센터)</dt>
                <dd>{disabilityCenterDongnae.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cm-moss">
                  {disabilityCenterBusanjin.title}
                </dt>
                <dd className="space-y-2 text-cm-ink">
                  <p>{disabilityCenterBusanjin.director}</p>
                  <p>
                    <a
                      href={`tel:${disabilityCenterBusanjin.tel.replace(/-/g, "")}`}
                      className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
                    >
                      {disabilityCenterBusanjin.tel}
                    </a>
                    {" · "}
                    Fax {disabilityCenterBusanjin.fax}
                  </p>
                  <p>
                    <a
                      href={`mailto:${disabilityCenterBusanjin.email}`}
                      className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
                    >
                      {disabilityCenterBusanjin.email}
                    </a>
                  </p>
                  <p>{disabilityCenterBusanjin.address}</p>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </article>

      <nav
        className="mt-14 border-t border-cm-gold/30 pt-10"
        aria-label="청목 장애인활동지원 하위 메뉴"
      >
        <p className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-cm-moss md:text-sm">
          안내 메뉴
        </p>
        <ul className="mt-3 flex list-none flex-wrap items-center gap-x-6 gap-y-2.5 pl-4 text-[0.98rem] font-medium text-cm-deep sm:gap-x-9 sm:pl-6 md:mt-4 md:pl-8 md:text-[1.05rem]">
          <li>
            <Link
              className="rounded-sm underline decoration-cm-gold/30 underline-offset-[5px] transition-colors hover:text-cm-gold hover:decoration-cm-gold"
              href="/disabled-support/cheongmok"
            >
              센터장 인사말
            </Link>
          </li>
          <li>
            <Link
              className="rounded-sm underline decoration-cm-gold/30 underline-offset-[5px] transition-colors hover:text-cm-gold hover:decoration-cm-gold"
              href="/disabled-support/cheongmok/info"
            >
              센터 소개
            </Link>
          </li>
          <li>
            <Link
              className="rounded-sm underline decoration-cm-gold/30 underline-offset-[5px] transition-colors hover:text-cm-gold hover:decoration-cm-gold"
              href="/disabled-support/cheongmok/service"
            >
              서비스 안내
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
