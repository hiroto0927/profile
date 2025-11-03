import React from "react";
import PageCard from "../ui/page-card";
import GeometricBackground from "../ui/geometric-background";
import GitHubActivity from "../features/github-activity";
import SkillsSection from "../features/skills-section";
import WelcomeMessage from "../ui/welcome-message";
import { FaUser, FaCode, FaBook } from "react-icons/fa";

const MainContent: React.FC = async () => {
  return (
    <main className="flex-1 py-16 px-6 bg-linear-to-b from-gray-50 to-white relative">
      {/* ジオメトリックパターン背景 */}
      <GeometricBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* コードブロック形式の歓迎メッセージ */}
        <WelcomeMessage />

        {/* ページリンクカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {/* プロフィールページ */}
          <PageCard
            title="プロフィール"
            description="私のバックグラウンド、スキル、経験について詳しくご紹介します。"
            link="/profile"
            icon={<FaUser className="w-12 h-12" />}
          />

          {/* Tech Blog ページ */}
          <PageCard
            title="Tech Blog"
            description="技術に関する学びや発見、プロジェクトについて記録しています。"
            link="/tech-blog"
            icon={<FaCode className="w-12 h-12" />}
          />

          {/* 日記ページ */}
          <PageCard
            title="日記"
            description="日々の出来事や思考、感じたことを気軽に綴っています。"
            link="/diary"
            icon={<FaBook className="w-12 h-12" />}
            isComingSoon={true}
          />
        </div>

        {/* スキルセクション */}
        <div className="max-w-4xl mx-auto mb-16">
          <SkillsSection />
        </div>

        {/* GitHub活動の可視化 */}
        <div className="max-w-md mx-auto">
          <GitHubActivity />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
