import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiroto Desu.の部屋",
  description:
    "Hiroto Desu.のスキルとプロジェクトを紹介するポートフォリオサイトです。フロントエンド・バックエンド開発の経験や技術スタックについて掲載しています。",
  keywords: [
    "エンジニア",
    "ポートフォリオ",
    "プログラミング",
    "React",
    "Next.js",
    "TypeScript",
    "フロントエンド",
    "バックエンド",
  ],
  authors: [{ name: "Hiroto Desu." }],
  creator: "Hiroto Desu.",
  openGraph: {
    title: "Hiroto Desu.の部屋",
    description:
      "エンジニアのスキルとプロジェクトを紹介するポートフォリオサイト",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "Hiroto Desu.の部屋",
    description:
      "エンジニアのスキルとプロジェクトを紹介するポートフォリオサイト",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
