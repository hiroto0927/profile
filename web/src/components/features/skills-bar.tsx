import React, { useState, useEffect, useMemo } from "react";
import {
  FaReact,
  FaPython,
  FaCode,
  FaJava,
  FaGitAlt,
  FaCubes,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGo,
  SiRust,
  SiAmazon,
  SiKubernetes,
  SiNextdotjs,
  SiFastapi,
  SiDocker,
  SiVite,
} from "react-icons/si";
import { RiGitlabFill } from "react-icons/ri";

interface Skill {
  name: string;
  category: "実用" | "学習中" | "経験あり";
  icon: React.ReactNode;
  color: string;
  description: string;
  years?: string;
}

const SkillsBar: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);

  const skills: Skill[] = useMemo(
    () => [
      {
        name: "TypeScript",
        category: "実用",
        icon: <SiTypescript className="w-5 h-5" />,
        color: "#3178C6",
        description: "型安全性を重視した開発",
        years: "3年+",
      },
      {
        name: "React",
        category: "実用",
        icon: <FaReact className="w-5 h-5" />,
        color: "#61DAFB",
        description: "モダンなUIライブラリ",
        years: "3年+",
      },
      {
        name: "Git",
        category: "実用",
        icon: <FaGitAlt className="w-5 h-5" />,
        color: "#F05032",
        description: "バージョン管理システム",
        years: "4年+",
      },
      {
        name: "Python",
        category: "実用",
        icon: <FaPython className="w-5 h-5" />,
        color: "#3776AB",
        description: "データ分析・AI開発",
        years: "2年+",
      },
      {
        name: "Docker",
        category: "実用",
        icon: <SiDocker className="w-5 h-5" />,
        color: "#2496ED",
        description: "コンテナ化技術",
        years: "2年+",
      },
      {
        name: "NextJS",
        category: "実用",
        icon: <SiNextdotjs className="w-5 h-5" />,
        color: "#000000",
        description: "フルスタックReactフレームワーク",
        years: "1年+",
      },
      {
        name: "FastAPI",
        category: "実用",
        icon: <SiFastapi className="w-5 h-5" />,
        color: "#009688",
        description: "高速Python APIフレームワーク",
        years: "1年+",
      },
      {
        name: "Vite",
        category: "実用",
        icon: <SiVite className="w-5 h-5" />,
        color: "#646CFF",
        description: "高速フロントエンドビルドツール",
        years: "2年+",
      },
      {
        name: "AWS",
        category: "経験あり",
        icon: <SiAmazon className="w-5 h-5" />,
        color: "#FF9900",
        description: "クラウドインフラ",
        years: "1年",
      },
      {
        name: "Rust",
        category: "学習中",
        icon: <SiRust className="w-5 h-5" />,
        color: "#CE422B",
        description: "メモリ安全性と高速性を両立",
        years: "6ヶ月",
      },
      {
        name: "Go",
        category: "学習中",
        icon: <SiGo className="w-5 h-5" />,
        color: "#00ADD8",
        description: "高性能バックエンド",
        years: "3ヶ月",
      },
      {
        name: "CI/CD",
        category: "経験あり",
        icon: <RiGitlabFill className="w-5 h-5" />,
        color: "#FC6D26",
        description: "継続的インテグレーション",
        years: "1年",
      },
      {
        name: "Java",
        category: "経験あり",
        icon: <FaJava className="w-5 h-5" />,
        color: "#ED8B00",
        description: "エンタープライズ開発",
        years: "2年",
      },
      {
        name: "DDD",
        category: "経験あり",
        icon: <FaCubes className="w-5 h-5" />,
        color: "#4A90E2",
        description: "ドメイン駆動設計",
        years: "1年+",
      },
      {
        name: "Kubernetes",
        category: "学習中",
        icon: <SiKubernetes className="w-5 h-5" />,
        color: "#326CE5",
        description: "コンテナオーケストレーション",
        years: "2ヶ月",
      },
    ],
    []
  );

  useEffect(() => {
    // アニメーション用に順次表示
    const timers: number[] = [];

    skills.forEach((skill, index) => {
      const timer = window.setTimeout(() => {
        setVisibleSkills((prev) => [...prev, skill.name]);
      }, index * 150);

      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [skills]);

  const getCategoryBadge = (category: Skill["category"]) => {
    const categoryStyles = {
      主力: "bg-blue-100 text-blue-800 border-blue-200",
      実用: "bg-green-100 text-green-800 border-green-200",
      経験あり: "bg-yellow-100 text-yellow-800 border-yellow-200",
      学習中: "bg-purple-100 text-purple-800 border-purple-200",
    };

    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full border ${categoryStyles[category]}`}
      >
        {category}
      </span>
    );
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill["category"], Skill[]>);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <details className="group">
        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
          <div className="flex items-center space-x-3">
            <FaCode className="text-[#4A90E2] text-2xl" />
            <h3 className="text-lg font-bold text-[#171321]">Tech Stack</h3>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-xs text-gray-500">技術数</div>
              <div className="text-sm font-bold text-[#4A90E2]">
                {skills.length}個
              </div>
            </div>
            <div className="text-gray-400 transition-transform duration-200 group-open:rotate-180">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </summary>

        <div className="p-6 space-y-6 border-t border-gray-100">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                {getCategoryBadge(category as Skill["category"])}
                <span className="text-gray-500">({categorySkills.length})</span>
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`group relative p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-all duration-300 ${
                      visibleSkills.includes(skill.name)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div
                        className="transition-all duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-[#171321] truncate">
                        {skill.name}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                      {skill.description}
                    </p>

                    {skill.years && (
                      <div className="text-xs font-medium text-gray-500">
                        経験: {skill.years}
                      </div>
                    )}

                    {/* ホバー時のグロー効果 */}
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                        boxShadow: `0 0 20px ${skill.color}30`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default SkillsBar;
