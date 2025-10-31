import React from "react";

const GeometricBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* アニメーション付きの幾何学模様 */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#4A90E2] opacity-20 rotate-45 animate-spin-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-[#4A90E2] opacity-10 rounded-full animate-bounce-slow"></div>
      {/* <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-[#171321] opacity-15 animate-pulse"></div> */}
      <div className="absolute top-60 left-1/4 w-8 h-8 bg-[#4A90E2] opacity-20 transform rotate-12 animate-float"></div>
      <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-[#171321] opacity-10 rounded-lg animate-spin-reverse"></div>
      <div className="absolute top-20 right-1/4 w-6 h-6 bg-[#4A90E2] opacity-25 rounded-full animate-ping-slow"></div>

      {/* 追加のパターン */}
      <div className="absolute top-1/3 left-1/2 w-14 h-14 border-2 border-[#4A90E2] opacity-15 transform -rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-[#171321] opacity-5 animate-bounce-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-18 h-18 border border-[#4A90E2] opacity-20 rounded-full animate-pulse"></div>

      {/* エンジニアっぽいコード要素 */}
      <div className="absolute top-1/2 left-10 text-[#4A90E2] opacity-10 text-xs font-mono animate-fade-in-out">
        &lt;div&gt;
      </div>
      <div className="absolute bottom-1/3 right-16 text-[#171321] opacity-10 text-xs font-mono animate-fade-in-out delay-1000">
        function()
      </div>
      <div className="absolute top-1/4 right-1/3 text-[#4A90E2] opacity-10 text-xs font-mono animate-fade-in-out delay-2000">
        &#123;&#125;
      </div>
      
      {/* 追加のプログラミング要素 */}
      <div className="absolute top-16 left-1/3 text-[#4A90E2] opacity-8 text-sm font-mono animate-fade-in-out delay-3000">
        class
      </div>
      <div className="absolute bottom-40 left-20 text-[#171321] opacity-8 text-sm font-mono animate-fade-in-out delay-4000">
        interface
      </div>
      <div className="absolute top-2/3 right-10 text-[#4A90E2] opacity-8 text-sm font-mono animate-fade-in-out delay-5000">
        trait
      </div>
      <div className="absolute top-80 left-2/3 text-[#171321] opacity-8 text-xs font-mono animate-fade-in-out delay-6000">
        const =&gt;
      </div>
      <div className="absolute bottom-60 right-1/2 text-[#4A90E2] opacity-8 text-xs font-mono animate-fade-in-out delay-7000">
        async/await
      </div>
      <div className="absolute top-32 right-20 text-[#171321] opacity-8 text-xs font-mono animate-fade-in-out delay-8000">
        import
      </div>
      <div className="absolute bottom-16 left-1/2 text-[#4A90E2] opacity-8 text-xs font-mono animate-fade-in-out delay-9000">
        export
      </div>
      <div className="absolute top-1/5 left-1/5 text-[#171321] opacity-8 text-xs font-mono animate-fade-in-out delay-10000">
        typeof
      </div>
      <div className="absolute bottom-1/5 right-1/5 text-[#4A90E2] opacity-8 text-xs font-mono animate-fade-in-out delay-11000">
        extends
      </div>
      <div className="absolute top-3/5 left-1/6 text-[#171321] opacity-8 text-xs font-mono animate-fade-in-out delay-12000">
        useState
      </div>
      <div className="absolute bottom-2/5 right-1/6 text-[#4A90E2] opacity-8 text-xs font-mono animate-fade-in-out delay-13000">
        useEffect
      </div>
      <div className="absolute top-1/6 right-2/5 text-[#171321] opacity-8 text-xs font-mono animate-fade-in-out delay-14000">
        return
      </div>
    </div>
  );
};

export default GeometricBackground;
