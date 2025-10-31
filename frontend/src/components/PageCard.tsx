import React from "react";

interface PageCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const PageCard: React.FC<PageCardProps> = ({
  title,
  description,
  link,
  icon,
}) => {
  return (
    <a
      href={link}
      className="block bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 group"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* アイコン */}
        <div className="text-[#4A90E2] transition-colors duration-300 group-hover:text-[#171321]">
          {icon}
        </div>

        {/* タイトル */}
        <h3 className="text-xl font-bold text-[#171321] group-hover:text-[#4A90E2] transition-colors duration-300">
          {title}
        </h3>

        {/* 説明 */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </a>
  );
};

export default PageCard;
