import React from "react";
import { FaCode } from "react-icons/fa";
import { skills } from "../../config/skills/config";

const SkillsSection: React.FC = () => {
  // カテゴリー別にスキルを分類
  const skillsByCategory = {
    実務: skills.filter((skill) => skill.category === "実務"),
    学習中: skills.filter((skill) => skill.category === "学習中"),
    経験あり: skills.filter((skill) => skill.category === "経験あり"),
  };

  // カテゴリーごとのスタイル
  const categoryStyles = {
    実務: {
      badge: "bg-green-100 text-green-800 border-green-300",
      tag: "bg-green-50 border-green-200",
    },
    学習中: {
      badge: "bg-blue-100 text-blue-800 border-blue-300",
      tag: "bg-blue-50 border-blue-200",
    },
    経験あり: {
      badge: "bg-gray-100 text-gray-800 border-gray-300",
      tag: "bg-gray-50 border-gray-200",
    },
  };

  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <FaCode className="text-purple-500" />
          Tech Stack
        </h2>

        <div className="space-y-6">
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills]) => {
              const style =
                categoryStyles[category as keyof typeof categoryStyles];
              return (
                <div key={category}>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${style.badge}`}
                    >
                      {category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {categorySkills.length}個のスキル
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => {
                      const Icon = skill.iconComponent;
                      return (
                        <a
                          key={skill.name}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`border rounded-full px-3 py-1.5 ${style.tag} transition-all duration-200 hover:shadow-md hover:scale-105`}
                        >
                          <div className="flex items-center gap-1.5">
                            <Icon
                              className="text-base"
                              style={{ color: skill.iconColor }}
                            />
                            <span className="text-sm font-medium text-gray-800">
                              {skill.name}
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
