import { ZennArticle } from "@/types/blog";

/**
 * ビルド時に生成されたZenn記事データを取得する
 * @returns Promise<ZennArticle[]>
 */
export async function getStaticZennArticles(): Promise<ZennArticle[]> {
  try {
    // Static import for build-time data
    const articles = await import("@/.contents/zenn-articles.json");
    return articles.default || [];
  } catch (error) {
    console.error("Error loading static Zenn articles:", error);
    return [];
  }
}

/**
 * 記事の公開日をフォーマットする
 * @param dateString ISO日付文字列
 * @returns フォーマットされた日付文字列
 */
export function formatPublishedDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * 記事の読了時間を分で表示する
 * @param readingTime 読了時間（分）
 * @returns フォーマットされた読了時間文字列
 */
export function formatReadingTime(readingTime: number): string {
  return `約${readingTime}分で読めます`;
}