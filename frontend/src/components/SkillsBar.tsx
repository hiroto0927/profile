import React, { useState, useEffect, useMemo } from "react";
import {
  FaReact,
  FaJs,
  FaPython,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { SiTypescript, SiGo, SiDocker } from "react-icons/si";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const SkillsBar: React.FC = () => {
  const [animatedLevels, setAnimatedLevels] = useState<{
    [key: string]: number;
  }>({});

  const skills: Skill[] = useMemo(
    () => [
      {
        name: "TypeScript",
        level: 85,
        icon: <SiTypescript className="w-5 h-5" />,
        color: "#3178C6",
        description: "型安全性を重視した開発",
      },
      {
        name: "React",
        level: 90,
        icon: <FaReact className="w-5 h-5" />,
        color: "#61DAFB",
        description: "モダンなUIライブラリ",
      },
      {
        name: "JavaScript",
        level: 88,
        icon: <FaJs className="w-5 h-5" />,
        color: "#F7DF1E",
        description: "ウェブ開発の基盤",
      },
      {
        name: "Python",
        level: 75,
        icon: <FaPython className="w-5 h-5" />,
        color: "#3776AB",
        description: "データ分析・AI開発",
      },
      {
        name: "Node.js",
        level: 80,
        icon: <FaNodeJs className="w-5 h-5" />,
        color: "#339933",
        description: "サーバーサイド開発",
      },
      {
        name: "Go",
        level: 65,
        icon: <SiGo className="w-5 h-5" />,
        color: "#00ADD8",
        description: "高性能バックエンド",
      },
      {
        name: "Java",
        level: 70,
        icon: <FaJava className="w-5 h-5" />,
        color: "#ED8B00",
        description: "エンタープライズ開発",
      },
      {
        name: "Docker",
        level: 78,
        icon: <SiDocker className="w-5 h-5" />,
        color: "#2496ED",
        description: "コンテナ化技術",
      },
      {
        name: "Git",
        level: 85,
        icon: <FaGitAlt className="w-5 h-5" />,
        color: "#F05032",
        description: "バージョン管理",
      },
    ],
    []
  );

  useEffect(() => {
    // アニメーション用のレベルを段階的に設定
    const timers: number[] = [];

    skills.forEach((skill, index) => {
      const timer = window.setTimeout(() => {
        setAnimatedLevels((prev) => ({
          ...prev,
          [skill.name]: skill.level,
        }));
      }, index * 200); // 200msずつ遅延

      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [skills]);

  const getProgressWidth = (skillName: string) => {
    return animatedLevels[skillName] || 0;
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <details className="group">
        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
          <div className="flex items-center space-x-3">
            <FaCode className="text-[#4A90E2] text-2xl" />
            <h3 className="text-lg font-bold text-[#171321]">Tech Stack</h3>
          </div>
          <div className="flex items-center space-x-4">
            {/* 総合スキルレベル */}
            <div className="text-right">
              <div className="text-xs text-gray-500">Overall</div>
              <div className="text-sm font-bold text-[#4A90E2]">
                {Math.round(
                  skills.reduce((sum, skill) => sum + skill.level, 0) /
                    skills.length
                )}
                %
              </div>
            </div>
            {/* 矢印アイコン */}
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

        <div className="px-6 pb-6 space-y-4 border-t border-gray-100">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              {/* スキル名とアイコン */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="transition-colors duration-300"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#171321]">
                      {skill.name}
                    </span>
                    <p className="text-xs text-gray-500">{skill.description}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#4A90E2]">
                  {getProgressWidth(skill.name)}%
                </span>
              </div>

              {/* プログレスバー */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${getProgressWidth(skill.name)}%`,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}40`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default SkillsBar;
