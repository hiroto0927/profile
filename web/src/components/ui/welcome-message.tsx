"use client";

import React, { useState } from "react";
import {
  useTypingAnimation,
  getTimeBasedGreeting,
} from "../../hooks/useTypingAnimation";

const WelcomeMessage: React.FC = () => {
  const [greeting] = useState(getTimeBasedGreeting());
  const { displayText, isComplete } = useTypingAnimation(greeting, 150);

  return (
    <div className="text-center mb-16 px-4">
      <div className="max-w-2xl mx-auto bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden">
        {/* コードエディタのヘッダー */}
        <div className="bg-[#2d2d2d] px-3 md:px-4 py-2 md:py-3 flex items-center space-x-2">
          <div className="flex space-x-1 md:space-x-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-xs md:text-sm font-mono ml-2 md:ml-4 truncate">
            welcome.js
          </div>
        </div>

        {/* コードブロック内容 */}
        <div className="p-3 md:p-6 font-mono text-left overflow-x-auto">
          <div className="text-gray-500 text-xs md:text-xs lg:text-xs mb-1 md:mb-2 whitespace-nowrap">
            <span className="text-green-400">1</span>
            <span className="ml-2 md:ml-4 text-gray-400">
              {`// Welcome to Hiroto's world`}
            </span>
          </div>
          <div className="text-gray-500 text-xs md:text-xs lg:text-xs mb-1 md:mb-2 whitespace-nowrap">
            <span className="text-green-400">2</span>
            <span className="ml-2 md:ml-4 text-blue-400">function</span>
            <span className="text-yellow-300"> displayGreeting</span>
            <span className="text-white">() &#123;</span>
          </div>
          <div className="text-gray-500 text-xs md:text-xs lg:text-xs mb-1 md:mb-2">
            <span className="text-green-400">3</span>
            <span className="ml-4 md:ml-8 text-blue-400">const</span>
            <span className="text-white"> greeting = </span>
            <span className="text-orange-400">&quot;</span>
            <span className="text-orange-400 break-all">
              {displayText}
              {isComplete && "✋"}
              {!isComplete && (
                <span className="animate-pulse text-white">|</span>
              )}
            </span>
            <span className="text-orange-400">&quot;;</span>
          </div>
          <div className="text-gray-500 text-xs md:text-xs lg:text-xs mb-1 md:mb-2">
            <span className="text-green-400">4</span>
            <span className="ml-4 md:ml-8 text-blue-400">const</span>
            <span className="text-white"> message = </span>
            <span className="text-orange-400 break-all">
              &quot;Hiroto Desu.の部屋へようこそ！&quot;;
            </span>
          </div>
          <div className="text-gray-500 text-xs md:text-xs lg:text-xs mb-1 md:mb-2 whitespace-nowrap">
            <span className="text-green-400">5</span>
            <span className="ml-4 md:ml-8 text-purple-400">console</span>
            <span className="text-white">.</span>
            <span className="text-blue-400">log</span>
            <span className="text-white">(greeting, message);</span>
          </div>
          <div className="text-gray-500 text-xs md:text-xs lg:text-xs whitespace-nowrap">
            <span className="text-green-400">6</span>
            <span className="ml-2 md:ml-4 text-white">&#125;</span>
          </div>
        </div>

        {/* 実行結果風表示 */}
        {isComplete && (
          <div className="bg-[#0c0c0c] px-3 md:px-6 py-3 md:py-4 border-t border-gray-700">
            <div className="text-gray-400 text-xs mb-1 md:mb-2">
              {`// Output:`}
            </div>
            <div className="text-green-300 font-mono text-xs md:text-xs lg:text-xs break-all">
              {greeting}✋ Hiroto Desu.の部屋へようこそ！
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeMessage;
