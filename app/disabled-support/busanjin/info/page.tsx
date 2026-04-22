import type { Metadata } from "next";
import Link from "next/link";
import { disabilityCenterBusanjin } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "센터 소개",
  description: disabilityCenterBusanjin.title + " 소개",
};

const promises = [
  {
    icon: "🌱",
    text: "자립(自立) — 장애인분이 삶의 주인공으로서 주체적으로 살아가시도록 돕습니다.",
  },
  {
    icon: "🤝",
    text: "참여(參與) — 지역사회의 온전한 구성원으로서 함께 어울리시도록 연결합니다.",
  },
  {
    icon: "💙",
    text: "가족의 짐을 함께 — 가족의 신체적·심리적·경제적 부담을 나누어 안정된 가정을 지킵니다.",
  },
] as const;

export default function BusanjinDisabledInfoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <article>
        <header className="border-b border-cm-gold/30 pb-8 text-center">
          <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
            {disabilityCenterBusanjin.title}
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-cm-moss md:text-xl">
            나답게 살아갈 권리, 곁에서 함께 지켜드립니다
          </p>
        </header>

        <div className="mt-10 space-y-8 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
          <p>
            안녕하세요. 사회복지법인 청목원 산하 청목 장애인활동지원센터입니다.
            저희 센터는 신체적·정신적 이유로 일상생활과 사회활동에 도움이 필요한
            장애인분들께 전문적인 돌봄과 활동보조 서비스를 제공하는 기관입니다.
            전문 교육을 이수한 활동지원사가 이용자분께 직접 찾아뵙고, 스스로
            살아가는 힘과 지역사회 안에서의 참여를 가까이에서 돕습니다.
          </p>
          <p className="font-medium text-cm-deep">
            저희는 아래 세 가지를 가장 중요한 약속으로 삼고 있습니다.
          </p>
          <ul className="list-none space-y-5 pl-0">
            {promises.map(({ icon, text }) => (
              <li key={text} className="flex gap-3">
                <span className="shrink-0 select-none text-xl" aria-hidden>
                  {icon}
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <p className="border-t border-cm-ink/10 pt-8 font-medium text-cm-deep">
            청목(靑沐) — &ldquo;항상 푸르고 깨끗하게 한결같으라&rdquo; 는 이름의
            뜻 그대로, 이용자 한 분 한 분의 곁에서 한결같이 함께하겠습니다.
          </p>
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
              href="/disabled-support/busanjin/service"
            >
              서비스 안내
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
