"use client";

import React from "react";
import { FaCode } from "react-icons/fa";
import { skills, type Skill } from "../../config/skills/config";
import SkillCard from "../ui/skill-card";
import CategoryBadge from "../ui/category-badge";
import ExpandableCard from "../ui/expandable-card";

const groupSkillsByCategory = (skills: Skill[]) => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill["category"], Skill[]>);
};

const SkillsSection: React.FC = () => {
  const groupedSkills = groupSkillsByCategory(skills);

  const summary = (
    <>
      <div className="text-xs text-gray-500">技術数</div>
      <div className="text-sm font-bold text-[#4A90E2]">{skills.length}個</div>
    </>
  );

  return (
    <ExpandableCard
      title="Tech Stack"
      icon={<FaCode className="text-[#4A90E2] text-2xl" />}
      summary={summary}
    >
      <div className="space-y-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="space-y-3">
            <CategoryBadge
              category={category}
              count={(categorySkills as Skill[]).length}
              className="font-semibold text-gray-700"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {(categorySkills as Skill[]).map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  category={category as "実務" | "学習中" | "経験あり"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </ExpandableCard>
  );
};

export default SkillsSection;
