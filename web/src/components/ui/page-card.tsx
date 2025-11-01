import React from "react";
import Link from "next/link";

interface PageCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  isComingSoon?: boolean;
}

const PageCard: React.FC<PageCardProps> = ({
  title,
  description,
  link,
  icon,
  isComingSoon = false,
}) => {
  const cardContent = (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* アイコン */}
      <div
        className={`transition-colors duration-300 ${
          isComingSoon
            ? "text-gray-400"
            : "text-[#4A90E2] group-hover:text-[#171321]"
        }`}
      >
        {icon}
      </div>

      {/* タイトルと準備中バッジ */}
      <div className="space-y-2">
        <h3
          className={`text-xl font-bold transition-colors duration-300 ${
            isComingSoon
              ? "text-gray-500"
              : "text-[#171321] group-hover:text-[#4A90E2]"
          }`}
        >
          {title}
        </h3>
        {isComingSoon && (
          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full border">
            準備中
          </span>
        )}
      </div>

      {/* 説明 */}
      <p
        className={`text-sm leading-relaxed ${
          isComingSoon ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );

  // 準備中の場合はリンクを無効化
  if (isComingSoon) {
    return (
      <div className="block bg-white rounded-lg shadow-md p-6 border border-gray-200 cursor-not-allowed opacity-75">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={link}
      className="block bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 group"
    >
      {cardContent}
    </Link>
  );
};

export default PageCard;
