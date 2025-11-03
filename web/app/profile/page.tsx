import React from "react";
import Header from "../../src/components/ui/header";
import Footer from "../../src/components/ui/footer";
import ProfileSection from "../../src/components/features/profile-section";
import SkillsSection from "../../src/components/features/profile-skills-section";
import CareerSection from "../../src/components/features/career-section";
import GeometricBackground from "../../src/components/ui/geometric-background";

export const metadata = {
  title: "プロフィール | Hiroto Desu.",
  description:
    "Hiroto Desu.のプロフィール、スキルセット、経歴について紹介しています。",
};

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-slate-50 to-blue-50 relative">
      {/* ジオメトリックパターン背景 */}
      <GeometricBackground />
      
      <Header />

      <main className="flex-1 py-12 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* ページタイトル */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#171321] mb-4">
              プロフィール
            </h1>
            <p className="text-gray-600 text-lg">
              Hiroto Desu.について詳しく知る
            </p>
          </div>

          {/* プロフィール写真・自己紹介 */}
          <ProfileSection />

          {/* 経歴 */}
          <CareerSection />

          {/* Tech Stack */}
          <SkillsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
