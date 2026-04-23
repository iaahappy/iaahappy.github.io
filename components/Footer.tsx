import {
  corporationOffice,
  disabilityCenterBusanjin,
  disabilityCenterDongnae,
  elderlyCareCenter,
} from "@/lib/site-contact";

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

        <div className="mx-auto grid max-w-3xl gap-10 text-left text-base leading-relaxed md:gap-12">
          <section>
            <h2 className="font-myeongjo text-lg font-bold leading-snug text-cm-cream">
              {corporationOffice.title}
            </h2>
            <p className="mt-3 text-cm-sage">
              <span className="sr-only">주소 </span>
              <span className="block">{corporationOffice.addressStreet}</span>
              <span className="mt-2 block text-sm text-cm-sage/90">
                {corporationOffice.addressJibun}
              </span>
            </p>
          </section>

          <section>
            <h2 className="font-myeongjo text-lg font-bold leading-snug text-cm-cream">
              {disabilityCenterDongnae.title}{" "}
              <span className="text-base font-medium text-cm-sage">
                ({disabilityCenterDongnae.subtitle})
              </span>
            </h2>
            <p className="mt-3 text-cm-sage">
              <span className="block">
                주소 {disabilityCenterDongnae.address}
              </span>
              <span className="mt-2 block">
                Tel{" "}
                <a
                  href={`tel:${disabilityCenterDongnae.tel.replace(/-/g, "")}`}
                  className="text-cm-cream underline decoration-cm-gold/40 underline-offset-2 hover:decoration-cm-gold"
                >
                  {disabilityCenterDongnae.tel}
                </a>
                {" · "}
                Fax {disabilityCenterDongnae.fax}
              </span>
            </p>
          </section>

          <section>
            <h2 className="font-myeongjo text-lg font-bold leading-snug text-cm-cream">
              {disabilityCenterBusanjin.title}{" "}
              <span className="text-base font-medium text-cm-sage">
                ({disabilityCenterBusanjin.subtitle})
              </span>
            </h2>
            <p className="mt-3 text-cm-sage">
              <span className="block">
                주소 {disabilityCenterBusanjin.address}
              </span>
              <span className="mt-2 block">
                Tel{" "}
                <a
                  href={`tel:${disabilityCenterBusanjin.tel.replace(/-/g, "")}`}
                  className="text-cm-cream underline decoration-cm-gold/40 underline-offset-2 hover:decoration-cm-gold"
                >
                  {disabilityCenterBusanjin.tel}
                </a>
                {" · "}
                Fax {disabilityCenterBusanjin.fax}
              </span>
            </p>
          </section>

          <section>
            <h2 className="font-myeongjo text-lg font-bold leading-snug text-cm-cream">
              {elderlyCareCenter.title}
            </h2>
            <p className="mt-3 text-cm-sage">
              <span className="block">주소 {elderlyCareCenter.address}</span>
              <span className="mt-2 block text-sm text-cm-sage/90">
                ※ {elderlyCareCenter.addressNote}
              </span>
            </p>
          </section>
        </div>

        <p className="mt-10 border-t border-cm-sage/20 pt-8 text-center text-sm tracking-wide text-cm-sage/85">
          © {new Date().getFullYear()} 사회복지법인 청목원 · CHEONGMOKWON. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
