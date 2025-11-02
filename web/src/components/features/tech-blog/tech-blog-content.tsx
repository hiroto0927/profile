"use client";

import { useState, useEffect } from "react";
import { ZennArticle } from "@/types/blog";
import { fetchZennArticles } from "@/src/utils/zenn-api";
import BlogCard from "./blog-card";

export default function TechBlogContent() {
  const [articles, setArticles] = useState<ZennArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const articlesData = await fetchZennArticles(1, "latest");
        setArticles(articlesData);
      } catch (err) {
        setError("記事の読み込みに失敗しました。");
        console.error("Failed to load articles:", err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

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

        {/* ローディング状態 */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {/* エラー状態 */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* 記事一覧 */}
        {!loading && !error && (
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
        )}

        {/* フッター情報 */}
        {!loading && !error && articles.length > 0 && (
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
          </div>
        )}
      </div>
    </main>
  );
}