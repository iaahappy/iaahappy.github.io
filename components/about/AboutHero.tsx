export function AboutHero() {
  return (
    <section
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cm-paper to-cm-cream px-4 py-24 text-center"
      aria-labelledby="about-hero-title"
    >
      <div
        className="pointer-events-none absolute -right-[10%] -top-[10%] h-[120%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(90,122,90,0.12)_0%,transparent_60%)]"
        aria-hidden
      />
      <div className="relative z-[1] max-w-4xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-cm-moss md:text-base">
          사회복지법인
        </p>
        <p
          id="about-hero-title"
          className="font-myeongjo text-[clamp(4rem,14vw,10rem)] font-normal leading-none tracking-[0.08em] text-cm-deep"
        >
          <span className="text-cm-deep">青</span>
          <span className="text-cm-moss">沐</span>
        </p>
        <p className="font-myeongjo mt-6 text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.25em] text-cm-ink">
          청 목 원
        </p>
        <p className="mt-8 text-lg text-cm-gold md:text-xl">
          맑고 화목한 기운으로, 한결같이
        </p>
      </div>
    </section>
  );
}
