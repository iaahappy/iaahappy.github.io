# -*- coding: utf-8 -*-
"""Emit busanjin/page.tsx; Korean only via \\u escapes in this file."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CHEONG = ROOT / "app" / "disabled-support" / "cheongmok" / "page.tsx"
OUT = ROOT / "app" / "disabled-support" / "busanjin" / "page.tsx"

t = CHEONG.read_text(encoding="utf-8")
nav_start = t.index("<nav")
nav_end = t.index("</nav>") + len("</nav>")
nav = t[nav_start:nav_end].replace("/disabled-support/cheongmok/", "/disabled-support/busanjin/")

subtitle = (
    "\ubd80\uc0b0\uc9c4\uad6c \uc8fc\ubbfc \uc5ec\ub7ec\ubd84, "
    "\uadf8\ub9ac\uace0 \ubc29\ubb38\uc790 \uc5ec\ub7ec\ubd84\uaed8"
)

p1 = (
    "\uc548\ub155\ud558\uc2ed\ub2c8\uae4c. (\ubc95\uc778)\uccad\ubaa9\uc7a5\uc560\uc778\ud65c\ub3d9\uc9c0\uc6d0 "
    "\ubd80\uc0b0\uc9c4\uad6c\uc13c\ud130 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ucc3e\uc544\uc8fc\uc2e0 \uc5ec\ub7ec\ubd84\uaed8 "
    "\uc9c4\uc2ec\uc73c\ub85c \uac10\uc0ac\ub4dc\ub9bd\ub2c8\ub2e4."
)

p2 = (
    "\uc800\ud76c \ubd80\uc0b0\uc9c4\uad6c\uc13c\ud130\ub294 \uc7a5\uc560\uc778\ubd84\ub4e4\uc758 \uc778\uac04\ub2e4\uc6b4 "
    "\uc0b6\uc744 \ubcf4\uc7a5\ud558\uae30 \uc704\ud558\uc5ec, \uc77c\uc0c1\uc0dd\ud65c\uc5d0 \ud544\uc694\ud55c "
    "\ud3b8\uc758\uc640 \uac1c\uac1c\uc778\uc758 \uc695\uad6c\uc5d0 \ub9de\ucd98 \ubcf5\uc9c0 \uc11c\ube44\uc2a4\ub97c "
    "\uc81c\uacf5\ud568\uc73c\ub85c\uc368 \uac74\uac15\ud558\uace0 \uc548\uc815\ub41c \uc77c\uc0c1\uc744 \ub204\ub9ac\uc2e4 "
    "\uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."
)

p3 = (
    "\uc2e0\uccb4\uc801\xb7\uc815\uc2e0\uc801 \uc774\uc720\ub85c \ud63c\uc790\uc11c \uc77c\uc0c1\uc0dd\ud65c\uc774 "
    "\uc5b4\ub824\uc6b0\uc2e0 \uc7a5\uc560\uc778\ubd84\ub4e4\uaed8 \uc2e0\ubcc0 \ucc98\ub9ac, \uac00\uc0ac \uc9c0\uc6d0, "
    "\uc2dd\uc0ac, \uc774\ub3d9 \ubc0f \uc678\ucd9c \ub3d9\ud589 \ub4f1 \ub9de\ucda4\ud615 \ud65c\ub3d9\uc9c0\uc6d0 "
    "\uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc7a5\uc560\uc778\ubd84\ub4e4\uc774 "
    "\uc8fc\uccb4\uc801\uc778 \uc790\ub9bd \uc0dd\ud65c\uc744 \uc2e4\ud604\ud558\uace0, \ud65c\uae30\ucc28\uac8c \uc0ac\ud68c\uc5d0 "
    "\ucc38\uc5ec\ud558\uc2dc\uc5b4 \uc9c0\uc5ed\uc0ac\ud68c\uc758 \uc628\uc804\ud55c \uad6c\uc131\uc6d0\uc73c\ub85c "
    "\uc790\ub9ac\ub9e4\uae40\ud558\uc2e4 \uc218 \uc788\ub3c4\ub85d \ub3d5\ub294 \uac83\uc744 \ud575\uc2ec \ubaa9\ud45c\ub85c "
    "\uc0bc\uace0 \uc788\uc2b5\ub2c8\ub2e4."
)

p4 = (
    "\ub098\uc544\uac00 \uc800\ud76c \uc13c\ud130\ub294 \uc7a5\uc560\uc778\ubd84\ub4e4\uc774 \ucc28\ubcc4\ubc1b\uc9c0 "
    "\uc54a\uace0, \uc778\uac04\uc73c\ub85c\uc11c\uc758 \uc874\uc5c4\uacfc \uac00\uce58 \uc788\ub294 \uc0b6\uc744 \ub204\ub9ac\uc2e4 "
    "\uc218 \uc788\ub3c4\ub85d \ub298 \uacc1\uc744 \uc9c0\ud0a4\uaca0\uc2b5\ub2c8\ub2e4."
)

p5 = (
    "\ube44\uc7a5\uc560\uc778\uacfc \uc7a5\uc560\uc778\uc774 \ub354\ubd88\uc5b4 \ud589\ubcf5\ud55c \uc644\uc804 \ud1b5\ud569 "
    "\uc0ac\ud68c\ub97c \uc774\ub8e8\ub294 \uadf8\ub0a0\uae4c\uc9c0, \uc815\uc131\uc744 \ub2e4\ud574 \uc5ec\ub7ec\ubd84\uc758 "
    "\ub4e0\ub4e0\ud55c \ub3d9\ubc18\uc790\uac00 \ub418\uc5b4 \ub4dc\ub9b4 \uac83\uc744 \uc57d\uc18d\ub4dc\ub9bd\ub2c8\ub2e4. "
    "\ubd80\uc0b0\uc9c4\uad6c\uc758 \ubaa8\ub4e0 \uc774\uc6c3\uacfc \ud568\uaed8 \uac78\uc5b4\uac00\uaca0\uc2b5\ub2c8\ub2e4."
)

p6 = (
    "\uc5ec\ub7ec\ubd84\uc758 \ub530\ub73b\ud55c \uad00\uc2ec\uacfc \uc560\uc815 \uc5b4\ub9b0 \uc131\uc6d0\uc744 "
    "\ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4."
)

signoff = (
    "(\ubc95\uc778)\uccad\ubaa9\uc7a5\uc560\uc778\ud65c\ub3d9\uc9c0\uc6d0 \ubd80\uc0b0\uc9c4\uad6c\uc13c\ud130\uc7a5 "
    "\uae40 \uc120 \uc8fc \uc62c\ub9bc"
)

meta_title = "\ubd80\uc0b0\uc9c4\uad6c\uc13c\ud130"
thanks = "\uac10\uc0ac\ud569\ub2c8\ub2e4."

tsx = f"""import type {{ Metadata }} from "next";
import Link from "next/link";
import {{ disabilityCenterBusanjin }} from "@/lib/site-contact";

export const metadata: Metadata = {{
  title: "{meta_title}",
  description: disabilityCenterBusanjin.title + " \uc13c\ud130\uc7a5 \uc778\uc0ac\ub9d0 \ubc0f \uc548\ub0b4",
}};

export default function BusanjinDisabledSupportPage() {{
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <article>
        <header className="border-b border-cm-gold/30 pb-8 text-center">
          <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
            {{disabilityCenterBusanjin.title}}
          </h1>
          <p className="mt-4 text-xl font-medium text-cm-moss md:text-2xl">
            {subtitle}
          </p>
        </header>

        <div className="mt-10 space-y-8 text-left text-lg leading-relaxed text-cm-ink md:text-xl">
          <p>
            {p1}
          </p>
          <p>
            {p2}
          </p>
          <p>
            {p3}
          </p>
          <p>
            {p4}
          </p>
          <p>
            {p5}
          </p>
          <p>{p6}</p>
          <p className="font-medium">{thanks}</p>
        </div>

        <footer className="mt-12 border-t border-cm-ink/10 pt-10 text-right">
          <p className="text-lg text-cm-deep md:text-xl">
            {signoff}
          </p>
        </footer>
      </article>

      {nav}
    </div>
  );
}}
"""

OUT.write_text(tsx, encoding="utf-8")
print("ok", OUT)
