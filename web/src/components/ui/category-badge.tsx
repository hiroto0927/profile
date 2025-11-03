import React from "react";
import { tv } from "tailwind-variants";

const categoryBadgeVariants = tv({
  slots: {
    container: "flex items-center gap-2",
    badge: "px-2 py-1 text-xs font-medium rounded-full border",
    count: "text-gray-500 text-sm",
  },
  variants: {
    category: {
      実務: {
        badge: "bg-green-100 text-green-800 border-green-200",
      },
      経験あり: {
        badge: "bg-yellow-100 text-yellow-800 border-yellow-200",
      },
      学習中: {
        badge: "bg-purple-100 text-purple-800 border-purple-200",
      },
    },
  },
  defaultVariants: {
    category: "実務",
  },
});

interface CategoryBadgeProps {
  category: string;
  count?: number;
  className?: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  count,
  className = "",
}) => {
  const categoryKey = category as "実務" | "経験あり" | "学習中";
  const styles = categoryBadgeVariants({ category: categoryKey });

  return (
    <div className={`${styles.container()} ${className}`}>
      <span className={styles.badge()}>{category}</span>
      {count !== undefined && <span className={styles.count()}>({count})</span>}
    </div>
  );
};

export default CategoryBadge;
