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
              title: "노인복지사업 (방문요양·방문목욕)",
              body: "「노인복지법」에 근거하여, 고령이나 노인성 질병 등으로 혼자서 일상생활을 영위하기 어려운 어르신들의 가정에 직접 방문하여 신체활동 및 가사활동을 지원하는 재가노인복지시설 설치 및 운영 사업입니다.",
            },
            {
              num: "02",
              title: "장애인 활동 지원 사업",
              body: "「장애인활동 지원에 관한 법률」에 따라, 신체적·정신적 이유로 일상생활과 사회활동이 어려운 장애인에게 전문적인 활동보조 서비스를 제공하여 주체적인 자립 생활을 돕는 사업입니다.",
            },
            {
              num: "03",
              title: "기타 법인 목적 달성 사업",
              body: "어르신과 장애인 등 소외계층이 인간답고 동등하게 행복을 추구할 수 있도록 돕고 가족의 부담을 덜어주어, 국민의 삶의 질 향상과 지역사회 복지 증진에 기여하기 위해 수행하는 제반 부대사업입니다.",
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
      </div>
    </section>
  );
}
