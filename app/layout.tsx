import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "사회복지법인 청목원",
    template: "%s | 청목원",
  },
  description:
    "맑고 화목한 기운으로 한결같이 — 재가노인요양·장애인활동지원 사회복지법인 청목원",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth antialiased">
      <body className="font-body flex min-h-full flex-col bg-cm-paper text-cm-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
