import { Metadata } from "next";
import Header from "@/src/components/ui/header";
import Footer from "@/src/components/ui/footer";
import TechBlogContent from "@/src/components/features/tech-blog/tech-blog-content";

export const metadata: Metadata = {
  title: "Tech Blog | Hiroto Desu.の部屋",
  description:
    "Hiroto Desu.の技術ブログ記事一覧です。プログラミング、開発に関する記事をZennから取得して表示しています。",
  keywords: [
    "エンジニア",
    "技術ブログ",
    "プログラミング",
    "React",
    "Next.js",
    "TypeScript",
    "フロントエンド",
    "バックエンド",
    "Zenn",
  ],
  openGraph: {
    title: "Tech Blog | Hiroto Desu.の部屋",
    description:
      "Hiroto Desu.の技術ブログ記事一覧です。プログラミング、開発に関する記事をZennから取得して表示しています。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function TechBlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TechBlogContent />
      <Footer />
    </div>
  );
}