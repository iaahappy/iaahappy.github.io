export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-auto border-t border-cm-sage/20 bg-cm-ink text-cm-sage"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="font-myeongjo text-xl font-bold text-cm-cream md:text-2xl">
            青沐園 <span className="text-cm-gold">청목원</span>
          </p>
          <p className="mt-2 text-base italic text-cm-gold/90">
            맑고 화목한 기운으로, 한결같이
          </p>
        </div>
        <dl className="mx-auto grid max-w-2xl gap-4 text-center text-base leading-relaxed md:grid-cols-1">
          <div>
            <dt className="sr-only">법인명</dt>
            <dd>사회복지법인 청목원</dd>
          </div>
          <div>
            <dt className="sr-only">주소</dt>
            <dd>[주소 자리표시자]</dd>
          </div>
          <div>
            <dt className="sr-only">연락처</dt>
            <dd>
              대표전화 [자리표시자] · 팩스 [자리표시자]
              <br />
              이메일 [자리표시자]
            </dd>
          </div>
        </dl>
        <p className="mt-10 border-t border-cm-sage/20 pt-8 text-center text-sm tracking-wide text-cm-moss">
          © {new Date().getFullYear()} 사회복지법인 청목원 · CHEONGMOKWON. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
