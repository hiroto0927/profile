import React from "react";
import Header from "../../src/components/ui/header";
import Footer from "../../src/components/ui/footer";
import BlogArticlesGrid from "../../src/components/features/blog-articles-grid";
import GeometricBackground from "../../src/components/ui/geometric-background";
import { parseRssFeed } from "../../src/utils/rss-parser";
import { rssFeeds } from "../../src/config/rss-feeds.config";
import { BlogArticle } from "../../types/blog";

// ビルド時にRSSフィードから記事を取得
async function getArticles(): Promise<BlogArticle[]> {
  const allArticles: BlogArticle[] = [];

  for (const feed of rssFeeds) {
    if (feed.isDisplay) {
      try {
        const articles = await parseRssFeed(feed.url);
        allArticles.push(...articles);
      } catch (error) {
        console.error(`Failed to fetch articles from ${feed.url}:`, error);
      }
    }
  }

  // 公開日でソート（新しい順）
  return allArticles.sort((a, b) => {
    const dateA = new Date(a.pubDate);
    const dateB = new Date(b.pubDate);
    return dateB.getTime() - dateA.getTime();
  });
}

export default async function TechBlogPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-slate-50 to-blue-50 relative">
      {/* ジオメトリックパターン背景 */}
      <GeometricBackground />
      
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* ページヘッダー */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#171321] mb-6">
              Tech Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              技術や開発について思ったことや学んだことを発信しています。
            </p>
          </section>

          {/* 記事一覧 */}
          <section>
            <h2 className="text-2xl font-bold text-[#171321] mb-8 border-b-2 border-[#4A90E2] pb-2">
              記事一覧
            </h2>
            <BlogArticlesGrid articles={articles} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
