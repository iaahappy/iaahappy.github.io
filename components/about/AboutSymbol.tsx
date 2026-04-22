import Image from "next/image";

function TreeIconWinter() {
  return (
    <div className="relative h-24 w-24">
      <Image
        src="/dongcheongmok.png"
        alt="동청목 나무"
        fill
        sizes="96px"
        className="object-contain drop-shadow-sm"
      />
    </div>
  );
}

function TreeIconGold() {
  return (
    <div className="relative h-24 w-24">
      <Image
        src="/cheongmokgold.png"
        alt="청목황금나무"
        fill
        sizes="96px"
        className="object-contain drop-shadow-sm"
      />
    </div>
  );
}

export function AboutSymbol() {
  return (
    <section
      id="symbol"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 md:px-6 md:py-28 lg:px-8"
      aria-labelledby="symbol-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cm-gold">
        Symbol · 법인의 상징
      </p>
      <h2
        id="symbol-heading"
        className="font-myeongjo mt-3 text-3xl font-bold text-cm-deep md:text-4xl"
      >
        청목(青沐)나무
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cm-ink">
        사철 푸른 잎을 가진 청목나무는 본 법인의 상징입니다. 변하지 않는 푸름, 맑게
        씻어낸 듯한 생명력 — 법인이 지향하는 가치를 그대로 담고 있습니다.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="border border-cm-moss/15 bg-cm-cream px-6 py-10 text-center transition-shadow hover:shadow-lg">
          <div className="mb-6 flex justify-center">
            <TreeIconWinter />
          </div>
          <h3 className="font-myeongjo text-xl font-bold text-cm-deep">
            동청목(冬青沐)나무
          </h3>
          <p className="mt-3 text-base leading-relaxed text-cm-moss">
            겨울에도 잎이 지지 않는 상록수.
            <br />
            어떤 계절에도 변하지 않는 한결같음을 상징합니다.
          </p>
        </article>
        <article className="border border-cm-moss/15 bg-cm-cream px-6 py-10 text-center transition-shadow hover:shadow-lg">
          <div className="mb-6 flex justify-center">
            <TreeIconGold />
          </div>
          <h3 className="font-myeongjo text-xl font-bold text-cm-deep">
            청목황금나무
          </h3>
          <p className="mt-3 text-base leading-relaxed text-cm-moss">
            푸름 속에 황금빛을 품은 잎.
            <br />
            맑음과 따뜻한 기운이 함께하는 모습입니다.
          </p>
        </article>
      </div>
    </section>
  );
}
