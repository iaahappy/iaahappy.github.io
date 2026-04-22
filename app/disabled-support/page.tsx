import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  disabilityCenterBusanjin,
  disabilityCenterDongnae,
  disabilitySupportHubCopy,
} from "@/lib/site-contact";

export const metadata: Metadata = {
  title: disabilitySupportHubCopy.pageTitle,
  description: disabilitySupportHubCopy.metaDescription,
};

const centers = [
  {
    href: "/disabled-support/cheongmok",
    title: disabilityCenterDongnae.title,
    subtitle: disabilityCenterDongnae.subtitle,
    address: disabilityCenterDongnae.address,
    tel: disabilityCenterDongnae.tel,
  },
  {
    href: "/disabled-support/busanjin",
    title: disabilityCenterBusanjin.title,
    subtitle: disabilityCenterBusanjin.subtitle,
    address: disabilityCenterBusanjin.address,
    tel: disabilityCenterBusanjin.tel,
  },
] as const;

export default function DisabledSupportHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <header className="border-b border-cm-gold/30 pb-10 text-center">
        <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
          {disabilitySupportHubCopy.pageTitle}
        </h1>
        <p className="mt-4 text-lg text-cm-moss md:text-xl">
          {disabilitySupportHubCopy.lead}
        </p>
      </header>

      <p className="mt-10 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
        {disabilitySupportHubCopy.intro}
      </p>

      <ul className="mt-12 list-none space-y-6 p-0">
        {centers.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="group flex flex-col rounded-lg border border-cm-moss/20 bg-cm-cream/40 p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cm-gold md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-myeongjo text-xl font-bold text-cm-deep md:text-2xl">
                    {c.title}
                  </h2>
                  <p className="mt-1 text-base font-medium text-cm-moss">{c.subtitle}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-base font-semibold text-cm-deep group-hover:underline">
                  {disabilitySupportHubCopy.cardCta}
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
              <p className="mt-4 text-base text-cm-ink">
                <span className="block">주소 {c.address}</span>
                {c.tel ? (
                  <span className="mt-2 block">
                    Tel{" "}
                    <span className="font-medium text-cm-deep">{c.tel}</span>
                  </span>
                ) : null}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
