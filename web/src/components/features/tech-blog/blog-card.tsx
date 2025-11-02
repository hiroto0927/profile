"use client";

import Image from "next/image";
import { BlogCardProps } from "@/types/blog";
import { formatPublishedDate, formatReadingTime } from "@/src/utils/zenn-api";

export default function BlogCard({ article }: BlogCardProps) {
  const handleCardClick = () => {
    // RSSフィードから取得したlinkをそのまま使用
    window.open(article.link || `https://zenn.dev/${article.user.username}/articles/${article.slug}`, '_blank');
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:border-blue-300"
    >
      {/* ヘッダー部分 */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{article.emoji}</span>
          <div className="flex items-center gap-2">
            <Image
              src={article.user.avatar_url}
              alt={article.user.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-gray-600">{article.user.name}</span>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          article.type === "tech" 
            ? "bg-blue-100 text-blue-800" 
            : "bg-green-100 text-green-800"
        }`}>
          {article.type === "tech" ? "Tech" : "Idea"}
        </span>
      </div>

      {/* タイトル */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
        {article.title}
      </h3>

      {/* トピックタグ */}
      <div className="flex flex-wrap gap-2 mb-4">
        {article.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
          >
            {topic}
          </span>
        ))}
        {article.topics.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
            +{article.topics.length - 3}
          </span>
        )}
      </div>

      {/* メタ情報 */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            {article.likes_count}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 22a1 1 0 01-1-1v-3H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9z"/>
            </svg>
            {article.comments_count}
          </span>
          <span>{formatReadingTime(article.reading_time)}</span>
        </div>
        <span>{formatPublishedDate(article.published_at)}</span>
      </div>
    </div>
  );
}