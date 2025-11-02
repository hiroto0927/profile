import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#171321] text-white px-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-9xl font-bold text-[#4A90E2] animate-pulse">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold">
            ページが見つかりません
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            お探しのページは存在しないか、移動または削除された可能性があります。
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-[#4A90E2] hover:bg-[#3a7ec8] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            ホーム画面に戻る
          </Link>
        </div>

        <div className="pt-8 opacity-50">
          <p className="text-sm">
            問題が解決しない場合は、
            <Link href="/" className="underline hover:text-[#4A90E2]">
              トップページ
            </Link>
            からアクセスしてください。
          </p>
        </div>
      </div>
    </div>
  );
}
