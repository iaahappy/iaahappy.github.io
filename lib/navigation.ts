export type NavSubItem = {
  label: string;
  href: string;
};

export type NavChild = {
  label: string;
  href: string;
  sub?: NavSubItem[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  {
    label: "\uccad\ubaa9\uc6d0",
    href: "/about",
    children: [
      {
        label: "\ubc95\uc778 \uc18c\uac1c",
        href: "/about",
        sub: [
          { label: "\uba85\uce6d \uc720\ub798", href: "/about#origin" },
          { label: "\uc124\ub9bd \uc815\uc2e0", href: "/about#spirit" },
          { label: "\uc0c1\uc9d5", href: "/about#symbol" },
          { label: "\uc0ac\uc5c5 \uc548\ub0b4", href: "/about#services" },
          { label: "\ubb38\uc758", href: "/about#contact" },
        ],
      },
      { label: "\uc778\uc0ac\ub9d0", href: "/about/greeting" },
      { label: "\uc5f0\ud601", href: "/about/history" },
      { label: "\uc624\uc2dc\ub294 \uae38", href: "/about/location" },
    ],
  },
  {
    label: "\uc7a5\uc560\uc778\ud65c\ub3d9\uc9c0\uc6d0\uc13c\ud130",
    href: "/disabled-support",
    children: [
      {
        label: "\uccad\ubaa9 \uc7a5\uc560\uc778\ud65c\ub3d9\uc9c0\uc6d0\uc13c\ud130",
        href: "/disabled-support/cheongmok",
        sub: [
          {
            label: "\uc13c\ud130\uc7a5 \uc778\uc0ac\ub9d0",
            href: "/disabled-support/cheongmok",
          },
          {
            label: "\uc13c\ud130 \uc18c\uac1c",
            href: "/disabled-support/cheongmok/info",
          },
          {
            label: "\uc11c\ube44\uc2a4 \uc548\ub0b4",
            href: "/disabled-support/cheongmok/service",
          },
          {
            label: "\uc774\uc6a9 \uc808\ucc28",
            href: "/disabled-support/cheongmok/procedure",
          },
        ],
      },
      {
        label: "\ubd80\uc0b0\uc9c4\uad6c\uc13c\ud130",
        href: "/disabled-support/busanjin",
        sub: [
          {
            label: "\uc13c\ud130\uc7a5 \uc778\uc0ac\ub9d0",
            href: "/disabled-support/busanjin",
          },
          {
            label: "\uc13c\ud130 \uc18c\uac1c",
            href: "/disabled-support/busanjin/info",
          },
          {
            label: "\uc11c\ube44\uc2a4 \uc548\ub0b4",
            href: "/disabled-support/busanjin/service",
          },
          {
            label: "\uc774\uc6a9 \uc808\ucc28",
            href: "/disabled-support/busanjin/procedure",
          },
        ],
      },
    ],
  },
  {
    label: "\uc7ac\uac00\ub178\uc778\uc694\uc591\uc13c\ud130",
    href: "/elderly-care",
    children: [
      {
        label: "\uc7ac\uac00\ub178\uc778\uc694\uc591\uc13c\ud130",
        href: "/elderly-care",
        sub: [
          {
            label: "\uc13c\ud130\uc7a5 \uc778\uc0ac\ub9d0",
            href: "/elderly-care",
          },
          {
            label: "\uc13c\ud130 \uc18c\uac1c",
            href: "/elderly-care/info",
          },
          {
            label: "\uc11c\ube44\uc2a4 \uc548\ub0b4",
            href: "/elderly-care/service",
          },
          {
            label: "\uc774\uc6a9 \uc808\ucc28",
            href: "/elderly-care/procedure",
          },
        ],
      },
    ],
  },
  {
    label: "\uc18c\ud1b5 \uacf5\uac04",
    href: "/community",
    children: [
      { label: "\uacf5\uc9c0\uc0ac\ud56d", href: "/community/notice" },
      { label: "\ud65c\ub3d9 \uac1c\ub7ec\ub9ac", href: "/community/gallery" },
    ],
  },
  {
    label: "\ub098\ub230 \ucc38\uc5ec",
    href: "/participate",
    children: [
      { label: "\ud6c4\uc6d0 \uc548\ub0b4", href: "/participate/donation" },
      { label: "\uc790\uc6d0\ubd09\uc0ac", href: "/participate/volunteer" },
    ],
  },
  {
    label: "\uc815\ubcf4\uacf5\uac1c",
    href: "/disclosure",
    children: [
      { label: "\uc608\uacb0\uc0b0 \uacf5\uace0", href: "/disclosure/budget" },
      {
        label: "\uc774\uc0ac\ud68c \ud68c\uc758\ub85d",
        href: "/disclosure/board",
      },
    ],
  },
];
