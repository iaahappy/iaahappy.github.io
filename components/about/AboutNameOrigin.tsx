export function AboutNameOrigin() {
  return (
    <section
      id="origin"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 md:px-6 md:py-28 lg:px-8"
      aria-labelledby="origin-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cm-gold">
        Origin · 명칭의 유래
      </p>
      <h2
        id="origin-heading"
        className="font-myeongjo mt-3 text-3xl font-bold text-cm-deep md:text-4xl"
      >
        이름에 담긴 뜻
      </h2>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16 lg:items-center">
        <div className="relative border border-cm-gold/20 bg-gradient-to-br from-cm-cream to-cm-paper px-6 py-12 text-center shadow-[0_20px_60px_var(--cm-shadow)] md:px-10 md:py-14">
          <p className="absolute right-4 top-4 font-myeongjo text-sm text-cm-gold tracking-[0.2em]">
            雅號
          </p>
          <p className="font-myeongjo text-6xl font-normal leading-none tracking-[0.12em] text-cm-deep md:text-7xl">
            青 沐
          </p>
          <p className="mt-6 border-b border-cm-moss/20 pb-8 text-base tracking-[0.25em] text-cm-moss">
            청 · 목 | Cheongmok
          </p>
          <div className="mt-8 flex justify-center gap-8 md:gap-12">
            <div>
              <span className="font-myeongjo block text-4xl text-cm-deep">青</span>
              <span className="mt-2 block text-base text-cm-ink">
                푸를 <strong className="font-semibold text-cm-deep">청</strong>
              </span>
            </div>
            <div>
              <span className="font-myeongjo block text-4xl text-cm-deep">沐</span>
              <span className="mt-2 block text-base text-cm-ink">
                씻을 <strong className="font-semibold text-cm-deep">목</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="text-left">
          <h3 className="font-myeongjo text-2xl font-bold text-cm-deep">
            설립자의 아호(雅號)에서
          </h3>
          <p className="mt-6 text-base leading-relaxed text-cm-ink md:text-lg">
            &lsquo;청목(青沐)&rsquo;은 본 법인의 설립자{" "}
            <strong className="font-semibold text-cm-deep">김명수(金明洙)</strong> 선생의
            아호(雅號)입니다.
          </p>
          <p className="mt-5 text-base leading-relaxed text-cm-ink md:text-lg">
            두 글자를 풀어 보면,{" "}
            <strong className="font-semibold text-cm-deep">
              &lsquo;항상 푸르고 깨끗하게 한결같으라&rsquo;
            </strong>
            는 뜻을 담고 있습니다.
          </p>
          <p className="mt-5 text-base leading-relaxed text-cm-ink md:text-lg">
            영문으로는 <em className="not-italic font-medium text-cm-deep">Cheongmok</em>,
            의미 그대로{" "}
            <strong className="font-semibold text-cm-deep">
              &lsquo;맑고 화목한 기운&rsquo;
            </strong>
            을 품은 이름입니다. 이 뜻은 법인의 설립 취지이자, 이사회가 함께 되새기는
            말이기도 합니다.
          </p>
          <aside className="mt-8 border-l-[3px] border-cm-gold bg-cm-gold/10 px-5 py-4 text-base leading-relaxed text-cm-deep">
            <strong className="font-myeongjo font-bold">青沐</strong> — 푸를 청, 씻을 목.
            <br />
            설립자의 삶이 그러했듯, 언제나 푸르고 맑게.
          </aside>
        </div>
      </div>
    </section>
  );
}
