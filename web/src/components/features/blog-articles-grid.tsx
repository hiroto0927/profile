import React from "react";
import { BlogArticle } from "../../../types/blog";
import BlogArticleCard from "./blog-article-card";

interface BlogArticlesGridProps {
  articles: BlogArticle[];
}

const BlogArticlesGrid: React.FC<BlogArticlesGridProps> = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600 text-lg">記事が見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <BlogArticleCard key={`${article.link}-${index}`} article={article} />
      ))}
    </div>
  );
};

export default BlogArticlesGrid;
