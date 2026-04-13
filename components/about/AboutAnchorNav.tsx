import Link from "next/link";

const links = [
  { href: "#origin", label: "명칭 유래" },
  { href: "#spirit", label: "설립 정신" },
  { href: "#symbol", label: "상징" },
  { href: "#services", label: "사업 안내" },
  { href: "#contact", label: "문의" },
];

export function AboutAnchorNav() {
  return (
    <nav
      className="sticky top-[73px] z-40 hidden border-b border-cm-ink/10 bg-cm-paper/95 py-3 backdrop-blur-sm md:block"
      aria-label="법인 소개 섹션"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 text-base">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-cm-moss underline-offset-4 transition-colors hover:text-cm-deep hover:underline"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
