export function AboutServicesPreview() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-cm-cream py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cm-gold">
          Services · 사업 안내
        </p>
        <h2
          id="services-heading"
          className="font-myeongjo mt-3 text-3xl font-bold text-cm-deep md:text-4xl"
        >
          청목원이 하는 일
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "사업영역 ①",
              body: "법인에서 실제로 운영하시는 시설·프로그램 내용을 여기에 기재해 주세요.",
            },
            {
              num: "02",
              title: "사업영역 ②",
              body: "이용 대상자, 주요 서비스, 시설 규모 등을 넣으실 수 있습니다.",
            },
            {
              num: "03",
              title: "사업영역 ③",
              body: "후원·자원봉사 안내, 프로그램 신청 안내 등을 배치하기 좋은 공간입니다.",
            },
          ].map((card) => (
            <article
              key={card.num}
              className="min-h-[200px] border-t-2 border-cm-gold bg-cm-paper px-5 py-8"
            >
              <p className="font-mono text-lg tracking-wider text-cm-gold">{card.num}</p>
              <h3 className="font-myeongjo mt-3 text-xl font-bold text-cm-deep">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-cm-moss">{card.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 border border-dashed border-cm-gold/60 bg-cm-gold/10 px-4 py-4 text-center text-base text-cm-gold">
          ※ 실제 사업 내용·연혁·시설 사진은 첨부자료에 포함되어 있지 않아, 위 영역은
          자리표시자(placeholder)로 비워두었습니다.
        </p>
      </div>
    </section>
  );
}
