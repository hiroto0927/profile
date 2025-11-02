"use client";

import { ZennArticle } from "@/types/blog";
import BlogCard from "./blog-card";

interface TechBlogContentProps {
  articles: ZennArticle[];
}

export default function TechBlogContent({ articles }: TechBlogContentProps) {
  return (
    <main className="flex-1 min-h-screen bg-[#171321] pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* ページヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            プログラミングや開発に関する技術記事を
            <br />
            Zennから取得して表示しています
          </p>
        </div>

        {/* 記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-300 text-lg">記事が見つかりませんでした。</p>
            </div>
          )}
        </div>

        {/* フッター情報 */}
        {articles.length > 0 && (
          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              記事は{" "}
              <a
                href="https://zenn.dev/hirohiroeng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Zenn
              </a>{" "}
              から取得しています
            </p>
            <p className="text-gray-500 text-sm mt-2">
              最新の記事を表示するには、サイトを再ビルドしてください。
            </p>
          </div>
        )}
      </div>
    </main>
  );
}