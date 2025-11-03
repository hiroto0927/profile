import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import type { Skill } from "../../config/skills/config";

const skillCardVariants = tv({
  slots: {
    container: [
      "group relative p-3 rounded-lg border transition-all duration-300",
    ],
    header: ["flex items-center space-x-2 mb-2"],
    icon: ["w-5 h-5 transition-all duration-300 group-hover:scale-110"],
    title: ["text-sm font-semibold truncate"],
    description: ["text-xs mb-2 line-clamp-2"],
    years: ["text-xs font-medium"],
    glow: [
      "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300",
    ],
  },
  variants: {
    category: {
      実務: {
        container: [
          "bg-green-50 border-green-200 hover:border-green-300 hover:bg-green-100",
        ],
        title: "text-green-900",
        description: "text-green-700",
        years: "text-green-600",
      },
      学習中: {
        container: [
          "bg-purple-50 border-purple-200 hover:border-purple-300 hover:bg-purple-100",
        ],
        title: "text-purple-900",
        description: "text-purple-700",
        years: "text-purple-600",
      },
      経験あり: {
        container: [
          "bg-yellow-50 border-yellow-200 hover:border-yellow-300 hover:bg-yellow-100",
        ],
        title: "text-yellow-900",
        description: "text-yellow-700",
        years: "text-yellow-600",
      },
    },
  },
  defaultVariants: {
    category: "実務",
  },
});

interface SkillCardProps extends VariantProps<typeof skillCardVariants> {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, category }) => {
  const styles = skillCardVariants({ category });
  const IconComponent = skill.iconComponent;

  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container()}
    >
      <div className={styles.header()}>
        <IconComponent
          className={styles.icon()}
          style={{ color: skill.iconColor }}
        />
        <span className={styles.title()}>{skill.name}</span>
      </div>

      <p className={styles.description()}>{skill.description}</p>

      {skill.years && <div className={styles.years()}>経験: {skill.years}</div>}

      <div
        className={styles.glow()}
        style={{
          background: `linear-gradient(135deg, ${skill.iconColor}20, transparent)`,
          boxShadow: `0 0 20px ${skill.iconColor}30`,
        }}
      />
    </a>
  );
};

export default SkillCard;
