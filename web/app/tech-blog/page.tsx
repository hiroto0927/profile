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

// 静的データを読み込む関数
async function getZennArticles() {
  try {
    // ビルド時に生成されたJSONファイルを読み込み
    const fs = await import("fs/promises");
    const path = await import("path");
    
    const filePath = path.join(process.cwd(), ".contents", "zenn-articles.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const articles = JSON.parse(fileContent);
    
    return articles;
  } catch (error) {
    console.error("Error loading Zenn articles:", error);
    return [];
  }
}

export default async function TechBlogPage() {
  const articles = await getZennArticles();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TechBlogContent articles={articles} />
      <Footer />
    </div>
  );
}