import React from "react";
import Link from "next/link";

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
          {/* GitHub リンク */}
          <a
            href="https://github.com/hiroto0927"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4A90E2] transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.74[...]" />
            </svg>
          </a>

          {/* Yahoo メール リンク */}
          <a
            href="mailto:hiroto_0927_123@yahoo.co.jp"
            className="text-white hover:text-[#4A90E2] transition-colors duration-300"
            aria-label="Yahoo Mail"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9[...]" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;