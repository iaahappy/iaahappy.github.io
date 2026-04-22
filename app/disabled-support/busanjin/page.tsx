import type { Metadata } from "next";
import Link from "next/link";
import { disabilityCenterBusanjin } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "부산진구센터",
  description: disabilityCenterBusanjin.title + " 센터장 인사말 및 안내",
};

export default function BusanjinDisabledSupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <article>
        <header className="border-b border-cm-gold/30 pb-8 text-center">
          <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
            {disabilityCenterBusanjin.title}
          </h1>
          <p className="mt-4 text-xl font-medium text-cm-moss md:text-2xl">
            부산진구 주민 여러분, 그리고 방문자 여러분께
          </p>
        </header>

        <div className="mt-10 space-y-8 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
          <p>
            안녕하십니까. (법인)청목장애인활동지원 부산진구센터 웹사이트를 찾아주신 여러분께 진심으로 감사드립니다.
          </p>
          <p>
            저희 부산진구센터는 장애인분들의 인간다운 삶을 보장하기 위하여, 일상생활에 필요한 편의와 개개인의 욕구에 맞춘 복지 서비스를 제공함으로써 건강하고 안정된 일상을 누리실 수 있도록 지원하고 있습니다.
          </p>
          <p>
            신체적·정신적 이유로 혼자서 일상생활이 어려우신 장애인분들께 신변 처리, 가사 지원, 식사, 이동 및 외출 동행 등 맞춤형 활동지원 서비스를 제공합니다. 이를 통해 장애인분들이 주체적인 자립 생활을 실현하고, 활기차게 사회에 참여하시어 지역사회의 온전한 구성원으로 자리매김하실 수 있도록 돕는 것을 핵심 목표로 삼고 있습니다.
          </p>
          <p>
            나아가 저희 센터는 장애인분들이 차별받지 않고, 인간으로서의 존엄과 가치 있는 삶을 누리실 수 있도록 늘 곁을 지키겠습니다.
          </p>
          <p>
            비장애인과 장애인이 더불어 행복한 완전 통합 사회를 이루는 그날까지, 정성을 다해 여러분의 든든한 동반자가 되어 드릴 것을 약속드립니다. 부산진구의 모든 이웃과 함께 걸어가겠습니다.
          </p>
          <p>여러분의 따뜻한 관심과 애정 어린 성원을 부탁드립니다.</p>
          <p className="font-medium">감사합니다.</p>
        </div>

        <footer className="mt-12 border-t border-cm-ink/10 pt-10 text-right">
          <p className="text-lg text-cm-deep md:text-xl">
            (법인)청목장애인활동지원 부산진구센터장 김 선 주 올림
          </p>
        </footer>
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
              href="/disabled-support/busanjin/info"
            >
              센터 소개
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
