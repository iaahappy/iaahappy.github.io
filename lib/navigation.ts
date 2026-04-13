export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  {
    label: "법인 소개",
    href: "/about",
    children: [
      { label: "인사말", href: "/about/greeting" },
      { label: "연혁", href: "/about/history" },
      { label: "오시는 길", href: "/about/location" },
    ],
  },
  {
    label: "재가노인요양센터",
    href: "/elderly-care",
    children: [
      { label: "센터 소개", href: "/elderly-care/info" },
      { label: "서비스 안내", href: "/elderly-care/service" },
      { label: "이용 절차", href: "/elderly-care/procedure" },
    ],
  },
  {
    label: "장애인활동지원센터",
    href: "/disabled-support",
    children: [
      { label: "센터 소개", href: "/disabled-support/info" },
      { label: "서비스 안내", href: "/disabled-support/service" },
      { label: "이용 절차", href: "/disabled-support/procedure" },
    ],
  },
  {
    label: "소통 공간",
    href: "/community",
    children: [
      { label: "공지사항", href: "/community/notice" },
      { label: "활동 갤러리", href: "/community/gallery" },
    ],
  },
  {
    label: "나눔 참여",
    href: "/participate",
    children: [
      { label: "후원 안내", href: "/participate/donation" },
      { label: "자원봉사", href: "/participate/volunteer" },
    ],
  },
  {
    label: "정보공개",
    href: "/disclosure",
    children: [
      { label: "예결산 공고", href: "/disclosure/budget" },
      { label: "이사회 회의록", href: "/disclosure/board" },
    ],
  },
];
