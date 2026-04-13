import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "센터 소개",
  description: "청목노인요양센터 소개",
};

const promises = [
  {
    icon: "🌿",
    text: "어르신의 존엄 — 한 분 한 분을 인생의 선배로 존중하며 모십니다.",
  },
  {
    icon: "🏠",
    text: "정든 집에서의 돌봄 — 익숙한 공간에서 편안하게 노후를 보내시도록 돕습니다.",
  },
  {
    icon: "💚",
    text: "가족의 짐을 함께 — 수발로 지친 가족의 부담을 나누어 모두의 삶의 질을 높입니다.",
  },
] as const;

export default function ElderlyInfoPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <header className="border-b border-cm-gold/30 pb-8 text-center">
        <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
          청목노인요양센터
        </h1>
        <p className="mt-4 text-lg font-medium leading-relaxed text-cm-moss md:text-xl">
          어르신의 가정에서, 가족과 함께하는 따뜻한 돌봄
        </p>
      </header>

      <div className="mt-10 space-y-8 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
        <p>
          안녕하세요. 사회복지법인 청목원 산하 청목노인요양센터입니다. 저희 센터는
          고령이나 노인성 질병(치매·중풍 등)으로 인해 가정에서 혼자 일상생활을
          이어가기 어려우신 어르신을 위한 전문 재가(在家)노인복지시설입니다. 전문
          교육을 이수한 요양보호사가 어르신 댁으로 직접 찾아뵙고, 건강한 노후와
          안정된 생활을 도와드립니다.
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
          청목(靑沐) — &ldquo;항상 푸르고 깨끗하게 한결같으라&rdquo; 는 이름의 뜻
          그대로, 한결같은 마음으로 어르신 곁을 지키겠습니다.
        </p>
      </div>
    </article>
  );
}
