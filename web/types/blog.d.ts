// Zennの記事データ型
export interface ZennArticle {
  id: string;
  title: string;
  emoji: string;
  type: "tech" | "idea";
  topics: string[];
  published: boolean;
  slug: string;
  content: string;
  link?: string; // RSS feedから取得したリンク
  published_at: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  comments_count: number;
  reading_time: number;
  publication?: {
    name: string;
    avatar_url: string;
  };
  user: {
    username: string;
    name: string;
    avatar_url: string;
  };
}

// ブログカード表示用のプロパティ
export interface BlogCardProps {
  article: ZennArticle;
}