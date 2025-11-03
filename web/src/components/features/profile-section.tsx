"use client";

import React from "react";
import Image from "next/image";
import { FaBirthdayCake, FaBriefcase, FaHeart } from "react-icons/fa";
import { calculateAge } from "../../utils/calculate-age";

const ProfileSection: React.FC = () => {
  const age = calculateAge("1999-09-27");

  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-8">
          {/* プロフィール写真 */}
          <div className="shrink-0">
            <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden bg-linear-to-br from-blue-400 to-purple-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/profile/profile.jpg"
                  alt="Hiroto Desu. プロフィール写真"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 自己紹介 */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hiroto Desu.
            </h2>

            {/* 基本情報 */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <FaBirthdayCake className="text-pink-500 w-5 h-5" />
                <span>
                  <strong>生年月日:</strong> 1999年9月27日 - {age}歳
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaBriefcase className="text-blue-500 w-5 h-5" />
                <span>
                  <strong>職業:</strong> クラウドエンジニア？ アプリもしてるよ。
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaHeart className="text-red-500 w-5 h-5" />
                <span>
                  <strong>趣味:</strong> プログラミング、アニメ、ゲーム
                </span>
              </div>
            </div>

            {/* 一言紹介 */}
            <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                一言紹介
              </h3>
              <p className="text-gray-700 leading-relaxed">
                はじめまして、Hiroto Desu.
                です！明るく楽しくをモットーに、日々新しい技術に挑戦しています。
                <br />
                猫とコーヒー(特にコメダ)が好きです。写真は、苦手です。よろしくお願いします！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
