import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "인사말",
  description: "사회복지법인 청목원 설립자 인사말",
};

export default function GreetingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <header className="border-b border-cm-gold/30 pb-8 text-center">
        <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
          인사말
        </h1>
        <p className="mt-4 text-xl font-medium text-cm-moss">방문자 여러분께</p>
      </header>

      <div className="mt-10 space-y-8 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
        <p>
          안녕하십니까. 사회복지법인 청목원 웹사이트를 찾아주신 여러분께 진심으로
          감사드립니다.
        </p>
        <p>
          저의 아호(雅號)이기도 한 &lsquo;청목(青沐)&rsquo; 은 &ldquo;항상 푸르고 깨끗하게
          한결같으라&rdquo; 는 뜻을 담고 있습니다. 맑은 하늘과 바다처럼 깨끗한 마음으로 몸과
          뜻을 가다듬고, 정성을 다해 인생을 정진(精進)하겠다는 다짐이 그 안에 있습니다.
        </p>
        <p>
          저는 40여 년간 공직에서 사회복지 업무를 수행하며, 어느 누구도 차별받지 않고
          인간답게, 동등하게 행복을 누릴 수 있어야 한다는 믿음을 마음 깊이 간직해
          왔습니다. 퇴직 후, 오랜 결심을 실천에 옮기고자 제 재산을 사회에 환원하여
          2010년 5월 6일, 사회복지법인 청목원을 설립하였습니다.
        </p>
        <p>
          청목원은 신체적·정신적 어려움으로 일상생활이 힘드신 어르신과 장애인분들께
          필요한 돌봄과 재활 서비스를 제공하고 있습니다. 어르신들께서 건강하고 안정된
          노후를 보내시도록 돕고, 장애인분들의 자립과 사회복귀를 지원하며, 가족분들의
          짐을 함께 나눔으로써 삶의 질을 높이는 데 보탬이 되고자 합니다.
        </p>
        <p>
          앞으로도 청목원은 소외된 이웃이 사회의 온전한 구성원으로서 활기차고 안정된
          삶을 영위하실 수 있도록 한결같은 마음으로 최선을 다하겠습니다. 여러분의 따뜻한
          관심과 애정 어린 성원을 부탁드립니다.
        </p>
        <p className="font-medium">감사합니다.</p>
      </div>

      <footer className="mt-14 border-t border-cm-ink/10 pt-10 text-right">
        <p className="text-lg text-cm-deep md:text-xl">
          사회복지법인 청목원 설립자 김 명 수 드림
        </p>
      </footer>
    </article>
  );
}
