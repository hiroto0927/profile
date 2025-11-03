import React from "react";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: "education" | "work" | "experience";
}

const timelineData: TimelineItem[] = [
  {
    year: "2018年3月",
    title: "福岡県立朝倉高等学校 卒業",
    description: "",
    icon: "education",
  },
  {
    year: "2018年4月〜2022年3月",
    title: "宮崎大学 情報システム工学科",
    description: "",
    icon: "education",
  },
  {
    year: "2022年4月〜 現在",
    title: "佐賀の製造会社に社内SEとして勤務",
    description: "",
    icon: "work",
  },
];

const experienceData: TimelineItem[] = [
  {
    year: "1年",
    title: "社内システムの運用・保守",
    description: "",
    icon: "experience",
  },
  {
    year: "2年",
    title: "クラウドインフラ構築・運用",
    description: "",
    icon: "experience",
  },
  {
    year: "2年",
    title: "Webアプリケーション開発(フロント・バック)",
    description: "",
    icon: "experience",
  },
  {
    year: "1年",
    title: "CI/CDパイプライン構築",
    description: "",
    icon: "experience",
  },
];

const getIcon = (iconType: "education" | "work" | "experience") => {
  switch (iconType) {
    case "education":
      return <FaGraduationCap className="w-6 h-6" />;
    case "work":
      return <FaBriefcase className="w-6 h-6" />;
    case "experience":
      return <FaCode className="w-6 h-6" />;
  }
};

const getIconColor = (iconType: "education" | "work" | "experience") => {
  switch (iconType) {
    case "education":
      return "bg-green-500";
    case "work":
      return "bg-blue-500";
    case "experience":
      return "bg-purple-500";
  }
};

const CareerSection: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <FaBriefcase className="text-blue-500" />
          経歴
        </h2>

        {/* 職歴・学歴 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            職歴・学歴
          </h3>
          <div className="relative">
            {/* タイムライン線 */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-300" />

            {/* タイムラインアイテム */}
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex gap-4">
                  {/* アイコン */}
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full ${getIconColor(
                      item.icon
                    )} text-white flex items-center justify-center shadow-lg z-10`}
                  >
                    {getIcon(item.icon)}
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">
                      {item.year}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="text-sm text-gray-700 mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 実務経験 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">実務経験</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-purple-700 mt-1">
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
