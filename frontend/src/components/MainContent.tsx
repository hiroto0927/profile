import React from "react";
import PageCard from "./PageCard";
import { FaUser, FaCode, FaBook } from "react-icons/fa";

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* 歓迎メッセージ */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#171321] mb-6">
            こんにちは
            <span className="inline-block ml-3 animate-wave">✋</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Hiroto Desu.の部屋へようこそ！
          </p>
        </div>

        {/* ページリンクカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
