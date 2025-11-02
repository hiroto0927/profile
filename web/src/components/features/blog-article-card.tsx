import React from "react";
import Image from "next/image";
import { BlogArticle } from "../../../types/blog";

interface BlogArticleCardProps {
  article: BlogArticle;
}

const BlogArticleCard: React.FC<BlogArticleCardProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {article.thumbnailUrl && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={article.thumbnailUrl}
            alt={article.title}
            width={400}
            height={225}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#171321] mb-3">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.title}
          </a>
        </h3>

        {article.description && (
          <p
            className="text-gray-600 text-sm mb-4 overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.description.replace(/<[^>]*>/g, "")}
          </p>
        )}

        <div className="flex justify-between items-center">
          <time className="text-xs text-gray-500">
            {formatDate(article.pubDate)}
          </time>

          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A90E2] text-sm font-medium"
          >
            記事を読む →
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogArticleCard;
