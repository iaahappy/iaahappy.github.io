"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/lib/navigation";

function NavLink({
  href,
  className,
  children,
  onClick,
  role,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  role?: React.AriaRole;
}) {
  return (
    <Link href={href} className={className} onClick={onClick} role={role}>
      {children}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-cm-ink/10 bg-cm-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 flex-col leading-tight focus-visible:rounded-sm"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-myeongjo text-lg font-bold tracking-[0.12em] text-cm-deep md:text-xl">
            青沐園
          </span>
          <span className="text-base font-medium tracking-wide text-cm-gold">
            사회복지법인 청목원
          </span>
        </Link>

        {/* Desktop GNB */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="주 메뉴"
        >
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center">
                <NavLink
                  href={item.href}
                  className={`flex items-center gap-0.5 rounded-md px-3 py-3 text-base font-medium transition-colors focus-visible:rounded-md ${
                    isActive(item.href)
                      ? "text-cm-deep"
                      : "text-cm-ink hover:text-cm-deep"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className="size-4 opacity-70"
                      aria-hidden
                    />
                  )}
                </NavLink>
              </div>
              {item.children && openDropdown === item.href && (
                <div
                  className="absolute left-0 top-full min-w-[14rem] rounded-md border border-cm-ink/10 bg-cm-paper py-2 shadow-lg"
                  role="menu"
                >
                  {item.children.map((c) => (
                    <div key={c.href} role="group">
                      <NavLink
                        href={c.href}
                        className={`block px-4 py-3 text-base transition-colors hover:bg-cm-cream ${
                          pathname === c.href
                            ? "font-semibold text-cm-deep"
                            : "text-cm-ink"
                        }`}
                        role="menuitem"
                      >
                        {c.label}
                      </NavLink>
                      {c.sub?.map((s) => (
                        <NavLink
                          key={s.href}
                          href={s.href}
                          className="block py-2 pl-8 pr-4 text-sm text-cm-moss transition-colors hover:bg-cm-cream hover:text-cm-deep"
                          role="menuitem"
                        >
                          {s.label}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-cm-deep/20 bg-cm-cream p-2 text-cm-deep lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-cm-ink/10 bg-cm-paper lg:hidden"
        >
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4" aria-label="모바일 메뉴">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-cm-ink/5 pb-3 last:border-0">
                <NavLink
                  href={item.href}
                  className="block py-3 text-lg font-semibold text-cm-deep"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="mt-1 space-y-1 pl-2">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <NavLink
                          href={c.href}
                          className="block min-h-11 py-2 text-base text-cm-ink"
                          onClick={() => setMobileOpen(false)}
                        >
                          {c.label}
                        </NavLink>
                        {c.sub && c.sub.length > 0 ? (
                          <ul className="mt-1 space-y-1 border-l border-cm-ink/15 pl-3">
                            {c.sub.map((s) => (
                              <li key={s.href}>
                                <NavLink
                                  href={s.href}
                                  className="block min-h-10 py-1.5 text-sm text-cm-moss"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {s.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
