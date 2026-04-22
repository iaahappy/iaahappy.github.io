import type { Metadata } from "next";
import {
  corporationOffice,
  disabilityCenterBusanjin,
  disabilityCenterDongnae,
  elderlyCareCenter,
} from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "사회복지법인 청목원·각 센터 위치 및 연락처",
};

export default function LocationPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <header className="border-b border-cm-gold/30 pb-8 text-center">
        <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
          오시는 길
        </h1>
        <p className="mt-4 text-cm-moss md:text-lg">
          법인 사무국 및 센터별 안내
        </p>
      </header>

      <div className="mt-10 space-y-12 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
        <section>
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            {corporationOffice.title}
          </h2>
          <p className="mt-4">{corporationOffice.addressStreet}</p>
          <p className="mt-2 text-base text-cm-moss md:text-lg">
            {corporationOffice.addressJibun}
          </p>
        </section>

        <section>
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            {disabilityCenterDongnae.title}{" "}
            <span className="text-base font-normal text-cm-moss">
              ({disabilityCenterDongnae.subtitle})
            </span>
          </h2>
          <p className="mt-4">{disabilityCenterDongnae.address}</p>
          <p className="mt-3">
            Tel{" "}
            <a
              href={`tel:${disabilityCenterDongnae.tel.replace(/-/g, "")}`}
              className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
            >
              {disabilityCenterDongnae.tel}
            </a>
            {" · "}
            Fax {disabilityCenterDongnae.fax}
          </p>
        </section>

        <section>
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            {disabilityCenterBusanjin.title}{" "}
            <span className="text-base font-normal text-cm-moss">
              ({disabilityCenterBusanjin.subtitle})
            </span>
          </h2>
          <p className="mt-4">{disabilityCenterBusanjin.address}</p>
          <p className="mt-3">
            Tel{" "}
            <a
              href={`tel:${disabilityCenterBusanjin.tel.replace(/-/g, "")}`}
              className="font-medium text-cm-deep underline decoration-cm-gold/50 underline-offset-2 hover:decoration-cm-gold"
            >
              {disabilityCenterBusanjin.tel}
            </a>
            {" · "}
            Fax {disabilityCenterBusanjin.fax}
          </p>
        </section>

        <section>
          <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
            {elderlyCareCenter.title}
          </h2>
          <p className="mt-4">{elderlyCareCenter.address}</p>
          <p className="mt-3 text-base text-cm-moss md:text-lg">
            ※ {elderlyCareCenter.addressNote}
          </p>
        </section>
      </div>
    </article>
  );
}
