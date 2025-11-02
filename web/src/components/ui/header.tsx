import React from "react";
import Link from "next/link";
import { FaGithub, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-[#171321] text-white py-4 px-6 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* サイトロゴ */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-[#4A90E2] transition-colors duration-300"
          >
            Hiroto Desu.
          </Link>
        </div>

        {/* ナビゲーションメニュー */}
        <nav className="flex items-center space-x-6">
          {/* Tech Blog リンク */}
          <Link
            href="/tech-blog"
            className="text-white hover:text-[#4A90E2] transition-colors duration-300 flex items-center space-x-1"
            aria-label="Tech Blog"
          >
            <FaCode className="w-5 h-5" />
            <span className="hidden sm:inline">Tech Blog</span>
          </Link>

          {/* GitHub リンク */}
          <a
            href="https://github.com/hiroto0927"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4A90E2] transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          {/* Yahoo メール リンク */}
          <a
            href="mailto:hiroto_0927_123@yahoo.co.jp"
            className="text-white hover:text-[#4A90E2] transition-colors duration-300"
            aria-label="Yahoo Mail"
          >
            <MdEmail className="w-6 h-6" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;