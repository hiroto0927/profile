import React from "react";
import Image from "next/image";
import { BlogArticle } from "../../../types/blog";
import { formatDate } from "../../utils/format-date";

interface BlogArticleCardProps {
  article: BlogArticle;
}

const BlogArticleCard: React.FC<BlogArticleCardProps> = ({ article }) => {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-shadow"
    >
      {/* サムネイル画像 (PC・タブレットのみ) */}
      {article.thumbnailUrl && (
        <div className="hidden md:block aspect-video overflow-hidden">
          <Image
            src={article.thumbnailUrl}
            alt={article.title}
            width={400}
            height={225}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* PC・タブレット用 */}
      <div className="hidden md:flex flex-col flex-1 p-6">
        {/* タイトル */}
        <h3 className="text-xl font-bold text-[#171321] mb-3">
          <span
            className="block overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.title}
          </span>
        </h3>

        {/* 説明文 */}
        {article.description && (
          <p
            className="text-gray-600 text-sm mb-4 overflow-hidden text-ellipsis flex-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.description.replace(/<[^>]*>/g, "")}
          </p>
        )}

        {/* 公開日 */}
        <div>
          <time className="text-xs text-gray-500">
            {formatDate(article.pubDate)}
          </time>
        </div>
      </div>

      {/* モバイル用: ユーザーアイコン、公開日、タイトル */}
      <div className="md:hidden flex flex-col flex-1 p-4">
        {/* アイコンと日付を横並び */}
        <div className="flex items-center gap-2 mb-3">
          {/* ユーザーアイコン */}
          {article.userIconUrl && (
            <div className="w-6 h-6 shrink-0">
              <Image
                src={article.userIconUrl}
                alt="user icon"
                width={24}
                height={24}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          )}

          {/* 公開日 */}
          <time className="text-xs text-gray-500">
            {formatDate(article.pubDate)}
          </time>
        </div>

        {/* タイトル */}
        <h3 className="text-sm font-bold text-[#171321]">
          <span
            className="block overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.title}
          </span>
        </h3>
      </div>
    </a>
  );
};

export default BlogArticleCard;
