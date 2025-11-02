import axios from "axios";
import { ZennArticle } from "@/types/blog";

const ZENN_USERNAME = "hirohiroeng";
const ZENN_API_BASE = "https://zenn.dev/api";

/**
 * Zennから指定したユーザーの記事一覧を取得する
 * @param page ページ番号（デフォルト: 1）
 * @param order ソート順（デフォルト: latest）
 * @returns Promise<ZennArticle[]>
 */
export async function fetchZennArticles(
  page: number = 1,
  order: "latest" | "liked" = "latest"
): Promise<ZennArticle[]> {
  try {
    const response = await axios.get(
      `${ZENN_API_BASE}/articles`,
      {
        params: {
          username: ZENN_USERNAME,
          page: page,
          order: order,
        },
        headers: {
          'Accept': 'application/json',
        },
        timeout: 10000, // 10秒タイムアウト
      }
    );

    return response.data.articles || [];
  } catch (error) {
    console.error("Error fetching Zenn articles:", error);
    // エラー時は空配列を返す
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