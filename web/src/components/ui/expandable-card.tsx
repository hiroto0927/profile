import React from "react";

interface ExpandableCardProps {
  title: string;
  icon: React.ReactNode;
  summary?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  icon,
  summary,
  children,
  className = "",
  defaultOpen = false,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`}
    >
      <details className="group" open={defaultOpen}>
        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
          <div className="flex items-center space-x-3">
            {icon}
            <h3 className="text-lg font-bold text-[#171321]">{title}</h3>
          </div>
          <div className="flex items-center space-x-4">
            {summary && <div className="text-right">{summary}</div>}
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

        <div className="p-6 border-t border-gray-100">{children}</div>
      </details>
    </div>
  );
};

export default ExpandableCard;
