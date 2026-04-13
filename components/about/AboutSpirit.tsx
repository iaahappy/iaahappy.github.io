export function AboutSpirit() {
  return (
    <section
      id="spirit"
      className="relative scroll-mt-28 overflow-hidden bg-cm-deep py-24 text-cm-cream md:py-32"
      aria-labelledby="spirit-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-myeongjo text-[clamp(12rem,40vw,28rem)] leading-none text-cm-cream/[0.06]"
        aria-hidden
      >
        青
      </div>
      <div className="relative z-[1] mx-auto max-w-3xl px-4 text-center md:px-6">
        <p
          id="spirit-heading"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-cm-gold"
        >
          Spirit · 설립 정신
        </p>
        <blockquote className="font-myeongjo mt-10 text-2xl font-normal leading-relaxed tracking-wide md:text-3xl">
          &ldquo;항상 <em className="not-italic font-bold text-cm-gold">푸르고</em>,
          <br />
          항상 <em className="not-italic font-bold text-cm-gold">깨끗하게</em>,
          <br />
          그리고 <em className="not-italic font-bold text-cm-gold">한결같이</em>.&rdquo;
        </blockquote>
        <p className="mt-10 text-base tracking-[0.15em] text-cm-sage">
          — 법인 설립 취지 및 이사회 회의 용어 —
        </p>
      </div>
    </section>
  );
}
